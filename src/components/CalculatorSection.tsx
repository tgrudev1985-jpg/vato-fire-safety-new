import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, ChevronDown, Search, X, Upload, Download, RefreshCw, Shield, Lock } from "lucide-react";
import { objectTypes as defaultObjectTypes, groups as defaultGroups } from "@/data/objectTypes";
import { useTranslation } from "react-i18next";

interface ObjectType {
  id: string;
  label: string;
  group: string;
  areaUnit: string;
  areaPer: number;
  extinguishers: { type: string; count: number }[];
}

const STORAGE_KEY = "vato_calculator_data";
const UNLOCK_KEY = "calculator_unlocked";

const loadData = (): { objectTypes: ObjectType[]; groups: string[] } => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      const groups = [...new Set(data.objectTypes.map((t: ObjectType) => t.group))];
      return { objectTypes: data.objectTypes, groups };
    }
  } catch (e) {
    console.warn("Failed to load calculator data", e);
  }
  return { objectTypes: defaultObjectTypes, groups: defaultGroups };
};

const saveData = (objectTypes: ObjectType[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ objectTypes }));
};

const getSimilarityScore = (query: string, label: string): number => {
  const q = query.toLowerCase().trim();
  const l = label.toLowerCase();
  if (l === q) return 1;
  if (l.includes(q)) return 0.8;
  const qWords = q.split(/\s+/);
  const lWords = l.split(/\s+/);
  const matchCount = qWords.filter(w => lWords.some(lw => lw.includes(w))).length;
  return matchCount / qWords.length;
};

const CalculatorSection = () => {
  const { t } = useTranslation();
  const [isUnlocked, setIsUnlocked] = useState(() => localStorage.getItem(UNLOCK_KEY) === "true");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [data, setData] = useState(loadData);
  const [selectedId, setSelectedId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [area, setArea] = useState("");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem(UNLOCK_KEY, isUnlocked.toString());
  }, [isUnlocked]);

  const unlockCalculator = (pwd: string) => {
    if (pwd === "vato1952") {
      setIsUnlocked(true);
      setPasswordError("");
      setPasswordInput("");
      setShowUnlockModal(false);
    } else {
      setPasswordError(t("calculator.unlockError", "Невалидна парола"));
    }
  };

  const checkAdmin = (pwd: string) => {
    if (pwd === "vato1952") {
      setIsAuthenticated(true);
      setAdminError("");
      setAdminPassword("");
    } else {
      setAdminError(t("calculator.unlockError", "Невалидна парола"));
    }
  };

  const filteredObjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim();
    const scored = data.objectTypes
      .map(obj => ({ obj, score: getSimilarityScore(query, obj.label) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    return scored.map(item => item.obj);
  }, [searchQuery, data.objectTypes]);

  const bestMatch = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.trim();
    let best: ObjectType | null = null;
    let bestScore = 0;
    for (const obj of data.objectTypes) {
      const score = getSimilarityScore(query, obj.label);
      if (score > bestScore) {
        bestScore = score;
        best = obj;
      }
    }
    return best && bestScore > 0.3 ? best : null;
  }, [searchQuery, data.objectTypes]);

  const selectedObj = data.objectTypes.find(t => t.id === selectedId);

  const getInputMetadata = () => {
    if (!selectedObj) return { type: "none", label: "", placeholder: "", multiplierType: "none" };
    const unit = selectedObj.areaUnit.toLowerCase();
    const per = selectedObj.areaPer;

    // Дължина (метри) – приоритет най-отгоре
    const isLength = unit.includes("m") && !unit.includes("²") && !unit.includes("м²") && !unit.includes("кв.м") && !unit.includes("m2") && !unit.includes("m?") && !unit.includes("етаж") && !unit.includes("камера");
    if (isLength) {
      const label = unit.includes("коридор") ? t("calculator.lengthLabelCorridor", "Дължина на коридора (м)") : t("calculator.lengthLabel", "Дължина (м)");
      return { type: "length", label: label, placeholder: t("calculator.example", `Напр. ${per * 3}`), multiplierType: "area" };
    }

    // Площ (квадратни метри)
    if (unit.includes("м²") || unit.includes("кв.м") || unit.includes("m²") || unit.includes("m2") || unit.includes("m?")) {
      return { type: "area", label: t("calculator.areaLabel", "Площ на обекта (кв.м)"), placeholder: t("calculator.example", `Напр. ${per * 3}`), multiplierType: "area" };
    }

    // Брой етажи
    if (unit.includes("етаж")) {
      return { type: "floors", label: t("calculator.floorsLabel", "Брой етажи"), placeholder: t("calculator.exampleFloors", "Напр. 3"), multiplierType: "units" };
    }
    // Брой камери
    if (unit.includes("камера")) {
      return { type: "chambers", label: t("calculator.chambersLabel", "Брой камери"), placeholder: t("calculator.exampleChambers", "Напр. 3"), multiplierType: "units" };
    }
    // Фиксирани изисквания (без множител)
    if (selectedObj.areaPer === 0) {
      return { type: "fixed", label: "", placeholder: "", multiplierType: "none", fixedText: selectedObj.areaUnit };
    }
    // По подразбиране – площ
    return { type: "area", label: t("calculator.areaLabel", "Площ на обекта (кв.м)"), placeholder: t("calculator.example", `Напр. ${per * 3}`), multiplierType: "area" };
  };

  const inputMeta = getInputMetadata();
  const needsInput = inputMeta.type !== "none" && inputMeta.type !== "fixed";
  const isFixed = inputMeta.type === "fixed";

  const calculate = () => {
    if (!selectedObj) return;
    let multiplier = 1;
    if (needsInput) {
      let val = 0;
      if (inputMeta.multiplierType === "area") {
        val = parseFloat(area);
        if (!val || val <= 0) return;
        multiplier = Math.max(1, Math.ceil(val / selectedObj.areaPer));
      } else if (inputMeta.multiplierType === "units") {
        val = parseInt(units);
        if (!val || val <= 0) return;
        multiplier = val;
      }
    }
    setResult({
      items: selectedObj.extinguishers.map(e => ({ type: e.type, count: e.count * multiplier })),
      objectLabel: selectedObj.label,
      areaUnit: selectedObj.areaUnit,
      multiplier,
      inputType: inputMeta.type,
      inputValue: inputMeta.multiplierType === "area" ? area : units,
    });
  };

  const selectObject = (obj: ObjectType) => {
    setSelectedId(obj.id);
    setSearchQuery("");
    setResult(null);
    setArea("");
    setUnits("");
  };

  const clearSearch = () => setSearchQuery("");

  const exportData = () => {
    const dataStr = JSON.stringify(data.objectTypes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "objectTypes.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported) && imported.length > 0 && imported[0].id && imported[0].label) {
          const newGroups = [...new Set(imported.map((t: ObjectType) => t.group))];
          setData({ objectTypes: imported, groups: newGroups });
          saveData(imported);
          setAdminOpen(false);
          setIsAuthenticated(false);
          setSelectedId("");
          setResult(null);
          alert(t("calculator.importSuccess", "Данните са обновени успешно!"));
        } else {
          throw new Error("Невалиден формат");
        }
      } catch (err) {
        alert(t("calculator.importError", "Грешка при импортиране: невалиден JSON файл."));
      }
    };
    reader.readAsText(file);
  };

  const resetToDefault = () => {
    if (confirm(t("calculator.resetConfirm", "Сигурни ли сте, че искате да възстановите оригиналните данни от наредбата?"))) {
      setData({ objectTypes: defaultObjectTypes, groups: defaultGroups });
      saveData(defaultObjectTypes);
      setSelectedId("");
      setResult(null);
      alert(t("calculator.resetSuccess", "Данните са възстановени."));
      setAdminOpen(false);
      setIsAuthenticated(false);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="relative">
        <button onClick={() => setShowUnlockModal(true)} className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition">
          <Shield className="h-6 w-6" />
        </button>
        {showUnlockModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl shadow-xl max-w-md w-full p-6 relative">
              <button onClick={() => { setShowUnlockModal(false); setPasswordError(""); setPasswordInput(""); }} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold mb-4">{t("calculator.unlockTitle", "Отключване на калкулатора")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("calculator.unlockDescription", "Въведете парола за достъп до калкулатора.")}</p>
              <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={t("calculator.passwordPlaceholder", "Парола")} className="w-full p-3 rounded-xl border border-border bg-background mb-3" />
              {passwordError && <p className="text-red-500 text-sm mb-3">{passwordError}</p>}
              <button onClick={() => unlockCalculator(passwordInput)} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90">{t("calculator.unlockButton", "Отключи")}</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background overflow-hidden relative">
      <button onClick={() => setIsUnlocked(false)} className="fixed bottom-6 left-6 z-50 bg-primary/20 text-primary p-3 rounded-full shadow-lg hover:bg-primary/40 transition"><Lock className="h-6 w-6" /></button>
      <button onClick={() => setAdminOpen(true)} className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition"><Shield className="h-6 w-6" /></button>
      {adminOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button onClick={() => { setAdminOpen(false); setIsAuthenticated(false); setAdminPassword(""); setAdminError(""); }} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
            <h3 className="text-xl font-bold mb-4">{t("calculator.adminTitle", "Администраторски панел")}</h3>
            {!isAuthenticated ? (
              <>
                <p className="text-sm text-muted-foreground mb-4">{t("calculator.adminDescription", "Въведете парола за достъп до управление на данните.")}</p>
                <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder={t("calculator.passwordPlaceholder", "Парола")} className="w-full p-3 rounded-xl border border-border bg-background mb-3" />
                {adminError && <p className="text-red-500 text-sm mb-3">{adminError}</p>}
                <button onClick={() => checkAdmin(adminPassword)} className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90">{t("calculator.adminLogin", "Вход")}</button>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{t("calculator.adminManage", "Управление на базата данни от наредбата.")}</p>
                <div className="grid grid-cols-1 gap-3">
                  <button onClick={exportData} className="flex items-center justify-center gap-2 bg-primary/10 text-primary p-3 rounded-xl font-semibold hover:bg-primary/20"><Download className="h-4 w-4" /> {t("calculator.export", "Експортирай данни (JSON)")}</button>
                  <label className="flex items-center justify-center gap-2 bg-primary/10 text-primary p-3 rounded-xl font-semibold cursor-pointer hover:bg-primary/20"><Upload className="h-4 w-4" /> {t("calculator.import", "Импортирай данни (JSON)")}<input type="file" accept=".json" onChange={(e) => e.target.files && importData(e.target.files[0])} className="hidden" /></label>
                  <button onClick={resetToDefault} className="flex items-center justify-center gap-2 bg-primary/10 text-primary p-3 rounded-xl font-semibold hover:bg-primary/20"><RefreshCw className="h-4 w-4" /> {t("calculator.reset", "Възстанови оригинални данни")}</button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{t("calculator.warning", "Внимание: Импортирането или възстановяването на данни ще презапише текущите.")}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground"><span className="text-primary">{t("calculator.title", "Калкулатор")}</span></h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t("calculator.description") }} />
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">{t("calculator.searchLabel", "Търсене на обект")}</label>
              <div className="relative">
                <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); if (!e.target.value.trim()) setSelectedId(""); }} placeholder={t("calculator.searchPlaceholder", "Напишете име на обект (напр. магазин, офис, склад...)")} className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
              {searchQuery.trim() && (
                <div className="mt-3 space-y-2">
                  {filteredObjects.length > 0 ? (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">{t("calculator.foundObjects", "Намерени обекти:")}</div>
                      <div className="max-h-64 overflow-y-auto rounded-xl border border-border bg-background divide-y divide-border">
                        {filteredObjects.map((obj) => (
                          <button key={obj.id} onClick={() => selectObject(obj)} className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center justify-between">
                            <span className="text-foreground">{obj.label}</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{obj.group}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                      {t("calculator.noResults", "Няма точен резултат за „{query}“.", { query: searchQuery })}
                      {bestMatch && (<div className="mt-2">{t("calculator.bestMatch", "Най-сходният обект е:")} <button onClick={() => selectObject(bestMatch)} className="text-primary font-semibold hover:underline">{bestMatch.label}</button>.</div>)}
                    </div>
                  )}
                  <button onClick={clearSearch} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 ml-auto"><X className="h-3 w-3" /> {t("calculator.clear", "Изчисти")}</button>
                </div>
              )}
            </div>
            {!searchQuery.trim() && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">{t("calculator.orSelect", "Или изберете от списъка")}</label>
                <div className="relative">
                  <select value={selectedId} onChange={(e) => { setSelectedId(e.target.value); setResult(null); setArea(""); setUnits(""); }} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition appearance-none pr-10">
                    <option value="">-- {t("calculator.selectObject", "Изберете тип обект")} --</option>
                    {data.groups.map((group) => (
                      <optgroup key={group} label={group}>
                        {data.objectTypes.filter((t) => t.group === group).map((t) => (<option key={t.id} value={t.id}>{t.label}</option>))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            )}
            {selectedObj && (
              <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-sm font-medium text-foreground">{t("calculator.selectedObject", "Избран обект:")}</div>
                <div className="font-bold text-primary">{selectedObj.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{t("calculator.group", "Група")}: {selectedObj.group}</div>
              </div>
            )}
            {selectedObj && needsInput && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {inputMeta.label}
                  {selectedObj.areaPer > 0 && inputMeta.type !== "floors" && inputMeta.type !== "chambers" && (<span className="text-xs text-muted-foreground ml-2">({t("calculator.per", "на всеки")} {selectedObj.areaPer} {inputMeta.type === "length" ? "м" : "м²"})</span>)}
                </label>
                <input type="number" min="1" value={inputMeta.multiplierType === "area" ? area : units} onChange={(e) => { if (inputMeta.multiplierType === "area") setArea(e.target.value); else setUnits(e.target.value); setResult(null); }} placeholder={inputMeta.placeholder} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" />
              </div>
            )}
            {selectedObj && isFixed && (
              <div className="mb-6 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <Info className="inline h-4 w-4 mr-1" /> {t("calculator.fixedRequirements", "Изискванията са фиксирани")} — <strong className="text-foreground">{selectedObj.areaUnit}</strong>
              </div>
            )}
            <button onClick={calculate} disabled={!selectedObj || (needsInput && inputMeta.multiplierType === "area" && (!area || parseFloat(area) <= 0)) || (needsInput && inputMeta.multiplierType === "units" && (!units || parseInt(units) <= 0))} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
              <Calculator className="h-5 w-5" /> {t("calculator.calculate", "Изчисли")}
            </button>
            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <h3 className="text-lg font-bold text-foreground mb-1">{t("calculator.resultTitle", "Резултат")}:</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {result.objectLabel}
                  {result.inputType === "length" && result.inputValue && ` — ${result.inputValue} м ${t("calculator.lengthUnit", "дължина")}`}
                  {result.inputType === "area" && result.inputValue && ` — ${result.inputValue} м² ${t("calculator.areaUnit", "площ")}`}
                  {result.inputType === "floors" && result.inputValue && ` — ${result.inputValue} ${t("calculator.floorsUnit", "етажа")}`}
                  {result.inputType === "chambers" && result.inputValue && ` — ${result.inputValue} ${t("calculator.chambersUnit", "камери")}`}
                  {result.multiplier > 1 && ` × ${result.multiplier}`}
                </p>
                <div className="space-y-3">
                  {result.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background rounded-xl border border-border">
                      <span className="text-foreground font-medium text-sm break-words pr-2">{item.type}</span>
                      <span className="text-xl font-bold text-primary shrink-0">{item.count} {t("calculator.pcs", "бр.")}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <span className="break-words">{t("calculator.disclaimer")}</span>
                </div>
                <a href="#contact" className="mt-4 inline-block text-primary font-semibold hover:underline text-sm">{t("calculator.consultation", "→ Поискай безплатна консултация")}</a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CalculationResult {
  items: { type: string; count: number }[];
  objectLabel: string;
  areaUnit: string;
  multiplier: number;
  inputType: string;
  inputValue: string;
}

export default CalculatorSection;
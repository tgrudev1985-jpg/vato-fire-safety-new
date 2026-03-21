import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, ChevronDown, Search, X } from "lucide-react";
import { objectTypes, groups } from "@/data/objectTypes";

interface CalculationResult {
  items: { type: string; count: number }[];
  objectLabel: string;
  areaUnit: string;
  multiplier: number;
}

// Помощна функция за определяне на сходство между низове
const getSimilarityScore = (query: string, label: string): number => {
  const q = query.toLowerCase().trim();
  const l = label.toLowerCase();
  if (l === q) return 1; // точно съвпадение
  if (l.includes(q)) return 0.8; // съдържа се
  // брой общи думи (просто)
  const qWords = q.split(/\s+/);
  const lWords = l.split(/\s+/);
  const matchCount = qWords.filter(w => lWords.some(lw => lw.includes(w))).length;
  return matchCount / qWords.length;
};

const CalculatorSection = () => {
  const [selectedId, setSelectedId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [area, setArea] = useState("");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Филтрирани и сортирани обекти според търсенето
  const filteredObjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim();
    const scored = objectTypes
      .map(obj => ({
        obj,
        score: getSimilarityScore(query, obj.label),
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    return scored.map(item => item.obj);
  }, [searchQuery]);

  // Най-сходен обект (ако няма точен)
  const bestMatch = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.trim();
    let best = null;
    let bestScore = 0;
    for (const obj of objectTypes) {
      const score = getSimilarityScore(query, obj.label);
      if (score > bestScore) {
        bestScore = score;
        best = obj;
      }
    }
    return best && bestScore > 0.3 ? best : null;
  }, [searchQuery]);

  const selectedObj = objectTypes.find((t) => t.id === selectedId);
  const needsArea = selectedObj ? selectedObj.areaPer > 0 : false;
  const isFixedUnit = selectedObj
    ? selectedObj.areaPer === 0 &&
      !["на етаж", "на камера"].some((u) => selectedObj.areaUnit.includes(u)) &&
      !selectedObj.areaUnit.includes("коридор")
    : false;
  const needsUnits = selectedObj
    ? selectedObj.areaPer === 0 && !isFixedUnit
    : false;

  const calculate = () => {
    if (!selectedObj) return;

    let multiplier = 1;
    if (needsArea) {
      const sqm = parseFloat(area);
      if (!sqm || sqm <= 0) return;
      multiplier = Math.max(1, Math.ceil(sqm / selectedObj.areaPer));
    } else if (needsUnits) {
      const u = parseInt(units);
      if (!u || u <= 0) return;
      multiplier = u;
    }

    setResult({
      items: selectedObj.extinguishers.map((e) => ({
        type: e.type,
        count: e.count * multiplier,
      })),
      objectLabel: selectedObj.label,
      areaUnit: selectedObj.areaUnit,
      multiplier,
    });
  };

  const getInputLabel = () => {
    if (!selectedObj) return "";
    if (needsArea)
      return `Площ на обекта (кв.м.) — изчислява се на всеки ${selectedObj.areaPer} м²`;
    if (selectedObj.areaUnit.includes("етаж")) return "Брой етажи";
    if (selectedObj.areaUnit.includes("коридор"))
      return "Дължина на коридора (м)";
    if (selectedObj.areaUnit.includes("камера")) return "Брой камери";
    return "";
  };

  const selectObject = (obj: typeof objectTypes[0]) => {
    setSelectedId(obj.id);
    setSearchQuery("");
    setResult(null);
    setArea("");
    setUnits("");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
            <span className="text-primary">Калкулатор</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изчислете необходимите пожаротехнически средства по{" "}
            <span className="font-semibold text-foreground">
              Приложение 2
            </span>{" "}
            към{" "}
            <span className="font-semibold text-foreground">
              Наредба № Iз-1971
            </span>
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8"
          >
            {/* Търсачка */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Търсене на обект
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!e.target.value.trim()) setSelectedId("");
                  }}
                  placeholder="Напишете име на обект (напр. магазин, офис, склад...)"
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>

              {/* Резултати от търсенето */}
              {searchQuery.trim() && (
                <div className="mt-3 space-y-2">
                  {filteredObjects.length > 0 ? (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">
                        Намерени обекти:
                      </div>
                      <div className="max-h-64 overflow-y-auto rounded-xl border border-border bg-background divide-y divide-border">
                        {filteredObjects.map((obj) => (
                          <button
                            key={obj.id}
                            onClick={() => selectObject(obj)}
                            className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center justify-between"
                          >
                            <span className="text-foreground">{obj.label}</span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                              {obj.group}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                      Няма точен резултат за „{searchQuery}“.
                      {bestMatch && (
                        <div className="mt-2">
                          Най-сходният обект е:{" "}
                          <button
                            onClick={() => selectObject(bestMatch)}
                            className="text-primary font-semibold hover:underline"
                          >
                            {bestMatch.label}
                          </button>
                          .
                        </div>
                      )}
                    </div>
                  )}
                  <button
                    onClick={clearSearch}
                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 ml-auto"
                  >
                    <X className="h-3 w-3" /> Изчисти
                  </button>
                </div>
              )}
            </div>

            {/* Ръчно избиране чрез селект (като алтернатива) */}
            {!searchQuery.trim() && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Или изберете от списъка
                </label>
                <div className="relative">
                  <select
                    value={selectedId}
                    onChange={(e) => {
                      setSelectedId(e.target.value);
                      setResult(null);
                      setArea("");
                      setUnits("");
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition appearance-none pr-10"
                  >
                    <option value="">-- Изберете тип обект --</option>
                    {groups.map((group) => (
                      <optgroup key={group} label={group}>
                        {objectTypes
                          .filter((t) => t.group === group)
                          .map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.label}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            )}

            {/* Показваме избрания обект за яснота */}
            {selectedObj && (
              <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-sm font-medium text-foreground">
                  Избран обект:
                </div>
                <div className="font-bold text-primary">{selectedObj.label}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Група: {selectedObj.group}
                </div>
              </div>
            )}

            {/* Поля за входни данни */}
            {selectedObj && needsArea && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {getInputLabel()}
                </label>
                <input
                  type="number"
                  min="1"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                    setResult(null);
                  }}
                  placeholder={`Напр. ${selectedObj.areaPer * 3}`}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                />
              </div>
            )}

            {selectedObj && needsUnits && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {getInputLabel()}
                </label>
                <input
                  type="number"
                  min="1"
                  value={units}
                  onChange={(e) => {
                    setUnits(e.target.value);
                    setResult(null);
                  }}
                  placeholder="Напр. 3"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                />
              </div>
            )}

            {selectedObj && isFixedUnit && (
              <div className="mb-6 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <Info className="inline h-4 w-4 mr-1" />
                Изискванията са фиксирани —{" "}
                <strong className="text-foreground">
                  {selectedObj.areaUnit}
                </strong>
              </div>
            )}

            <button
              onClick={calculate}
              disabled={
                !selectedObj ||
                (needsArea && (!area || parseFloat(area) <= 0)) ||
                (needsUnits && (!units || parseInt(units) <= 0))
              }
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Calculator className="h-5 w-5" /> Изчисли
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl"
              >
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Резултат:
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {result.objectLabel} — {result.areaUnit}
                  {result.multiplier > 1 && ` × ${result.multiplier}`}
                </p>

                <div className="space-y-3">
                  {result.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-background rounded-xl border border-border"
                    >
                      <span className="text-foreground font-medium text-sm break-words pr-2">
                        {item.type}
                      </span>
                      <span className="text-xl font-bold text-primary shrink-0">
                        {item.count} бр.
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <span className="break-words">
                    Данните са съгласно Приложение 2 към Наредба № Iз-1971 от
                    2009 г. (обн. ДВ бр. 96/2009 г., посл. изм. и доп. ДВ бр.
                    91/2024 г., доп. ДВ бр. 46 от 6.VI.2025 г.). Изчислението е
                    ориентировъчно. За точна оценка, свържете се с нас за
                    професионален одит.
                  </span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-primary font-semibold hover:underline text-sm"
                >
                  → Поискай безплатна консултация
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
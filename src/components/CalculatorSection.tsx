import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, ChevronDown } from "lucide-react";

interface ObjectType {
  id: string;
  label: string;
  group: string;
  areaUnit: string; // "m2", "етаж", "помещение", etc.
  areaPer: number; // площ за единица (кв.м), 0 = не е по площ
  extinguishers: {
    type: string;
    count: number;
  }[];
}

const objectTypes: ObjectType[] = [
  // ГРУПА II - ОБЩЕСТВЕНИ СГРАДИ
  {
    id: "admin_corridor",
    label: "Административна сграда (коридорна система)",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "admin_non_corridor",
    label: "Административна сграда (некоридорна система)",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "hotel_corridor",
    label: "Хотел / Мотел / Хостел (коридорна система)",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "hotel_non_corridor",
    label: "Хотел / Мотел / Хостел (некоридорна система)",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "bookstore",
    label: "Книжарница",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "shop_textile",
    label: "Магазин за текстил / обувки / галантерия",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "shop_paints",
    label: "Магазин за бои / лакове / разтворители",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  {
    id: "bakery_cafe",
    label: "Сладкарница / Закусвалня",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "pharmacy",
    label: "Аптека",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "kindergarten",
    label: "Детско заведение",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "school_corridor",
    label: "Учебно заведение (коридорна система)",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "library",
    label: "Библиотека / Читалня",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "gallery_museum",
    label: "Галерия / Музей / Изложбена зала",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "disco_casino",
    label: "Дискотека / Казино",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "service_corridor",
    label: "Сграда за услуги (коридорна система)",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "dormitory",
    label: "Общежитие / Спален корпус",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // ГРУПА I - ПРОИЗВОДСТВА
  {
    id: "woodworking",
    label: "Дървообработване / Мебелно производство",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "painting_room",
    label: "Бояджийно / Лакозаливно помещение",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  {
    id: "chemical",
    label: "Химическо производство (ЛЗТ и ГТ)",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  {
    id: "auto_service",
    label: "Автосервиз / Ремонтна база",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "welding",
    label: "Заваръчно производство",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "food_production",
    label: "Производство на хранителни продукти",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "textile",
    label: "Текстилно предприятие / Шивалня",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "electronics",
    label: "Електронни / Електроремонтни помещения",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "cold_storage",
    label: "Хладилни камери",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  {
    id: "furgon",
    label: "Фургон / Офис-контейнер",
    group: "Производства",
    areaUnit: "на фургон",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  {
    id: "lab_flammable",
    label: "Лаборатория (с ГТ и ЛЗТ)",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "lab_other",
    label: "Лаборатория (други цели)",
    group: "Производства",
    areaUnit: "помещение до 100 м²",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "construction_site",
    label: "Строителна площадка",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
];

// Group the object types
const groups = [...new Set(objectTypes.map((t) => t.group))];

interface CalculationResult {
  items: { type: string; count: number }[];
  objectLabel: string;
  areaUnit: string;
  multiplier: number;
}

const CalculatorSection = () => {
  const [selectedId, setSelectedId] = useState("");
  const [area, setArea] = useState("");
  const [units, setUnits] = useState(""); // floors or length for non-area types
  const [result, setResult] = useState<CalculationResult | null>(null);

  const selectedObj = objectTypes.find((t) => t.id === selectedId);
  const needsArea = selectedObj ? selectedObj.areaPer > 0 : false;
  const needsUnits = selectedObj ? selectedObj.areaPer === 0 && selectedObj.areaUnit !== "на фургон" && selectedObj.areaUnit !== "помещение до 100 м²" : false;
  const isFixedUnit = selectedObj ? selectedObj.areaPer === 0 && !needsUnits : false;

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
    if (needsArea) return `Площ на обекта (кв.м.) — изчислява се на всеки ${selectedObj.areaPer} м²`;
    if (selectedObj.areaUnit.includes("етаж")) return "Брой етажи";
    if (selectedObj.areaUnit.includes("коридор")) return "Дължина на коридора (м)";
    return "";
  };

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-foreground">
            Калкулатор
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">
            Изчислете необходимите пожаротехнически средства по{" "}
            <span className="font-semibold text-foreground">Приложение 2</span> към{" "}
            <span className="font-semibold text-foreground">Наредба № Iз-1971</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card rounded-3xl border border-border shadow-xl p-8 md:p-10"
        >
          <div className="space-y-6">
            {/* Object type selector */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Тип на обекта (по Приложение 2)
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

            {/* Area/units input */}
            {selectedObj && needsArea && (
              <div>
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
              <div>
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
              <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <Info className="inline h-4 w-4 mr-1" />
                Изискванията са фиксирани — <strong className="text-foreground">{selectedObj.areaUnit}</strong>
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
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">Резултат:</h3>
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
                    <span className="text-foreground font-medium text-sm">{item.type}</span>
                    <span className="text-xl font-bold text-primary">{item.count} бр.</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Данните са съгласно Приложение 2 към Наредба № Iз-1971 от 2009 г. (обн. ДВ бр. 96/2009 г., посл. изм. и доп. ДВ бр. 91/2024 г., доп. ДВ бр. 46 от 6.VI.2025 г.). 
                  Изчислението е ориентировъчно. За точна оценка, свържете се с нас за професионален одит.
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
    </section>
  );
};

export default CalculatorSection;

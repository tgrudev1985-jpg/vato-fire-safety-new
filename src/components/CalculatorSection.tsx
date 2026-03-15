import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";

type ObjectType = "office" | "warehouse" | "shop" | "restaurant" | "production";

const objectTypes: { value: ObjectType; label: string; factor: number }[] = [
  { value: "office", label: "Офис / Административна сграда", factor: 1 },
  { value: "shop", label: "Магазин / Търговски обект", factor: 1.2 },
  { value: "restaurant", label: "Ресторант / Хотел", factor: 1.3 },
  { value: "warehouse", label: "Склад / Логистичен център", factor: 1.5 },
  { value: "production", label: "Производствено помещение", factor: 1.8 },
];

const CalculatorSection = () => {
  const [area, setArea] = useState("");
  const [objectType, setObjectType] = useState<ObjectType>("office");
  const [result, setResult] = useState<null | { count: number; type: string }>(null);

  const calculate = () => {
    const sqm = parseFloat(area);
    if (!sqm || sqm <= 0) return;

    const typeInfo = objectTypes.find((t) => t.value === objectType)!;
    // Базова формула: 1 пожарогасител на 50 кв.м., умножено по фактора на обекта
    const count = Math.max(1, Math.ceil((sqm / 50) * typeInfo.factor));
    const recommendedType =
      objectType === "office"
        ? "ABC прахов (6 кг)"
        : objectType === "production" || objectType === "warehouse"
        ? "ABC прахов (6-12 кг) или CO₂"
        : "ABC прахов (6 кг)";

    setResult({ count, type: recommendedType });
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
            Изчислете ориентировъчния брой пожарогасители за Вашия обект
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
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Площ на обекта (кв.м.)
              </label>
              <input
                type="number"
                min="1"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setResult(null);
                }}
                placeholder="Напр. 200"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Тип на обекта
              </label>
              <select
                value={objectType}
                onChange={(e) => {
                  setObjectType(e.target.value as ObjectType);
                  setResult(null);
                }}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
              >
                {objectTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!area || parseFloat(area) <= 0}
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
              <h3 className="text-lg font-bold text-foreground mb-3">Резултат:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Необходими пожарогасители:{" "}
                  <span className="text-2xl font-bold text-primary">{result.count} бр.</span>
                </p>
                <p>
                  Препоръчителен тип: <span className="font-semibold text-foreground">{result.type}</span>
                </p>
              </div>
              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Изчислението е ориентировъчно, базирано на Наредба № 8121з-647. За точна оценка, свържете се с нас за професионален одит.
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

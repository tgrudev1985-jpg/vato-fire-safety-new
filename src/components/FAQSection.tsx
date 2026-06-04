import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

type FaqCategory = "all" | "technical" | "normative" | "docs";

const FAQSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FaqCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filters: { label: string; value: FaqCategory }[] = [
    { label: t("faq.filters.all"), value: "all" },
    { label: t("faq.filters.technical"), value: "technical" },
    { label: t("faq.filters.normative"), value: "normative" },
    { label: t("faq.filters.docs"), value: "docs" },
  ];

  // Въпросите и отговорите идват от JSON (ключовете са във файловете за превод)
  const faqItems = [
    { questionKey: "faq.q1", answerKey: "faq.a1", categories: ["normative", "technical"] },
    { questionKey: "faq.q2", answerKey: "faq.a2", categories: ["technical"] },
    { questionKey: "faq.q3", answerKey: "faq.a3", categories: ["technical"] },
    { questionKey: "faq.q4", answerKey: "faq.a4", categories: ["docs", "normative"] },
    { questionKey: "faq.q5", answerKey: "faq.a5", categories: ["technical", "normative"] },
  ];

  const filtered = activeFilter === "all"
    ? faqItems
    : faqItems.filter(item => item.categories.includes(activeFilter));

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
            {t("faq.title")} <span className="text-primary"></span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("faq.description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => { setActiveFilter(f.value); setOpenIndex(null); }}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.questionKey}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left font-semibold text-foreground hover:bg-muted/30 transition-colors"
                >
                  <span className="text-base md:text-lg pr-4 break-words">
                    {t(item.questionKey)}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-muted-foreground leading-relaxed border-t border-border">
                        {t(item.answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FaqCategory = "all" | "technical" | "normative" | "docs";

interface FaqItem {
  question: string;
  answer: string;
  categories: FaqCategory[];
}

const faqData: FaqItem[] = [
  {
    question: "На какъв период е задължително да се извършва профилактика на наличното оборудване?",
    answer:
      "Съгласно действащата нормативна уредба в България (Наредба № 8121з-647), всеки пожарогасител подлежи на задължителна техническа проверка минимум веднъж на 12 месеца. След успешно преминат тест от лицензиран сервиз, уредът получава актуален холограмен стикер и се вписва в дневника за пожарна безопасност на обекта.",
    categories: ["normative", "technical"],
  },
  {
    question: "Кой е най-подходящият тип гасително вещество за административни и търговски помещения?",
    answer: "Виж Приложение № 2 от Наредба Iз-1971.",
    categories: ["technical"],
  },
  {
    question: "Необходимо ли е пълно презареждане при частично използване на уреда?",
    answer:
      "Абсолютно да. Дори и при съвсем кратко натискане на спусъка и минимално изпускане на налягане, херметичността на клапана се нарушава. Налягането ще спадне напълно в следващите часове или дни. Такъв уред се счита за неизправен и трябва незабавно да бъде предаден в сервиз за цялостно почистване, зареждане и пломбиране.",
    categories: ["technical"],
  },
  {
    question: "Кои са задължителните документи, формиращи фирменото досие по пожарна безопасност?",
    answer: "Определят се съгласно Наредба № 8121з-647.",
    categories: ["docs", "normative"],
  },
  {
    question: "Кога един уред подлежи на бракуване и какъв е експлоатационният му живот?",
    answer:
      "Металният корпус на праховите и водните пожарогасители подлежи на задължително хидравлично изпитване за якост на всеки 10 години. При успешно преминат тест, експлоатационният живот може да бъде удължен. При наличие на видима дълбока корозия, деформации от удари, пукнатини или при неуспешен хидравличен тест, уредът е опасен за употреба и се бракува незабавно.",
    categories: ["technical", "normative"],
  },
];

const filters: { label: string; value: FaqCategory }[] = [
  { label: "Всички", value: "all" },
  { label: "Технически", value: "technical" },
  { label: "Нормативни", value: "normative" },
  { label: "Документация", value: "docs" },
];

const FAQSection = () => {
  const [activeFilter, setActiveFilter] = useState<FaqCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? faqData
      : faqData.filter((f) => f.categories.includes(activeFilter));

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
            ЕКСПЕРТНИ <span className="text-primary">ОТГОВОРИ</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Важна информация относно нормативната уредба и техническата поддръжка
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setActiveFilter(f.value);
                setOpenIndex(null);
              }}
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
                key={item.question}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left font-semibold text-foreground hover:bg-muted/30 transition-colors"
                >
                  <span className="text-base md:text-lg pr-4 break-words">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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
                        {item.answer}
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
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
      'Съгласно действащата нормативна уредба в България (Наредба № 8121з-647), всеки пожарогасител подлежи на задължителна техническа проверка минимум веднъж на 12 месеца. След успешно преминат тест от лицензиран сервиз, уредът получава актуален холограмен стикер и се вписва в дневника за пожарна безопасност на обекта.',
    categories: ["normative", "technical"],
  },
  {
    question: "Кой е най-подходящият тип гасително вещество за административни и търговски помещения?",
    answer:
      'За повечето офиси, хотели и магазини универсалното и законово изисквано решение е прахов пожарогасител тип ABC. Въпреки това, за помещения с много компютърна техника, сървърни стаи или скъпа апаратура, силно препоръчваме пожарогасители с въглероден диоксид (CO2). Те са ефективни при електрически пожари и се изпаряват напълно, без да оставят разрушителни следи по електрониката.',
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
    answer:
      'При проверка от органите на "Пожарна безопасност и защита на населението" (ПБЗН), Вашият обект трябва да разполага с: валидно противопожарно досие, утвърдени инструкции за безопасна работа, актуални схеми за евакуация (по БДС ISO 23601), заповеди за определяне на отговорни лица и стриктно попълван дневник за състоянието на уредите.',
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
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-foreground">
            Експертни Отговори
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">
            Важна информация относно нормативната уредба и техническата поддръжка
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setActiveFilter(f.value);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="bg-muted rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left font-bold text-foreground text-lg"
                >
                  <span className="pr-6">{item.question}</span>
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
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border">
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

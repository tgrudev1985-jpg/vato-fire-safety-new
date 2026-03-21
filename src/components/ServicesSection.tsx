import { motion } from "framer-motion";
import { Wrench, ClipboardList, Flame, CheckCircle, Search, CalendarCheck, GraduationCap, Scale } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Техническо обслужване",
    desc: "Годишна проверка, измерване на налягането и заверка със стикер на носими и возими пожарогасители.",
    checks: ["Проверка на затворен механизъм", "Проверка на гасително вещество"],
  },
  {
    icon: ClipboardList,
    title: "Проектиране и Документация",
    desc: "Изготвяне на досиета по пожарна безопасност, схеми за евакуация и инструкции за пожарна безопасност.",
    checks: ["Схеми за евакуация", "Журнали и заповеди"],
  },
  {
    icon: Flame,
    title: "Активна защита",
    desc: "Монтаж и поддръжка на пожароизвестителни системи, пожарни хидранти и противопожарни врати.",
    checks: ["Тестване на датчици", "Проверка на кранове"],
  },
  {
    icon: Search,
    title: "Противопожарно обследване",
    desc: "Професионални инспекции и одити на обекти за установяване на съответствие с нормативната уредба.",
    checks: ["Оценка на риска", "Протокол с препоръки"],
  },
  {
    icon: CalendarCheck,
    title: "Абонаментна поддръжка",
    desc: "Месечни и годишни абонаменти за цялостна поддръжка на пожарогасително и пожароизвестително оборудване.",
    checks: ["Планирани посещения", "Приоритетно обслужване"],
  },
  {
    icon: GraduationCap,
    title: "Обучение на персонал",
    desc: "Провеждане на обучения и инструктажи по пожарна безопасност за служители на фирми и организации.",
    checks: ["Практически упражнения", "Теоретични инструктажи"],
  },
  {
    icon: Scale,
    title: "Консултации пред РСПБЗН",
    desc: "Професионални консултации относно изискванията на органите по пожарна безопасност и защита на населението.",
    checks: ["Подготовка на документи", "Разясняване на нормативи"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
          Нашите <span className="text-primary">Услуги</span>
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Пълен спектър от услуги за пожарна безопасност — от инспекция и обслужване до обучение и представителство
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{s.desc}</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              {s.checks.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success shrink-0" />
                  <span className="break-words">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
import { motion } from "framer-motion";
import { Wrench, ClipboardList, Flame, CheckCircle } from "lucide-react";

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
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-foreground">
        Нашите Услуги
      </h2>
      <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="p-10 bg-card rounded-3xl border border-border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <s.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
          <ul className="text-sm text-muted-foreground space-y-2">
            {s.checks.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;

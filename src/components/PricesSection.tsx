import { motion } from "framer-motion";

const prices = [
  {
    name: "Годишен технически преглед (със стикер)",
    note: "* за 1 брой пожарогасител",
    price: "8.00 лв.",
  },
  {
    name: "Презареждане на прахов пожарогасител 6кг.",
    note: "* включва и задължителна проверка",
    price: "18.00 лв.",
  },
  {
    name: "Изготвяне на схема за евакуация",
    note: "* А3 формат в алуминиева рамка",
    price: "35.00 лв.",
  },
];

const PricesSection = () => (
  <section id="prices" className="py-24 surface-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 uppercase">Ориентировъчни Цени</h2>
      <p className="text-muted-foreground">Прозрачност при всяка услуга</p>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      {prices.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition gap-4"
        >
          <div>
            <span className="font-semibold block text-lg">{p.name}</span>
            <span className="text-sm text-muted-foreground italic">{p.note}</span>
          </div>
          <span className="text-2xl font-bold text-primary whitespace-nowrap">{p.price}</span>
        </motion.div>
      ))}
      <p className="text-center mt-10 text-muted-foreground text-sm">
        Всички цени са без включено ДДС. За корпоративни клиенти и големи обекти предлагаме индивидуални оферти.
      </p>
    </div>
  </section>
);

export default PricesSection;

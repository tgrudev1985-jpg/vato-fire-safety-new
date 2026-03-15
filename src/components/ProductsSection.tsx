import { motion } from "framer-motion";
import { Flame, Zap, Square, HeartPulse, AlertTriangle } from "lucide-react";

const products = [
  {
    icon: Flame,
    iconColor: "text-primary",
    title: "Прахов ABC - 6кг",
    badge: "БЕСТСЕЛЪР",
    desc: "Подходящ за магазини, складове, жилища и камиони.",
  },
  {
    icon: Zap,
    iconColor: "text-blue-500",
    title: "CO2 - 5кг",
    desc: "Защита на електрически уреди без остатъчни замърсявания.",
  },
  {
    icon: Square,
    iconColor: "text-primary",
    title: "Противопожарно одеяло",
    desc: "За кухненски помещения и гасене на локални пожари.",
  },
  {
    icon: HeartPulse,
    iconColor: "text-success",
    title: "Аптечка (Първа помощ)",
    desc: "Комплектована според изискванията на МЗ.",
  },
  {
    icon: Flame,
    iconColor: "text-yellow-500",
    title: "Пожарогасител клас F",
    desc: "Специализиран за кухненски пожари от запалени мазнини и масла.",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    title: "Авто триъгълник",
    desc: "Светлоотразителен триъгълник за аварийно сигнализиране на пътя.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-muted">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 uppercase text-foreground">Топ Продукти</h2>
      <p className="text-muted-foreground">Сертифицирано оборудване от водещи производители</p>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border group"
        >
          <div className="h-48 bg-muted flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-300">
            <p.icon className={`h-20 w-20 ${p.iconColor}`} />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg text-foreground">{p.title}</h4>
              {p.badge && (
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <a
              href="#contact"
              className="block w-full py-3 bg-foreground text-card text-center rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition shadow-lg"
            >
              Запитване
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProductsSection;

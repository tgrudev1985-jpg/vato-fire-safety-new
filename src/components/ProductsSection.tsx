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
    title: "CO₂ - 5кг",
    badge: null,
    desc: "Защита на електрически уреди без остатъчни замърсявания.",
  },
  {
    icon: Square,
    iconColor: "text-primary",
    title: "Противопожарно одеяло",
    badge: null,
    desc: "За кухненски помещения и гасене на локални пожари.",
  },
  {
    icon: HeartPulse,
    iconColor: "text-success",
    title: "Аптечка (Първа помощ)",
    badge: null,
    desc: "Комплектована според изискванията на МЗ.",
  },
  {
    icon: Flame,
    iconColor: "text-yellow-500",
    title: "Пожарогасител клас F",
    badge: null,
    desc: "Специализиран за кухненски пожари от запалени мазнини и масла.",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    title: "Авто триъгълник",
    badge: null,
    desc: "Светлоотразителен триъгълник за аварийно сигнализиране на пътя.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-16 md:py-24 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
          Топ <span className="text-primary">Продукти</span>
        </h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Сертифицирано оборудване от водещи производители
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-44 bg-muted/30 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
              <p.icon className={`h-20 w-20 ${p.iconColor}`} />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-bold text-lg text-foreground break-words">{p.title}</h3>
                {p.badge && (
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shrink-0">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed break-words">
                {p.desc}
              </p>
              <a
                href="#contact"
                className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl font-bold hover:bg-primary/90 transition shadow-md"
              >
                Запитване
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
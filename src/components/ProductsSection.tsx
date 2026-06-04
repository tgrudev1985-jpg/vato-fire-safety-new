import { motion } from "framer-motion";
import { Flame, Zap, Square, HeartPulse, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  {
    icon: Flame,
    iconColor: "text-primary",
    titleKey: "products.powder6",
    badgeKey: null,
    descKey: "products.powder6Desc",
  },
  {
    icon: Zap,
    iconColor: "text-blue-500",
    titleKey: "products.co2",
    badgeKey: null,
    descKey: "products.co2Desc",
  },
  {
    icon: Square,
    iconColor: "text-primary",
    titleKey: "products.blanket",
    badgeKey: null,
    descKey: "products.blanketDesc",
  },
  {
    icon: HeartPulse,
    iconColor: "text-success",
    titleKey: "products.firstAid",
    badgeKey: null,
    descKey: "products.firstAidDesc",
  },
  {
    icon: Flame,
    iconColor: "text-yellow-500",
    titleKey: "products.classF",
    badgeKey: null,
    descKey: "products.classFDesc",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    titleKey: "products.triangle",
    badgeKey: null,
    descKey: "products.triangleDesc",
  },
];

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
              {t("products.title")} <span className="text-primary"></span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={p.titleKey} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 bg-muted/30 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
                  <p.icon className={`h-20 w-20 ${p.iconColor}`} />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-lg text-foreground break-words">{t(p.titleKey)}</h3>
                    {p.badgeKey && (
                      <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shrink-0">
                        {t(p.badgeKey)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed break-words">
                    {t(p.descKey)}
                  </p>
                  <a
                    href="#contact"
                    className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-xl font-bold hover:bg-primary/90 transition shadow-md"
                  >
                    {t("products.inquiry")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
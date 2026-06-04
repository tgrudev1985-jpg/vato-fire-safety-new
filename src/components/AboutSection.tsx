import { motion } from "framer-motion";
import { Shield, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Shield, value: "15+", labelKey: "about.years" },
    { icon: Users, value: "500+", labelKey: "about.clients" },
    { icon: MapPin, value: "Варна", labelKey: "about.base" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-foreground">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
            <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.p3") }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{t(s.labelKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
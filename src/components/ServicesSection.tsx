import { motion } from "framer-motion";
import { Wrench, ClipboardList, Flame, CheckCircle, Search, CalendarCheck, GraduationCap, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Wrench,
    titleKey: "services.techService",
    descKey: "services.techServiceDesc",
    checks: ["services.techCheck1", "services.techCheck2"],
  },
  {
    icon: ClipboardList,
    titleKey: "services.projects",
    descKey: "services.projectsDesc",
    checks: ["services.projectsCheck1", "services.projectsCheck2"],
  },
  {
    icon: Flame,
    titleKey: "services.activeProtection",
    descKey: "services.activeProtectionDesc",
    checks: ["services.activeCheck1", "services.activeCheck2"],
  },
  {
    icon: Search,
    titleKey: "services.inspection",
    descKey: "services.inspectionDesc",
    checks: ["services.inspectionCheck1", "services.inspectionCheck2"],
  },
  {
    icon: CalendarCheck,
    titleKey: "services.subscription",
    descKey: "services.subscriptionDesc",
    checks: ["services.subscriptionCheck1", "services.subscriptionCheck2"],
  },
  {
    icon: GraduationCap,
    titleKey: "services.training",
    descKey: "services.trainingDesc",
    checks: ["services.trainingCheck1", "services.trainingCheck2"],
  },
  {
    icon: Scale,
    titleKey: "services.consultations",
    descKey: "services.consultationsDesc",
    checks: ["services.consultationsCheck1", "services.consultationsCheck2"],
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic uppercase tracking-tighter text-foreground">
              {t("services.title")} <span className="text-primary"></span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.titleKey} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{t(s.descKey)}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {s.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      <span className="break-words">{t(c)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { motion } from "framer-motion";
import { Shield, Award, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Shield, value: "15+", label: "Години опит" },
  { icon: Award, value: "ISO", label: "Сертифицирани" },
  { icon: Users, value: "500+", label: "Доволни клиенти" },
  { icon: MapPin, value: "Варна", label: "Основна база" },
];

const AboutSection = () => (
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
            За Нас
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">ВАТО Пожарна Безопасност ООД</strong> (ЕИК: 202475567) е лицензирана фирма по чл. 129, ал. 2 от ЗМВР, специализирана в областта на пожарната безопасност и защита на обекти от всякакъв мащаб.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Основана през 2009 г. в гр. Варна, компанията предоставя пълен спектър от услуги — от техническо обслужване на пожарогасители и проектиране на пожароизвестителни системи до провеждане на обучения и представителство пред РСПБЗН.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Нашият екип от сертифицирани специалисти гарантира съответствие с всички действащи нормативни изисквания и европейски стандарти за качество.
          </p>
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
              key={s.label}
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
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

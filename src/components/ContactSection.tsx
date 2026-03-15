import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Flame, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-8 italic uppercase tracking-tighter text-foreground">
              Свържете се <br />
              <span className="text-primary">с професионалистите</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              ВАТО Пожарна Безопасност – Вашият надежден партньор в сигурността от 2010г.
            </p>

            <div className="space-y-8">
              <ContactInfo icon={Phone} label="Телефон" value="+359 888 000 000" />
              <ContactInfo icon={Mail} label="Имейл" value="office@vato-fire.bg" />
              <ContactInfo icon={MapPin} label="Адрес" value='гр. София, Бул. "Сигурност" 10 (Складова база 4)' />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="surface-dark p-10 rounded-[3rem] shadow-2xl relative overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Flame className="h-32 w-32" />
            </div>
            <h3 className="text-2xl font-bold mb-8">Бързо запитване</h3>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Име"
                  required
                  className="bg-primary-foreground/10 p-4 rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary w-full placeholder:text-muted-foreground"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  required
                  className="bg-primary-foreground/10 p-4 rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary w-full placeholder:text-muted-foreground"
                />
              </div>
              <input
                type="email"
                placeholder="Имейл адрес"
                required
                className="w-full bg-primary-foreground/10 p-4 rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              />
              <select className="w-full bg-primary-foreground/10 p-4 rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer text-muted-foreground">
                <option value="">Изберете услуга</option>
                <option value="check">Проверка на пожарогасители</option>
                <option value="refill">Презареждане</option>
                <option value="docs">Документация/Проектиране</option>
                <option value="other">Друго</option>
              </select>
              <textarea
                placeholder="Как можем да Ви помогнем?"
                rows={4}
                className="w-full bg-primary-foreground/10 p-4 rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              />

              {submitted && (
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500 p-4 rounded-xl text-sm font-medium text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  Вашето запитване беше изпратено успешно. Очаквайте отговор скоро.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold hover:bg-primary/90 transition shadow-lg uppercase tracking-widest text-sm"
              >
                Изпрати Съобщение
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-6">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-sm uppercase font-bold text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  </div>
);

export default ContactSection;

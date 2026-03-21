import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Flame, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/vato2009@abv.bg", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Грешка при изпращане");
      }
    } catch (err) {
      setError("Възникна грешка. Моля, опитайте отново.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Лява колона – информация и карта */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 italic uppercase tracking-tighter text-foreground">
              Свържете се <br />
              <span className="text-primary">с професионалистите</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
              ВАТО Пожарна Безопасност ООД – Вашият надежден партньор в сигурността.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm uppercase font-bold text-muted-foreground">Телефон</p>
                  <a href="tel:+359898701900" className="text-lg md:text-2xl font-bold text-foreground block hover:text-primary transition-colors">
                    0898 701 900
                  </a>
                  <a href="tel:+359896741869" className="text-base md:text-lg font-semibold text-muted-foreground block hover:text-primary transition-colors">
                    0896 741 869
                  </a>
                </div>
              </div>
              <ContactInfo icon={Mail} label="Имейл" value="vato2009@abv.bg" href="mailto:vato2009@abv.bg" />
              <ContactInfo icon={MapPin} label="Адрес" value="гр. Варна, бул. 3 март, ж.к. Възраждане 2, с.о. Кочмар, бл. 264" />
            </div>

            {/* Карта – гарантирано няма да излезе от екрана */}
            <div className="mt-8 md:mt-10 rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.5!2d27.8873338!3d43.2370432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455751c2d0d41%3A0x22951dd09e0fa20c!2z0JLQsNGC0L4t0J_QvtC20LDRgNC90LAg0LHQtdC30L7Qv9Cw0YHQvdC-0YHRgiIg0J7QntCU!5e0!3m2!1sbg!2sbg!4v1710000000000!5m2!1sbg!2sbg"
                width="100%"
                height="250"
                style={{ border: 0, maxWidth: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ВАТО Пожарна Безопасност - Google Maps"
              />
            </div>
          </motion.div>

          {/* Дясна колона – форма */}
          <motion.div
            className="surface-dark p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Flame className="h-20 w-20 md:h-32 md:w-32" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Бързо запитване</h3>
            <form
              className="space-y-5 relative z-10"
              onSubmit={handleSubmit}
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Ново запитване от сайта" />
              <input type="hidden" name="_next" value="https://vato-firesafety.com/" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Име"
                  required
                  className="bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary w-full placeholder:text-muted-foreground"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  required
                  className="bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary w-full placeholder:text-muted-foreground"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Имейл адрес"
                required
                className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              />
              <select
                name="service"
                className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer text-muted-foreground"
              >
                <option value="">Изберете услуга</option>
                <option value="check">Проверка на пожарогасители</option>
                <option value="refill">Презареждане</option>
                <option value="docs">Документация/Проектиране</option>
                <option value="other">Друго</option>
              </select>
              <textarea
                name="message"
                placeholder="Как можем да Ви помогнем?"
                rows={4}
                className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              />

              {submitted && (
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500 p-3 rounded-xl text-sm font-medium text-green-300">
                  <CheckCircle className="h-4 w-4" />
                  Вашето запитване беше изпратено успешно. Очаквайте отговор скоро.
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 bg-red-500/20 border border-red-500 p-3 rounded-xl text-sm font-medium text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl md:rounded-2xl font-bold hover:bg-primary/90 transition shadow-lg uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Изпращане..." : "Изпрати Съобщение"}
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
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs md:text-sm uppercase font-bold text-muted-foreground">{label}</p>
      {href ? (
        <a href={href} className="text-base md:text-2xl font-bold text-foreground hover:text-primary transition-colors break-words">
          {value}
        </a>
      ) : (
        <p className="text-base md:text-2xl font-bold text-foreground break-words">{value}</p>
      )}
    </div>
  </div>
);

export default ContactSection;
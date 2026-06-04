import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Flame, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("submitted") === "true") {
      setSubmitted(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-background border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left column – info and map */}
          <motion.div
            className="order-2 md:order-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 italic uppercase tracking-tighter text-foreground break-words">
              {t("contact.title")} <br />
              <span className="text-primary">{t("contact.subtitle")}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm uppercase font-bold text-muted-foreground">{t("contact.phoneLabel")}</p>
                  <a href="tel:+359898701900" className="text-lg md:text-2xl font-bold text-foreground block hover:text-primary transition-colors break-words">
                    0898 701 900
                  </a>
                  <a href="tel:+359896741869" className="text-base md:text-lg font-semibold text-muted-foreground block hover:text-primary transition-colors break-words">
                    0896 741 869
                  </a>
                </div>
              </div>
              <ContactInfo icon={Mail} label={t("contact.emailLabel")} value="vato2009@abv.bg" href="mailto:vato2009@abv.bg" />
              <ContactInfo icon={MapPin} label={t("contact.addressLabel")} value={t("contact.address")} />
            </div>

            {/* Map */}
            <div className="mt-8 md:mt-10 rounded-2xl overflow-hidden border border-border shadow-lg w-full">
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

          {/* Right column – form */}
          <motion.div
            className="surface-dark p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative order-1 md:order-2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Flame className="h-20 w-20 md:h-32 md:w-32" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">{t("contact.formTitle")}</h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-2 bg-green-500/20 border border-green-500 p-3 rounded-xl text-sm font-medium text-green-300">
                <CheckCircle className="h-4 w-4" />
                {t("contact.success")}
              </div>
            )}

            <form
              className="space-y-5 relative z-10 w-full"
              action="https://formsubmit.co/vato2009@abv.bg"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_subject" value="Ново запитване от сайта" />
              <input type="hidden" name="_next" value="https://vato-firesafety.com/?submitted=true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">{t("contact.namePlaceholder")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    required
                    className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">{t("contact.phonePlaceholder")}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t("contact.phonePlaceholder")}
                    required
                    className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t("contact.emailPlaceholder")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">{t("contact.servicePlaceholder")}</label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer text-muted-foreground"
                >
                  <option value="">{t("contact.servicePlaceholder")}</option>
                  <option value="check">Проверка на пожарогасители</option>
                  <option value="refill">Презареждане</option>
                  <option value="docs">Документация/Проектиране</option>
                  <option value="other">Друго</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t("contact.messagePlaceholder")}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  className="w-full bg-primary-foreground/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl md:rounded-2xl font-bold hover:bg-primary/90 transition shadow-lg uppercase tracking-widest text-sm"
              >
                {t("contact.submitButton")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon: Icon, label, value, href }: any) => (
  <div className="flex items-start gap-4 w-full">
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
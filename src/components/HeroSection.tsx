import { motion } from "framer-motion";
import { Phone, Send, ShieldCheck, Truck, Clock, Check } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Сертификация по ISO",
    desc: "Всички услуги отговарят на европейските норми за качество.",
  },
  {
    icon: Truck,
    title: "Мобилен сервиз",
    desc: "Посещение на място за проверка и обслужване на Вашия обект.",
  },
  {
    icon: Clock,
    title: "Бързина и точност",
    desc: "Срок за изпълнение на поръчки до 48 часа.",
  },
];

const HeroSection = () => (
  <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-block bg-primary-foreground/10 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-primary-foreground/20">
          Лицензирана фирма по чл. 129, ал. 2 от ЗМВР
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Вашата сигурност е наш приоритет
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Пълно обслужване на пожарогасители, пожароизвестителни системи и консултации по ПБ за бизнеса и дома.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground/90 transition shadow-xl active:scale-95"
          >
            <Send className="h-5 w-5" /> Поискай оферта
          </a>
          <a
            href="tel:+359898701900"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground hover:text-primary transition"
          >
            <Phone className="h-5 w-5" /> 0898 701 900
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative hidden md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-primary-foreground/10 p-10 rounded-[2rem] backdrop-blur-md border border-primary-foreground/20 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary-foreground/70" /> Гарантирано качество
          </h3>
          <ul className="space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-lg">
                  <Check className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold">{f.title}</p>
                  <p className="text-sm opacity-80">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

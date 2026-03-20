import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Начало" },
  { href: "#about", label: "За нас" },
  { href: "#services", label: "Услуги" },
  { href: "#products", label: "Продукти" },
  { href: "#calculator", label: "Калкулатор" },
  { href: "#faq", label: "ЧЗВ" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-card/95 backdrop-blur-md shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#home" className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tighter text-foreground uppercase">
              ВАТО <span className="text-primary">Пожарна Безопасност</span> ООД
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="https://www.google.com/maps/search/ВАТО+Пожарна+Безопасност+Варна"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Посетете ни
            </a>
            <a
              href="#contact"
              className="border-l border-border pl-8 text-primary font-bold uppercase hover:text-primary/80 transition-colors"
            >
              Контакт
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.google.com/maps/search/ВАТО+Пожарна+Безопасност+Варна"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Посетете ни
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md font-bold text-primary hover:bg-primary/5 transition-colors"
              >
                Контакт
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
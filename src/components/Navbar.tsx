import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCalculatorLock } from "@/context/CalculatorLockContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#services", labelKey: "nav.services" },
  { href: "#products", labelKey: "nav.products" },
  { href: "#faq", labelKey: "nav.faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { unlock } = useCalculatorLock();
  const { t } = useTranslation();

  const handleDoubleClickFlame = () => {
    setShowPasswordModal(true);
  };

  const handleUnlock = () => {
    if (unlock(password)) {
      setShowPasswordModal(false);
      setPassword("");
      setError("");
    } else {
      setError("Невалидна парола");
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-card shadow-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="#home" className="flex items-center gap-2">
              <div onDoubleClick={handleDoubleClickFlame} className="cursor-pointer">
                <Flame className="h-8 w-8 text-primary" />
              </div>
              <span className="text-base sm:text-xl font-bold tracking-tighter text-foreground uppercase">
                ВАТО <span className="text-primary">Пожарна Безопасност</span> ООД
              </span>
            </a>

            {/* Desktop меню – всички елементи на един ред */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 2xl:gap-4 font-semibold text-foreground/80 flex-nowrap">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-primary transition-colors whitespace-nowrap text-[11px] lg:text-xs xl:text-sm 2xl:text-base px-1"
                >
                  {t(l.labelKey)}
                </a>
              ))}
              <a
                href="https://www.google.com/maps/search/ВАТО+Пожарна+Безопасност+Варна"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors whitespace-nowrap text-[11px] lg:text-xs xl:text-sm 2xl:text-base px-1"
              >
                {t("nav.visit")}
              </a>
              <a
                href="#contact"
                className="border-l border-border pl-1 lg:pl-2 xl:pl-3 text-primary font-bold uppercase hover:text-primary/80 transition-colors whitespace-nowrap text-[11px] lg:text-xs xl:text-sm 2xl:text-base"
              >
                {t("nav.contact")}
              </a>
              <LanguageSwitcher />
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
                    {t(l.labelKey)}
                  </a>
                ))}
                <a
                  href="https://www.google.com/maps/search/ВАТО+Пожарна+Безопасност+Варна"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                >
                  {t("nav.visit")}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-md font-bold text-primary hover:bg-primary/5 transition-colors"
                >
                  {t("nav.contact")}
                </a>
                <div className="pt-2 mt-2 border-t border-border">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Модал за парола */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setShowPasswordModal(false);
                setPassword("");
                setError("");
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold mb-4">Отключване на калкулатора</h3>
            <p className="text-sm text-muted-foreground mb-4">Въведете парола за достъп до калкулатора.</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Парола"
              className="w-full p-3 rounded-xl border border-border bg-background mb-3"
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              onClick={handleUnlock}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90"
            >
              Отключи
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
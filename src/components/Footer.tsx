import { Flame } from "lucide-react";

const Footer = () => (
  <footer className="surface-dark py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Flame className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold uppercase italic">ВАТО Пожарна Безопасност ООД</span>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Вашата пожарна безопасност е в ръцете на професионалисти — доверете се на нашия дългогодишен опит.
          </p>
        </div>
        <div className="text-center md:text-right text-sm text-muted-foreground space-y-1">
          <a href="tel:+359898701900" className="block hover:text-primary-foreground transition-colors">0898 701 900</a>
          <a href="tel:+359896741869" className="block hover:text-primary-foreground transition-colors">0896 741 869</a>
          <a href="mailto:vato2009@abv.bg" className="block hover:text-primary-foreground transition-colors">vato2009@abv.bg</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/5 mt-12 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 ВАТО Пожарна Безопасност ООД (ЕИК:202475567). Всички права запазени.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Политика за поверителност
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Общи условия
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

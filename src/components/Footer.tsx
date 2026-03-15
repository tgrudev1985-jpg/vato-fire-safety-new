import { Flame } from "lucide-react";

const Footer = () => (
  <footer className="surface-dark py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Flame className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold uppercase italic">ВАТО Пожарна</span>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Ние не просто продаваме пожарогасители, ние осигуряваме Вашето спокойствие чрез професионализъм и опит.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/5 mt-12 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2026 ВАТО Пожарна Безопасност ЕООД. Всички права запазени.</p>
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

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 ml-4">
      <button
        onClick={() => changeLanguage('bg')}
        className={`px-2 py-1 text-sm font-medium rounded-md transition ${
          currentLang === 'bg'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary'
        }`}
      >
        BG
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm font-medium rounded-md transition ${
          currentLang === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-2 py-1 text-sm font-medium rounded-md transition ${
          currentLang === 'ru'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-primary'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
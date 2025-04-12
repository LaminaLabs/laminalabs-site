const LanguageSwitch = ({ language, setLanguage }) => {
    return (
      <div className="absolute top-6 right-6 text-sm">
        <button
          onClick={() => setLanguage('en')}
          className={`text-neon-cyan font-bold mx-2 ${language === 'en' ? 'underline' : ''} hover:underline hover:text-soft-white transition-colors`}
        >
          EN
        </button>
        |
        <button
          onClick={() => setLanguage('de')}
          className={`text-neon-cyan font-bold mx-2 ${language === 'de' ? 'underline' : ''} hover:underline hover:text-soft-white transition-colors`}
        >
          DE
        </button>
      </div>
    );
  };
  
  export default LanguageSwitch;
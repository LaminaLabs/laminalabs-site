import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  return (
    <footer className="text-center py-4 px-4 border-t border-white/5">
      <div className="mb-2">
        <Link to="/" className="text-sm text-neon-cyan no-underline mx-2 hover:underline hover:text-opacity-80">
          {language === 'en' ? 'Home' : 'Startseite'}
        </Link>
        <Link to="/privacy" className="text-sm text-neon-cyan no-underline mx-2 hover:underline hover:text-opacity-80">
          {language === 'en' ? 'Privacy' : 'Datenschutz'}
        </Link>
        <Link to="/impressum" className="text-sm text-neon-cyan no-underline mx-2 hover:underline hover:text-opacity-80">
          {language === 'en' ? 'Impressum' : 'Impressum'}
        </Link>
      </div>
      <p className="text-xs text-gray-500">© 2025 Lamina Labs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
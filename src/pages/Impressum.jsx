import { motion } from 'framer-motion';

const Impressum = ({ language }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8 rounded-xl bg-white/10 border border-neon-cyan/20 shadow-xl backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {language === 'en' ? (
          <>
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Impressum
            </h2>
            <p className="mb-6 text-sm text-gray-200">
              This legal notice applies to all pages of Lamina Labs published under <strong>laminalabs.app</strong>.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Responsible for Content</h3>
            <p className="mb-6 text-sm text-gray-200">
              F. B. (natural person)<br />
              Email: <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Disclaimer</h3>
            <p className="mb-6 text-sm text-gray-200">
              All content has been created with care. However, we do not guarantee accuracy, completeness, or timeliness. We are not responsible for external links.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Hosting</h3>
            <p className="mb-6 text-sm text-gray-200">
              This website is hosted on Netlify. Server logs may be recorded by Netlify in accordance with their <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">privacy policy</a>.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Impressum
            </h2>
            <p className="mb-6 text-sm text-gray-200">
              Dieses Impressum gilt für alle Seiten von Lamina Labs unter <strong>laminalabs.app</strong>.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Verantwortlich für den Inhalt</h3>
            <p className="mb-6 text-sm text-gray-200">
              F. B. (natürliche Person)<br />
              E-Mail: <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Haftungsausschluss</h3>
            <p className="mb-6 text-sm text-gray-200">
              Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Für Inhalte externer Links übernehmen wir keine Haftung.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">Hosting</h3>
            <p className="mb-6 text-sm text-gray-200">
              Diese Website wird bei Netlify gehostet. Server-Logs können gemäß der <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie von Netlify</a> aufgezeichnet werden.
            </p>
          </>
        )}
      </motion.div>
    </motion.main>
  );
};

export default Impressum;
import { motion } from 'framer-motion';

const Home = ({ language }) => {
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
              What We Do
            </h2>
            <p className="mb-8 text-base text-gray-200">
              We design tools, build experiments and develop unconventional software — from private AI interfaces to indie game mechanics and local-first apps.
            </p>

            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Focus Areas
            </h2>
            <ul className="list-disc pl-5 mb-8 text-base text-gray-200 space-y-3">
              <li className="hover:text-soft-white transition-colors">⚙️ Mobile AI Interfaces</li>
              <li className="hover:text-soft-white transition-colors">🎮 Experimental Games & Prototypes</li>
              <li className="hover:text-soft-white transition-colors">📦 Local-first & Offline Tools</li>
              <li className="hover:text-soft-white transition-colors">🧠 Prompt-Driven Creativity</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Current Projects
            </h2>
            <ul className="list-disc pl-5 mb-8 text-base text-gray-200 space-y-3">
              <li className="hover:text-soft-white transition-colors"><strong>OfflineGPT</strong> – offline AI chat app with local LLM</li>
              <li className="hover:text-soft-white transition-colors"><strong>Prompt Playground</strong> – creative assistant for writers & tinkerers</li>
              <li className="hover:text-soft-white transition-colors"><strong>Microverse</strong> – a tiny metaphysical game world</li>
              <li className="hover:text-soft-white transition-colors"><strong>APK Lab (coming soon)</strong> – tools & tweaks for power users</li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Was wir tun
            </h2>
            <p className="mb-8 text-base text-gray-200">
              Wir entwerfen Tools, entwickeln Experimente und bauen unkonventionelle Software – von privater KI über Spielmechaniken bis zu lokalen Apps.
            </p>

            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Fokusbereiche
            </h2>
            <ul className="list-disc pl-5 mb-8 text-base text-gray-200 space-y-3">
              <li className="hover:text-soft-white transition-colors">⚙️ Mobile KI-Oberflächen</li>
              <li className="hover:text-soft-white transition-colors">🎮 Experimentelle Spiele & Prototypen</li>
              <li className="hover:text-soft-white transition-colors">📦 Lokale & Offline-Tools</li>
              <li className="hover:text-soft-white transition-colors">🧠 Prompt-basierte Kreativität</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Aktuelle Projekte
            </h2>
            <ul className="list-disc pl-5 mb-8 text-base text-gray-200 space-y-3">
              <li className="hover:text-soft-white transition-colors"><strong>OfflineGPT</strong> – Offline-Chat-KI mit lokalem Modell</li>
              <li className="hover:text-soft-white transition-colors"><strong>Prompt Playground</strong> – Kreativassistenz für Schreibende & Tüftler</li>
              <li className="hover:text-soft-white transition-colors"><strong>Microverse</strong> – eine kleine metaphysische Spielwelt</li>
              <li className="hover:text-soft-white transition-colors"><strong>APK Lab (demnächst)</strong> – Tools & Tweaks für Power-User</li>
            </ul>
          </>
        )}
      </motion.div>
    </motion.main>
  );
};

export default Home;
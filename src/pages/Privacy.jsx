import { motion } from 'framer-motion';

const Privacy = ({ language }) => {
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
              Privacy Policy
            </h2>
            <p className="mb-6 text-sm text-gray-200"><strong>Last Updated:</strong> April 12, 2025</p>
            <p className="mb-6 text-sm text-gray-200">
              Lamina Labs is committed to protecting your privacy. This Privacy Policy explains how we handle your data when you use our mobile app <strong>OfflineGPT</strong> and our website at <strong>laminalabs.app</strong>. If you have any questions, feel free to reach out to us at <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">1. Responsible Party</h3>
            <p className="mb-6 text-sm text-gray-200">
              <strong>Lamina Labs</strong><br />
              Responsible Person: F. B. (natural person)<br />
              Contact: <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">2. Data We Collect</h3>
            <h4 className="text-base font-medium text-neon-cyan mb-2">2.1 OfflineGPT App</h4>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>No Personal Data:</strong> OfflineGPT operates entirely offline. We do <strong>not</strong> collect, store, or process any personal data such as your name, email, or location.<br />
              - <strong>Chat Data:</strong> All chat history and conversations are stored locally on your device and are <strong>not</strong> transmitted to any server or cloud.<br />
              - <strong>Speech Input:</strong> If you use the speech-to-text feature, your voice input is processed by your device's system (e.g., Google Speech Recognition on Android). We do <strong>not</strong> access, record, or store any audio data.<br />
              - <strong>Model Files:</strong> OfflineGPT downloads model files on first launch. These files are stored locally on your device and are <strong>not</strong> shared with us or any third party.
            </p>

            <h4 className="text-base font-medium text-neon-cyan mb-2">2.2 Website (laminalabs.app)</h4>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>No Tracking:</strong> We do <strong>not</strong> use analytics, cookies, or tracking technologies on our website.<br />
              - <strong>Server Logs:</strong> Our hosting provider, Netlify, may log basic access data (e.g., IP address, timestamp) as part of their standard operations. This data is <strong>not</strong> accessed or processed by us. See <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Netlify's Privacy Policy</a> for details.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">3. In-App Purchases</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Google Play Billing:</strong> OfflineGPT offers in-app purchases (e.g., Pro Version) via Google Play Billing. All payment data is handled directly by Google Play. We do <strong>not</strong> collect, store, or process any payment information.<br />
              - <strong>Purchase Data:</strong> We only receive anonymized confirmation of successful purchases to unlock features in the app.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">4. Internet Usage</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Offline Operation:</strong> After the initial download of model files, OfflineGPT operates fully offline. No internet connection is required for core functionality.<br />
              - <strong>Website:</strong> Visiting laminalabs.app may involve data transfers to Netlify for hosting purposes, as mentioned in Section 2.2.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">5. Third-Party Services</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Google Play Services:</strong> Used for in-app purchases and speech-to-text (optional). See <a href="https://policies.google.com/privacy" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> for details.<br />
              - <strong>Netlify:</strong> Hosting provider for laminalabs.app. See <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Netlify's Privacy Policy</a> for details.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">6. Your Rights</h3>
            <p className="mb-6 text-sm text-gray-200">
              Since OfflineGPT does not collect or process personal data, traditional data subject rights (e.g., access, deletion) do not apply. However:<br />
              - <strong>Local Data Control:</strong> You can delete all app data (e.g., chat history, model files) at any time by uninstalling the app or clearing app data via your device settings.<br />
              - <strong>Contact Us:</strong> If you have concerns, you can reach us at <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>. We typically respond within 2 business days.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">7. Data Security</h3>
            <p className="mb-6 text-sm text-gray-200">
              - All data processed by OfflineGPT remains on your device.<br />
              - We do not have access to your data, and there is no cloud storage or server transmission involved.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">8. Children's Privacy</h3>
            <p className="mb-6 text-sm text-gray-200">
              OfflineGPT is not intended for children under 13. We do not knowingly collect data from children.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">9. Changes to This Policy</h3>
            <p className="mb-6 text-sm text-gray-200">
              We may update this Privacy Policy from time to time. The latest version will always be available at <a href="https://laminalabs.app/privacy" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabs.app/privacy</a>. Significant changes will be communicated via the app or website.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">10. Contact Us</h3>
            <p className="mb-6 text-sm text-gray-200">
              For questions or concerns about this Privacy Policy, please contact us at <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-neon-cyan mb-4 drop-shadow-[0_0_6px_rgba(0,255,238,0.5)]">
              Datenschutzerklärung
            </h2>
            <p className="mb-6 text-sm text-gray-200"><strong>Zuletzt aktualisiert:</strong> 12. April 2025</p>
            <p className="mb-6 text-sm text-gray-200">
              Lamina Labs verpflichtet sich, deine Privatsphäre zu schützen. Diese Datenschutzerklärung erklärt, wie wir deine Daten behandeln, wenn du unsere mobile App <strong>OfflineGPT</strong> und unsere Website unter <strong>laminalabs.app</strong> nutzt. Bei Fragen kontaktiere uns gern unter <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">1. Verantwortliche Stelle</h3>
            <p className="mb-6 text-sm text-gray-200">
              <strong>Lamina Labs</strong><br />
              Verantwortliche Person: F. B. (natürliche Person)<br />
              Kontakt: <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">2. Erhobene Daten</h3>
            <h4 className="text-base font-medium text-neon-cyan mb-2">2.1 OfflineGPT App</h4>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Keine personenbezogenen Daten:</strong> OfflineGPT funktioniert vollständig offline. Wir erheben, speichern oder verarbeiten <strong>keine</strong> personenbezogenen Daten wie Name, E-Mail oder Standort.<br />
              - <strong>Chat-Daten:</strong> Der gesamte Chatverlauf und die Konversationen werden lokal auf deinem Gerät gespeichert und <strong>nicht</strong> an Server oder Clouds übertragen.<br />
              - <strong>Spracheingabe:</strong> Wenn du die Sprache-zu-Text-Funktion nutzt, wird deine Stimmeingabe vom System deines Geräts verarbeitet (z. B. Google Spracherkennung auf Android). Wir haben <strong>keinen</strong> Zugriff auf Audiodaten und speichern diese nicht.<br />
              - <strong>Modell-Dateien:</strong> OfflineGPT lädt Modell-Dateien beim ersten Start herunter. Diese Dateien werden lokal auf deinem Gerät gespeichert und <strong>nicht</strong> mit uns oder Dritten geteilt.
            </p>

            <h4 className="text-base font-medium text-neon-cyan mb-2">2.2 Website (laminalabs.app)</h4>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Kein Tracking:</strong> Wir verwenden auf unserer Website <strong>keine</strong> Analysen, Cookies oder Tracking-Technologien.<br />
              - <strong>Server-Logs:</strong> Unser Hosting-Anbieter Netlify kann grundlegende Zugriffsdaten (z. B. IP-Adresse, Zeitstempel) im Rahmen seiner Standardprozesse protokollieren. Diese Daten werden von uns <strong>nicht</strong> eingesehen oder verarbeitet. Siehe <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Netlify Datenschutzerklärung</a> für Details.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">3. In-App-Käufe</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Google Play Billing:</strong> OfflineGPT bietet In-App-Käufe (z. B. Pro-Version) über Google Play Billing an. Alle Zahlungsdaten werden direkt von Google Play verarbeitet. Wir erheben, speichern oder verarbeiten <strong>keine</strong> Zahlungsdaten.<br />
              - <strong>Kaufdaten:</strong> Wir erhalten nur anonymisierte Bestätigungen erfolgreicher Käufe, um Funktionen in der App freizuschalten.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">4. Internetnutzung</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Offline-Betrieb:</strong> Nach dem ersten Download der Modell-Dateien funktioniert OfflineGPT komplett offline. Für die Kernfunktionen ist keine Internetverbindung erforderlich.<br />
              - <strong>Website:</strong> Der Besuch von laminalabs.app kann Datenübertragungen an Netlify für Hosting-Zwecke beinhalten, wie in Abschnitt 2.2 erwähnt.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">5. Drittanbieter-Dienste</h3>
            <p className="mb-6 text-sm text-gray-200">
              - <strong>Google Play Services:</strong> Verwendet für In-App-Käufe und Sprache-zu-Text (optional). Siehe <a href="https://policies.google.com/privacy" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a> für Details.<br />
              - <strong>Netlify:</strong> Hosting-Anbieter für laminalabs.app. Siehe <a href="https://www.netlify.com/privacy/" className="text-neon-cyan underline hover:text-soft-white transition-colors" target="_blank" rel="noopener noreferrer">Netlify Datenschutzerklärung</a> für Details.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">6. Deine Rechte</h3>
            <p className="mb-6 text-sm text-gray-200">
              Da OfflineGPT keine personenbezogenen Daten erhebt oder verarbeitet, greifen klassische Betroffenenrechte (z. B. Auskunft, Löschung) nicht. Dennoch:<br />
              - <strong>Kontrolle über lokale Daten:</strong> Du kannst alle App-Daten (z. B. Chatverlauf, Modelle) jederzeit löschen, indem du die App deinstallierst oder die App-Daten über die Geräteeinstellungen entfernst.<br />
              - <strong>Kontakt:</strong> Bei Fragen kannst du uns unter <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a> erreichen. Wir antworten in der Regel innerhalb von 2 Werktagen.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">7. Datensicherheit</h3>
            <p className="mb-6 text-sm text-gray-200">
              - Alle Daten, die von OfflineGPT verarbeitet werden, bleiben auf deinem Gerät.<br />
              - Wir haben keinen Zugriff auf deine Daten, und es gibt keine Cloud-Speicherung oder Serverübertragung.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">8. Datenschutz für Kinder</h3>
            <p className="mb-6 text-sm text-gray-200">
              OfflineGPT ist nicht für Kinder unter 13 Jahren gedacht. Wir erfassen wissentlich keine Daten von Kindern.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">9. Änderungen dieser Richtlinie</h3>
            <p className="mb-6 text-sm text-gray-200">
              Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die neueste Version ist immer unter <a href="https://laminalabs.app/privacy" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabs.app/privacy</a> verfügbar. Wesentliche Änderungen werden über die App oder Website kommuniziert.
            </p>

            <h3 className="text-lg font-semibold text-neon-cyan mt-8 mb-4">10. Kontakt</h3>
            <p className="mb-6 text-sm text-gray-200">
              Bei Fragen oder Bedenken zur Datenschutzerklärung kontaktiere uns unter <a href="mailto:laminalabsofficial@gmail.com" className="text-neon-cyan underline hover:text-soft-white transition-colors">laminalabsofficial@gmail.com</a>.
            </p>
          </>
        )}
      </motion.div>
    </motion.main>
  );
};

export default Privacy;
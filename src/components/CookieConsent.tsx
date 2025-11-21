import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
      document.body.classList.add('cookie-consent-visible');
    }
    
    return () => {
      document.body.classList.remove('cookie-consent-visible');
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    document.body.classList.remove('cookie-consent-visible');
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    document.body.classList.remove('cookie-consent-visible');
  };

  const handlePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-2xl z-50 p-4 md:p-6 animate-slide-up">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Gérer le consentement</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies pour stocker et/ou accéder aux informations des appareils. Le fait de consentir à ces technologies nous permettra de traiter des données telles que le comportement de navigation ou les ID uniques sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet négatif sur certaines caractéristiques et fonctions.
            </p>
            {showPreferences && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <strong>Fonctionnel</strong>
                      <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded">Toujours activé</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      L'accès ou le stockage technique est strictement nécessaire dans la finalité d'intérêt légitime de permettre l'utilisation d'un service spécifique explicitement demandé par l'abonné ou l'utilisateur.
                    </p>
                  </div>
                  <div>
                    <strong>Préférences</strong>
                    <p className="text-gray-400 text-xs mt-1">
                      L'accès ou le stockage technique est nécessaire dans la finalité d'intérêt légitime de stocker des préférences qui ne sont pas demandées par l'abonné ou l'internaute.
                    </p>
                  </div>
                  <div>
                    <strong>Statistiques</strong>
                    <p className="text-gray-400 text-xs mt-1">
                      Le stockage ou l'accès technique qui est utilisé exclusivement à des fins statistiques anonymes.
                    </p>
                  </div>
                  <div>
                    <strong>Marketing</strong>
                    <p className="text-gray-400 text-xs mt-1">
                      L'accès ou le stockage technique est nécessaire pour créer des profils d'internautes afin d'envoyer des publicités, ou pour suivre l'utilisateur sur un site web ou sur plusieurs sites web ayant des finalités marketing similaires.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link
                to="/politique-cookies"
                className="text-white/80 hover:text-white underline"
              >
                Politique de cookies
              </Link>
              <span className="text-gray-500">•</span>
              <Link
                to="/politique-confidentialite"
                className="text-white/80 hover:text-white underline"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-col lg:flex-nowrap lg:min-w-[200px]">
            <button
              onClick={handleAccept}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap flex-1 lg:flex-none"
            >
              Accepter
            </button>
            <button
              onClick={handleReject}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap flex-1 lg:flex-none"
            >
              Refuser
            </button>
            <button
              onClick={handlePreferences}
              className="bg-transparent border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap flex-1 lg:flex-none text-sm"
            >
              {showPreferences ? 'Masquer les préférences' : 'Voir les préférences'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


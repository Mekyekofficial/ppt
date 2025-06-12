import { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

const PWAInstall = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register service worker
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
          updateSW();
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
    });

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Install Mekyek App</h3>
      <p className="text-sm text-gray-600 mb-3">
        Install our app for a better experience
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleInstall}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Install
        </button>
        <button
          onClick={() => setShowInstallPrompt(false)}
          className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWAInstall; 
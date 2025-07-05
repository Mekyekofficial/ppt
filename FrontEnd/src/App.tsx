// import Landingpage from './Landingpage'
import { useEffect } from 'react'
import { RateLimiter } from './utils/security'
import { Firewall } from './utils/firewall'
import PWAInstall from './components/PWAInstall'
// import Navbar from './Navbar/Navbar'
import Home from './Home'
import News from './News'
import Comunity from './Comunity'
import Learn from './Learn'
function App() {
  useEffect(() => {
    // Initialize rate limiter
    const rateLimiter = new RateLimiter(60000, 100); // 100 requests per minute
    const firewall = Firewall.getInstance();

    // Add rate limiting and firewall to fetch requests
    const originalFetch = window.fetch;
    /*
    window.fetch = async (...args) => {
      try {
        // Create a Request object from the fetch arguments
        const request = new Request(...args);
        
        // Check firewall rules
        await firewall.checkRequest(request);
        
        // Check rate limit
        if (rateLimiter.isRateLimited('api')) {
          throw new Error('Too many requests. Please try again later.');
        }
        
        return originalFetch(...args);
      } catch (error) {
        console.error('Security check failed:', error);
        throw error;
      }
    };
    */

    // Prevent copy
    const preventCopy = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault()
      }
    }

    // Prevent screenshots and screen recording
    const preventScreenCapture = () => {
      // Disable right-click
      document.addEventListener('contextmenu', (e) => e.preventDefault())
      
      // Disable print screen
      document.addEventListener('keydown', (e) => {
        if (e.key === 'PrintScreen') {
          e.preventDefault()
        }
      })

      // Disable screen recording
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia = async () => {
          throw new Error('Screen recording is not allowed')
        }
      }
    }

    // Prevent dev tools
    const preventDevTools = () => {
      document.addEventListener('keydown', (e) => {
        if (
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
          (e.ctrlKey && e.key === 'U') ||
          (e.key === 'F12')
        ) {
          e.preventDefault()
        }
      })
    }

    // Apply all prevention methods
    // preventScreenCapture()
    // preventDevTools()
    // document.addEventListener('keydown', preventCopy)

    // Cleanup
    return () => {
      // window.fetch = originalFetch;
      // document.removeEventListener('keydown', preventCopy)
    }
  }, [])

  return (  
    <>
      {/* <Landingpage /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <News /> */}
      {/* <Comunity /> */}
      {/* <Learn /> */}
      <PWAInstall />
    </>
  )
}

export default App
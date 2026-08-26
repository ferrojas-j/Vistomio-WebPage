import { useState, useEffect } from 'react'
import VistomioLandingPage from './VistomioLandingPage'
import PrivacyPolicy from './PrivacyPolicy'

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#privacidad') {
    return <PrivacyPolicy />;
  }

  return (
    <VistomioLandingPage />
  )
}

export default App

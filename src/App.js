import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Adopt from './components/Adopt';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Stories from './components/Stories';
import Reviews from './components/Reviews';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Stories />
      <Reviews />
      <Adopt />
      <Footer />
    </div>
  );
}

export default App;

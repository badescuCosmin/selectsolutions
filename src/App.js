import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Charactersitics from './components/Characteristics';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About title='About us' />
      <Charactersitics />
      <Services title='Services' />
      <Contact title='Get in touch' />
      <Footer />
    </div>
  );
}

export default App;

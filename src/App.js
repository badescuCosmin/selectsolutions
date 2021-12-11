import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About title='About us' />
      <Services title='Services' />
    </div>
  );
}

export default App;

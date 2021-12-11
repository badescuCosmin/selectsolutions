import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

export default App;

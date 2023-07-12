import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { GlobalStyle } from './component/GlobalStyle'
import Navbar from './Navbar';
import Hero from './Hero'
import About from './About'
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Certification from './Certification';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

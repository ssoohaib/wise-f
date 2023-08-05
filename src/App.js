import './css/App.css';
import Navbar from './Navbar';
import Mainheading from "./Mainheading"
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import Converter from './Converter';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Mainheading />
      <Converter />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

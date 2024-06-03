import "./App.css";
import Skillset from "./components/Skillset";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
   <ToastContainer />

        <Navbar />
        <HeroSection />
        <Projects />
        <Skillset />
        <Contact />
      <Footer/>

      
    </>
  );
}

export default App;

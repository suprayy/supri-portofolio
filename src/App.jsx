import "./App.css";

import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero.jsx";
import Services from "./components/UI/Services.jsx";
import Portofolio from "./components/UI/portofolio.jsx";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portofolio />
      </main>
      <Footer />
    </>
  );
}

export default App;

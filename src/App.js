import React, { useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header"
import Buttons from "./components/Buttons";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Header />
      <Buttons/>
      <ParticleBackground/>
    </div>
  );
}


export default App;

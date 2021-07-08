import React, { useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header"
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
      <ParticleBackground/>
    </div>
  );
}

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Particle Js Integration</h1>
      </div>
    </div>
  )
}

export default App;

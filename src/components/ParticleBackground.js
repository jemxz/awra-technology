import React from "react"
import Particles from "react-tsparticles"
import particleConfig from "./layouts/Particles"
import '../styles/particleBackground.css'

export default function ParticleBackground() {
    return (
        <Particles className="top" params={particleConfig}></Particles>

    )
    
}
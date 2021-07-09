  
import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import '../styles/buttons.css'


const Buttons = () => {
    return (
        <div className = "mainbuttons">
            <AwesomeButton className="primarybtn" type="primary">About Us</AwesomeButton>
            <AwesomeButton className="secondarybtn" type="secondary">Projects</AwesomeButton>
            <AwesomeButton className="anchorbtn" type="link">Contact Us</AwesomeButton>
        </div>
    )
}

export default Buttons
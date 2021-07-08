import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/header.css'
import companyLogo from '../img/Asset 8.png'



const Header = () => {

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <div className= "topright">
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div id="not-dark" className="Header">
                <div className="leftstick">
                    <Typewriter
                        options = {{
                            loop: false,
                            cursor: '        '
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString(
                                '<h1 class="herotext">Welcome to Awra Technology</h1>',
                            
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('<h1 style="text-align: center; color:#27ae60;">Enkuan Dena Metu</h1>')
                            .start()
                        }}
                    />
                </div>
            </div>
            <div className="topleft">
                    <img className= "logosize" src={companyLogo} alt="">
                       
                    </img>
            </div>
            
        </div>
    )
    
}

export default Header;
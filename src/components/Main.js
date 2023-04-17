import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import './styles/Main.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import me from './assests/me.jpg'

const Main =() => {
    return(
        <div className= 'main' id="Main">
            
            <div className ="main__container">
                
                <div className = "main__content">
                    
                    <div className= "text">
                        
                        <p>Hello Everyone</p>
                        <h1>I am Christian</h1>
                        <p>I am a SDET Engineer</p>

                        <div className="icons">
                            <a href="https://www.linkedin.com/in/christian-bryant/">
                                <LinkedIn className="icon"/>
                            </a>
                            <a href="https://github.com/cbryant93">
                                <GitHub className="icon"/>
                            </a>
                            <Link
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <Email className="icon"/>
                            </Link>
                        </div>

                   
                    </div>
                
                </div>

                <div className="main__img">
                    <img src={me} alt=" "/>
                </div>

            </div>
        
        </div>
    )
}

export default Main 
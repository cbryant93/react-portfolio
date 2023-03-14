import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import './styles/Main.scss'
import me from './assests/me.jpg'

const Main =() => {
    return(
        <div className= 'main'>
            
            <div className ="main__container">
                
                <div className = "main__content">
                    
                    <div className= "text">
                        
                        <p>Hello Everyone</p>
                        <h1>I am Christian</h1>
                        <p>I am a SDET Engineer</p>

                        <div className = "icons">
                            <LinkedIn className="icon"/>
                            <GitHub className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>Contact Me</button>
                            <button>Hire Me</button>

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
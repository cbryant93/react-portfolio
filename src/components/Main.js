import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import './styles/Main.scss'

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
                            <Instagram className="icon"/>
                            <LinkedIn className="icon"/>
                            <GitHub className="icon"/>
                        </div>
                   
                    </div>
                
                </div>

            </div>
        
        </div>
    )
}

export default Main 
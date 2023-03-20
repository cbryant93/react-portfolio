import { ArrowBack } from "@material-ui/icons";
import { A } from "hookrouter";
import React from "react";
import'./styles/Contact.scss'

const Contact = () => {
    return(
        <div className="contact">
            <A href ='/'>
                <ArrowBack className="arrow"/>
            </A>

            <div className="inputs">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Message" className="message"/>
                <button>Send</button>
            </div>

        </div>
    )
}

export default Contact
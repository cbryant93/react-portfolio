import  React from "react";
import "./styles/Header.scss"
import { Close } from "@material-ui/icons";
import {A} from 'hookrouter'; 


const Header = () => {
    return(
<div>
    <header className="header">

        <div className="header_logo">
            <h1>Christian Bryant</h1>
        </div>

        <nav>
            <ul>
        <div className= "closed">
            <Close className = 'close'/>
        </div>
            <li>
            <A className='Link' href='/'>HOME</A> 
            </li>
            <li>
            <A className='Link' href='/'>ABOUT ME</A> 
            </li>
            <li>
            <A className='Link' href='/'>SKILLS</A> 
            </li>
            <li>
            <A className='Link' href='/'>PROJECTS</A> 
            </li>
            <li>
            <A className='Link' href='/'>OTHER</A> 
            </li>
            <li>
            <A className='Link' href='/'>CONTACT ME</A> 
            </li>
            </ul>
        </nav>

    </header>

</div>
    )
}

export default Header
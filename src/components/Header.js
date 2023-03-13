import  React, { useState } from "react";
import "./styles/Header.scss"
import { Close, MenuOutlined } from "@material-ui/icons";
import {A} from 'hookrouter'; 


const Header = () => {

     const [active, setActive] = useState(false);

     const showMenu =() =>{
        setActive(!active)
     }

    return(
    <div className="header">

        <div className="header__logo">
            <h1>Christian Bryant</h1>
        </div>

        <nav className="navbar">
            <ul>
        <div className= "closed">
            <Close className = 'close' onClick ={showMenu}/>
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
            <A className='Link' href='/'>BLOG</A> 
            </li>
            <li>
            <A className='Link' href='/'>CONTACT ME</A> 
            </li>
            </ul>
        </nav>

        <div className="changer">
            <MenuOutlined className="menu" onClick ={showMenu}/>
        </div>

    </div>

    )
}

export default Header
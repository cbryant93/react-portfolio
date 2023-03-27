import  React, { useState } from "react";
import "./styles/Header.scss"
import { Close, MenuOutlined } from "@material-ui/icons";
import {Link} from 'react-router-dom';

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

        <nav className={active ? 'navbar active' : 'navbar'}>
            <ul>
        <div className= "closed">
            <Close className = 'close' onClick ={showMenu}/>
        </div>
            <Link className='Link' to='/'>
            <li>HOME</li>
            </Link>
            <Link className='Link' to='/about'>
            <li>ABOUT</li>
            </Link>
            <Link className='Link' to='/skills'>
            <li>SKILLS</li>
            </Link>
            <Link className='Link' to='/projects'>
            <li>PROJECTS</li>
            </Link>
            <Link className='Link' to='/'>
            <li>BLOG</li>
            </Link>
            <Link className='Link' to='/contact'>
            <li>CONTACT ME</li>
            </Link>
            </ul>
        </nav>

        <div className="changer">
            <MenuOutlined className="menu" onClick ={showMenu}/>
        </div>

    </div>

    )
}

export default Header
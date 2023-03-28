import  React, { useState } from "react";
import "./styles/Header.scss"
import { Close, MenuOutlined } from "@material-ui/icons";
import { Link, animateScroll as scroll} from 'react-scroll'


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
            <li>
            <Link to='/'>HOME</Link> 
            </li>

            <li>
            <Link to="About" spy={true} smooth={true} offset={0} duration={500}>ABOUT ME</Link> 
            </li>

            <li>
            <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}>SKILLS</Link> 
            </li>

            <li>
            <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>PROJECTS</Link> 
            </li>

            <li>
            <Link to='/'>BLOG</Link> 
            </li>

            <li>
            <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>CONTACT</Link> 
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
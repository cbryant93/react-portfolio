import React, { useState, useEffect } from "react";
import "./styles/Header.scss";
import { Close, MenuOutlined } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ onSectionClick, onSkillsClick, onProjectsClick, onContactClick }) => {

  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showMenu = () => {
    // If window width is less than 1281px (the breakpoint in your CSS for desktop view)
    if (window.innerWidth < 1025) {
      setActive(!active);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className="header__logo">
        <h1>Christian Bryant</h1>
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <Link to="Main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={showMenu}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                onSectionClick();
                showMenu();
              }}
            >
              ABOUT ME
            </Link>
          </li>

          <li>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                onSkillsClick();
                showMenu();
            }}
            >
              SKILLS
            </Link>
          </li>

          <li>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                onProjectsClick();
                showMenu();
              }}
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link to="/">BLOG</Link>
          </li>

          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                onContactClick();
                showMenu();
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;

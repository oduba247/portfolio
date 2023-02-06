    import React, { useState } from "react";

    import DarkToggleMenu from "./DarkToggleMenu";
    import "../Style/Navbar.css"

    const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
        <nav id="navbar" className="">
        
            <div className="nav-cont1">
            <div className="logo">
                <a href="/">
                <i className="logo"></i>TommyCloud
                </a>
            </div>

            <ul id="menu">
            
                <li>
                    <a href="#home">Home</a>
                </li>
            
                
                {" "}
                <li>
                    <a href="#about">About</a>
                </li>
            
                
                <li>
                    <a href="#project">Project</a>
                </li>
                

            
            
                <li>
                    <a href="#contact">Contact</a>
                </li>
            
                <li>
                <DarkToggleMenu />
                </li>
            </ul>
            </div>

            <div></div>
        </nav>

        <div className="menuIcon">
            <span  onClick={toggleMenu} className="icon icon-bars"></span>
            <span onClick={toggleMenu} className="icon icon-bars overlay"></span>
        </div>

        <div className="overlay-menu">
            {menuOpen ? (
            <ul id="menu">
        <DarkToggleMenu />

                <li>
                <a  href="#home">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/project">Project</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
                </li>
                {/* <DarkToggleMenu /> */}
            </ul>
            ) : null}
        </div>
        </div>
    );
    };

    export default Navbar;

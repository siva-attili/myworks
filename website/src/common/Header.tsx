import * as React from 'react';
import './Header.css';
import { NavLink} from 'react-router-dom';
export const Header:React.FC<{}> = () => {
    return (
        <div className="piheader">
            <div>&nbsp;</div>
            <div className="pilogo piMT10">
                <NavLink to="/">
                    <img src={require("../../public/images/pi-logo.svg")} alt="P! Logo" />
                </NavLink>
            </div>
            <div className="pilogo-text-tagline">
                <p className="pilogo-text">Print Ideas</p>
                <p className="pilogo-tagline">Presenting Imaginations</p>
            </div>
            <div className="pinav">
                <nav>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <NavLink to="/about" activeClassName="piselected"><li className="piPT20" >About</li></NavLink>
                            <NavLink to="/works" activeClassName="piselected"><li>Works</li></NavLink>
                            <NavLink to="/softideas" activeClassName="piselected"><li>Soft Ideas</li></NavLink>
                            <NavLink to="/contact" activeClassName="piselected"><li>Contact</li></NavLink>
                        </ul>
                    </div>
                    <ul className="hide">
                        <li ><NavLink to="/about" activeClassName="piselected"><span  >About</span></NavLink></li>
                        <li><NavLink to="/works" activeClassName="piselected"><span>Works</span></NavLink></li>
                        <li><NavLink to="/softideas" activeClassName="piselected"><span>Soft Ideas</span></NavLink></li>
                        <li><NavLink to="/contact" activeClassName="piselected"><span>Contact</span></NavLink></li>
                    </ul>
                </nav>
            </div>
            <div>&nbsp;</div>
        </div>
    );
}
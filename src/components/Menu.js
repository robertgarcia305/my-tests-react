import React from "react";

// icons
import hambMenu from "../img/hamb-menu.png";
import closeMenu from "../img/close-menu.png"

const Menu = () => {
    return (
        <div className="menu-wrap">
            <div className="top-menu">
                <div className="logo-wrap">
                    <img></img>
                </div>
                <div className="icons">
                    <img src={hambMenu}></img>
                    <img src={closeMenu}></img>
                </div>
            </div>
        </div>
    );
}

export default Menu;
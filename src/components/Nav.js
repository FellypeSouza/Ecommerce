import React from "react";
import '../styles/Nav.scss';
import open_menu from '../images/open-menu.png';
import close_menu from '../images/close-menu.jpg';

function Nav(){
    const width = 40;
    const menuApp = document.getElementById("menuMobile");
    
    function closeMenu(){
        menuApp.style.display = 'none';
    }
    function createMenu(){
        menuApp.style.display = 'block';
    }
    
    return(
        <section className="nav">
            <nav id="desktopNav">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Marcas</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Entre em contato</a></li>
                </ul>
            <img src={open_menu} width={width} className="open-menu" id="openMenu" onClick={createMenu}/>
            </nav>
            <section className="appMenu" id="menuMobile">
                <img src={close_menu} width={width} className="close-menu" id="close-menu" onClick={closeMenu}/>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Marcas</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Entre em contato</a></li>
                </ul>
            </section>
        </section>
    );
}
export default Nav;
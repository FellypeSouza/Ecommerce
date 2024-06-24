import React from "react";
import '../styles/Brands.scss';
import logo_nike from '../images/logo_nike.png';
import logo_mizuno from '../images/logo_mizuno.png';
import logo_oakley from '../images/logo_oakley.png';
import logo_adidas from '../images/logo_adidas.png';
import logo_puma from '../images/logo_puma.png';
import logo_vans from '../images/logo_vans.png';
import logo_fila from '../images/logo_fila.png';

function Brands(){
    return(
            <section className="brandsContainer">
                <section className="brands" id="marcas">
                    <img src={logo_nike} width={200} alt="nike"/>
                    <img src={logo_adidas} width={200} alt="adidas"/>
                    <img src={logo_oakley} width={200} alt="oakley"/>
                    <img src={logo_mizuno} width={200} alt="mizuno"/>
                    <img src={logo_puma} width={200} alt="puma"/>
                    <img src={logo_vans} width={200} alt="vans"/>
                    <img src={logo_fila} width={200} alt="fila"/>
                </section>
            </section>
    );
}
export default Brands;
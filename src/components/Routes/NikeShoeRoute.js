import React from "react";
import Nav from "../Nav";
import Offer from "../Offer";
import Nikeshoe from "../Nikeshoe";
import '../../styles/NikeShoeRoute.scss';
import ProductsStars from "../ProductsStars";
import Footer from "../Footer";

export default function NikeShoeRoute(){
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Obtém o destino da rolagem a partir do atributo href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            // Rola suavemente até o destino
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
    return(
        <section className="NikeShoeRouteContainer">
            <Offer/>
            <Nav/>
            <section className="NikeShoeRoute">
                <section className="NikeShoeImages">
                    <Nikeshoe/>
                </section>
                <section className="NikeShoeInfo">
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                    <button>Adicionar ao carrinho</button>
                    <button>Salvar aos favoritos</button>
                    <button>Comprar</button>
                    <a href="/inicio">Voltar</a>
                </section>
            </section>
            <Footer/>
        </section>

    );
}
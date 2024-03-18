import React from "react";
import Nav from "../Nav";
import Offer from "../Offer";
import Nikecloth from "../Nikecloth";
import Clothes from "../Clothes";
import '../../styles/NikeClothRoute.scss';
import ProductsStars from "../ProductsStars";
import Footer from "../Footer";

export default function NikeClothRoute(){
    return(
        <section className="NikeClothRouteContainer">
            <Offer/>
            <Nav/>
            <section className="NikeClothRoute">
                <section className="NikeClothRoute">
                    <section className="NikeClothImages">
                        <Nikecloth/>
                    </section>
                    <section className="NikeClothInfo">
                        <h1>Tênis Nike Dunk Low Retro Panda </h1>
                        <h2>Casual - Masculino</h2>
                        <h1>R$ 999,99</h1>
                        <ProductsStars></ProductsStars>
                        <button>Adicionar ao carrinho</button>
                        <button>Salvar aos favoritos</button>
                        <button>Comprar</button>
                        <a href="MainPage">Voltar</a>
                    </section>
                </section>
            </section>
            <Footer/>
        </section>
    );
}
import React from "react";
import Nav from "../Nav";
import Offer from "../Offer";
import Nikeshoe from "../Nikeshoe";
import '../../styles/NikeShoeRoute.scss';
import ProductsStars from "../ProductsStars";
import Footer from "../Footer";

export default function NikeShoeRoute(){
    return(
        <section className="NikeShoeRouteContainer">
            <Offer/>
            <Nav/>
            <a className="backMainPage" href="/Ecommerce">Voltar</a>
            <section className="NikeShoeRoute">
                <section className="NikeShoeImages">
                    <Nikeshoe/>
                </section>
                <section className="NikeShoeInfo">
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <ProductsStars></ProductsStars>
                    <h1>R$ 854,99</h1>
                    <h4>Baixe o Nike App e ganhe 05% de desconto com o cupom PRIMEIRACOMPRA, na primeira compra feita no app</h4>
                    <button>Adicionar ao carrinho</button>
                    <button>Salvar aos favoritos</button>
                    <button>Comprar</button>
                    <h4>Originalmente criado para as quadras, o Dunk mais tarde foi para as ruas - e como se costuma dizer, o resto é história. 
                        Mais de 35 anos após sua estreia, a silhueta ainda oferece um estilo ousado e desafiador Agora, o tênis OG do basquete universitário 
                        retorna com camadas sobrepostas em couro premium e color blocking tradicional. O conforto fica por conta da tecnologia mais atual em 
                        calçados, enquanto uma combinação clássica de preto e branco remete ao legado das quadras.
                    </h4>
                </section>
            </section>
            <Footer/>
        </section>

    );
}
import React from "react";
import Nav from "../Nav";
import Offer from "../Offer";
import Nikecloth from "../Nikecloth";
import '../../styles/NikeClothRoute.scss';
import ProductsStars from "../ProductsStars";
import Footer from "../Footer";

export default function NikeClothRoute(){
    return(
        <section className="NikeClothRouteContainer">
            <Offer/>
            <Nav/>
            <a className="backMainPage" href="/Ecommerce">Voltar</a>
            <section className="NikeClothRoute">
                <section className="NikeClothRoute">
                    <section className="NikeClothImages">
                        <Nikecloth/>
                    </section>
                    <section className="NikeClothInfo">
                        <h1>Blusão Nike Park Masculino Preto</h1>
                        <h2>Masculino</h2>
                        <ProductsStars></ProductsStars>
                        <h1>R$ 239,99</h1>
                        <h4>Baixe o Nike App e ganhe 05% de desconto com o cupom PRIMEIRACOMPRA, na primeira compra feita no app</h4>
                        <button>Adicionar ao carrinho</button>
                        <button>Salvar aos favoritos</button>
                        <button>Comprar</button>
                        <h4>O Blusão Nike Park Masculino CW6902-010 é essencial para treinos e competições, oferecendo conforto com seu tecido de fleece macio e aquecido. 
                            Os punhos e a bainha com nervuras mantêm o blusão no lugar durante os movimentos. Com caimento padrão para uma sensação de conforto e descontração, 
                            é composto por 82% algodão e 18% poliéster. Lavável à máquina e importado, este blusão é uma escolha prática e estilosa para qualquer atividade esportiva ou casual. 
                            Como usar: Experimente usá-lo com uma calça de moletom e tênis para um estilo descontraído e confortável. Para uma abordagem mais urbana, combine-o com jeans e sneakers 
                            para um look moderno e versátil. Independentemente da escolha, este blusão adiciona um toque de estilo e conforto ao seu visual. Sobre a Marca: A Nike é uma marca líder mundial 
                            em artigos esportivos, conhecida por sua inovação, qualidade e estilo. Com uma história que abraça décadas de excelência, a Nike continua a inspirar atletas e entusiastas do esporte 
                            em todo o mundo, oferecendo produtos que combinam desempenho de elite, design moderno e tecnologia de ponta.
                        </h4>
                    </section>
                </section>
            </section>
            <Footer/>
        </section>
    );
}
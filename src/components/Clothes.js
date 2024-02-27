import React from "react";
import '../styles/Clothes.scss';
import Nikecloth from "./Nikecloth";
import ProductsStars from "./ProductsStars";

function Clothes(){
    const width = 300;
    return(
        <section className="clothesContainer">
            <h1 className="cloth-title">Nossas Roupas mais acessadas:</h1>
            <section className="clothes">
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="cloth">
                    <Nikecloth></Nikecloth>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
            </section>
        </section>
    );
}
export default Clothes;
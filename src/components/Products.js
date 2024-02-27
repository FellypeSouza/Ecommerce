import React, { useState } from "react";
import ProductsStars from "./ProductsStars";
import Nikeshoe from "./Nikeshoe";
import '../styles/Products.scss';

function Products(){
    let width = 300;
    return(
        <section className="productsContainer">
            <section className="products">
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
                <section className="newProducts">
                    <Nikeshoe></Nikeshoe>
                    <h1>Tênis Nike Dunk Low Retro Panda </h1>
                    <h2>Casual - Masculino</h2>
                    <h1>R$ 999,99</h1>
                    <ProductsStars></ProductsStars>
                </section>
            </section>
        </section>
    );
}
export default Products;
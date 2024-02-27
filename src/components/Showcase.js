import React, { useState } from "react";
import '../styles/Showcase.scss';
import img_tenis1 from '../images/image_tenis1.jpg';
import img_tenis2 from '../images/image_tenis2.jpg';
import img_tenis3 from '../images/image_tenis3.jpg';
import arrow_button from '../images/next-button.png';
import prev_button from '../images/prev-button.png';

function Showcase(){
    const [imagemAtual, setImagemAtual] = useState(0);

    const imagens = [
        img_tenis1,
        img_tenis2,
        img_tenis3
    ]

    function nextImage(){
        setImagemAtual((imagemAtual + 1) % imagens.length);
    }
    function prevImage(){
        setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
    }

    let controlsUnit = 35;

    return(
        <section>
            <section className="showcase">
                        <img src={imagens[imagemAtual]} alt={`Imagem ${imagemAtual + 1}`} width={1000} id="showcase-image" />
            </section>
            <section className="carrouselControls">
                
                    <img src={prev_button} width={controlsUnit} height={controlsUnit} onClick={prevImage} alt="button"/>
                    <img src={arrow_button} width={controlsUnit} height={controlsUnit} onClick={nextImage} alt="button"/>
                

            </section>
        </section>
            
        
    )
}
export default Showcase;
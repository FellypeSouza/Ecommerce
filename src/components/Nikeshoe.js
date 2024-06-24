import React, { useState } from "react";
import nike_tenis1 from '../images/nike_tenis1.png';
import nike_tenis2 from '../images/nike_tenis2.avif';
import nike_tenis3 from '../images/nike_tenis3.avif';
import nike_tenis4 from '../images/nike_tenis4.avif';
import nike_tenis5 from '../images/nike_tenis5.avif';

export default function Nikeshoe(props){
    const width = 300;
    const [actualShoe, setActualShoe] = useState(0);
    const imageShoes = [
        
        nike_tenis1,
        nike_tenis2,
        nike_tenis3,
        nike_tenis4,
        nike_tenis5,
           
    ]

    function hoverShoe(){
        setActualShoe((actualShoe + 1) % imageShoes.length);
    }
    
    return(
        <img src={imageShoes[actualShoe]} alt={`Imagem ${actualShoe + 1}`} width={width} className="nikeShoe" onMouseOver={hoverShoe} onClick={hoverShoe} id="lancamentos"/>
    );
}
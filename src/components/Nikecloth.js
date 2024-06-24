import React, { useState } from "react";
import nikeCloth1 from "../images/cloth1.avif";
import nikeCloth2 from "../images/cloth2.avif";
import nikeCloth3 from "../images/cloth3.avif";

export default function Nikecloth(){
    const width = 300;
    const [actualCloth, setActualCloth] = useState(0);
    const imageCloths = [
        nikeCloth1,
        nikeCloth2,
        nikeCloth3,
    ]
    function hoverCloth(){
        setActualCloth((actualCloth + 1) % imageCloths.length);
    }
    return(
        <img src={imageCloths[actualCloth]} alt={`Imagem ${actualCloth + 1}`} width={width} className="nikeCloth" onMouseOver={hoverCloth} onClick={hoverCloth}/>
    );
}
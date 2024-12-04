import React, { useState } from "react";
import "./css/styleCard.css";

interface CardProps {
  bgColor: string;
  textoFrente: string;
  textoVerso: string;
  imagemFrente: string;
  legendaImagemFrente: string;
}

function Card({ bgColor, textoFrente, textoVerso, imagemFrente, legendaImagemFrente }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`card-container ${flipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
     
        <div
          className="card-front"
          style={{ backgroundColor: bgColor }}
        >
          <div className="text">{textoFrente}</div> {/* Texto da frente */}
          <img src={imagemFrente} alt={legendaImagemFrente} width={100} height={100} className="imageFront"/> {/* Imagem abaixo */}
        </div>
        <div className="card-back text"
         style={{ backgroundColor: bgColor }}>
          {textoVerso} {/* Texto do verso */}
        </div>
      </div>
    </div>
  );
}

export default Card;

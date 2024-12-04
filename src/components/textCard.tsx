import React from "react";
import "./css/styleTextCard.css";

function TextCard(props) {
  return (
    <div className="box-livros">
      <div className="card">
        <p className="textoDoCard">{props.textoCard}</p>
        <div className="livros"></div>
      </div>
    </div>
  );
}

export default TextCard;

import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="bgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="box-title">
          <h1 className="titulo">Documentos Necessários</h1>
            <img
              className="DocsImg"
              src="/Documentos.svg"
              alt="Descripción de la Imagen"
              
             />
          <h2 className="subtitulo">
            Organizar a documentação desde o início agiliza o processo de
            imigração e evita atrasos na adaptação ao novo país!
          </h2>
        </div>

        <div className="btnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;

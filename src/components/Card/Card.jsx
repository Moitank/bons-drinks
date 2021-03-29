import React from "react";
import "./Style.css";

export default function Card({ url, noClick, titulo }) {
  return (
    <div className="container">
      <div className="card">
        <img onClick={() => {
          return noClick
        }} className="imagem" src={url} />
        <h3>{titulo}</h3>
      </div>
    </div>
  );
}

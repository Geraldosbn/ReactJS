import React from "react";
import './estilo.css'

export default function ItemLista({signo, imagem, dataInicio, dataFim}) {
    return (
        <div className="boxSigno">
            <div className="nomeSigno">
                {signo}
            </div>

            <img className="imagemSigno" src={imagem} alt={signo} />

            <div className="periodoNascimento">
                {dataInicio} - {dataFim}
            </div>

        </div>
    )
}
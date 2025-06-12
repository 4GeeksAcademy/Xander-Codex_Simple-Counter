import React from "react";
import "../../styles/index.css";

const Contador = ({ segundos }) => {
    const PrimerNumero = segundos % 10; //Unidades
    const SegundoNumero = Math.floor(segundos / 10) % 10; //Decenas
    const TercerNumero = Math.floor(segundos / 100) % 10; //Centenas
    const CuartoNumero = Math.floor(segundos / 1000) % 10; //Unidad de millar UM
    const QuintoNumero = Math.floor(segundos / 10000) % 10; //Decena de millar DM
    const SextoNumero = Math.floor(segundos / 100000) % 10; //Centena de milar CM

    return (
        <div className="contador">
            <div className="reloj"><i className="fa-regular fa-clock"></i></div>
            <div className="numero">{SextoNumero}</div>
            <div className="numero">{QuintoNumero}</div>
            <div className="numero">{CuartoNumero}</div>
            <div className="numero">{TercerNumero}</div>
            <div className="numero">{SegundoNumero}</div>
            <div className="numero">{PrimerNumero}</div>
        </div>
    );
};

export default Contador;
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default function (props) {
  const min = props.menorNumero;
  const max = props.maiorNumero;

  const sorteio = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <h2>Desafio sorteio maior e menor</h2>

      <p>
        <strong>Menor numero = </strong> {min}
      </p>

      <p>
        <strong>Maior numero = </strong> {max}
      </p>
      <p>
        <strong>Sorteado entre eles = </strong> {sorteio}
      </p>
    </div>
  );
}

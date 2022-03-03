/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default (
  _ // arrow function
) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Aleatorio menorNumero={1} maiorNumero={100} />
    <Fragmento />
    <ComParametro titulo="Situação do aluno" aluno="Pedro Silva" nota={8.1} />

    <Primeiro></Primeiro>
  </div>
);

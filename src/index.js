import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

// const generalErrorString = <strong>Ocorreu um erro inesperado!</strong>
// const VALOR_PI = 3.14

ReactDom.render(
        
        <div id = "app">
                <Primeiro></Primeiro>
                <ComParametro 
                        titulo = "Situação do aluno" 
                        aluno = "Pedro Silva" 
                        nota = {8.3} />

                <ComParametro 
                        titulo = "Situação da aluna" 
                        aluno = "Maria Joaquina" 
                        nota = {9.9} />
                
        </div>,
        document.getElementById('root')
)
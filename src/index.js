import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro.js'

// const generalErrorString = <strong>Ocorreu um erro inesperado!</strong>
// const VALOR_PI = 3.14

ReactDom.render(
        
        <div>
                <Primeiro></Primeiro>
        </div>,
        document.getElementById('root')
)
import ReactDom from 'react-dom'
import React from 'react'

const general_error_string = <strong>Ocorreu um erro inesperado!</strong>
const VALOR_PI = 3.14

ReactDom.render(
        
        <div>
                {general_error_string}
                {VALOR_PI}
        </div>,
        document.getElementById('root')
)
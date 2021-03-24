import React from 'react'
import './../assets/css/Card.css';

//Exemplo de um componente utilizando props com children de conteúdo
export default props =>
    <div className="Card">
        <div className="Content">{props.children}</div>
        <div className="Footer">{props.title}</div>
    </div>
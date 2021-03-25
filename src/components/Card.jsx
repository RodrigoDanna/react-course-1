import React from 'react'
import './../assets/css/Card.css';

//Component using props with children as content
export default props =>
    <div className="Card">
        <div className="Content">{props.children}</div>
        <h2 className="Footer">{props.title}</h2>
    </div>
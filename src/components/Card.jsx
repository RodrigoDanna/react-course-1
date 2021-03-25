import React from 'react'
import './../assets/css/Card.css';

//Component using props with children as content
export default props =>
    <div className="Card" style={{ borderColor: props.color || '#000' }}>
        <div className="Content">{props.children}</div>
        <h2 className="Footer" style={{backgroundColor: props.color || '#000'}}>{props.title}</h2>
    </div>
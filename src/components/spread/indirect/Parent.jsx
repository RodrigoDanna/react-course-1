import React, {useState} from 'react'

import Children from './Children'

// ...props (get all props)
export default props => {
    const [num, setNum] = useState('');
    const [label, setLabel] = useState('Click below to generate a number');

    function buttonClick(label, number){
        setLabel(label);
        setNum(number);
    }

    return (
        <div>
            <h3>{label}{num}</h3>
            <Children parentFunction={buttonClick}></Children>
        </div>
    )
}
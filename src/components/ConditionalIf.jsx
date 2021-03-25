import React from 'react'

import If from './If'

//Component using other component as a test
export default props => {
    return (
        <div>
            <p>Number {props.number} is: </p>
            <If test={props.number%2 === 0}><span>Even</span></If>
            <If test={props.number % 2 === 1}><span>Odd</span></If>
        </div>
    )
}
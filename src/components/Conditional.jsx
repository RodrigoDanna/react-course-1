import React from 'react'

//Component with conditional to show specific content
export default props => {
    return (
        <div>
            <p>Number {props.number} is: </p>
            {
                props.number % 2 === 0
                ? <span>Even</span>
                : <span>Odd</span>
            }
        </div>
    )
}
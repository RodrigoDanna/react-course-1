import React from 'react'

export default props => {
    function action (){
        props.parentFunction('Generated: ', Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div>
            <button onClick={action}>Generate</button>
        </div>
    )
}
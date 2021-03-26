import React from 'react'

export default props => {
    return (
        <div>
            <label for="paceInput">Pace: </label>
            <input
                id="paceInput"
                type="number"
                style={{ fontSize: '1rem', width: '60px', padding: '5px 0 5px 10px' }}
                value={props.pace}
                onChange={e => props.function(+e.target.value)}
            />
        </div>
    )
}
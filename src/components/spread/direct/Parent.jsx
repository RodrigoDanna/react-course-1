import React from 'react'

import Children from './Children'

// ...props (get all props)
export default props =>
    <div>
        <Children {...props}>John</Children>
        <Children surname={props.surname}>Mary</Children>
        <Children surname="Doe">Peter</Children>
    </div>
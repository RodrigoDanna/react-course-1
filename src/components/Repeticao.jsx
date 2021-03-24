import React from 'react'

import products from '../data/products';

//Nome de parametro pode ser utilizado como quiser, utiliza-se props por semântica
export default props => {
    function getProducts(){
        return products.map(product => {
            return <li key={product.id}>{product.name}: R$ {product.price}</li>
        })
    }

    return (
        <ul>
            {getProducts()}
        </ul>
    )
}
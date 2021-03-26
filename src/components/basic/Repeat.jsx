import React from 'react'

import products from '../../data/products';

//Component with repeating item
export default props => {
    const getProducts = () => {
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
import React from 'react'
import { IProduct } from '../App'

const Products = ({ product, handleAddToCart }: { product: IProduct, handleAddToCart: (id: number) => void }) => {
    return (
        <div>
            <div>{product.title}</div>
            <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
        </div>
    )
}

export default Products
import React from 'react';
import './productsDisplay.css'

function ProductsDisplay(props) {
    const products = props.productosOServicios.map(item => {
        return (
            <div className="product-card center" key={item.nombreProducto}>
                <img className="responsive-img product-img" src={item.foto} alt={item.nombreProducto}></img>
                <p>{item.nombreProducto}</p>
                <p>${item.precio}</p>
            </div>
        )
    })

    return products
}

export default ProductsDisplay;
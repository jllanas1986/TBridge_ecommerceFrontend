import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

const Products = () => {
    const {getProducts,products} = useContext(ProductContext)

    useEffect(() => {
        getProducts();
    }, []);
  return (
    <div>
        {products.map((product) => {
            return (
                <div key={product.id}>
                    <p>{product.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Products
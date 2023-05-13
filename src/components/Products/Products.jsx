import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

const Products = () => {
    const {getProducts,products} = useContext(ProductContext)

    useEffect(() => {
        getProducts();
    }, []);

    const product = products.map((product) => {
        return (
          <div key={product._id}>
            <span>{product.name} </span>
            <span>{product.price.toFixed(2)}</span>
            <button onClick={() => addCart(product)}>Add Cart</button>
          </div>
        );
      });
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

      return <div>{product}</div>;
}

export default Products
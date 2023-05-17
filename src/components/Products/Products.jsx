import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import {ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card } from "antd";

const Products = () => {
  const { Meta } = Card;
  const { getProducts, products, addCart, cart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {
    console.log(product)
    return (
        <div className="product">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <img className="productImage"
                  alt="example"
                  src={product.image}/>
            }
          >
            <span><strong>{product.name}</strong></span>
            <br></br>
            <span>{product.price.toFixed(2) + " €"}</span><br></br>
            <Button type="primary" onClick={() => addCart(product)} ghost>Add <ShoppingCartOutlined  /></Button>
          </Card>
        </div>
    );
  });

  return <div className="productsContainer">{product}</div>;
};

export default Products;

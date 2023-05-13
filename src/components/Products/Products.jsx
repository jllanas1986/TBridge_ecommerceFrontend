import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import { Card } from "antd";

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
    return (
      <div className="productsContainer">
        <div className="product">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <span>{product.name} </span>
            <br></br>
            <span>{product.price.toFixed(2) + " €"}</span>
          </Card>
          </div>
      </div>
      // <div className="productsContainer" key={product._id}>
      //   <div>
      //     <img className="imgProducts" src="https://img.mrvcdn.com/g/fb/kf/E10891acaa024406ea820d33ad51de80fC.jpg_2200x2200q79.jpg_.webp?icc=1"></img>
      //     <span>{product.name} </span>
      //     <span>{product.price.toFixed(2) + ' €'}</span>

      //     <button onClick={() => addCart(product)}>Add Cart</button>
      //   </div>
      // </div>
    );
  });

  return <div>{product}</div>;
};

export default Products;

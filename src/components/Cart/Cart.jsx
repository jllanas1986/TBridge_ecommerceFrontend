import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { Button, Empty, notification } from 'antd'
import {ShoppingCartOutlined } from '@ant-design/icons'
import "./Cart.scss"

const Cart = () => {
    const {cart, clearCart} = useContext(ProductContext)
    const {createNewOrder} = useContext(OrdersContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    

    if (cart.length < 1) {
        return <div className='cart-container'>
          <Empty description = {
            <span>
              No products
            </span>
          }/>
        </div> 
      }
    
      const cartItem = cart.map((cartItem, i) => {
        return (
          <div className="cart" key={i}>
            <img className="imgCart" alt="example" src={cartItem.image}/><br></br>
            <span>{cartItem.name}</span><br></br>
            <span>{cartItem.price.toFixed(2) + "€"}</span>
          </div>
        );
      });
      return (
        <div className='cart-container'>
          {cartItem}
          <Button type="primary" onClick={() => clearCart()} ghost>Clear <ShoppingCartOutlined  /></Button>
          <Button type="primary" onClick={() => {
            createNewOrder(cart)
            setTimeout(() => {
                clearCart()
            }, 1000);
            notification.success({
                message: "Perdido creado con exito",
              });
          }} ghost>Create Order</Button>
        </div>
      );
    
}

export default Cart
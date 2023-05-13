import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { Empty, notification } from 'antd'

const Cart = () => {
    const {cart, clearCart} = useContext(ProductContext)
    const {createNewOrder} = useContext(OrdersContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    

    if (!cart) {
        return <Empty description = {
            <span>
              No products
            </span>
          }/>
      }
    
      const cartItem = cart.map((cartItem, i) => {
        return (
          <div className="cart" key={i}>
            <span>{cartItem.name}</span>
            <span>{cartItem.price.toFixed(2)}</span>
          </div>
        );
      });
      return (
        <div>
          {cartItem}
          <button onClick={() => clearCart()}>Clear cart</button>
          <button onClick={() => {
            createNewOrder(cart)
            setTimeout(() => {
                clearCart()
            }, 1000);
            notification.success({
                message: "Perdido creado con exito",
              });
          }}>Create Order</button>
        </div>
      );
    
}

export default Cart
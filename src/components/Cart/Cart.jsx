import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { Button, Empty, notification } from 'antd'
import {ShoppingCartOutlined } from '@ant-design/icons'
import "./Cart.scss"
import { Space, Table, Tag } from 'antd';

const Cart = () => {
    const {cart, clearCart} = useContext(ProductContext)
    const {createNewOrder} = useContext(OrdersContext)
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Price €',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Image',
        key: 'image',
        render: (_, record) => (
          <Space size="middle" className="imgCart">
  <img className="imgCart" alt="example" src={record.image}/>
          </Space>
        ),
      },
    ];
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    

    if (cart.length < 1) {
        return <div className='cart-container'>
          <Empty description = {
            <span>
              No hay productos
            </span>
          }/>
        </div> 
      }
    
      const cartItem = cart.map((cartItem, i) => {
        return (
          <div className="cart" key={i}>
            <img className="imgCart" alt="example" src={cartItem.image}/><br></br>
            <span><strong>{cartItem.name}</strong></span><br></br>
            <span>{cartItem.price.toFixed(2) + "€"}</span>
          </div>
        );
      });
      return (
        <div className='cart-container'>
           <Table columns={columns} dataSource={cart} />
       <br></br>
          <div>
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
        </div>
      );
    
}

export default Cart
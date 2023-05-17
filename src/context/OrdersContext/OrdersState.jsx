import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const createNewOrder = async (cart) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const productsIds= cart.map((product) => {
      return  product.id
    })
    try {
      await axios.post(
        API_URL + "/orders/create", { ProductId: productsIds },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        createNewOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
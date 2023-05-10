import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <Routes>
            <Route path="/users/createUser" element={<Register/>}/>
            <Route path="/products/showProducts" element={<Products/>}/>
          </Routes>
        </UserProvider>
      </ProductProvider>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;

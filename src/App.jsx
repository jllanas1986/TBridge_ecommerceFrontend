import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <UserProvider>
            <ProductProvider>
              <Header />
              <Routes>
                <Route path="/users/createUser" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/showProducts" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer />
            </ProductProvider>
          </UserProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

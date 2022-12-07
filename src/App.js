import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ItemProvider from "./assets/contexts/ItemProvider";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <ItemProvider>
      <Navbar onShow={showCartHandler} />
      <Container className="mb-4 mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
      {showCart && <Cart onHide={hideCartHandler} />}
    </ItemProvider>
  );
}

export default App;

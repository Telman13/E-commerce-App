import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Header/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useState } from "react";
import Favourite from "./pages/Favourite";
function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar setValue={setValue} />
          <Routes>
            <Route path="/" element={<Home value={value} />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;

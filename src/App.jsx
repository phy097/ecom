import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./pages/product/Products";
import {Cart} from "./pages/cart/Cart";
import {Favorite} from "./pages/favorite/Favorite";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return(
    <CartContextProvider>   
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </Router>
    </CartContextProvider>
  )
}

export default App;
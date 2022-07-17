import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart.jsx';
import Home from './pages/home/Home';
import Login from './pages/login/Login.jsx';
import ProductList from './pages/product-list/ProductList';
import Product from './pages/product/Product';
import Register from './pages/register/Register';
import Success from './pages/success/Success.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/products/:caategory" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

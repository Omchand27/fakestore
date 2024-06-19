import Home from './Pages/Home';
import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeApp from './components/HomeApp';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import TShirts from './components/Products/TShirts';
import Posters from './components/Products/Posters';
import Capuchas from './components/Products/Capuchas';
import Gorras from './components/Products/Gorras';
import Sweaters from './components/Products/Sweaters';
import Tazas from './components/Products/Tazas';
import Llaveros from './components/Products/Llaveros';
import Cartitas from './components/Products/Cartitas';
import Figuras from './components/Products/Figuras';
import Boletos from './components/Products/Boletos';
import Cart from './components/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeApp />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tshirts" element={<TShirts />} />
            <Route path="posters" element={<Posters />} />
            <Route path="llaveros" element={<Llaveros />} />
            <Route path="capuchas" element={<Capuchas />} />
            <Route path="sweaters" element={<Sweaters />} />
            <Route path="gorras" element={<Gorras />} />
            <Route path="figuras" element={<Figuras />} />
            <Route path="cartitas" element={<Cartitas />} />
            <Route path="tazas" element={<Tazas />} />
            <Route path="boletos" element={<Boletos />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

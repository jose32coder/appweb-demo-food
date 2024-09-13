import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal/LoginModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Añadir o quitar la clase no-scroll del body en función del estado del modal
    if (showLogin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showLogin]);

  return (
    <div id="">
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home id="inicio" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer setShowLogin={setShowLogin} />
    </div>
  );
}

export default App;

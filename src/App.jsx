import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal/LoginModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Preloader from './components/PreLoader/Preloader';
 // Importa tu componente Preloader

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simular tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simula una carga de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  // Manejo del scroll cuando se muestra el modal
  useEffect(() => {
    if (showLogin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Limpieza cuando se desmonta el componente
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showLogin]);

  return (
    <div>
      {isLoading ? (
        <Preloader /> // Muestra el preloader mientras está cargando
      ) : (
        <>
          {showLogin && <LoginModal setShowLogin={setShowLogin} />}
          <div className='app'>
            <Navbar setShowLogin={setShowLogin} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
            </Routes>
          </div>
          <Footer setShowLogin={setShowLogin} />
        </>
      )}
    </div>
  );
}

export default App;

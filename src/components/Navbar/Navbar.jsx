/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';
import useNavbarAnimation from '../../Hooks/useNavbarAnimation';

function Navbar({ setShowLogin }) {
  const [activeId, setActiveId] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolling = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { itemsCart } = useContext(StoreContext);
  const menuItemsRef = useRef([]);
  const menuItemsDesktopRef = useRef([]);
  const logoRef = useRef(null);
  const registerBtnRef = useRef(null);
  const iconoRef = useRef(null);

  const handleMenuClick = (id) => {
    setActiveId(id);
    isScrolling.current = true;
    navigate(`/#${id}`);
    setIsMenuOpen(false);
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      const sections = ['inicio', 'menu', 'appMovil', 'contacto'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
          if (sectionVisible) {
            currentSection = section;
          }
        }
      });
      if (currentSection && currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeId]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) setActiveId(hash);
  }, [location.hash]);

  useNavbarAnimation({ menuItemsRef, menuItemsDesktopRef, iconoRef, logoRef, registerBtnRef, isMenuOpen });

  const cartItemCount = Object.keys(itemsCart).length;

  return (
    <div className='fixed top-0 left-0 w-full z-40 h-auto'>
      <div className='flex px-[2.5%] justify-between items-center w-full relative bg-white py-2'>
        <div className='w-auto md:w-52 flex items-center'>
          <Link to='/'>
            <img
              src='/container_logo.png'
              alt=""
              className='h-12 md:h-16'
              ref={logoRef}
            />
          </Link>
        </div>
        <button
          ref={iconoRef}
          className='text-2xl -translate-x-4 md:hidden z-50'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className='hidden md:flex items-center gap-5 lg:gap-8 text-base list-none w-full justify-center pl-16'>
          <a href="#inicio">
            <li
              onClick={() => handleMenuClick('inicio')}
              ref={(el) => (menuItemsDesktopRef.current[0] = el)}
              className={activeId === 'inicio' ? 'active' : ''}
            >
              Inicio
            </li>
          </a>
          <a href="#menu">
            <li
              onClick={() => handleMenuClick('menu')}
              ref={(el) => (menuItemsDesktopRef.current[1] = el)}
              className={activeId === 'menu' ? 'active' : ''}
            >
              Menú
            </li>
          </a>
          <a href="#appMovil">
            <li
              onClick={() => handleMenuClick('appMovil')}
              ref={(el) => (menuItemsDesktopRef.current[2] = el)}
              className={activeId === 'appMovil' ? 'active' : ''}
            >
              App Móvil
            </li>
          </a>
          <a href="#contacto">
            <li
              onClick={() => handleMenuClick('contacto')}
              ref={(el) => (menuItemsDesktopRef.current[3] = el)}
              className={activeId === 'contacto' ? 'active' : ''}
            >
              Contacto
            </li>
          </a>
        </ul>
        <div className="flex gap-5 w-auto lg:gap-8 items-center md:ml-auto z-10 px-2 md:px-0" ref={registerBtnRef}>
          <div className='relative cursor-pointer'>
            <Link to='/cart'>
              <img
                src={assets.basket_icon}
                className='w-6 md:min-w-6'
                alt=""
              />
            </Link>
            {cartItemCount > 0 && (
              <div className="absolute min-w-2.5 min-h-2.5 bg-[tomato] rounded-md -right-2 -top-2"></div>
            )}
          </div>
          <button
            className='hidden md:flex bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-full shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300'
            onClick={() => setShowLogin(true)}
          >
            Registrate
          </button>
        </div>
      </div>
      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50 z-40' : 'opacity-0 z-0 hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full max-w-sm h-full max-h-96 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? '-translate-y-50 z-50' : 'translate-y-[100vh] z-0'}`}
      >
        <button
          className='absolute top-4 right-4 text-2xl'
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={`flex flex-col items-center justify-center gap-5 mt-16 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className='flex flex-col items-center gap-5'>
            <a href="#inicio">
              <li
                onClick={() => handleMenuClick('inicio')}
                ref={(el) => (menuItemsRef.current[0] = el)}
                className={activeId === 'inicio' ? 'active' : ''}
              >
                Inicio
              </li>
            </a>
            <a href="#menu">
              <li
                onClick={() => handleMenuClick('menu')}
                ref={(el) => (menuItemsRef.current[1] = el)}
                className={activeId === 'menu' ? 'active' : ''}
              >
                Menú
              </li>
            </a>
            <a href="#appMovil">
              <li
                onClick={() => handleMenuClick('appMovil')}
                ref={(el) => (menuItemsRef.current[2] = el)}
                className={activeId === 'appMovil' ? 'active' : ''}
              >
                App Móvil
              </li>
            </a>
            <a href="#contacto">
              <li
                onClick={() => handleMenuClick('contacto')}
                ref={(el) => (menuItemsRef.current[3] = el)}
                className={activeId === 'contacto' ? 'active' : ''}
              >
                Contacto
              </li>
            </a>
          </ul>
          <div
            ref={(el) => (menuItemsRef.current[4] = el)}
            className='flex flex-col space-y-2'>
            <p className='font-medium'>¿Aun no te registras?</p>
            <button
              className='bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-full shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300'
              onClick={() => setShowLogin(true)}
            >
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

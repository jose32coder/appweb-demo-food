import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useCartAnimation = () => {
  const cartContainerRef = useRef(null);
  const cartItemsRef = useRef([]);

  useEffect(() => {
    // Crear una línea de tiempo para manejar las animaciones secuenciales
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.5 } });

    // Animar el contenedor principal del carrito
    tl.fromTo(
      cartContainerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );

    // Animar los elementos del carrito después del contenedor
    cartItemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 * index },
        "<" // Iniciar esta animación en el punto actual de la línea de tiempo
      );
    });

    return () => {
      // Limpiar animaciones al desmontar el componente
      gsap.killTweensOf([cartContainerRef.current, ...cartItemsRef.current]);
    };
  }, []);

  return { cartContainerRef, cartItemsRef };
};

export default useCartAnimation;

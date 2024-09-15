import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const usePlaceOrderAnimation = () => {
  const containerRef = useRef(null);
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    // Crear una línea de tiempo para manejar las animaciones secuenciales
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.6 } });

    // Animar el contenedor principal
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    );

    // Animar OrderDetails después del contenedor principal
    tl.fromTo(
      detailsRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0 },
      "<0.2" // Iniciar esta animación justo después de la animación del contenedor principal
    );

    // Animar OrderSummary después de OrderDetails
    tl.fromTo(
      summaryRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0 },
      "<0.2" // Iniciar esta animación justo después de la animación de OrderDetails
    );

    return () => {
      // Limpiar animaciones al desmontar el componente
      gsap.killTweensOf([containerRef.current, detailsRef.current, summaryRef.current]);
    };
  }, []);

  return { containerRef, detailsRef, summaryRef };
};

export default usePlaceOrderAnimation;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function useHeaderAnimation() {
  const elementRefs = useRef([]);

  useEffect(() => {
    const elements = elementRefs.current;

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Crear una animación secuencial para todos los elementos
            const tl = gsap.timeline();

            elements.forEach((item, index) => {
              if (item) {
                tl.fromTo(
                  item,
                  { opacity: 0, y: -20 }, // Estado inicial
                  { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.3,  // Duración reducida
                    delay: 0.2 + index * -0.15, // Retraso secuencial reducido
                    ease: 'power3.out' // Suavidad de la animación
                  }
                );
              }
            });

            // Dejar de observar después de la animación
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Umbral del 10% visible
    );

    // Observar cada elemento
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // Limpiar el observer cuando el componente se desmonte
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Esta función se utiliza para asignar la referencia a cada div
  return (index) => (el) => {
    if (el) {
      elementRefs.current[index] = el;
    }
  };
}

export default useHeaderAnimation;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function useExploreMenuAnimation() {
  const elementRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const elements = elementRefs.current;

    if (elements.length === 0 || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Crear una línea de tiempo para animaciones secuenciales
            const tl = gsap.timeline();

            // Animar el primer elemento (h1) con un retraso
            tl.fromTo(
              elements[0],
              { opacity: 0, y: -20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => setHasAnimated(true), // Marca como animado
              },
              "+=0.5" // Retraso inicial solo para h1
            );

            // Animar el segundo elemento (p) inmediatamente después del h1
            tl.fromTo(
              elements[1],
              { opacity: 0, y: -20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.out",
              },
              "-=0.3" // Inicia inmediatamente después del h1
            );

            // Animar los elementos de la lista secuencialmente
            elements.slice(2).forEach((item, index) => {
              if (item) {
                tl.fromTo(
                  item,
                  { opacity: 0, y: 20 }, // Estado inicial
                  { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, // Reducir duración
                  `-=0.2` // Retraso para cada ítem de la lista
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
  }, [hasAnimated]);

  // Función para asignar la referencia a cada elemento
  return (index) => (el) => {
    if (el) {
      elementRefs.current[index] = el;
    }
  };
}

export default useExploreMenuAnimation;

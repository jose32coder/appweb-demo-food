import { useEffect, useRef } from "react";
import gsap from "gsap";

function useFoodListAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Configura el estado inicial de la animación (invisible y desplazado hacia abajo)
    gsap.set(container, { opacity: 0, y: -50 });

    // Ejecuta la animación inmediatamente al montar el componente
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  return containerRef;
}

export default useFoodListAnimation;

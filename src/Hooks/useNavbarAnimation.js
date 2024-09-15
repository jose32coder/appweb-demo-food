import { useEffect } from 'react';
import gsap from 'gsap';

const useNavbarAnimation = ({ menuItemsRef, menuItemsDesktopRef, iconoRef, logoRef, registerBtnRef, isMenuOpen }) => {
  useEffect(() => {
    // Animar el logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power3.out' }
      );
    }
    if (iconoRef.current) {
      gsap.fromTo(
        iconoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: 'power3.out' }
      );
    }

    // Animar los elementos de la lista (para escritorio)
    if (menuItemsDesktopRef.current) {
      menuItemsDesktopRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, delay: 0.4 + index * 0.1, ease: 'power3.out' }
          );
        }
      });
    }
   
    // Animar el botón de registro (para escritorio)
    if (registerBtnRef.current) {
      gsap.fromTo(
        registerBtnRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: 'power3.out' }
      );
    }
  }, [menuItemsRef, menuItemsDesktopRef, iconoRef, logoRef, registerBtnRef ]);

  useEffect(() => {
    if (isMenuOpen) {
      // Animar los elementos del menú móvil cuando se abre
      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, delay: 0.18 * index, ease: 'power3.out' }
          );
        }
      });
    } else {
      // Opcional: Puedes añadir animaciones para cerrar el menú aquí
      menuItemsRef.current.forEach((item) => {
        if (item) {
          gsap.to(item, { opacity: 0, y: -20, duration: 0.8, ease: 'power3.out' });
        }
      });
    }
  }, [isMenuOpen, menuItemsRef]);
};

export default useNavbarAnimation;

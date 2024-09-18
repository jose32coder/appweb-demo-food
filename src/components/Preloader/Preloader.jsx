import Lottie from 'lottie-react';
import Animation from '../../assets/Animation.json'; // Importa el archivo Lottie JSON

const Preloader = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-1000 z-50 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: 'none' }} // Evita la interacción durante el fade-out
    >
      <Lottie animationData={Animation} loop={true} />
    </div>
  );
};

export default Preloader;

import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirige a la ruta principal
  };

  return (
    <div className='w-auto bg-gray-100 p-10'>
      <div className="bg-white p-6 rounded-lg max-w-[46rem] shadow-lg">
        <h2 className="text-lg font-bold mb-4">Confirmación de Pedido</h2>
        <p>¡Gracias por tu compra! Tu pedido ha sido confirmado y está en proceso, estaremos en contacto contigo por tu número de teléfono.</p>
        <button
          onClick={handleGoHome}
          className="mt-6 md:flex bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-md shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Confirmation;

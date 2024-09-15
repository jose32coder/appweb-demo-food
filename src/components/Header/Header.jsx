
import useHeaderAnimation from '../../Hooks/useHeaderAnimation'; // Ajusta la ruta según tu estructura de carpetas

function Header() {
  const setRef = useHeaderAnimation();

  return (
    <div className="h-[40vw] mb-8 mx-auto bg-[url('/header_img.png')] bg-contain bg-no-repeat relative" id="inicio">
      <div className="absolute flex flex-col items-start gap-2 sm:gap-5 max-w-[50%] bottom-[10%] left-[6vw] text-white header-contents">
        <h2 ref={setRef(0)} style={{ fontSize: 'max(4.5vw, 24px)' }} className="font-medium">
          Ordena tu comida favorita aquí
        </h2>
        <p ref={setRef(1)} className="text-base">
          Convierte cada comida en una celebración con nuestras opciones culinarias exclusivas. Desde entrantes sabrosos hasta postres irresistibles, cada bocado es una experiencia de placer.
        </p>
        <a
          href='#menu'
          ref={setRef(2)}
          style={{ fontSize: 'max(1vw, 14px)' }}
          className="border-non text-md sm:text-lg text-[#747474] font-medium rounded-md bg-white py-1 px-5 sm:px-9 hover:bg-gray-300 duration-200"
        >
          Ver Menú
        </a>
      </div>
    </div>
  );
}

export default Header;

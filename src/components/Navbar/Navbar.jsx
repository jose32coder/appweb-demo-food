/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';

function Navbar({ setShowLogin }) {
	const [activeId, setActiveId] = useState('inicio');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolling = useRef(false); // Ref para controlar si está haciendo smooth scroll
	const navigate = useNavigate();
	const location = useLocation();
	const { itemsCart } = useContext(StoreContext);

	const handleMenuClick = (id) => {
		setActiveId(id);
		isScrolling.current = true; // Desactiva el evento de scroll temporalmente
		navigate(`/#${id}`);
		setIsMenuOpen(false);

		// Reactivar el evento de scroll después del smooth scroll
		setTimeout(() => {
			isScrolling.current = false;
		}, 1000); // Ajusta el tiempo según la duración del smooth scroll
	};

	// Manejar scroll y cambiar el activeId dinámicamente
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling.current) return; // Si está en smooth scroll, no ejecuta el scroll handler

			const sections = ['inicio', 'menu', 'appMovil', 'contacto'];
			let currentSection = '';

			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();

					// Detecta si la sección está al menos en un 50% visible
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

		// Agrega el event listener para detectar el scroll
		window.addEventListener('scroll', handleScroll);

		// Limpia el event listener cuando se desmonte el componente
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [activeId]);

	// Para asegurarte de que el hash en la URL también actualice el activeId
	useEffect(() => {
		const hash = location.hash.slice(1); // Elimina el '#' del hash
		if (hash) setActiveId(hash);
	}, [location.hash]);

	const cartItemCount = Object.keys(itemsCart).length;

	return (
		<div className='fixed top-0 left-0 w-full z-40 h-auto'>
			<div className='flex px-[2.5%] justify-between items-center w-full relative bg-white py-2'>
				<div className='w-auto md:w-52 flex items-center'>
					<Link to='/'>
						<img src='/container_logo.png' alt="" className='h-16' />
					</Link>
				</div>
				{/* Botón de menú para móviles */}
				<button
					className='text-2xl -translate-x-4 md:hidden z-50'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				{/* Menú para escritorio */}
				<ul className='hidden md:flex items-center gap-5 lg:gap-8 text-base list-none w-full justify-center pl-16'>
					<a href="#inicio">
						<li
							onClick={() => handleMenuClick('inicio')}
							className={activeId === 'inicio' ? 'active' : ''}>
							Inicio
						</li>
					</a>
					<a href="#menu">
						<li
							onClick={() => handleMenuClick('menu')}
							className={activeId === 'menu' ? 'active' : ''}>
							Menú
						</li>
					</a>
					<a href="#appMovil">
						<li
							onClick={() => handleMenuClick('appMovil')}
							className={activeId === 'appMovil' ? 'active' : ''}>
							App Móvil
						</li>
					</a>
					<a href="#contacto">
						<li
							onClick={() => handleMenuClick('contacto')}
							className={activeId === 'contacto' ? 'active' : ''}>
							Contacto
						</li>
					</a>
				</ul>
				{/* Íconos y botón de registro, visibles siempre */}
				<div className="flex gap-5 w-auto lg:gap-8 items-center md:ml-auto z-10 px-2 md:px-0">
					<div className='relative cursor-pointer'>
						<Link to='/cart'>
							<img src={assets.basket_icon} className='md:min-w-6' alt="" />
						</Link>
						{/* Solo muestra el círculo si hay elementos en el carrito */}
						{cartItemCount > 0 && (
							<div className="absolute min-w-2.5 min-h-2.5 bg-[tomato] rounded-md -right-2 -top-2"></div>
						)}
					</div>
					<button className='hidden md:flex bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-full shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300' onClick={() => setShowLogin(true)}>Registrate</button>
				</div>
			</div>
			{/* Menú para móviles */}
			{isMenuOpen && (
				<div className='fixed top-[50%] -translate-y-[70%] left-[50%] -translate-x-[50%] w-full max-w-sm h-full max-h-96 bg-white z-50 flex flex-col items-center justify-between py-14 rounded-lg'>
					{/* Botón de cerrar menú en móviles */}
					<button
						className='absolute top-4 right-4 text-2xl'
						onClick={() => setIsMenuOpen(false)}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<ul className='flex flex-col items-center gap-5 text-lg list-none'>
						<a href="#inicio">
							<li
								onClick={() => handleMenuClick('inicio')}
								className={activeId === 'inicio' ? 'active' : ''}>
								Inicio
							</li>
						</a>
						<a href="#menu">
							<li
								onClick={() => handleMenuClick('menu')}
								className={activeId === 'menu' ? 'active' : ''}>
								Menú
							</li>
						</a>
						<a href="#appMovil">
							<li
								onClick={() => handleMenuClick('appMovil')}
								className={activeId === 'appMovil' ? 'active' : ''}>
								App Móvil
							</li>
						</a>
						<a href="#contacto">
							<li
								onClick={() => handleMenuClick('contacto')}
								className={activeId === 'contacto' ? 'active' : ''}>
								Contacto
							</li>
						</a>
					</ul>
					<div className='flex flex-col items-center justify-center gap-2 bg-gray-100 w-full py-4 px-4 mt-7 rounded-lg '>
						<p className='text-lg font-semibold text-gray-800'>¿No tienes cuenta?</p>
						<button
							className='bg-gradient-to-r from-[#ff7f50] to-[#ff4500] text-white text-base font-medium py-2 px-6 rounded-full shadow-md hover:from-[#ff6347] hover:to-[#ff4500] transition-transform transform hover:scale-105 duration-300'
							onClick={() => {
								setIsMenuOpen(false);
								setShowLogin(true);
							}}
						>
							¡Regístrate aquí!
						</button>
					</div>

				</div>
			)}
			{/* Fondo opaco para el menú en móviles */}
			{isMenuOpen && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40'
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
		</div>
	);
}

export default Navbar;

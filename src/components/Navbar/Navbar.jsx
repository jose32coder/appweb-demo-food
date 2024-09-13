/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importa íconos de FontAwesome
import { StoreContext } from '../../context/StoreContext'; // Asegúrate de ajustar la ruta a tu archivo

function Navbar({ setShowLogin }) {
	const [activeId, setActiveId] = useState('inicio');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { itemsCart } = useContext(StoreContext); // Accede al contexto

	const handleMenuClick = (id) => {
		setActiveId(id);
		navigate(`/#${id}`);
		setIsMenuOpen(false); // Cierra el menú después de hacer clic
	};

	useEffect(() => {
		const hash = location.hash.slice(1); // Elimina el '#' del hash
		setActiveId(hash);
	}, [location.hash]);

	const cartItemCount = Object.keys(itemsCart).length; // Cuenta los elementos en el carrito

	return (
		<div className='fixed top-0 left-0 w-full z-40 h-auto'>
			<div className='flex px-[2.5%] justify-between items-center w-full relative bg-white'>
				<div className='w-auto md:w-52 flex items-center'>
					<Link to='/'>
						<img src='/container_logo.png' alt="" className='h-20 md:h-36' />
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
					<button className='hidden md:block bg-transparent text-sm mdCustom:text-base text-[#49557e] border-2 border-tomato py-[5px] px-2 sm:py-[7px] sm:px-5 mdCustom:py-2 mdCustom:px-6 cursor-pointer rounded-md hover:bg-[#fff4f2] duration-300' onClick={() => setShowLogin(true)}>Registrate</button>
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
					<div className=''>
						<p>¿No tienes usuario?</p>
						<button className='bg-transparent text-sm mdCustom:text-base text-[#49557e] border-2 border-tomato py-[5px] px-2 sm:py-[7px] sm:px-5 mdCustom:py-2 mdCustom:px-6 cursor-pointer rounded-md hover:bg-[#fff4f2] duration-300' onClick={() => {setIsMenuOpen(false); setShowLogin(true)}}>Registrate aquí</button>
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

/* eslint-disable react/prop-types */
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

function Navbar({ setShowLogin }) {

	const [menu, setMenu] = useState('menu');

	return (
		<div className='flex justify-between w-full pt-5'>
			<div className='w-36 flex items-center'>
				<Link to='/#inicio'><img src='/container_logo.svg' alt="" className='w-36 lg:w-full' /></Link>
			</div>
			<ul className='hidden md:flex items-center gap-3.5 mdCustom:gap-5 lg:gap-8 text-sm mdCustom:text-base list-none'>
				<Link to='/#inicio'><li
					onClick={() => setMenu('inicio')}
					className={menu === 'inicio' ? 'active' : ''}>Inicio</li>
				</Link>
				<Link to='/#menu'><li
					onClick={() => setMenu('menu')}
					className={menu === 'menu' ? 'active' : ''}>Menú</li>
				</Link>
				<li
					onClick={() => setMenu('app-movil')}
					className={menu === 'app-movil' ? 'active' : ''}>App Movil</li>
				<li
					onClick={() => setMenu('contacto')}
					className={menu === 'contacto' ? 'active' : ''}>Contacto</li>
			</ul>
			<div className="flex gap-5 lg:gap-8 items-center">
				<img src={assets.search_icon} className='cursor-pointer w-5 mdCustom:w-5 lg:w-auto' alt="" />
				<div className='relative cursor-pointer'>
					<Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
					<div className=" absolute min-w-2.5 min-h-2.5 bg-[tomato] rounded-md -right-2 -top-2"></div>
				</div>
				<button className='bg-transparent text-sm mdCustom:text-base text-[#49557e] border-2 border-tomato py-[5px] px-2  sm:py-[7px] sm:px-5 mdCustom:py-2 mdCustom:px-6 cursor-pointer rounded-md hover:bg-[#fff4f2] duration-300' onClick={() => setShowLogin(true)}>Registrate</button>
			</div>
		</div>
	)
}

export default Navbar
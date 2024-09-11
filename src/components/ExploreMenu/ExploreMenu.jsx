/* eslint-disable react/prop-types */
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

    
    return (
        <div className="flex flex-col gap-5">
            <h1 className='text-[#262626] font-medium text-2xl'>Explora nuestro menú</h1>
            <p style={{columns: '#808080'}} className='max-w-full text-sm lg:max-w-[60%]'>Escoge un menú de la lista que te aparece acá abajo, allí verás la variedad de platillos disponibles.</p>
            <div className="flex justify-between items-center gap-10 my-5 overflow-x-auto scroll-menu-list">
                {menu_list.map((platillo, index) => {
                    return (
                <div onClick={() => setCategory(prev => prev === platillo.menu_name ? 'All': platillo.menu_name)} className="" key={index}>
                    <img src={platillo.menu_image} alt="" className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full duration-300 ${category === platillo.menu_name ? 'activePlatillo' : '' }`} />
                    <h3 style={{fontSize: 'max(1.4vw, 16px)'}} className='mt-2.5 text-[#747474] text-center'>{platillo.menu_name}</h3>
                </div>
                )
                })}
            </div>
            <hr className='m-5 h-0.5 bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
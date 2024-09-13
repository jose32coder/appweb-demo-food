import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div style={{fontSize: 'max(3vw, 20px'}} className='m-auto flex flex-col text-center justify-center items-center font-medium min-h-[40rem]' id='appMovil'>
        <p>Para mayor experiencia, descarga <br /> Tomato App </p>
        <div style={{gap: 'max(2vw, 10px'}} className="flex justify-center mt-10">
            <img src={assets.play_store} alt="" style={{width: 'max(30vw, 120px'}} className='max-w-44 duration-500 cursor-pointer hover:scale-105'/>
            <img src={assets.app_store} alt="" style={{width: 'max(30vw, 120px'}} className='max-w-44 duration-500 cursor-pointer hover:scale-105'/>
        </div>
    </div>
  )
}

export default AppDownload
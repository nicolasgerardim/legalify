import Image from 'next/image'

const Navbar = () => {
  return (
    <div className = "fixed z-10 bg-white py-4 top-0 w-5/6  text-lg flex items-center justify-between">
        <div>
            <Image src="/../public/logo_legalify.png" alt="logo legalify" width={139} height={49}/>
        </div>
        <div>
            <a className='px-3 text-primary-color font-medium' href='#service'>Servicio</a>
            <a className='px-3 text-primary-color font-medium' href='#prices'>Precios</a>
            <button className='px-6 ml-2 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color' >Registrarse</button>
        </div>
    </div>

  )
}

export default Navbar
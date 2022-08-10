import Image from "next/image"
const MainSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly w-4/5 my-[120px]">
        <div className="flex flex-col justify-center align-center w-1/2">
        <h1 className="font-semibold text-[70px] text-primary-color text-left">¿Necesitas un abogado?</h1>
        <p className="my-5 text-left text-[22px] font-light ">En legalify te ayudamos a encontrarlo</p>
        <button className="px-6 py-2.5 my-5 bg-primary-color rounded-xl w-1/3 text-white hover:bg-secondary-color hover:text-primary-color">¿Sos abogado?</button>
        
        </div>
        <div className="w-1/2">
        <Image src="/Scenes01.svg" height={1000} width={1000} />
        </div>
        
    </section>
  )
}

export default MainSection
import Image
 from "next/image"
const Service = () => {
  return (
    <section id="service" className="w-4/5 py-[120px] flex align-center">
    <div>
    <h2 className="absolute font-semibold left-20 px-6 ml-6 mb-11 text-primary-color text-[40px]">Servicio</h2>
    </div>
    <div className="flex justify-evenly py-11 my-11">
        <div className="flex flex-col mx-6 w-1/6">
            <Image src="/service01.svg" height={200} width={200}/>
            <p className="my-6 rounded-full h-6 w-6 height bg-primary-color text-white">1</p>
            <p className="font-medium text-start">Resgistrate</p>

        </div>
        <div  className="flex flex-col mx-6 w-1/6 ">
            <Image src="/service02.svg" height={200} width={200}/>
            <p className="my-6 rounded-full h-6 w-6 height bg-primary-color text-white">2</p>
            <p className="font-medium text-start">Contanos tu problema completando el formulario</p>


        </div>
        <div  className="flex flex-col mx-6 w-1/6 ">
            <Image src="/service03.svg" height={200} width={200}/>
            <p className="my-6 rounded-full h-6 w-6 height bg-primary-color text-white">3</p>
            <p className="font-medium text-start">Elegí el modo de contactar a tu profesional</p>

        </div>
        <div  className="flex flex-col mx-6 w-1/6 ">
            <Image src="/service04.svg" height={200} width={200}/>
            <p className="my-6 rounded-full h-6 w-6 height bg-primary-color text-white">4</p>
            <p className="font-medium text-start">Comunicate con tu abogado y contale más detalles para que te asesore</p>

        </div>
        <div  className="flex flex-col mx-6 w-1/6 ">
            <Image src="/service05.svg" height={200} width={200}/>
            <p className="my-6 rounded-full h-6 w-6 height bg-primary-color text-white">5</p>
            <p className="font-medium text-start">Calificá a tu abogado. Tu opinión es muy valiosa!</p>

        </div>

    </div>
    </section>
  )
}

export default Service
import Image from "next/image"
const About = () => {
  return (
    <section className="flex w-4/5 py-[120px]">
        <div className="flex items-end w-2/5">
            <Image  src="/about01.svg" height={315} width={424.4} />
        </div>
        <div className="flex pl-5 flex-col w-3/5">
            <h2 className="  text-primary-color pb-6 text-left text-[40px] font-semibold">¿Qué es Legalify?</h2>
            <p className=" text-primary-color text-left pb-4 text-base">Es la única plataforma global de servicios profesionales especializados y calificados por los usuarios que vincula de manera transparente al profesional con su cliente.</p>
            <p className=" text-primary-color text-left w-3/5 pb-6 text-base font-semibold">Legalify está al alcance de todos, sin barreras econócas, geográficas y sociales.</p>

        <div className="flex justify-start">
            <div className="flex flex-col items-start mr-11">
                <Image src="/simple.svg" height={48} width={48} />
                <p className="text-base">Simple</p>
                <p className="text-start text-xs text-third-color">Entorno amigable</p>
            </div>
            <div className="flex flex-col items-start mr-11">
                <Image src="/economic.svg" height={48} width={48} />
                <p className="text-base">Económico</p>
                <p className="text-start text-xs text-third-color">Costo accesible</p>
            </div>
            <div className="flex flex-col items-start mr-11">
                <Image src="/safe.svg" height={48} width={48} />
                <p className="text-base">Segura</p>
                <p className="text-start text-xs text-third-color">Protección de tus datos</p>
            </div>
            <div className="flex flex-col items-start mr-11">
                <Image src="/reliable.svg" height={48} width={48} />
                <p className="text-base">Confiable</p>
                <p className="text-start text-xs text-third-color">Tecnología de punta</p>
            </div>
            <div className="flex flex-col items-start mr-11">
                <Image src="/profitable.svg" height={48} width={48} />
                <p className="text-base">Rentable</p>
                <p className="text-start text-xs text-third-color">Alto % de ganancias</p>
            </div>
        </div>
        </div>

    
    </section>
  )
}

export default About
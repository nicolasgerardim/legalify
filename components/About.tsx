import Image from "next/image";
import LogoItems from "./LogoItems";

const About = () => {
  return (
    <section className="flex w-4/5 py-[120px]">
      <div className="flex items-end w-2/5">
        <Image src="/about01.svg" height={315} width={424.4} />
      </div>
      <div className="flex pl-5 flex-col w-3/5">
        <h2 className="  text-primary-color pb-6 text-left text-[40px] font-semibold">
          ¿Qué es Legalify?
        </h2>
        <p className=" text-primary-color text-left pb-4 text-base">
          Es la única plataforma global de servicios profesionales
          especializados y calificados por los usuarios que vincula de manera
          transparente al profesional con su cliente.
        </p>
        <p className=" text-primary-color text-left w-3/5 pb-6 text-base font-semibold">
          Legalify está al alcance de todos, sin barreras econócas, geográficas
          y sociales.
        </p>

        <div className="flex justify-start">
          <LogoItems image={"/simple.svg"} title={"Simple"} content={"Entorno amigable"}/>
          <LogoItems image={"/economic.svg"} title={"Económico"} content={"Costo accesible"}/>
          <LogoItems image={"/safe.svg"} title={"Segura"} content={"Protección de tus datos"}/>
          <LogoItems image={"/reliable.svg"} title={"Confiable"} content={"Tecnología de punta"}/>
          <LogoItems image={"/profitable.svg"} title={"Rentable"} content={"Alto % de ganancias"}/>
        </div>
      </div>
    </section>
  );
};

export default About;

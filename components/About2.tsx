import Image from "next/image";

const About2 = () => {
  return (
    <section className="flex w-4/5 py-[120px]">
      <div className="flex mb-[40px] flex-col justify-center text-primary-color w-3/5 items-start">
        <h2 className="pb-7 text-left text-[40px] font-semibold">
          ¿Estás listo para evolucionar?
        </h2>
        <p className="pb-7 text-base text-start">
          Pertenecer a Legalify te permitirá visibilizar tus aptitudes
          profesionales sin límites ni fronteras, cobrar consultas online y
          llamadas de emergencia.
        </p>
        <p className="pb-7 text-base text-start">
          Ingresá a la plataforma, registrate y comenzá a ofrecer tus servicios
          en Legalify
        </p>
        <div className="flex">
          <a
            href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
            target="blank"
          >
            <Image src="/youtube.svg" height={22.55} width={32} />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
            target="blank"
          >
            <p>Mirá los tutoriales para comenzar a usar Legalify</p>
          </a>
        </div>
      </div>
      <div className="w-2/5">
        <Image src="/Scenes02.svg" height={468} width={360.59} />
      </div>
    </section>
  );
};

export default About2;

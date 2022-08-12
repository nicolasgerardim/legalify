import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex h-[280px] w-11/12 mt-[300px] items-center justify-evenly ">
      <div className="flex flex-col w-1/3  align-middle">
        <div>
          <Image
            src="/logo_legalify.png"
            alt="logo legalify"
            width={139}
            height={49}
          />
          <p className="text-primary-color">LEGALIFY ES UNA MARCA REGISTRADA</p>
          <p className="text-primary-color">DE LEGALIFY SAS 2020</p>
        </div>
      </div>
      <div className="flex flex-col w-1/3 items-start">
        <div className="flex w-full justify-start">
          <div>
            <Image
              src="/INSTAGRAM.svg"
              alt="logo instagram"
              width={40}
              height={40}
            />
          </div>
          <div className="mx-6">
            <Image
              src="/FACEBOOK.svg"
              alt="logo facebook"
              width={40}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/LINKEDIN.svg"
              alt="logo linkedin"
              width={40}
              height={40}
            />
          </div>
        </div>
        <p>Seguinos en nuestras redes sociales</p>
      </div>
      <div className="flex justify-evenly w-1/3">
        <div className="flex flex-col">
          <p>Instagram</p>
          <Image src="/instagramQR.png" height={85} width={85} />
        </div>
        <div>
          <div className="flex flex-col">
            <p>Facebook</p>
            <Image src="/facebookQR.png" height={85} width={85} />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <p>Linkedin</p>
            <Image src="/linkedinQR.png" height={85} width={85} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

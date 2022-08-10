const CustomerDetails = () => {
  return (
    <div className="flex w-4/5 justify-evenly">
      <div className="flex flex-col items-center w-1/3 border rounded-[10px] border-gray-200">
        <p className="pt-7 text-[22px] font-bold">Free</p>
        <div className="py-9 flex ">
          <div>
            <p className="text-[55px] font-black">0</p>
          </div>
          <div className="flex flex-col pl-5 pb-[5px] justify-center">
            <p className="font-bold text-left text-[22px]">$</p>
            <p className="text-left">Mensual</p>
          </div>
        </div>
        <p className="pb-5 px-6">
          El servicio de búsqueda del profesional es sin costo. Los honorarios
          serán acordados entre las partes. Deberás completar un formulario con
          tu consulta. Se te notificará por mail cuando un abogado se interese
          en tu caso. De las propuestas de abogados (distintos perfiles) que
          recibiras, deberás elegir UNO para contactarte. Luego que el
          profesional te atienda, deberás clasificarlo.
        </p>
      </div>

      <div className="flex flex-col items-center mx-6 w-1/3 border rounded-[10px] border-gray-200">
        <p className="pt-7 text-[22px] font-bold">Premium</p>
        <div className="py-9 flex ">
          <div>
            <p className="text-[55px] font-black">7000</p>
          </div>
          <div className="flex flex-col pl-5 pb-[5px] justify-center">
            <p className="font-bold text-left text-[22px]">$</p>
            <p className="text-left">Mensual</p>
          </div>
        </div>
        <p className="pb-5 px-6">
          Al ingresar el caso tenes la opción de elegir reunirte con un
          profesional de manera virtual. Esta opción es más rapida y
          personalizada. Luego de elegir entre los profesionales disponibles en
          el horario que elijas, deberás pagar la consulta.
        </p>
      </div>
      <div className="flex flex-col items-center w-1/3 border rounded-[10px] border-gray-200">
        <p className="pt-7 text-[22px] font-bold">Llamada de emergencia</p>
        <div className="py-9 flex ">
          <div>
            <p className="text-[55px] font-black">9000</p>
          </div>
          <div className="flex flex-col pl-5 pb-[5px] justify-center">
            <p className="font-bold text-left text-[22px]">$</p>
            <p className="text-left">Mensual</p>
          </div>
        </div>
        <p className="pb-5 px-6">
          En caso de emergencia, puede elegir esta opción para hablar con un
          profesional de manera inmediata para que te asista las 24hs.
        </p>
      </div>
    </div>
  );
};

export default CustomerDetails;

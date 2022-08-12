import CustomerCard from "./CustomerCard";

const CustomerDetails = () => {
  const contentFree =
    "El servicio de búsqueda del profesional es sin costo. Los honorarios serán acordados entre las partes. Deberás completar un formulario con tu consulta. Se te notificará por mail cuando un abogado se interese en tu caso. De las propuestas de abogados (distintos perfiles) que recibiras, deberás elegir UNO para contactarte. Luego que el profesional te atienda, deberás clasificarlo.";
  const contentPremium =
    "Al ingresar el caso tenes la opción de elegir reunirte con un profesional de manera virtual. Esta opción es más rapida y personalizada. Luego de elegir entre los profesionales disponibles en el horario que elijas, deberás pagar la consulta.";
  const contentEmergency =
    "En caso de emergencia, puede elegir esta opción para hablar con un profesional de manera inmediata para que te asista las 24hs.";

  return (
    <div className="flex w-4/5 justify-evenly">
      <CustomerCard title={"Free"} price={"0"} content={contentFree} />
      <CustomerCard title={"Premium"} price={"7000"} content={contentPremium} />
      <CustomerCard title={"Llamada de emergencia"} price={"9000"} content={contentEmergency}/>
    </div>
  );
};

export default CustomerDetails;

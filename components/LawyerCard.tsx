const LawyerCard = ({
  title,
  price,
  monthly,
  quarterly,
  annual,
}: {
  title: string;
  price: string;
  monthly: string;
  quarterly: string;
  annual: string;
}) => {
  return (
    <>
      <p className="pt-7 text-[22px] font-bold">{title}</p>
      <div className="py-9 flex ">
        <div>
          <p className="text-[55px] font-black">{price}</p>
        </div>
        <div className="flex flex-col pl-5 pb-[5px] justify-center">
          <p className="font-bold text-left text-[22px]">$</p>
          <p className="text-left">Mensual</p>
        </div>
      </div>
      <p className="pb-5">1 mes sin cargo</p>
      <p className="pb-5 font-medium">{`Mensual $${monthly}`}</p>
      <p className="pb-5 font-medium">{`Trimestral $${quarterly}`}</p>
      <p className="pb-5 font-medium">{`Anual $${annual}`}</p>
    </>
  );
};

export default LawyerCard;

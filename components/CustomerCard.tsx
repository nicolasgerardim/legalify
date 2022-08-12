const CustomerCard = ({title,price,content,}:{title: string;price: string;content: string;}) => {
  return (
    <div className="flex flex-col items-center w-1/3 border mx-3 rounded-[10px] border-gray-200">
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
      <p className="pb-5 px-6">{content}</p>
    </div>
  );
};

export default CustomerCard;

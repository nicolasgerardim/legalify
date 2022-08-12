const ActiveButton = () => {
  return (
    <div className="cursor-pointer relative w-[64px] h-[32px] rounded-full border-2 border-primary-color bg-primary-color">
      <span className="w-[24px] h-[24px] bg-white absolute top-0.5 rounded-full right-0.5"></span>
    </div>
  );
};

export default ActiveButton;

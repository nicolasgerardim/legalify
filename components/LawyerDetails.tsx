import { useState } from "react";
import ModalDetails from "./ModalDetails";

const LawyerDetails = () => {

  const [modalVisible,setModalVisible]= useState <boolean>(false)

  return (
    <>
      <div className="flex w-4/5 justify-evenly ">
        <div className="flex flex-col items-center  w-1/3 border rounded-[10px] border-gray-200">
          <p className="pt-7 text-[22px] font-bold">Standar</p>
          <div className="py-9 flex ">
            <div>
              <p className="text-[55px] font-black">520</p>
            </div>
            <div className="flex flex-col pl-5 pb-[5px] justify-center">
              <p className="font-bold text-left text-[22px]">$</p>
              <p className="text-left">Mensual</p>
            </div>
          </div>
          <p className="pb-5">1 mes sin cargo</p>
          <p className="pb-5 font-medium">Mensual $520</p>
          <p className="pb-5 font-medium">Trimestral $1.400</p>
          <p className="pb-5 font-medium">Anual $5.200</p>
          <p className="pb-5">1 especialidad</p>
          <p className="pb-5">1 jurisdicción</p>
          <button onClick={()=>{setModalVisible(!modalVisible)}} className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color">
            Detalle
          </button>
        </div>
        <div className="flex flex-col items-center mx-6  w-1/3 border rounded-[10px] border-gray-200">
          <p className="pt-7 text-[22px] font-bold">Premium</p>
          <div className="py-9 flex ">
            <div>
              <p className="text-[55px] font-black">1250</p>
            </div>
            <div className="flex flex-col pl-5 pb-[5px] justify-center">
              <p className="font-bold text-left text-[22px]">$</p>
              <p className="text-left">Mensual</p>
            </div>
          </div>
          <p className="pb-5">1 mes sin cargo</p>
          <p className="pb-5 font-medium">Mensual $1.250</p>
          <p className="pb-5 font-medium">Trimestral $3.400</p>
          <p className="pb-5 font-medium">Anual $12.500</p>
          <p className="pb-5">3 especialidades</p>
          <p className="pb-5">2 jurisdicciones</p>
          <p className="pb-5">Agenda de reuniones prepagas</p>
          <p className="pb-5">Llamadas de emergencia</p>
          <div className="mb-7 w-full">
            <button onClick={()=>{setModalVisible(!modalVisible)}} className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color">
              Detalle
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3 border rounded-[10px] border-gray-200">
          <p className="pt-7 text-[22px] font-bold">Corporativo</p>
          <div className="py-9 flex ">
            <div>
              <p className="text-[55px] font-black">4000</p>
            </div>
            <div className="flex flex-col pl-5 pb-[5px] justify-center">
              <p className="font-bold text-left text-[22px]">$</p>
              <p className="text-left">Mensual</p>
            </div>
          </div>
          <p className="pb-5">1 mes sin cargo</p>
          <p className="pb-5 font-medium">Mensual $4.000</p>
          <p className="pb-5 font-medium">Trimestral $10.000</p>
          <p className="pb-5 font-medium">Anual $40.000</p>
          <p className="pb-5">Sin limite de especialidades</p>
          <p className="pb-5">Sin limite de jurisdicciones</p>
          <p className="pb-5">Agenda de reuniones prepagas</p>
          <p className="pb-5">Llamadas de emergencia</p>
          <div className="mb-7 w-full">
            <button onClick={()=>{setModalVisible(!modalVisible)}} className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color">
              Detalle
            </button>
          </div>
        </div>
      </div>
      {
        modalVisible ? <ModalDetails setModalVisible={setModalVisible} modalVisible={modalVisible}/> : null
      }

      
    </>
  );
};

export default LawyerDetails;

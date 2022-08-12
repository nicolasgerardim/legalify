import { useState } from "react";
import ModalDetails from "./ModalDetails";
import LawyerCard from "./LawyerCard";

const LawyerDetails = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-4/5 justify-evenly ">
        <div className="flex flex-col items-center  w-1/3 border rounded-[10px] border-gray-200">
          <LawyerCard
            title={"Standar"}
            price={"520"}
            monthly={"520"}
            quarterly={"1.400"}
            annual={"5.200"}
          />
          <p className="pb-5">1 especialidad</p>
          <p className="pb-5">1 jurisdicción</p>
          <button
            onClick={() => {
              setModalVisible(!modalVisible);
            }}
            className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color"
          >
            Detalle
          </button>
        </div>
        <div className="flex flex-col items-center mx-6  w-1/3 border rounded-[10px] border-gray-200">
          <LawyerCard
            title={"Premium"}
            price={"1250"}
            monthly={"1.250"}
            quarterly={"3.400"}
            annual={"12.500"}
          />
          <p className="pb-5">3 especialidades</p>
          <p className="pb-5">2 jurisdicciones</p>
          <p className="pb-5">Agenda de reuniones prepagas</p>
          <p className="pb-5">Llamadas de emergencia</p>
          <div className="mb-7 w-full">
            <button
              onClick={() => {
                setModalVisible(!modalVisible);
              }}
              className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color"
            >
              Detalle
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3 border rounded-[10px] border-gray-200">
          <LawyerCard
            title={"Corporativo"}
            price={"4000"}
            monthly={"4.000"}
            quarterly={"10.000"}
            annual={"40.000"}
          />
          <p className="pb-5">Sin limite de especialidades</p>
          <p className="pb-5">Sin limite de jurisdicciones</p>
          <p className="pb-5">Agenda de reuniones prepagas</p>
          <p className="pb-5">Llamadas de emergencia</p>
          <div className="mb-7 w-full">
            <button
              onClick={() => {
                setModalVisible(!modalVisible);
              }}
              className=" w-1/2 px-6 py-2.5 bg-primary-color rounded-xl text-white hover:bg-secondary-color hover:text-primary-color"
            >
              Detalle
            </button>
          </div>
        </div>
      </div>
      {modalVisible ? (
        <ModalDetails
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      ) : null}
    </>
  );
};

export default LawyerDetails;

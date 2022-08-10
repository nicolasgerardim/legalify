import { useState } from "react"
import ActiveButton from "./ActiveButton"
import InactiveButton from "./InactiveButton"
import CustomerDetails from "./CustomerDetails"
import LawyerDetails from "./LawyerDetails"

const Prices = () => {
   
  const [isActive,setIsActive]= useState <boolean>(false)


  return (
    <>
    <section id="prices" className="flex flex-col justify-center w-4/5 pt-[120px] pb-[50px]">
        <h2 className="font-semibold mb-11 text-primary-color text-[40px]">Abonos</h2>
        <div onClick={()=>setIsActive(!isActive)} className="flex justify-center">
            <p className="text-[20px] text-primary-color font-semibold px-5">Abogados</p>
            {
                isActive ? <ActiveButton/> : <InactiveButton/>

            }
            <p className="text-[20px] text-primary-color font-semibold px-5">Clientes</p>
        </div>


    </section>
            {
                isActive ? <CustomerDetails /> : <LawyerDetails/>
            }
            </>
  )
}

export default Prices
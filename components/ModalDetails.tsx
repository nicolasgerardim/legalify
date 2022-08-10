

const ModalDetails = ({setModalVisible,modalVisible}:{setModalVisible:Function,modalVisible:boolean}) => {
  return (

       <div className=" fixed flex flex-col justify-center items-center inset-0 h-[100vh] z-20 w-screen bg-gray-600 bg-opacity-50 overflow-y-auto outline-none">
            <div className="flex justify-end w-4/5 mb-5">
            <div onClick={()=>setModalVisible(!modalVisible)} className="flex cursor-pointer justify-center border border-primary-color items-align bg-white hover:bg-primary-color hover:text-white text-primary-color rounded-full h-[30px] w-[30px]">
                <p className="font-bold">x</p>
            </div>
            </div>
            <table className=" text-sm w-4/5 bg-white">
                <tr className="bg-secondary-color">
                <th className="border py-3 px-5 border-gray-400">Plan</th>
                <th className="border py-3 px-5 border-gray-400">Especialidades</th>
                <th className="border py-3 px-5 border-gray-400">Jurisdicciones</th>
                <th className="border py-3 px-5 border-gray-400">Agenda de citas</th>
                <th className="border py-3 px-5 border-gray-400">Llamada de emergencia</th>
                </tr>
                <tr>
                <td className="border py-3 px-5 border-gray-400">Detalle</td>
                <td className="border py-3 px-5 border-gray-400">
                    Son las especializaciones del Derecho en las que eres experto: Ej:
                    Familia
                </td>
                <td className="border py-3 px-5 border-gray-400">Ambito geográfico en el. ejerces</td>
                <td className="border py-3 px-5 border-gray-400">
                    Puedes setear la agenda de citas con los horarios disponibles y tu
                    cuenta de Mercado Pago para que los clientes abonen previamente y
                    elijan un horario para la reunion virtual. Cobrarás $5000 dólares
                    por cada consulta.
                </td>
                <td className="border py-3 px-5 border-gray-400">
                    Idem agenda de citas. Las llamadas se reciben por teléfono. cobrarás
                    por cada llamada 7000$ dólares.
                </td>
                </tr>
                <tr>
                    <td className="border py-3 px-5 border-gray-400">Standard</td>
                    <td className="border py-3 px-5 border-gray-400">1</td>
                    <td className="border py-3 px-5 border-gray-400">1</td>
                    <td className="border py-3 px-5 border-gray-400 font-bold">x</td>
                    <td className="border py-3 px-5 border-gray-400 font-bold">x</td>
                </tr>
                <tr>
                    <td className="border py-3 px-5 border-gray-400">Premium</td>
                    <td className="border py-3 px-5 border-gray-400">3</td>
                    <td className="border py-3 px-5 border-gray-400">2</td>
                    <td className="border py-3 px-5 border-gray-400"></td>
                    <td className="border py-3 px-5 border-gray-400"></td>
                </tr>
                <tr>
                    <td className="border py-3 px-5 border-gray-400">Coorporativo</td>
                    <td className="border py-3 px-5 border-gray-400">Sin límite</td>
                    <td className="border py-3 px-5 border-gray-400">Sin límite</td>
                    <td className="border py-3 px-5 border-gray-400"></td>
                    <td className="border py-3 px-5 border-gray-400"></td>
                </tr>
            </table>
      </div>   )
}

export default ModalDetails
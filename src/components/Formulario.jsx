import useCotizador from '../hooks/useCotizador';


import { MARCAS, YEARS, PLANES } from './../constants'



const Formulario = () => {

    const { datos, handleChangeDatos } = useCotizador();



    return (
        <>
            <form action="">
                {/* ==== ==== MARCA ==== ==== */}
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-500 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca" 
                        id="marca"
                        className="w-full border border-gray-200 p-3 rounded-md"
                        value={ datos.marca }
                        onChange={handleChangeDatos} >

                        <option value="">-- Seleciona Marca --</option>   
                        { MARCAS.map( marca => (
                            <option key={ marca.id } value={ marca.id }>
                                { marca.nombre }
                            </option> ) 
                        )}
                    </select>
                </div>
                {/* ==== ==== AÑO ==== ==== */}
                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-500 uppercase">
                        Año
                    </label>
                    <select
                        name="year" 
                        id="year"
                        className="w-full border border-gray-200 p-3 rounded-md"
                        value={ datos.year }
                        onChange={ handleChangeDatos } >

                        <option value="">-- Seleciona Año --</option>   
                        { YEARS.map( year => (
                            <option key={ year } value={ year }>
                                { year }
                            </option> ) 
                        )}
                    </select>
                </div>
                {/* ==== ==== PLAN ==== ==== */}
                <div className="my-5">
                    <label htmlFor="plan" className="block mb-3 font-bold text-gray-500 uppercase">
                        Elige un plan
                    </label>
                    <div className='flex gap-10 '>
                        { PLANES.map( plan => (
                            <label key={plan.id} className="flex gap-1 items-center">
                                <input 
                                    type="radio" 
                                    name="plan" id="plan"
                                    checked = { datos.plan == plan.id }
                                    value={ plan.id } 
                                    onChange={ handleChangeDatos } />
                                <span>{ plan.nombre }</span>
                            </label>
                        ))}
                    </div>
                </div>
                <input 
                    type="submit"
                    value="Cotizar" 
                    className="bg-indigo-500 text-white font-bold p-3 uppercase w-full rounded-md cursor-pointer hover:bg-indigo-600 transition-colors" />
            </form>
        </>
    )
}

export default Formulario
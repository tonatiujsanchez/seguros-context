import { useCallback, useRef, useMemo } from 'react'

import useCtizador from './../hooks/useCotizador'
import Spinner from './Spinner'

import { MARCAS, PLANES } from './../constants'


const Resultado = () => {

    const { datos, resultado, cargando } = useCtizador()
    const { marca, plan, year } = datos;

    // const yearRef = useRef( year );  //useRef cambia la referencia cuando el componente entero se vuele a renderizar
    // console.log( yearRef.current );

    const nombreMarca = useCallback( MARCAS.find( m => m.id === Number( marca ) ), [ resultado ] );
    const nombrePlan = useCallback(PLANES.find( p => p.id === Number( plan ) ), [ resultado ]);
    const yearRef = useMemo( ()=> year, [ resultado ] );
    

  return (
    <div className="h-64 flex justify-center items-center  bg-gray-100 mt-10 rounded-md shadow-md">
        { cargando 
            ? <Spinner /> 
            : (resultado !== 0)
                ? <div className='text-center'>
                    <h2 className='text-gray-500 font-black text-2xl mb-5'>RESUMEN</h2>
                    <p className='my-1'><span className='font-bold'>Marca:</span> { nombreMarca.nombre }</p>
                    <p className='my-1'><span className='font-bold'>Plan:</span> { nombrePlan.nombre }</p>
                    <p className='my-1'><span className='font-bold'>Años de auto:</span> { yearRef }</p>
                    <p className='mt-2 text-xl'><span className='font-bold'>Total Cotización:</span> { resultado }</p>
                  </div>
                : <p className='text-gray-400 font-bold text-xl'>Llene el formulario para cotizar</p>
        }
    </div>
  )
}

export default Resultado
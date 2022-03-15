import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularPorcentaje, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: '1'
    })  

    const [ error, setError ] = useState('');
    const [ resultado, setResultado ] = useState(0);
    const [ cargando, setCargando ] = useState(false);

    const handleChangeDatos = ( e ) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        setCargando(true);

        // Estabrecer una base
        let resultado = 2000;

        // Obtener diferencia de años
        const diferenciaYear = obtenerDiferenciaYear( datos.year );

        // Hay que restar el 3% por cada año
        resultado -=  calcularPorcentaje( diferenciaYear, resultado ); 

        // Europeo %30
        // Americano %15
        // Asiatico %5
        resultado *= calcularMarca( datos.marca );

        // Básico   20%
        // Completo 50%
        resultado *= calcularPlan( datos.plan );
        
        // Limitar el resultado a 2 decimales 
        // resultado = resultado.toFixed(2);


        // Formater dinero
        resultado = formatearDinero( resultado );
        
        setTimeout(() => {
            setResultado( resultado );
            setCargando(false);
        }, 2000);
    }

    return(
        <CotizadorContext.Provider
            value = {{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            { children }
        </CotizadorContext.Provider>
    )
}


export {
    CotizadorProvider
}

export default CotizadorContext;
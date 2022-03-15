



const obtenerDiferenciaYear = ( year ) => {

    return new Date().getFullYear() - year;
}

const calcularPorcentaje = ( diferencia, resultado ) => {
    return ( (diferencia * 3) * resultado / 100 )
}

const calcularMarca = ( marca ) => {
    let incremento = 1;

    switch (marca) {
        case "1":
            incremento = 1.30
            break;
    
        case "2":
            incremento = 1.15
            break;
        case "3":
            incremento = 1.05
            break;
    
        default:
            incremento = 1;
            break;
    }

    return incremento;
}

const calcularPlan = ( plan ) => {
    return ( plan === "1" ? 1.20 : 1.50 )
}

const formatearDinero = ( cantidad ) => {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}

export{
    obtenerDiferenciaYear,
    calcularPorcentaje, 
    calcularMarca,
    calcularPlan,
    formatearDinero
}
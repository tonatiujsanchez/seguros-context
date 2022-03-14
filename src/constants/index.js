
const MARCAS = [
    { id: 1, nombre: "Europeo" },
    { id: 2, nombre: "Americano" },
    { id: 3, nombre: "Asíatico" },
];


const YEARMAX = new Date().getFullYear();
const YEARS = Array.from( new Array(20), ( valor, index ) => YEARMAX - index );


const PLANES = [
    { id: 1, nombre: "Básico" },
    { id: 2, nombre: "Completo" },
]

 export{
    MARCAS,
    YEARS,
    PLANES
 }
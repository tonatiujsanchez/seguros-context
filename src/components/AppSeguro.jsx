
import Formulario from './Formulario'




const AppSeguro = () => {
  
    

    return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-3xl md:text-4xl font-black px-1 max-w-[28rem] md:max-w-[30rem] mx-auto uppercase">
                Cotizador de Seguros con Context
            </h1>
        </header>
        <main className="px-3 max-w-[600px] mx-auto">
            <div className="bg-white shadow rounded-lg p-10">
                <Formulario />
            </div>
        </main>
    </>
  )
}

export default AppSeguro

import useCotizador from './../hooks/useCotizador'

const Error = () => {

    const { error } = useCotizador()

  return (
    <div className='p-3 text-center border border-red-400 bg-red-100 text-red-600 rounded-md'>
        <p>{ error }</p>
    </div>
  )
}

export default Error
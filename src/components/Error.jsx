import useCotizador from "../hooks/useCotizador"

const Error = () => {   //no le paso una props de error, si no que lo leo del estado global que es el useCoptizador
    const {error} = useCotizador()
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
        <p>
            {error}
        </p>
    </div>
  )
}

export default Error
import {createContext, useState} from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContex = createContext()

//creamos el provider donde se define el state effects y crear funciones
const CotizadorProvider = ({children}) =>{ //hasta el return se pueden definir states, effects etc

    const [datos, setDatos] = useState({    //puedo almacenar todas las variables en un solo objeto
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChange = e =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })    
    }

    const cotizarSeguro =() =>{
        //Base
        let resultado = 2000

        //Obtener una diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        //hay que restar un 3% por cada antiguedad de año
        resultado -= ((diferencia * 3) * resultado) / 100

        //Europeo 30%
        //Americano 15%
        //asiatico 5%
        resultado *= calcularMarca(datos.marca)
        console.log('re',resultado)

        //basico 20%
        //completo 50%
        resultado *= calcularPlan(datos.plan)
        console.log('plan', resultado)
        resultado = resultado.toFixed(2)

        //Formatear dinero
        resultado = formatearDinero(resultado)
        console.log('format:', resultado)

        setCargando(true)
        setTimeout(()=>{
            setResultado(resultado)
            setCargando(false)
        }, 3000)
    }

    return(
        <CotizadorContex.Provider
        //el value siempre va a ser un objeto
        value={{
            datos,
            handleChange,
            error,
            setError,
            cotizarSeguro,
            setResultado,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContex.Provider>
    )
}

export {
    CotizadorProvider   //de donde salen los datos es el provider
}

export default CotizadorContex
import {createContext, useState} from 'react'

const CotizadorContex = createContext()

//creamos el provider donde se define el state effects y crear funciones
const CotizadorProvider = ({children}) =>{ //hasta el return se pueden definir states, effects etc

    const [datos, SetDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const handleChange = e =>{
        SetDatos({
            ...datos,
            [e.target.name] : e.target.value
        })    
    }

    return(
        <CotizadorContex.Provider
        //el value siempre va a ser un objeto
        value={{
            datos,
            handleChange
        }}>
            {children}
        </CotizadorContex.Provider>
    )
}

export {
    CotizadorProvider   //de donde salen los datos es el provider
}

export default CotizadorContex
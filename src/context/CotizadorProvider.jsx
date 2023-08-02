import {createContext} from 'react'

const CotizadorContex = createContext()

//creamos el provider donde se define el state effects y crear funciones
const CotizadorProvider = ({children}) =>{ //hasta el return se pueden definir states, effects etc

    const hola= 'Hola Guillermo'    //declaramos una variable pero puede ser una funcion
    const fnHolaMundo = () => {
        console.log('Hola mundo desde una funcion')
    }

    return(
        <CotizadorContex.Provider
        //el value siempre va a ser un objeto
        value={{
            hola,
            fnHolaMundo
        }}>
            {children}
        </CotizadorContex.Provider>
    )
}

export {
    CotizadorProvider   //de donde salen los datos es el provider
}

export default CotizadorContex
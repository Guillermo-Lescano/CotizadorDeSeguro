import {createContext} from 'react'

const CotizadorContex = createContext()

//creamos el provider donde se define el state effects y crear funciones
const CotizadorProvider = ({children}) =>{

    return(
        <CotizadorContex.Provider
        value={{
            
        }}>
            {children}
        </CotizadorContex.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContex
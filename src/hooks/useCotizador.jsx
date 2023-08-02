import {useContext} from 'react'
import CotizadorContex from '../context/CotizadorProvider'

//Creamos un hook para no tener que utilizar ni importar estas 3 cosas en un componente, directamente usamos el useCotizador

const useCotizador = () =>{
    return useContext(CotizadorContex)
}

export default useCotizador
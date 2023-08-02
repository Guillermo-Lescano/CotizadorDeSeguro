import React from 'react'
import { Fragment, useContext } from 'react'
import {MARCAS, YEARS, PLANES} from '../constants'
//import CotizadorContex from '../context/CotizadorProvider'
import useCotizador from '../hooks/useCotizador'

const Formulario = () => {
    
    const {datos, handleChange} = useCotizador()

    //const {modal, cambiarEstado /*hola*/} = useContext(CotizadorContex) //este CotizadorContex tiene acceso a lo que esta dentro del CotizadorContex.Provider
/*     const {modal, cambiarEstado /*hola} = useCotizador()
    console.log(modal hola ) */
  return (
    <>
    {/* <button onClick={cambiarEstado}>
        Cambiar estado de modal 
    </button> */}
    <form>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
            <select name="marca" 
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={e => handleChange(e)}
                    value={datos.marca}>
                <option value="">--Seleccione una Marca--</option>
                {MARCAS.map(marca =>
                    <option
                        key={marca.id}
                        value={marca.id}
                    >
                        {marca.nombre}
                    </option>
                )}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 '>Año</label>
            <select name="year" 
                    className='w-full p-3 bg-white border border-gray-200' 
                    onChange={e => handleChange(e)}
                    value={datos.year}>
                <option value="">--Seleccione un Año--</option>
                {YEARS.map(year =>
                    <option
                        key={year}
                        value={year}
                    >
                        {year}
                    </option>
                )}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 '>Selecciona un Plan</label>
            <div className='flex gap-3 items-center'>
                {PLANES.map(plan =>(
                    <Fragment key={plan.id}>
                        <label>{plan.nombre}</label>
                        <input type='radio' name='plan' value={plan.id} onChange={e => handleChange(e)}></input>
                    </Fragment>
                ))}
            </div>
        </div>
        <input type="submit" className='w-full bg-indigo-500 hov er:bg-indigo-600 transition-colors 
        text-white cursor-pointer p-3 uppercase font-bold' value='Cotizar' />
    </form>
    </>
  )
}

export default Formulario
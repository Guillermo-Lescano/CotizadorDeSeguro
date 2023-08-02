import {CotizadorProvider} from './context/CotizadorProvider' //este es el que tiene los datos
import AppSeguro from "./components/AppSeguro"

function App() {
  return (
    //El COTIZADORPROVIDER rodea a toda la app, puede haber muchos componentes dentros, y con el children que tiene, puede pasar datos a sus hijos
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
    
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Administracion from './componentes/Administracion/Administracion';
import Home from './componentes/Home/Home';
import Reservas from './componentes/Reservas/Reservas';

function App() {
  return (
    <>
    <Route path="/home" component={Home}/>
    <Route path="/about" />
    <Route path="/create" component= {Administracion} />
    <Route component={Reservas} exact path='/reservas/:id'/>
   
    
    </>
  );
}

export default App;

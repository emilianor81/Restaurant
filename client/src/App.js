import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Administracion from './componentes/Administracion/Administracion';
import Home from './componentes/Home/Home';
import Reservas from './componentes/Reservas/Reservas';
import About from './componentes/About/About'

function App() {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About} />
    <Route exact path="/create" component= {Administracion} />
    <Route exact component={Reservas} exact path='/reservas/:id/:nombre'/>
   
    
    </>
  );
}

export default App;

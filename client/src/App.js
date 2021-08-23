import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Administracion from './componentes/Administracion/Administracion';
import Home from './componentes/Home/Home';

function App() {
  return (
    <>
    <Route path="/home" component={Home}/>
    <Route path="/about" />
    <Route path="/create" component= {Administracion} />
   
    
    </>
  );
}

export default App;

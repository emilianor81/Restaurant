import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';
import Administracion from './componentes/Administracion/Administracion';

function App() {
  return (
    <>
    <Route path="/" component={Navbar}/>
    <Route path="/about" />
    <Route path="/create" component= {Administracion} />
   
    
    </>
  );
}

export default App;

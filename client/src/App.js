import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <>
    <Route path="/" component={Navbar}/>
   
    
    </>
  );
}

export default App;

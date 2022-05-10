
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';


function App() {
  return<>
  
    <Router>
    <NavBar></NavBar>
    <ItemListContainer greeting="Contenido"/>
    <ItemCount startCount={1} stock={5} precio={22000}/>
    </Router>
  </>;
}

export default App;

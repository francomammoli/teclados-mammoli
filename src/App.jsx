
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return<>
  
    <Router>
    <NavBar></NavBar>
    <ItemListContainer greeting="Contenido"/>
    </Router>
  </>;
}

export default App;

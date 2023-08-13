
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos/NavBar.css';
import './estilos/CartWidget.css';
import ItemCount from './components/ItemCount/ItemCount';
import './estilos/Item.css'
import './estilos/ItemCount.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido a MotoStar'}/> 
        <ItemDetailContainer/>
      </div>
      
  );
}

export default App

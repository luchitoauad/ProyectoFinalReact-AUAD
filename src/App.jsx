
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos/NavBar.css';
import './estilos/CartWidget.css';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenido a MotoStar'}/> 
        <ItemCount initial={1} stock={12} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
      </div>
      
  );
}

export default App


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos/NavBar.css';
import './estilos/CartWidget.css';
import ItemCount from './components/ItemCount/ItemCount';
import './estilos/Item.css'
import './estilos/ItemCount.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a MotoStar'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a MotoStar'} />}/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>

  );
}

export default App

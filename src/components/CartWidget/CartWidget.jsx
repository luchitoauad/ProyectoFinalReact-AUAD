import cart from '../../imagenes/carritocompranegro.jpg'
import '../../estilos/CartWidget.css'

const CartWidget = () => {
  return (
    <div className= 'CarritoCompra'>
      <img src={cart} className='fotocarrito' alt="cart-widget" />
      0
    </div>  
  );
};
export default CartWidget;

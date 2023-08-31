import cart from '../../imagenes/carritocompranegro.jpg'
import '../../estilos/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
      <Link to= '/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img src={cart} className='fotocarrito' alt="cart-widget" />
      { totalQuantity }
      </Link>
      )
}
export default CartWidget

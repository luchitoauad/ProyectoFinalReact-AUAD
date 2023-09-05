import { useContext } from 'react';
import '../../estilos/Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    console.log("Total Quantity:", totalQuantity);
    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>
                    Productos
                </Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} id={p.id} name={p.name} img={p.img} price={p.price} quantity={p.quantity} subtotal={p.subtotal} />)} 
            <h3><strong>Total: ${total}</strong></h3>
            <button onClick={() => clearCart()} className="Option1">
                Limpiar carrito
            </button>
            <Link to="/checkout" className="Option2">
            <button className="Option1">Cheackout</button>
            </Link>
        </div>
    );
};

export default Cart;
import '../../estilos/CartItem.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartItem = ({ id, name, img, price, quantity, subtotal }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="CartItem">
            <img src={img} alt={name} className="ItemImgCart"/>
            <div className="CartItemInfo">
                <h3>{name}</h3>
                <p>Precio x unidad: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p><strong>Subtotal: ${subtotal}</strong></p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
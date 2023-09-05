import {createContext, useState} from 'react'

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
})

export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const addItem =(item, quantity,img) => {
        if(!isInCart(item.id)) {
            const subtotal= item.price * quantity
            setCart(prev => [...prev, {...item, quantity, img, subtotal }])
            setTotalQuantity(prevQuantity => prevQuantity + quantity)
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => { 
        const productToRemove = cart.find(product => product.id === itemId);
        if (productToRemove) {
            const cartUpdated = cart.filter(product => product.id !== itemId);
        
        setCart(cartUpdated)
        setTotalQuantity(prevQuantity => prevQuantity - productToRemove.quantity)
        }
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, total: calculateTotal(), totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

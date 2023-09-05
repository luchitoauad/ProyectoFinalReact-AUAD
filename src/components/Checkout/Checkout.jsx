import '../../estilos/Checkout.css'
import { useState, useContext } from 'react'
import {getDocs, collection, query, where, Timestamp, writeBatch, documentId,addDoc} from "firebase/firestore"
import {db} from '../../firebase/firebase'
import { CartContext } from '../../context/CartContext'


import CheckoutForm from '../CheckoutForm/Checkoutform'

const Checkout =() => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email }) => {
    setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(product => product.id)

            const productsRef = collection(db, 'Productos')

            console.log('IDs del carrito:', ids);
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in',ids )))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id ===doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0 ) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error('Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.error('Error al crear la orden:',error)
        }finally {
            setLoading(false);
        }

    }


    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId){
        return <h1>El código de seguimiento de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout
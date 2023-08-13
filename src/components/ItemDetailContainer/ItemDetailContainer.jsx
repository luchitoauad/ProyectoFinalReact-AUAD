import '../../estilos/ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../ListaProductos'
import ItemDetalle from '../ItemDetalle/ItemDetalle'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetalle {...product}/>
        </div>
    )
}

export default ItemDetailContainer
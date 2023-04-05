import { useEffect, useState } from 'react'
import { getProductById} from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    
    useEffect(() => {
    getProductById(productId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })  
}, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
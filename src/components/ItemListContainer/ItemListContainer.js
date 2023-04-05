import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"

import { useParams, Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


    
    
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]  = useState(true)

    const { categoryId  } = useParams()
    
    useEffect(()=> {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)
    
    
    asyncFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])
    
    if(loading){
    return <h1>Cargando...</h1>

}
 
    return (
        <div>
            <h1>Listado de Productos</h1> 
            <div>
                {
                    products.map(prod => {
                        return (
                            <div key={prod.id}> 
                                <h2>{prod.name} </h2>
                                <img src={prod.img} atl={prod.name} style={{width: 100}}></img>
                                <Link to={`/item/${prod.id}`} >Ver Detalle</Link>                                 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer
import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(prev  => prev + 1 )
    }

    const decrement = () => {
        if(count > 1) setCount(prev  => prev - 1 )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button style={{backgroundColor: 'red', color:'white',}} onClick={decrement}>-</button>
            <button style={{backgroundColor: 'green', color:'white',}} onClick={increment}>+</button>
            <button style={{backgroundColor: 'blue', color:'white',}} onClick={() => onAdd(count)}>Agrega al carrito</button>
        </div>
    )
}

export default ItemCount
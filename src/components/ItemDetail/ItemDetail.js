import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, price, stock}) => {

    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron ${quantity} ${name}`)
    }
    return (
        <div>
            <h2>{name}</h2>
            <img style={{width:'250px', height:'250px'}}src={img} alt={name} />
            <h3>Precio: ${price}</h3>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
        </div>
    )

}

export default ItemDetail
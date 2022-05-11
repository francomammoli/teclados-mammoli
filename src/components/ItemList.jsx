import Item from "./Item";

const ItemList = ({productos}) => {    
    
    return (
        <div className="row col-12">
            {productos.map (el => {
                return (
                    <Item producto={el} key={el.id}/>                    
                )
            })}  
        </div>                
    )
}

export default ItemList;
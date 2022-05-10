import React, { useState } from 'react';


const ItemCount = ({startCount, stock, precio}) => {
    const [count, setCount] = useState(startCount);    
    const [total, setTotal] = useState(precio); 

    const add = () => {        
        if (count < stock) {
            setCount (count + 1);
            setTotal (precio  * (count + 1));             
        } 
    }

    const subtract = () => {        
        if (count > startCount) {
            setCount (count - 1);
            setTotal (precio  * (count - 1));  
        } 
    }

    return (
        <div className="itemCount col-4">            
            <div className="counter">
                <button className="countButton" onClick={subtract}>-</button>
                <p className="count">{count}</p>
                <button className="countButton" onClick={add}>+</button>
            </div>
            <p className="precio">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(total)}`}</p>
            <button className="agregarButton">AGREGAR</button>
        </div>
    )
}


export default ItemCount;
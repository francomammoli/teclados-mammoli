import { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({producto}) => {
    const [detail, setDetail] = useState(false)
    const [ocultarDetail, setOcultarDetail] = useState("hideDetail")

    const handleShow = () => {
        setDetail(true);
        setTimeout(() => {
            setOcultarDetail("")
        }, 200);
    }

    const offShow = () => {
        setOcultarDetail("hideDetail")
        setTimeout(() => {
            setDetail(false)
        }, 500);
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 px-2 row product">
            <img src={`images/${producto.url_1}`} className="productImg" alt="imgProduct"/>
            <p className="productName col-6">{producto.product_name}</p>            
            <p className="productInfo col-6" onClick={handleShow}>Show →</p>            
            <p className="productPrice">{`${Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(producto.precio)}`}</p>            
            {detail && <ItemDetailContainer el={producto} ocultar={ocultarDetail}/>}
            {detail && <div className="closeDetail" onClick={offShow}>X</div>}
        </div>
    )
}

export default Item; 
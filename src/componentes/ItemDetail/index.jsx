import React, {useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)
    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addProduct({...detail, quantity: cantidad})
    }

  
    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-primary p-1">
                        <Link to="/cart">
                           <p>Ir al Carrito</p> 
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        
        setQuantity(cantidad)
    }

    console.log(detail.title);
    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h4>{detail.title}</h4>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={30} 
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
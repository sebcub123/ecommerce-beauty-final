import React from "react";
import { MdShoppingCart } from "react-icons/md";
const CartWidget = () => {
    return (
        <div>
            <MdShoppingCart style={{ height: 30, width: 30, margin: 10 }} />
            <span>3</span>
        </div>
    )
}

export default CartWidget
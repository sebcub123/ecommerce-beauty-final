import React, { useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { Shop } from '../../context/ShopProvider';
import {Link} from 'react-router-dom';

const CartWidget = () => {

  const {countCart} = useContext(Shop)

    return (
        <Link to="/cart" >
            <div>
                <MdShoppingCart style={{ height: 30, width: 30, margin: 10 }} />
                <span>{countCart()}</span>
            </div>
        </Link>
    )
}

export default CartWidget
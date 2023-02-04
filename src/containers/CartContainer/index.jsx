import React, { useContext, useState } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop);
  

  const [loader, setLoader] = useState(false);

  console.log(products)

  const confirmPurchase = async () => {

    try {
      setLoader(true);
  
      const order = generateOrderObject({
        nombre: "Beauty",
        email: "Beauty@gmail.com",
        telefono: "1172349021",
        cart: products,
        total: total()
      })
      
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

       
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Orden confirmada con ID: " + docRef.id);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      {
        products.length !== 0 ?
        <>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Imagen</th>
                <th scope="col">Titulo</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Quitar</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return <TableRow key={product.id} product={product}/>
              })}
            </tbody>
          </table>
          {
            loader ?
            <h2>Cargando ... </h2>
            :
            <button onClick={confirmPurchase}>Confirmar Compra</button>
          }
        </>
        :
        <>
          <h1>No hay productos en el carrito.</h1>
          <button>
            <Link to = "/">Home</Link>
          </button>
        </>
      }
    </>
  )
}

export default Cart
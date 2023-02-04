import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList';
import productJson from '../../data/products.json';
import { db } from '../../firebase/config';

const ItemListContainer = ({greeting}) => {
console.log (db);
  const [products, setProducts] = useState([])

  const {categoryId}  = useParams()
  
  useEffect(()=> {

    //Caso JSON propio
    const getProducts = () => {

      const obtenerProductos = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProductos
      .then( productos => {
        if (categoryId) { 
          const productosFiltradosPorCategoria = productos.filter(producto => producto.category === categoryId) 
          setProducts(productosFiltradosPorCategoria) 
        } else { 
          setProducts(productos) 
        }
      })
      .catch(error => console.log(error))
    }

    getProducts()

  }, [categoryId])


  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer
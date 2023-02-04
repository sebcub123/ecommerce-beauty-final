import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList';
import useFirebase from '../../hooks/useFirebase';


const ItemListContainer = () => {

  const {categoryId}  = useParams()
  
  const [products, loading, error] = useFirebase(categoryId)
  
  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
          <h1>Cargando... </h1>
          : <ItemList productos={products}/>
      }
    </>
  )
}

export default ItemListContainer
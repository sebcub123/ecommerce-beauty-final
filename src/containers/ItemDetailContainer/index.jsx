import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../componentes/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const { id } = useParams()

  useEffect(() => {

    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
        console.log("No such document!");
      }
    }

    getProduct();

  }, [id])

  return (
    <div>
      {
        Object.keys(detail).length === 0
          ? <Spinner animation="grow" variant="success" />
          : <ItemDetail detail={detail} />
      }
    </div>
  )
}

export default ItemDetailContainer
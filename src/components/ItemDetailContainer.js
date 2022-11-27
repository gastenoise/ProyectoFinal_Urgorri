import { productosBase } from "./ItemListContainer"
import React, { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [producto,setProducto] = useState([])

  useEffect(()=>{
    let simulacionPedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosBase.filter(item => item.id == itemId))
      },500)
    })

    simulacionPedido
    .then((respuesta)=>{
      setProducto(respuesta)
    })
    .catch((error)=>{
      console.log(error)
    })

  })

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}


export default ItemDetailContainer
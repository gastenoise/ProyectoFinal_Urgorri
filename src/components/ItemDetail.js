import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

  const { agregarProducto } = useCarrito()
  const [cantidad, setCantidad] = useState(1)

  const handleOnAdd = (cantidad) => {
      console.log("Se agregaron " + cantidad + " productos")
      setCantidad(cantidad)
      agregarProducto(producto,cantidad)
  }

  const results = [];

  for (const item of producto) {
    results.push(
      <div class="container mb-5" style={{textAlign:"center" , maxWidth:"40rem"}}>
        <div class="card text-center">
          <div class="card-header">
            <h2>{item.nombre}</h2>
          </div>
          <div class="card-body">
            <img src={item.img} alt={item.nombre} style={{maxWidth:"20rem"}}/>
            <h5 class="card-title">${item.precio}</h5>
            <p class="card-text">{item.des}</p>
            <ItemCount init={cantidad} handleOnAdd={handleOnAdd}/>
          </div>
        </div>
      </div> 
    );
  }

  return (
    <div>
      {results}
    </div>
  )
}
export default ItemDetail
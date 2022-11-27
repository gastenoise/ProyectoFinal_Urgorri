import { useRef, useState, useContext } from "react"
import { contexto } from "./CustomProvider"

const Carrito = () => {

  const valorDelContexto = useContext(contexto)

  const refName = useRef()
  const refApe = useRef()
  const [id, setId] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setId(Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000)
  }

  const results = [];
  let totalx = null;

  for (const prod of valorDelContexto.productos) {
    totalx = (totalx + prod[0].precio * prod.cantidad)
    results.push(
      <div class="card" style={{maxWidth:"20rem"}}>
        <img class="card-img-top" style={{maxHeight:"15rem"}} src={prod[0].img} alt="Card cap"/>
        <div class="card-body">
          <h4 class="card-title">{prod[0].nombre}</h4>
          <h4 class="card-title">${prod[0].precio} c/u</h4>
          <p class="card-text">{prod[0].des}</p>
        </div>
        <div class="card-footer">
          <h4 class="text-muted">Cantidad seleccionada: {prod.cantidad}</h4>
        </div>
        <div class="card-body">
          <h4 class="text-center">Subtotal: ${prod.cantidad * prod[0].precio}</h4>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 class="mb-3"style={{textTransform:"uppercase" , textAlign:"center"}}>CARRITO DE COMPRAS</h3>
      <div class="mt-5 pl-4 card-group container-fluid" style={{gap:"1rem",justifyContent:"center"}}>
        {results}
      </div>
      <div id='listin' class='container mt-5' style={{textAlign:"center" , maxWidth:"38rem"}}>
        { totalx ? <h1 class="mb-5" style={{textDecoration: "underline"}}>Total a abonar: ${totalx}</h1> : null}
        { totalx ? null : <h1 class="mb-5" style={{textDecoration: "underline"}}>Carrito vacío, agregue productos primero.</h1>}
        <form onSubmit={handleSubmit}>
          <h3>Complete los siguientes campos antes de generar la orden de compra.</h3>
          <div class="input-group input-group-sm mb-3 mt-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
            </div>
            <input ref={refName} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
            </div>
            <input ref={refApe} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
          </div>
          <button type="submit" class="btn btn-success btn-lg">Confirmar</button>
          {id ? <h2 class="mt-5">Orden generada con exito, a nombre de {refName.current.value} {refApe.current.value}</h2> : null}    
          {id ? <h2>Su id es nro. {id}</h2> : null}    
        </form>
        {valorDelContexto.cantidadTotal > 0 && <button type="button" class="btn btn-secondary btn-lg mt-5 mb-5" onClick={valorDelContexto.vaciarCarrito}>Vaciar Carrito</button>}
      </div>
    </div>
  )
}

export default Carrito
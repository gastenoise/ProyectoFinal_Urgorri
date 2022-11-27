import { useState } from "react";

const ItemCount = ({handleOnAdd,init}) => {

  const [count, setCount] = useState(init);
  let [carr, setCarr] = useState();

  const handleSumar = (e) => {
    e.stopPropagation()
    setCount(count + 1);
  }

  const handleRestar = (e) => {
    setCount(count - 1);
  }

  const handleConfirmar = () => { 
    handleOnAdd(count)
    setCarr(true)
  }

  return (
    <div>
      <div class="masmenos mb-2">
        <button class="btn btn-primary" onClick={handleRestar}>-</button>
        <h2 style={{width: "3rem"}}>{count}</h2>
        <button class="btn btn-primary" onClick={handleSumar}>+</button>
      </div>
      <button class="btn btn-primary" onClick={handleConfirmar}>Agregar al Carrito</button>
      <div class="card-footer text-muted mt-3">
        { carr ? <h2>Productos agregados al carrito!</h2> : null}
      </div>
    </div>
  )

}

export default ItemCount
import React , {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"

function CartWidget() {

  const valorDelContexto = useContext(contexto)

  return (
  <Link to="/carrito">
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{valorDelContexto.cantidadTotal}</span>
    </div>
  </Link>
  );
}

export default CartWidget

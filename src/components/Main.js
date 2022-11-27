import React from 'react';
import { Routes, Route } from "react-router-dom"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from './Carrito'

function Main() {
  return(
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='*' element={<h1 style={{textAlign:"center"}} class="mt-5">ERROR: Esta sección está en reparación...</h1>}/>
      </Routes>
    </main>
  )
}

export default Main
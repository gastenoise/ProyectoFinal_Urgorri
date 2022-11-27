import React, { useEffect , useState } from 'react'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'

export let productosBase = [
  {id:1, nombre:"Campera Adidas", categoria:"indumentaria", precio:15000, img:"https://sevensport.vteximg.com.br/arquivos/ids/429608-500-500/H20311_1.jpg", des:"Las camperas adidas para hombre son la mejor forma de protegerte del frío, la lluvia o en cualquier ocasión. Encontrá acá la campera que se adapte a vos."},
  {id:2, nombre:"Zapatillas Nike", categoria:"indumentaria", precio:20000, img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-court-vision-low-blanca-39396556-510010dh2987105-1.jpg", des:"ZAPATILLAS WMNS AIR MAX SC. $29999. 3 CUOTAS DE $10000. ENVIO GRATIS. COMPRAR. nike BOTINES JR VAPOR 14 ACADEMY TF"},
  {id:3, nombre:"Televisor 4K", categoria:"tecnologia", precio:150000, img:"https://www.naldo.com.ar/medias/505065.1.jpg-515Wx515H?context=bWFzdGVyfHJvb3R8MzA2OTF8aW1hZ2UvanBlZ3xoZjAvaDY0Lzk2NjQ2MDU0ODcxMzQuanBnfDc1ZDIzMjgzODNhZTg4MzA1NzgzMmQwZmZlNjE5YWY3MjU4ZjkyNzk5NzBmMjk1ODI5Zjk1NGY4N2M5NWU3MjY", des:"TV SMART PHILIPS 50 4K UHD 50PUD7406. Compatible con los principales formatos HDR. Tu televisor 4K UHD de Philips es compatible con los principales ..."},
  {id:4, nombre:"Heladera Philco", categoria:"tecnologia", precio:100000, img:"https://medias.musimundo.com/medias/00587003-178234-178234-01.png-178234-01.png-size515?context=bWFzdGVyfGltYWdlc3wyMjIyMjB8aW1hZ2UvcG5nfGhlOC9oNTIvMTA0MjQ1Nzg0NzQwMTQvMDA1ODcwMDMtMTc4MjM0LTE3ODIzNF8wMS5wbmctMTc4MjM0XzAxLnBuZ19zaXplNTE1fGZjOGIxNDA1NGFiYzMyYmFhMzY1OTRlYzhjOTJjNjliNTlkNjAwMDE3MzYxNjI5NDk0MTdiNzRlZmIxYmVkMmE", des:"Heladera Side By Side Philco Phsb555xt 496 Lts. $573.09918 · Heladera Side By Side Philco Phsb530xt No Frost. $568.69918 · Heladera Side By Side 483 Lts Philco ..."},
  {id:5, nombre:"Lavarropas Whirlpool", categoria:"tecnologia", precio:45000, img:"https://medias.musimundo.com/medias/00313094-139991-139991-01-139991-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0NTIwM3xpbWFnZS9qcGVnfGgwZC9oNmIvMTAzNzk1NzM2NTc2MzAvMDAzMTMwOTQtMTM5OTkxLTEzOTk5MV8wMS0xMzk5OTFfMDEuanBnX3NpemU1MTV8MWQ4MjQ3OGQyMDUwNjc3YzIwNDEwZDg5MmUwZDY3MWNmOTNkMmRjMDAwOTMyNmYwODlmOWJhNDFhMjRmZjc4NQ", des:"Clase AA. Cap.6 Kg. Display Led. Carga Autoadaptativa. Sist.Autobalance. 29 Alternativas de lavado. Puerta extra grande. Ciclos especificos de lavado. Antiarrugas. Lavado rapido. Lavado de 1/2 hr. Eco Wash. Hand Wash. Control de temperatura. 600RPM."},
  {id:6, nombre:"Iphone 12 Pro", categoria:"tecnologia", precio:1500000, img:"https://www.megatone.net/images/Articulos/zoom2x/209/01/MKT0243ETC.jpg", des:"El Chip A14 Bionic, el más rápido en un smartphone. Y un sistema de cámaras Pro para tomar fotos increíbles con poca luz, que alcanza su máxima expresión en el iPhone 12 Pro Max."},
  {id:7, nombre:"Remera Kevingston", categoria:"indumentaria", precio:4200, img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/251/987/products/img_70311-853e0759b2ccbb31ee16370780894894-640-0.jpg", des:"Remeras kevingston hombre · Remera Kevingston. KEVINGSTON. Remera Kevingston. 6500 pesos$6.500. Envío gratis · Remera Login Mangas Largas Negra Kevingston"},
  {id:8, nombre:"Taladro 100W", categoria:"construccion", precio:15500, img:"https://durtom.com/wp-content/uploads/resize-48.jpg1_-48.jpg", des:"MARHD 100W DC Prensa de taladro de mesa, velocidad ajustable 0-5000R/Min, carrera ajustable, motor de cobre puro, taladro de mano de herramienta DIY para joyería y aficionados"},
  {id:9, nombre:"Martillo", categoria:"construccion", precio:1200, img:"https://http2.mlstatic.com/D_NQ_NP_698230-MLA47093322624_082021-O.jpg", des:"MARTILLO CARPINTERO. Acero tratado térmicamente, dureza de 52HRC, resistente a la deformación por golpes. Aristas y bordes biselados."},
  {id:10, nombre:"Zapatillas New Balance", categoria:"indumentaria", precio:25000, img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-new-balance-574-hombre-core-m574nbu_nb_14_i_1_.jpg", des:"Zapatillas New Balance 306 Jamie Foy Negra. sku 500010195302550 ... Zapatillas New Balance 574 Mujer Negra ... Zapatillas Running New Balance 413 Petroleo."},
  {id:11, nombre:"Tacho de pintura 10KG", categoria:"construccion", precio:4700, img:"https://http2.mlstatic.com/D_NQ_NP_966121-MLA40596841560_012020-V.jpg", des:"BALDE PINTOR CON TAPA 10 LITROS BLANCO Balde Polietileno de alta densidad. Medidas Aproximadas: Alto: 26 cm Diámetro: 25,6 cm. Capacidad: 10 Litros"}
]

function ItemListContainer() {

  const { categoryId } = useParams();
  const [items,setItems] = useState([])

  useEffect(()=> {
    let simulacionPedido = new Promise((res)=> {
      setTimeout(()=> {
        if ( categoryId ) { res(productosBase.filter(item => item.categoria === categoryId)) }
        else { res(productosBase) }
      },500)
    })
    simulacionPedido
    .then((respuesta)=>{
      setItems(respuesta)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return(
    <div>
      <h3 class="mb-3"style={{textTransform:"uppercase" , textAlign:"center"}}>{categoryId}</h3>
      { items.length === 0 ? <h1 style={{textAlign:"center"}}>Cargando...</h1> : <ItemList items={items}/> }
    </div>
  )
}

export default ItemListContainer
import { React } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function ItemList({items}) {

  const results = [];

  for (const item of items) {
    results.push(
      <Card style={{ width: '18rem',marginBottom:'2vh' }}>
        <Card.Img variant="top" src={item.img} style={{height:"-webkit-fill-available"}} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.des}</Card.Text>
          <div class="text-center">
            <h2>${item.precio}</h2>
            <Link to={'/item/' + item.id} style={{color:'white'}}><Button variant="primary">Comprar</Button></Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
    
  return(
    <div id='listin' style={{display:'inline-flex',flexWrap:'wrap',justifyContent:'space-evenly',gap: "1rem"}}>
      {results}
    </div>
  )
}

export default ItemList
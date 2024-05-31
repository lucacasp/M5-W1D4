import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'

//credo una funzione singleBook che come proop riceve book 
export default function SingleBook({book}){

  const [selected, setSelected] = useState(false)

  return (
    <Col>
      <Card style={{ width: "18rem", border: selected ? '2px solid red' : 'none' }} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
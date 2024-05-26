import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

export default function AllTheBooks(props) {
/*     console.log(props.books)*/
    return (
      <Row>
        {props.books.map(book => (
            <Col>
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>${book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
        ))} 
        
      </Row>
    );
}
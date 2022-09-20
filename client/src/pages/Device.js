import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import star from '../assets/star.png'

const DevicePage = () => {
  const device = {id: 1, name: "Iphone 12 pro", price: 999, rating: 5, img: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg'};
  const description = [
    {id:1, title: 'Operate system', description: '5GB'},
    {id:2, title: 'Camera', description: '12 MP'},
    {id:3, title: 'Processor', description: 'Pentium 3'},
    {id:4, title: 'Number of Cores', description: '2'},
    {id:5, title: 'Battery', description: '4000'},
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center"
              style={{background: `url(${star}) no-repeat center center`, 
              width:240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
            >
            <h3> {device.price} $</h3>
            <Button variant="dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Info: </h1>
        {description.map((info, index) => 
        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
          {info.title}: {info.description}
        </Row>)}
      </Row>
    </Container>
  )
}

export default DevicePage;
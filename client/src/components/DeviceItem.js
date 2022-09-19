import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import Vector from '../assets/Vector.png'

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'} >
        <Image src={device.img} height={150} width={150} />
        <div className="d-flex justify-content-between align-items-center"></div>
        <div>Samsung..</div>
        <div className="d-flex">
          <div>{device.rating}</div>
          <Image  src={Vector}/>
        </div>
      </Card>
    </Col>
  )
}

export default DeviceItem
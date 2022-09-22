import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import Vector from '../assets/Vector.png';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts'

const DeviceItem = ({device}) => {
  let navigate = useNavigate();
  return (
    <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'} >
        <Image height={150} width={150} src={process.env.REACT_APP_API_URL + device.img}  />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center"></div>
        <div>Samsung..</div>
        <div className="d-flex align-items-center">
          <div>{device.rating}</div>
          <Image  src={Vector} width={18} height={18}/>
        </div>

      </Card>
      <div>
          {device.name}
        </div>
    </Col>
  )
}

export default DeviceItem
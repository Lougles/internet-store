import React, {useContext, useState} from 'react'
import { Modal, Button, Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from '../../index.js'
// import Dropdown from 'react-bootstrap/Dropdown';


const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {
      tittle: '', description: '', number: Date.now()
    }])
  }
  const deleteInfo = (number) => {
    setInfo( info.filter(i => i.number !== number))
  }



  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Create device
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Choose type</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map(brand => 
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control 
          className="mt-3"
          placeholder="Input name of device"
        />
        <Form.Control 
          className="mt-3"
          placeholder="Input price of device"
          type="number"
        />
        <Form.Control 
          className="mt-3"
          type="file"
        />
        <hr/>
        <Button variant={'outline-dark'} className={'mt-2'} onClick={addInfo}>Add new property</Button>
        {info.map(i => 
            <Row className='mt-4' key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder='Input name of properties'
                />
              </Col>
              <Col md={4}>
                <Form.Control 
                  placeholder='Input description of properties'
                />
              </Col>
              <Col md={4}>
                <Button variant={'outline-danger'} onClick={() => deleteInfo(i.number)}>
                  Delete
                </Button>
              </Col>
            </Row>
          )}
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
      <Button variant={'outline-success'} onClick={onHide}>Add</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CreateDevice
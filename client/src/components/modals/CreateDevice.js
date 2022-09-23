import React, {useContext, useEffect, useState} from 'react'
import { Modal, Button, Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from '../../index'
import { getBrands, getTypes, createDevice } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';


const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    getTypes().then(data => device.setTypes(data));
    getBrands().then(data => device.setBrands(data));
  }, [])
  const addInfo = () => {
    setInfo([...info, {
      title: '', description: '', number: Date.now()
    }])
  }
  const deleteInfo = (number) => {
    setInfo( info.filter(i => i.number !== number))
  }

  const selectFile = e => {
    setFile(e.target.files[0]);
  }
  const addName = e => {
    setName(e.target.value);
  }
  const addPrice = e => {
    setPrice(Number(e.target.value));
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }
  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
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
          <Dropdown.Toggle>{device.selectedType.name || 'Choose Type'}</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map(type => 
                <Dropdown.Item 
                onClick={() => device.setSelectedType(type)} 
                key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>{device.selectedBrand.name || 'Choose Brand'}</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map(brand => 
                <Dropdown.Item 
                onClick={() => device.setSelectedBrand(brand)} 
                key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
          </Dropdown.Menu>

        </Dropdown>
        <Form.Control 
          className="mt-3"
          placeholder="Input name of device"
          value={name}
          onChange={addName}
        />
        <Form.Control 
          className="mt-3"
          placeholder="Input price of device"
          type="number"
          value={price}
          onChange={addPrice}
        />
        <Form.Control 
          className="mt-3"
          type="file"
          onChange={selectFile}
        />
        <hr/>
        <Button variant={'outline-dark'} className={'mt-2'} onClick={addInfo}>Add new property</Button>
        {info.map(i => 
            <Row className='mt-4' key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder='Input name of properties'
                />
              </Col>
              <Col md={4}>
                <Form.Control 
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
      <Button variant={'outline-success'} onClick={addDevice}>Add</Button>
    </Modal.Footer>
  </Modal>
  )
})

export default CreateDevice
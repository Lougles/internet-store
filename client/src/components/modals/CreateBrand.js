import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { createBrand } from '../../http/deviceApi';


const CreateBrand = ({show, onHide}) => {

  const [value, setValue] = useState('')
  const addType = () => {
    createBrand({name: value}).then(data => {
      setValue('')
      onHide();
    })
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
        Create type
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control 
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={'Input name of type'}
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
      <Button variant={'outline-success'} onClick={addType}>Add</Button>
    </Modal.Footer>
  </Modal>
  )
}
export default CreateBrand
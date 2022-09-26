import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Context } from '../index';


const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Col key={brand.id}>
          <Card
            style={{ cursor: 'pointer' }}
            className="p-2 align-items-center"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
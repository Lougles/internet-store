import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Context } from '../index';


// const BrandBar = observer(() => {
//   const {device} = useContext(Context);
//   return (
//     <Row  className="d-flex">
//       {device.brands.map(brand => 
//         <Card
//         style={{cursor: 'pointer'}}
//         key={brand.id}
//         className='p-2 align-items-center'
//         onClick={() => device.setSelectedBrand(brand)} 
//         border={brand.id === device.selectedBrand.id ? 'danger' : 'light'} 
//         >
//           {brand.name}
//         </Card>
//         )}
//     </Row>
//   )
// })
const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    //Add a Container here
    // <Container>
      <Row className="d-flex">
        {device.brands.map((brand) => (
          //Add a Col here
          <Col>
            <Card
              style={{ cursor: 'pointer' }}
              key={brand.id}
              className="p-2 align-items-center"
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
              {brand.name}
            </Card>
          </Col>
        ))}
      </Row>
    // </Container>
  );
});

export default BrandBar;
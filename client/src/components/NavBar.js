import React, { useContext } from 'react';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Container, Button, Navbar, Nav} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'


const NavBar = observer ( () => {
  const {user} = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>NetStore</NavLink>
            {user.isAuth?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} >Admin</Button>
            <Button variant={"outline-light"} className="ms-2">Enter</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorize</Button>
          </Nav> 
          }
      </Container>
    </Navbar>
  )
})

export default NavBar;
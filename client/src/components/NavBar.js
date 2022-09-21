import React, { useContext } from 'react';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Container, Button, Navbar, Nav} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router';

const NavBar = observer ( () => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>NetStore</NavLink>
            {user.isAuth?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)} >Admin</Button>
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className="ms-2">Exit</Button>
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
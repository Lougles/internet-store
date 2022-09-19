import React from "react";
import { Container, Form, Card, Button, Row, div} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}>
      <Card style ={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin? "Authorization" : "Registration" }</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..."/>
          <Form.Control className="mt-3" placeholder="Enter your password..."/>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin? 
            <div>
              Don't have account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
            :
            <div>
              Do you have account? <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
            </div>
            }
            <Button className="mt-4" variant="outline-success">{isLogin? "Enter" : "Registration"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
import React, { useContext, useState } from "react";
import { Container, Form, Card, Button, Row} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer (() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {      
      let data;
      if(isLogin){
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data)
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}>
      <Card style ={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin? "Authorization" : "Registration" }</h2>
        <Form className="d-flex flex-column">
          <Form.Control 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="mt-3" 
          placeholder="Enter your email..."
          />
          <Form.Control 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          className="mt-3" 
          placeholder="Enter your password..."
          type="password"
          />
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
            <Button className="mt-4" variant="outline-success" onClick={click}>{isLogin? "Enter" : "Registration"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;
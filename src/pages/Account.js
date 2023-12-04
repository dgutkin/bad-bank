
import { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../utils/context.js';
import Card from '../components/Card.js';

import '../styles/Account.css';

function Account(){
  
  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);

  useEffect(() => {

    setAuth(userCtx.auth);
    setBalance(userCtx.balance);
    
  }, []);

  return (

    <Container fluid id="account-container">

        {
          auth ? (
            <Row>
            <Col>
              <h3>Welcome to Bad Bank.</h3>
              <p>Banking has never been worse.</p>
              <br/>
              <Card
                bgcolor="light"
                txtcolor="dark"
                header="Balance"
                status={status}
                body={balance}
              />
            </Col>
            <Col>
              <Row>
                <Button className="account-button" variant="dark" href="#/deposit/">Deposit</Button>
              </Row>
              <Row>
                <Button className="account-button" variant="dark" href="#/withdraw/">Withdraw</Button>
              </Row>
            </Col>
            </Row>
          ) : (
            <p>Please Login.</p>
          )
        }

    </Container>
  )
}

export default Account;

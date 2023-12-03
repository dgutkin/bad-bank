
import { useEffect, useState, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';

import Logout from '../components/Logout.js';

import { UserContext } from '../utils/context';

function NavBar(){

  const [auth, setAuth] = useState(false);

  const userCtx = useContext(UserContext);

  useEffect(() => {

    setAuth(userCtx.auth);

  }, [userCtx]);

  return(

    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand id="navbar-title" href="#">Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          {auth && 
          <Nav className="me-auto">
              <Nav.Link href="#/account/">Account</Nav.Link>
              <Nav.Link href="#/deposit/">Deposit</Nav.Link>
              <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
              <Nav.Link href="#/seedata/">See Data</Nav.Link>
              <Logout/>
          </Nav>
          }
      </Navbar.Collapse>
    </Container>
    </Navbar>

  );

}

export default NavBar;

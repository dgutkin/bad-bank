
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
      <Navbar.Brand id="navbar-title" href={auth ? "#/account/" : "#"}>Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          {auth && 
          <Nav className="container-fluid me-auto">
              <Nav.Link className="my-auto" href="#/account/">Account</Nav.Link>
              <Nav.Link className="my-auto" href="#/deposit/">Deposit</Nav.Link>
              <Nav.Link className="my-auto" href="#/withdraw/">Withdraw</Nav.Link>
              <Nav.Link className="my-auto" href="#/seedata/">See Data</Nav.Link>
              <Nav.Link className="ms-auto"><Logout id="logout"/></Nav.Link>
          </Nav>
          }
      </Navbar.Collapse>
    </Container>
    </Navbar>

  );

}

export default NavBar;

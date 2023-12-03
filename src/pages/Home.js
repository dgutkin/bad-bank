
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import HomeCarousel from '../components/HomeCarousel.js';

import '../styles/Home.css';

function Home(){

  return (

    <Container fluid id="home-container">
      
      <HomeCarousel/>

      <Container fluid id="home-title-container">
        <Row>
          <Col className="home-title-col" sm={9}>
            <h3>Welcome to Bad Bank!</h3>
            <p>Manage your money without confidence.</p>
          </Col>
          <Col sm={3}>
            <Row className="home-button-row">
              <Button variant="dark" href="#/login">
                Login
              </Button>
            </Row>
            <Row className="home-button-row">
              <Button variant="dark" href="#/createaccount">
                Create Account
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
      

    </Container>
     
  );
  
}

export default Home;


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../styles/Home.css';

function Home(){

  return (

    <Container id="home-container">
      
      <Row>
        <Col className="home-title-col">
          <h3>Welcome to Bad Bank!</h3>
          <p>Manage your money without confidence.</p>
        </Col>
        <Col>
          <Row className="home-button-row">
            <Button href="#/login">
              Login
            </Button>
          </Row>
          <Row className="home-button-row">
            <Button href="#/createaccount">
              Create Account
            </Button>
          </Row>
        </Col>
      </Row>

    </Container>
     
  );
  
}

export default Home;

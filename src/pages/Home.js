
import Button from 'react-bootstrap/Button';
import Card from '../components/Card.js';

function Home(){

  return (
    <div className="home-container">
      <Card
      txtcolor="black"
      header="Bad Bank Home"
      title="Welcome to the bank!"
      text="Manage your money without confidence."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />   
      <Button href="#/createaccount">
        Create Account
      </Button>
      <Button href="#/login">
        Login
      </Button>
    </div>
     
  );
  
}

export default Home;

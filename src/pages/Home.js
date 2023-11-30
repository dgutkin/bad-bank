
import Card from '../components/Card.js';

function Home(){

  return (
    <Card
      txtcolor="black"
      header="Bad Bank Home"
      title="Welcome to the bank!"
      text="Manage your money without confidence."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );
  
}

export default Home;

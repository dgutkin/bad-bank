
import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';

import { UserData, UserDataDispatch } from '../utils/context';

import Card from '../components/Card.js';

import '../styles/CreateAccount.css';

function CreateAccount(){
  
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const userData = useContext(UserData);
  const dispatch = useContext(UserDataDispatch);

  function validate(field, label){

      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
      }

      return true;

  }

  function handleCreate(){

    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    const userObj = {name, email, password, balance: 0};
    console.log(userData);
    if (userData.users.includes(userObj)) {
      alert('User already exists!');
    } else {
      dispatch({type: 'added', userData: userObj});
      setShow(false);
    }

  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    // use useNavigate to have the Login direct to #/login/
    <Container fluid id="create-account-container">
      <Card
        bgcolor="dark"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                <p>Name</p>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                <p>Email Address</p>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                <p>Password</p>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success</h5><br/>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                <button className="btn btn-light" href="#/login/">Login</button>
                </>
              )}
      />
    </Container>
    
  )
}

export default CreateAccount;

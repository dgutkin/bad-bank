
import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

import { UserData, UserDataDispatch } from '../utils/context';

import Card from '../components/Card.js';

import '../styles/CreateAccount.css';

function CreateAccount(){
  
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userData = useContext(UserData);
  const dispatchData = useContext(UserDataDispatch);

  const navigate = useNavigate();

  function validate(field, label){
      
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
      } else if ((label == 'email') && (!field.includes('@') || !field.includes('.com'))){
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
    
    if (userData.users.reduce((accum, current) => {return accum || (current.email === email)}, false)) {
      alert('User already exists!');
      clearForm();
    } else {
      dispatchData({type: 'added', userData: userObj});
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
    
    <Container fluid id="create-account-container">
      <Card
        bgcolor="dark"
        header="Create Account"
        status={status}
        body={show ? (  
                <div>
                <p>Name</p>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                <p>Email Address</p>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                <p>Password</p>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </div>
              ):(
                <div>
                  <h5>New account created</h5><br/>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                  <button className="btn btn-light" onClick={() => {navigate("/login/")}}>Login</button>
                </div>
              )}
      />
    </Container>
    
  )
}

export default CreateAccount;

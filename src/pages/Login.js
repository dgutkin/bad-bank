
import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { UserData, UserContextDispatch } from '../utils/context';

import Card from '../components/Card.js';

import '../styles/Login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const { users } = useContext(UserData);
  const dispatch = useContext(UserContextDispatch);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleLogin = () => {
    
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    let user = users.filter((u) => {return u.email === email})[0];
    if (!user) {
      alert('Username does not exist, create a new account.');
      return;
    }
    
    if (user.password === password) {

      const userDetails = {name: user.name, email: user.email, password: user.password, balance: user.balance, auth: true};
      
      dispatch({
        type: 'changed',
        user: userDetails
      });

      navigate("/account/");

    } else {

      setStatus("Cannot authenticate.");

    }

  }

  return (

    <Container fluid id="login-container">
      <Card
        bgcolor="dark"
        header="Login"
        status={status}
        body={
          <div>
            Email address<br/>
            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin} role="login-button">Login</button>
          </div>
        }
      />
    </Container>

  );
}

export default Login;

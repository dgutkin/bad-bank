
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { UserData, UserContext, UserDispatchContext } from '../utils/context';

import Card from '../components/Card.js';

import '../styles/Login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const { users } = useContext(UserData);
  const userCtx = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {

    //setAuth(ctx.users.reduce((accum, e) => {return (accum || e.auth)}, false));
    setAuth(userCtx.auth)

  }, []);

  const handleLogin = () => {
    
    let user = users.filter((u) => {return u.email == email})[0];
    
    if (user.password === password) {

      setAuth(true);
      
      const userDetails = {name: user.name, email: user.email, password: user.password, balance: user.balance, auth: true};
      
      dispatch({
        type: 'changed',
        user: userDetails
      });

      navigate("/account/");

    } else {

      setStatus("Login failed");

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
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
          </div>
        }
      />
    </Container>

  );
}

export default Login;


import React from 'react';

import { UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Login(){

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [auth, setAuth] = React.useState(false);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {

    setAuth(ctx.users.reduce((accum, e) => {return (accum || e.auth)}, false));

  }, []);

  const handleLogin = () => {
    
    let user = ctx.users.filter((u) => {return u.email == email})[0];
    
    if (user.password === password) {
      setAuth(true);
      ctx.users.map((e) => {
        if (e.email === email)
          e.auth = true;
      });
    } else {
      setStatus("Login failed");
    }

  }

  return (

    <Card
      bgcolor="dark"
      header="Login"
      status={status}
      body={!auth ? (
        <>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>You're logged in.</>
      )}
    />

  );
}

export default Login;

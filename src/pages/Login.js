
import { useState, useContext, useEffect } from 'react';

import { UserData, UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [auth, setAuth] = useState(false);

  const { users } = useContext(UserData);
  const { userCtx, setUserCtx } = useContext(UserContext);

  useEffect(() => {

    //setAuth(ctx.users.reduce((accum, e) => {return (accum || e.auth)}, false));
    setAuth(userCtx.auth)

  }, []);

  const handleLogin = () => {
    
    let user = users.filter((u) => {return u.email == email})[0];
    
    if (user.password === password) {
      setAuth(true);
      // ctx.users.map((e) => {
      //   if (e.email === email)
      //     e.auth = true;
      // });
      // ctx.push({
      //   name: user.name, 
      //   email: user.email, 
      //   password: user.password, 
      //   balance: user.balance, 
      //   auth: true
      // });
      const userDetails = {name: user.name, email: user.email, password: user.password, balance: user.balance, auth: true};
      console.log(userCtx);
      setUserCtx(userDetails);
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

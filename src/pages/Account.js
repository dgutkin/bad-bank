
import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../utils/context.js';
import Card from '../components/Card.js';

function Account(){
  
  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);

  useEffect(() => {

    setAuth(userCtx.auth);
    setBalance(userCtx.balance);
    
  }, []);

  return (
    <Card
      bgcolor="dark"
      header="Account"
      status={status}
      body={auth ? (
        <>
          Current Balance<br/>
          <p>{balance}</p>
        </>
      ) : (
        <>You're not logged in.</>
      )}
    />
  )
}

export default Account;

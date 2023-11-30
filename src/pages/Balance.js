
import React from 'react';

import { UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Balance(){

  const [status, setStatus] = React.useState('');
  const [auth, setAuth] = React.useState(false);
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {

    setAuth(ctx.users.reduce((accum, e) => {return accum || e.auth}, false));
    ctx.users.map((e) => {
      if (e.auth)
        setBalance(e.balance);
    });
    
  }, []);

  return (
    <Card
      bgcolor="dark"
      header="Balance"
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

export default Balance;

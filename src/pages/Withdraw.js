
import React from 'react';

import { UserContext } from '../utils/context';
import Card from '../components/Card.js';

function Withdraw(){

  const [status, setStatus] = React.useState('');
  const [auth, setAuth] = React.useState(false);
  const [withdrawal, setWithdrawal] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {

    setAuth(ctx.users.reduce((accum, e) => {return accum || e.auth}, false));
    ctx.users.map((e) => {
      if (e.auth)
        setBalance(e.balance);
    });
    
  }, []);

  const validate = (field, label) => {
    if (!field || field <= 0 || field > balance) {
      setStatus("invalid withdrawal");
      setTimeout(() => {return setStatus('');}, 3000);
      return false;
    }
    return true;
  }

  const handleConfirm = () => {

    if (!validate(withdrawal, 'withdrawal')) return;

    ctx.users.map((e) => {
      if (e.auth)
        e.balance = Number(e.balance) - Number(withdrawal);
        setBalance(e.balance);
    });

  }

  return (
    
    <Card
      bgcolor="dark"
      header="Withdraw"
      status={status}
      body={auth ? (
        <>
          Current Balance<br/>
          <p>{balance}</p>
          Withdrawal Amount<br/>
          <input type="input" className="form-control" id="withdrawal" placeholder="Enter withdrawal" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleConfirm}>Confirm</button>
        </>
      ) : (
        <>You're not logged in.</>
      )}
    />

  )
}

export default Withdraw;

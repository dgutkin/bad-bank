
import { useState, useContext, useEffect } from 'react';

import { UserContext, UserDispatchContext } from '../utils/context';
import Card from '../components/Card.js';
import Logout from '../components/Logout.js';

function Withdraw(){

  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [withdrawal, setWithdrawal] = useState(0);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {

    setAuth(userCtx.auth);
    setBalance(userCtx.balance);
    
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

    setBalance(balance - Number(withdrawal));

    const updatedUser = {...userCtx, balance: Number(userCtx.balance) - Number(withdrawal)}
    dispatch({
      type: "changed",
      user: updatedUser
    });

  }

  return (
    
    <div id="withdraw-container">
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
    <Logout/>
    </div>

  );
}

export default Withdraw;

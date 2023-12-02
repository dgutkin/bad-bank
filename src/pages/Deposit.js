
import { useState, useEffect, useContext } from 'react';

import { UserContext, UserDispatchContext } from '../utils/context';
import Card from '../components/Card.js';
import Logout from '../components/Logout.js';

function Deposit(){

  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {

    setAuth(userCtx.auth);
    setBalance(userCtx.balance);
    
  }, []);

  const validate = (field, label) => {

    if (!field || field <= 0) {
      setStatus("invalid deposit");
      setTimeout(() => {return setStatus('');}, 3000);
      return false;
    }
    return true;

  }

  const handleConfirm = () => {

    if (!validate(deposit, 'deposit')) return;

    setBalance(balance + Number(deposit));

    const updatedUser = {...userCtx, balance: Number(userCtx.balance) + Number(deposit)}
    dispatch({
      type: "changed",
      user: updatedUser
    });

  }

  return (
    
    <div id="deposit-container">
    <Card
      bgcolor="dark"
      header="Deposit"
      status={status}
      body={auth ? (
        <>
          Current Balance<br/>
          <p>{balance}</p>
          Deposit Amount<br/>
          <input type="input" className="form-control" id="deposit" placeholder="Enter deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleConfirm}>Confirm</button>
        </>
      ) : (
        <>You're not logged in.</>
      )}
    />
    <Logout/>
    </div>

  )
}

export default Deposit;

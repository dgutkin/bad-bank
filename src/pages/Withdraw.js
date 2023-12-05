
import { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { UserContext, UserContextDispatch, UserData, UserDataDispatch } from '../utils/context';
import Card from '../components/Card.js';

import '../styles/Withdraw.css';

function Withdraw(){

  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [withdrawal, setWithdrawal] = useState(0);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);
  const dispatch = useContext(UserContextDispatch);
  const { users } = useContext(UserData);
  const dispatchData = useContext(UserDataDispatch);

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

    const updatedUsers = users.map((item) => {if (item.email === userCtx.email) return {...item, balance: updatedUser.balance}});
    dispatchData({
      type: "changed",
      userData: {users: updatedUsers}
    })

  }

  return (
    
    <Container id="withdraw-container">

      {auth ? (
      <Row>
        <Col>
          <Card
            bgcolor="light"
            txtcolor="dark"
            header="Balance"
            body={balance}
          />
        </Col>
        <Col>
          <Card
            bgcolor="dark"
            header="Withdraw"
            status={status}
            body={(
              <>
                Withdraw Amount<br/>
                <input type="input" className="form-control" id="withdraw" placeholder="Enter withdrawal" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleConfirm}>Confirm</button>
              </>)}
          />
        </Col>
      </Row>
      ) : (
        <p>Please login.</p>
      )}

    </Container>

  );
}

export default Withdraw;

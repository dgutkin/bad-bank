
import { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { UserContext, UserDataDispatch, UserData, UserContextDispatch } from '../utils/context';
import Card from '../components/Card.js';

import '../styles/Deposit.css';

function Deposit(){

  const [status, setStatus] = useState('');
  const [auth, setAuth] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(0);

  const userCtx = useContext(UserContext);
  const dispatch = useContext(UserContextDispatch);
  const { users } = useContext(UserData);
  const dispatchData = useContext(UserDataDispatch);

  useEffect(() => {

    setAuth(userCtx.auth);
    setBalance(userCtx.balance);
    
  }, [userCtx]);

  const validate = (field, label) => {

    if (!field || field <= 0 || !/\d+\.\d\d/.test(field)) {
      setStatus("invalid deposit, please input a number with two decimals");
      setTimeout(() => {return setStatus('');}, 3000);
      return false;
    }
    return true;

  }

  const handleConfirm = () => {

    if (!validate(deposit, 'deposit')) return;

    alert(`Successful deposit for $${deposit}.`);

    setBalance(balance + Number(deposit));

    const updatedUser = {...userCtx, balance: Number(userCtx.balance) + Number(deposit)}

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
    
    <Container id="deposit-container">
      {auth ? (
      <Row>
        <Col>
          <Card
            bgcolor="light"
            txtcolor="dark"
            header="Balance"
            body={'$' + balance.toFixed(2)}
          />
        </Col>
        <Col>
          <Card
            bgcolor="dark"
            header="Deposit"
            status={status}
            body={(
              <>
                Deposit Amount<br/>
                <input type="input" pattern="\d+\.\d\d" className="form-control" id="deposit" placeholder="Enter deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleConfirm}>Confirm</button>
              </>)}
          />
        </Col>
      </Row>
      ) : (
        <p>Please login.</p>
      )}
    </Container>

  )
}

export default Deposit;

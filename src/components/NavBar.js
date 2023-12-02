
import { useEffect, useState, useContext, useRef } from 'react';

import '../styles/NavBar.css';

import { UserContext } from '../utils/context';

function NavBar(){

  const [auth, setAuth] = useState(false);

  const { userCtx, setUserCtx } = useContext(UserContext);

  //const loggedIn = users.reduce((accum, e) => {return accum || e.auth}, false)

  useEffect(() => {

    setAuth(userCtx.auth);

  }, [userCtx]);

  return(
    <>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="#">Bad Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {auth &&
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/logout/">Logout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
        }
      </div>
    </nav>
    </>
  );

}

export default NavBar;

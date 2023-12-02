
import { useEffect, useState, useContext } from 'react';

import '../styles/NavBar.css';

import { UserContext } from '../utils/context';

function NavBar(){

  const [auth, setAuth] = useState(false);

  const userCtx = useContext(UserContext);

  useEffect(() => {

    setAuth(userCtx.auth);

  }, [userCtx]);

  return(

    <div id="nav-container">
      <nav className="navbar navbar-expand navbar-light bg-light">

        <a className="navbar-brand" href="#">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {auth &&
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/account/">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
          </ul>
          }
        </div>
        
      </nav>
    </div>
  );

}

export default NavBar;

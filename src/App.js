
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import { UserData, UserContext } from './utils/context.js';

import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import CreateAccount from './pages/CreateAccount.js';
import Login from './pages/Login.js';
import Deposit from './pages/Deposit.js';
import Withdraw from './pages/Withdraw.js';
import Balance from './pages/Balance.js';
import Logout from './pages/Logout.js';
import AllData from './pages/AllData.js';
//have context for all users (function as a DB that create account can push to)
// have separately user context for the logged in user
// the login page can retrieve the relevant name and set the specific individual
function App() {

  const [userCtx, setUserCtx] = useState({
    name: "",
    email: "",
    password: "",
    balance: 0,
    auth: false
  });

  return (

    <HashRouter>

      <UserData.Provider value={
          {users:[
            {name:'dan',
            email:'dan@mail.com',
            password:'secret',
            balance:0}]
          }}>
        <UserContext.Provider value={ { userCtx, setUserCtx } }>
          
          <NavBar/>

          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createaccount/" element={<CreateAccount/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/balance/" element={<Balance/>} />
            <Route path="/logout/" element={<Logout/>} />
            <Route path="/alldata/" element={<AllData/>} />
          </Routes>

        </UserContext.Provider>
        
      </UserData.Provider>

    </HashRouter>

  );

}

export default App;

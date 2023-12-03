
import { useReducer } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import { UserData, UserDataDispatch, UserContext, UserDispatchContext } from './utils/context.js';

import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import CreateAccount from './pages/CreateAccount.js';
import Login from './pages/Login.js';
import Account from './pages/Account.js';
import Deposit from './pages/Deposit.js';
import Withdraw from './pages/Withdraw.js';
import SeeData from './pages/SeeData.js';


function App() {

  const initialUser = {
    name: "",
    email: "",
    password: "",
    balance: 0,
    auth: false
  }

  const initialUserData = {
    users: [{
      name: 'dan',
      email: 'dan@mail.com',
      password: 'secret',
      balance: 0
    }]
  }

  const [user, dispatch] = useReducer(userReducer, initialUser);
  const [userData, dispatchData] = useReducer(userDataReducer, initialUserData);

  return (

    <HashRouter>

      <UserData.Provider value={userData}>

        <UserDataDispatch.Provider value={dispatchData}>

          <UserContext.Provider value={user}>

            <UserDispatchContext.Provider value={dispatch}>

              <NavBar/>

              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/createaccount/" element={<CreateAccount/>} />
                <Route path="/login/" element={<Login/>} />
                <Route path="/account/" element={<Account/>} />
                <Route path="/deposit/" element={<Deposit/>} />
                <Route path="/withdraw/" element={<Withdraw/>} />
                <Route path="/seedata/" element={<SeeData/>} />
              </Routes>

            </UserDispatchContext.Provider>

          </UserContext.Provider>

        </UserDataDispatch.Provider>
        
      </UserData.Provider>

    </HashRouter>

  );

}

function userReducer(user, action) {

  switch(action.type) {

    case 'changed': {
      return action.user;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }

  }

}

function userDataReducer(userData, action) {
  console.log("dispatch");
  switch(action.type) {

    case 'changed':
      return action.userData;

    case 'added':
      let users = userData.users;
      users = [...users, action.userData];
      return {users: users}

    default: 
      throw Error("Unknown action: " + action.type);
      
  }

}

export default App;

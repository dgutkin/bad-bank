
import {HashRouter, Routes, Route} from 'react-router-dom';

import './styles/App.css';

import NavBar from './components/NavBar.js';
import {UserContext} from './utils/context.js';

import Home from './pages/Home.js';
import CreateAccount from './pages/CreateAccount.js';
import Login from './pages/Login.js';
import Deposit from './pages/Deposit.js';
import Withdraw from './pages/Withdraw.js';
import Balance from './pages/Balance.js';
import Logout from './pages/Logout.js';
import AllData from './pages/AllData.js';

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'dan',email:'dan@mail.com',password:'secret',balance:0,auth:false}]}}>
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
    </HashRouter>
  );
}

export default App;

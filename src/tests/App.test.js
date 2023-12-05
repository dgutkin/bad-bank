
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {HashRouter } from 'react-router-dom'

import {UserContext, UserContextDispatch, UserData, UserDataDispatch } from '../utils/context.js';
import App from '../App';
import Login from '../pages/Login';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';

describe('The landing page', () => {

  test('renders welcome message', () => {
    render(<App/>);
    const welcomeMessage = screen.getByText("Welcome to Bad Bank!");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(<App/>);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  test('renders create account button', () => {
    render(<App/>);
    const createAccountButton = screen.getByText("Create Account");
    expect(createAccountButton).toBeInTheDocument();
  });

  test('renders carousel images', () => {
    render(<App/>);
    const carouselImageMoney = screen.getByAltText("money");
    expect(carouselImageMoney).toHaveAttribute('src', '/money.jpeg');

    const carouselImageChart = screen.getByAltText("chart");
    expect(carouselImageChart).toHaveAttribute('src', '/stock_chart.jpeg');
  });

});

describe('The login form', () => {

  const userContext = {
    name: "",
    email: "",
    password: "",
    balance: 0,
    auth: false
  }

  const userData = {
    users: [{
      name: 'dan',
      email: 'dan@mail.com',
      password: 'secret',
      balance: 0
    }]
  }

  test('validates empty fields', () => {

    const {getByRole} = render(
      <HashRouter>
      <UserData.Provider value={userData}>
          <UserContext.Provider value={userContext}>
            <Login/>
          </UserContext.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    fireEvent.click(getByRole("login-button"));
    expect(screen.queryByText("Balance")).toBeNull();

  });

  test('validates non registered user', async () => {

    const {getByRole} = render(
      <HashRouter>
      <UserData.Provider value={userData}>
          <UserContext.Provider value={userContext}>
            <Login/>
          </UserContext.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    fireEvent.type(screen.getByPlaceholderText("Enter email"), "alex@mail.com");
    fireEvent.type(screen.getByPlaceholderText("Enter password"), "secret");
    await userEvent.click(getByRole("login-button"));

    expect(screen.queryByText("Balance")).toBeNull();

  });

});

describe('The deposit page', () => {

  const userContext = {
    name: "",
    email: "",
    password: "",
    balance: 0,
    auth: false
  }

  const userData = {
    users: [{
      name: 'dan',
      email: 'dan@mail.com',
      password: 'secret',
      balance: 0
    }]
  }

  test('renders a message to login if not logged in', () => {

    render(
      <HashRouter>
      <UserData.Provider value={userData}>
          <UserContext.Provider value={userContext}>
            <Deposit/>
          </UserContext.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    expect(screen.getByText("Please login.")).toBeInTheDocument();
  
  });

  test('updates balance on deposit', async () => {

    const userContextLoggedIn = {...userContext, auth: true};
    const dispatch = jest.fn();
    const dispatchContext = jest.fn();

    render(
      <HashRouter>
      <UserData.Provider value={userData}>
        <UserDataDispatch.Provider value={dispatch}>
          <UserContext.Provider value={userContextLoggedIn}>
            <UserContextDispatch.Provider value={dispatchContext}>
              <Deposit/>
            </UserContextDispatch.Provider>
          </UserContext.Provider>
        </UserDataDispatch.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    expect(screen.getByText("Balance")).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText("Enter deposit"), "010");
    await userEvent.click(screen.getByText("Confirm"));

    expect(screen.getByText("10")).toBeInTheDocument();

  });

});

describe('The withdraw page', () => {

  const userContext = {
    name: "",
    email: "",
    password: "",
    balance: 10,
    auth: false
  }

  const userData = {
    users: [{
      name: 'dan',
      email: 'dan@mail.com',
      password: 'secret',
      balance: 0
    }]
  }

  test('renders a message to login if not logged in', () => {

    render(
      <HashRouter>
      <UserData.Provider value={userData}>
          <UserContext.Provider value={userContext}>
            <Withdraw/>
          </UserContext.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    expect(screen.getByText("Please login.")).toBeInTheDocument();
  
  });

  test('updates balance on withdrawal', async () => {

    const userContextLoggedIn = {...userContext, auth: true};
    const dispatch = jest.fn();
    const dispatchContext = jest.fn();

    render(
      <HashRouter>
      <UserData.Provider value={userData}>
        <UserDataDispatch.Provider value={dispatch}>
          <UserContext.Provider value={userContextLoggedIn}>
            <UserContextDispatch.Provider value={dispatchContext}>
              <Withdraw/>
            </UserContextDispatch.Provider>
          </UserContext.Provider>
        </UserDataDispatch.Provider>
      </UserData.Provider>
      </HashRouter>
    );

    expect(screen.getByText("Balance")).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText("Enter withdrawal"), "010");
    await userEvent.click(screen.getByText("Confirm"));

    expect(screen.getByText("0")).toBeInTheDocument();

  });

});

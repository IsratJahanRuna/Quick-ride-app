import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>  {loggedInUser.name}</p> */}

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <PrivateRoute path="/destination/:vehicleName">

            <Destination></Destination>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}


export default App;


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
import SelectRide from './components/Login/SelectRide/SelectRide';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:vehicleName/:id">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <SelectRide></SelectRide>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
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

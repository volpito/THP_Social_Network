import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <main>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/register" >
            <Register />
          </Route>
        </Switch>
      </main>
    </Router>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


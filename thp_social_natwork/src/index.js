import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import store from './Components/redux/store';



const App = () => {
  
  return (
    <>
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <>
              <h1>Welcome on My Social Network.</h1> 
              <p>This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
            </>
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


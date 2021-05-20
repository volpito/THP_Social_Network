import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";


const Profile = () => {

  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/login");
  }

  const [user, setUser] = useState(0);
  useEffect (() => {
    fetch('http://localhost:1337/users/me', {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${Cookies.get('tokenLogin')}`, 
      'Content-Type': 'application/json'
    }})
    .then((response) => response.json())
    .then((response) => setUser(response))
    .catch((error) => {
      console.log('error')})
  }, [])  

  if (Cookies.get('tokenLogin')) {
    return (
      <>
      <h1>Profile</h1>
      <p>UserName : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Description : {user.description}</p>
      </>
    )}
  else {
    return (
      <>
      <h1>Profile</h1>
      <p>Connectez-vous chenapan !</p>
      <button
            onClick={handleRoute}>
              Connectez-vous !
          </button>      </>
    )}
  }

export default Profile;



/*
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Components/redux/index';
import { login } from '../../Components/redux/index';

const Profile = () => {
  
  const onRegister = () => {
    dispatch(register())
  }
  const onLogin = () => {
    dispatch(login())
  }

  const pastas = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="profile">
      <h1>{ pastas }</h1>
      <button onClick= {onRegister}>registered</button>
      <button onClick= {onLogin}>logged</button>
    </div>
  );
};

export default Profile; */
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'

// pages/Home/index.jsx
const Home = () => {

  const [post, setPost] = useState(0);
  const [count, setCount] = useState(0);
  const [newPost, setNewPost] = useState(0);

  const postPost = (event) =>{ 
    fetch('http://localhost:1337/posts/', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${Cookies.get('tokenLogin')}`, 
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ text: event.target.value, user: "volpito"})})
    window.location.reload();
  }

  const onClick = () => {
    console.log("clic")
  }

    useEffect (() => {
      fetch('http://localhost:1337/posts', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('tokenLogin')}`, 
        'Content-Type': 'application/json'
      }, body: JSON.stringify()})
      .then((response) => response.json())
      .then((response) => setPost(response.map(a => 
      <div id={a.id} key={a.id}>Auteur: {a.user.username}
      <br/>
      Contenu : {a.text}
      <br/>
      Nombre de likes: {a.like}
      <br/>
      Créé le: {a.user.created_at}    
      <br/>
      <button onClick={onClick}>Découvrir son profil</button>    
      <br/><br/>
      </div>)))
    }, [])  
    
  useEffect (() => {
    fetch('http://localhost:1337/posts/count', {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${Cookies.get('tokenLogin')}`, 
      'Content-Type': 'application/json'
    }, body: JSON.stringify()})
    .then((response) => response.json())
    .then((response) => setCount(response))
  }, [])  

return (
  <div>  
  <p>Nombre total de posts : {count}</p>
  <input type="text" id="fname" name="fname"></input>
  <button onClick={postPost} >Laissez un message</button>  
  <br />
  <br />
  <>{post}</>
  </div>
)}


export default Home;
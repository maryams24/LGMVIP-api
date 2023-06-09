import React,{ useState} from 'react';

import './App.css';
const App=() =>{
  const[users, setUser]=useState([]);


const loadUsers= async() =>{
  console.log('before');
  const response= await fetch("https://api.github.com/users");
  const jsonresponse=await response.json();
  setUser(jsonresponse);
};

  return(
<div className='App'>
   <h1>Welcome Students!</h1>
   <h3>Checkout GitHub Profiles.</h3>
   <button onClick={loadUsers}>Get Data</button>
   <h2> Id, Followers</h2>
   <ul>
   {users.map(({ id,login, followers_url})=> (

    <li key={id}>  
    Id: {id}
    <br/>
  Login: {login}
  <br/>
  Followers: {followers_url}
 </li>

   ))}
 
   </ul> 
   </div>
  );
};


export default App;

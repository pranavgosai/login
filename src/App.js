import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [form, setForm] = useState({});
  const [users, setUSers] = useState([]);

  const handleFrom = (e) =>{
      
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
  const res = await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
   })
 const data = await res.json();
console.log(data);
  }

 const getUsers = async ()=>{
  const res = await fetch('http://localhost:8080/demo',{
    method:'GET',
   })
 const data = await res.json();
 setUSers(data);
 }

 useEffect(()=>{
    getUsers();
 },[])
  return (
    <>
    <form onSubmit={handleSubmit}>
  
        <spne>username</spne>
        <input type="text" name="username" onChange={handleFrom} ></input>
        <spne>password</spne>
        <input type="text" name="password"  onChange={handleFrom}></input>
        <input type="submit" ></input>
      </form>
      <div>
        <ul>
         {users.map(user=><li key={user._id} >{user.username}</li>)}
        </ul>
      </div>
      </>

      
   
  )
}

export default App;


import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
   let [user,setUser] = useState({name:'',email:'',password:''})
  function submitFunc(){
    console.log(user);
  }
  return (
    <div>
        <form onSubmit={submitFunc}>
        
        <label>Name</label>
        <input type='text' placeholder='Name' 
        onChange={(e)=>setUser({...user, name: e.target.value})} />
        
        <label>Email</label>
        <input type='email' placeholder='Email' 
        onChange={(e)=>setUser({...user, email: e.target.value})} />
        
        <label>Password</label>
        <input type='password' placeholder='Password' 
        onChange={(e)=>setUser({...user, password: e.target.value})} />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default App

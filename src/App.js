// import styled from "styled-components"
import "./App.css"
import Error from "./ErrorSide"
import {useState} from"react"
import UserList from"./AddUser"

const App = ()=>
{
  const [users,setusers] = useState([]);
  const [userName,setUserName] = useState("")
  const [userAge,setUserAge] = useState("")
  const [display,setdisplay] = useState({
    display:"none"
  })
  const [detail,setdetail] = useState("")
  
  const handleAddUser = (event)=>
  {
    event.preventDefault();
    if(userAge=="" || userName == "" || +userAge<0 )
    {
      setdisplay({
        display:"block"});
      if(userAge=="" && userName == "")
        setdetail(`User should have a name and User Age can't be below zero years`)
      else
      {
          if(userAge<0 || userAge==="")
            setdetail(`User Age not defined`)
          else 
            setdetail(`User should have a name`)
      }
      return
    } 
    setusers([{
      key:users.length+1,
      name: userName,
      age:userAge
    },
  ...users])

  }
  const resetDisplay = ()=>setdisplay({
    display:"none"})

  const handleUserName = (event)=>
  {
    setUserName(event.target.value)
  }

  const handleUserAge = (event)=>
  {
    event.preventDefault()
    // console.log("handleUserAge")
    // console.log(event.target.value)
   if(+event.target.value>=0)
        setUserAge(event.target.value)    
  }

    // const Button = styled.button` `
    return(
      <>
        <form onSubmit = {handleAddUser}>
          <h2>UserName</h2>
          <input type="textinput"  placeholder="Name"  value = {userName} onChange={handleUserName}/>
          <h2>Age(Years)</h2>
          <input type="input"   placeholder="Age" value = {userAge} onChange={handleUserAge} />
          <button type="submit">Add User</button>
        </form>
        <UserList users = {users}/>
        <Error display ={display} resetDisplay = {resetDisplay} detail = {detail}/>
      </>
    );
}

export default App




/* 
  const Button = styled.button`
      
      background-color: darkred;
      color: white;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      height: 3rem;
      width: 8rem;
      font-size:17px;
      font-family: cursive;
      margin-top: 13px;
    
    &:hover{
      background-color:white;
      color: darkred;
      border:2px solid darkred;
    }

    &:active,&:focus
    {
      outline: none;
    }  

    &:active
    {
      outline: none;
      background-color: darkred;
      color: white;
    }  
  `
  const Form = styled.div
  `
    box-sizing:border-box;
    width: 50%;
    border: 2px solid grey;
    border-raius: 3px;
    box-shadow: 2px 2px 5px grey
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 2rem;
    padding: 5px;

    input{
      font-size:17px;
      display:block;
      height:2rem;
      padding:3px;
      width:98%
    }
  `
  */
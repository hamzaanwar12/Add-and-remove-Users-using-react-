import styled from "styled-components"
import "./ErrorSide.css"
import { useState } from "react";
const ErrorSide = (props)=>
{
    // const [display,setDisplay] = useState(props.display)

    const Button = styled.button`
      
    background-color: darkred;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 2.5rem;
    width: 5rem;
    font-size:13px;
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
 
    const handleErrorSubmit = (event)=>
    {
        event.preventDefault();
        props.resetDisplay()        
    }
    
    return(
        <div className="error" style={props.display}>
        <form className="errorTitle" onSubmit={handleErrorSubmit}>
            <h2>SomeThing went Wrong</h2>
            <h3>{props.detail}</h3>
            <Button type="submit">Ok</Button>
        </form>
        </div>
    );
}

export default ErrorSide
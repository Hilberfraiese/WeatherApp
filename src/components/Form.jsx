import React from 'react';
import Estilo from "./Card.module.css";


export default function  Form() {
  
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {   
    e.preventDefault (); 
    console.log(input)
    alert ("Ha enviado el formulario"); 
  } 
  

  return (
    <form   onSubmit={handleSubmit}  >
     <div className = {Estilo.Card}>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
        type="text" name="username" onChange={handleInputChange} value={input.username} />
        {errors.username && (
           <p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label>Password:</label>
        <input  className={errors.password && 'danger'}
         type="password" name="password"  onChange={handleInputChange} value={input.password}/>
         {errors.password && (
            <p className="danger">{errors.password}</p>)}
      </div>
      <div>
        <button type="submit">Submit</button> 
      </div>
     </div>
    </form>
    
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  
  return errors;

};
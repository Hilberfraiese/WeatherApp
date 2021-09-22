import React from 'react';
import Estilo from "./Card.module.css";
import {AiOutlineClose} from "react-icons/ai";
import  { Link } from 'react-router-dom';


export default function Card ({min, max, name, img, onClose, id}) {
    
  return (
    <>
    
     <div class = {Estilo.Container}>
       <div class = {Estilo.Card}>
       <button  className = {Estilo.btn}  onClick={onClose}> 
       <AiOutlineClose/>
       </button> 
       <p>
       <h2 className="card-title"> {name}</h2>
       <h3>{max} °c / {min} °c</h3>
       <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="150" height="150"/>
       </p>
       <Link to={`/ciudad/${id}`} className={Estilo.link} ><h6 className="card-title">+info</h6>  </Link> 
       </div>
    </div>
    </>)
  

};


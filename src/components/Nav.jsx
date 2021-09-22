import React from 'react';
import  { Link, Route } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import Estilo from './Nav.module.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className={"navbar-brand"}>
          Weather App
        </span>
      </Link>
      {/* <span className = {Estilo.LinkStyle}>
        <Link to='/form'> 
        Registrate
        </Link>
      </span>    */}
        <SearchBar
          onSearch={onSearch}
        />
      <span className = {Estilo.LinkStyle}>
        <Link to='/about'> 
          About
        </Link>
      </span>   
    </nav>
  );
};


export default Nav;




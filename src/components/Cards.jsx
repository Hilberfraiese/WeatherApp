import React from 'react';
import Estilo from './Cards.module.css';
import './SearchBar.jsx'
import Card from './Card.jsx';


export default function Cards({cities, onClose}) {
    return (
    <div class= {Estilo.direccion}>
        {cities.map(c => 
        <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
          
      </div>
    );
  
  }


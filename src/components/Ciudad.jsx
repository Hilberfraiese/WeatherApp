import React from "react";
import Estilo from "./Ciudad.module.css";


export default function Ciudad({city}) {
   if (city) {
    console.log(city)
    return (
        <div class = {Estilo.Card}>
            <div className={Estilo.Container}>
                <div >
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>  
                <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} width="250" height="250"/>
            </div>
        </div>
    ); }
   else{
    return <h1> Ingrese una ciudad </h1>
   } 
}



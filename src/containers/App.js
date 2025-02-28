import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards';
import About from '../components/About/About';
import City from '../components/City/City';
import Joaquin from '../components/Joaquin/Joaquin';
import swal from 'sweetalert';
import './App.css';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function App(){
  const [cities, setCities] = useState([])

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onSearch(ciudad){
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=en`)
      .then(r => r.json())
      .then((recurso) => {
        if(!cities.find(e => e.id === recurso.id)){
          if(recurso.main !== undefined){
          const ciudad = {
            min: recurso.main.temp_min.toFixed(1),
            max: recurso.main.temp_max.toFixed(1),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            amanecer:recurso.sys.sunrise,
            anochecer: recurso.sys.sunset
          }
          setCities(oldCities => [...oldCities, ciudad])
        }
        else{
          swal({
            title: 'WeatherApp',
            text: 'Ciudad no encontrada',
            icon: 'error',
            button: 'Aceptar',
            timer: '2500'
          })
        }
      } 
      else{
        swal('Esa ciudad ya fue encontrada. Intente con una diferente.')
        swal({
          title: 'WeatherApp',
          text: 'Esta ciudad ya fue encontrada. Intenta con otra!',
          icon: 'warning',
          button: 'Aceptar',
          timer: '2500'
        })
      }    
    })
  }

  function onFilter(ciudadId){
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId))
    if(ciudad.length > 0){
        return ciudad[0]
    } 
    else{
        return null
    }
  }
  return(
    <div className = 'App'>
      <Route
        path = '/'
        render = {() => <Nav onSearch = {onSearch}/>}
      />
      <Route
        exact path = '/Joaquin'
        component = {Joaquin}
      />
      <Route
        exact path = '/CV'
        component = {About}
      />
      <Route
        exact path = '/'
        render = {() => <Cards cities = {cities}  onClose = {onClose} onSearch = {onSearch}/>}
      />
      <Route
        exact path = '/city/:cityId'
        render = {({match}) => <City city = {onFilter(match.params.cityId)}/>}
      />
      <hr />
    </div>
  )
}
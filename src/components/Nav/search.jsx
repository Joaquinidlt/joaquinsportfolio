import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineSearch} from  'react-icons/ai';
import img from '../../img/clima (1).png'

export default function SearchBar({onSearch}){
  const [city, setCity] = useState('')
  return(
    <div className = 'searchNav'>
    <form onSubmit = {(e) => {
      e.preventDefault()
      onSearch(city)
      setCity('')
    }}>
      <div className = 'containerInfoSearch'>Weather App</div>
      <div className = 'input-group mb-3'>
          <input type = '  text' className = 'cityInput' 
                               value = {city}  
                               onChange = {e => setCity(e.target.value)} 
                               placeholder = '  City...' 
                               aria-label = '  City..' 
                               aria-describedby = 'basic-addon2'/>
          <div className = 'input-group-append'>
              <button className = 'btnSearch' type = 'submit'> <AiOutlineSearch/> </button>
          </div>
      </div>  
    </form>      
    </div>

  )
}
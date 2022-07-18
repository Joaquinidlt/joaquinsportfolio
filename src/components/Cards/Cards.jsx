
import React from 'react'
import Card from '../Card/Card'
import Clock from '../Clock/Clock'
import SearchBar from '../Nav/search'
import '../Cards/Cards.css'

export default function Cards({cities, onClose, onSearch}){
  
  return (
    <>
      <SearchBar onSearch = {onSearch}/>
      <div className = 'cards'>
      {cities.length === 0 ? <Clock/>:
      cities.map(c => <Card
          id = {c.id}
          key = {c.id}
          max = {c.max}
          min = {c.min}
          name = {c.name}
          img = {c.img}
          onClose = {() => onClose(c.id)}
        />)}
      </div>
    </>

  )
}

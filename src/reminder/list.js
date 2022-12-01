import React from 'react'
import './list.css'

const list = ({people}) => {
  return (
    <>
    {people.map( (person) => { 
     const {id,name,age,image}=person;
     return (
     <div className="outer">
        <article key={id} className="person">
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            <br/>
          </div>
       </article>
     </div>)
    }
  )}
    </>
  )
}

export default list
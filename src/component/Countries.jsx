import React from 'react'

import { v4 as uuidv4 } from 'uuid';


import Country2 from './Country2';




const Countries = (props) => {
  return (
    <>
      <section>
        {props.countries.map((country) => {
          const countryNew = { country, id: uuidv4() }
          
          return <Country2 {...countryNew} key={countryNew.id}/>
        })}
      </section>
    </>
  )
}

export default Countries;

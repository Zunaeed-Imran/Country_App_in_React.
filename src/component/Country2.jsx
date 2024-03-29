// data display form here

import React from 'react';


const Country2 = (props) => {

  const { country } = props;
  const { name, flags, capital, population, area } = props.country;


  const handleRemove = () => {
    props.onRemoveCountry(name.common);
  };


  return (
    <>
      <article>
        <div>
          <img src={flags.png} alt={name.common} />
          <h3>Name: {name.common}</h3>
          <h3>Capital: {capital}</h3>
          <h3>Population: {population}</h3>
          <h3>Area: {area}</h3>
          <button onClick={() => {
            handleRemove(name.common)
          }}>
            Remove Country
          </button>
        </div>
      </article>
    </>
  );

};

export default Country2;

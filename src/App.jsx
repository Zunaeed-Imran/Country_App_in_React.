import React, { useState, useEffect } from 'react';
import './App.css';

import Countries from './component/Countries';
import Search from './component/Search';

//REST country API url link
const url = 'https://restcountries.com/v3.1/all';

function App() {
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);


  // making function for fetch data using asyn method.
  const fetchData = async url => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setIsloading(false);
      setError(null);
    } catch (error) {
      setIsloading(false);
      setError(error);
    }
  };



  // Using Asyn method in Fetching Data(for that we need to make a function).
  useEffect(() => {
    fetchData(url);
  }, []);


  // making function for remove data.
  const handleRemove = (name) => {
    const filter = filterCountries.filter((countries) =>
      countries.name.common !== name);
    setCountries(filter)
  }

  // making function search data.
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountry = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setFilterCountries(newCountry);
  }


  // we are using props in coutries 
  return (
    <>
      <h1>Country App</h1>

      {isloading && <h2>Loding...</h2>}

      {error && <h2>{error.message}</h2>}

      <Search onSearch={handleSearch} />
      
      {countries && <Countries countries={filterCountries}
        onRemoveCountry={handleRemove} />}
    </>
  );
}

export default App;

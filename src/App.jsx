import React, { useState, useEffect } from 'react';
import './App.css';

import Countries from './component/Countries';

//REST country API url link
const url = 'https://restcountries.com/v3.1/all';

function App() {
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  // making function for fetch data using asyn method.
  const fetchData = async url => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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

  // we are using props in coutries 
  return (
    <>
      <h1>Country App</h1>
      {isloading && <h2>Loding...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={countries} />}
    </>
  );
}

export default App;

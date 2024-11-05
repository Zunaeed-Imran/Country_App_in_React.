import { useEffect, useState } from 'react';
import './App.css';
import Countries from './component/Countries';

const appUrl = 'https://restcountries.com/v3.1/all';

import './Countries.css'; // Optional for styling the pagination


function App() {

  const [country, setCountry] = useState([]);

  const fetchData = async (appUrl) => {
    const response = await fetch(appUrl);
    const data = await response.json();
    setCountry(data);
  }

  useEffect(() => {
    fetchData(appUrl)
  }, [])


  return (
    <div>
      <h1> Hello country app </h1>
      <p>{<Countries countrys={country} />}</p>
    </div>
  );
}

export default App


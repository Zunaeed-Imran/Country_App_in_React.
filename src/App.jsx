import { useState } from "react";

const url = 'https://restcountries.com/v3.1/all';

function App() {

  const [country, setCountry] = useState([]);

  const fetchingData = await fetch(url)

  return (
    <div>
      
    </div>
  )
}

export default App

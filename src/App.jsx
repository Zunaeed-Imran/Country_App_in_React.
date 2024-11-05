import { useState } from "react";

const url = 'https://restcountries.com/v3.1/all';



function App() {

  const [country, setCountry] = useState();

  const fetchAPi = (url) => {
    const response = await fetch(url);
    const data = await response.json(url);
    setCountry(data);
  }

  return (
    <div>
      
    </div>
  )
}

export default App

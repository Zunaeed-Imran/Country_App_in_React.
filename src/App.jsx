import { useState } from "react";

const url = 'https://restcountries.com/v3.1/all';



function App() {

  const [country, setCountry] = useState();

  const fetchAPi = (url) => {
    const response = await country;
    const data = await response.json();
    setCountry(data);
  }

  return (
    <div>
      
    </div>
  )
}

export default App

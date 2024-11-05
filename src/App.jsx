import { useEffect, useState } from "react";
import Countries from "./component/Countries";

const url = 'https://restcountries.com/v3.1/all';



function App() {

  const [country, setCountry] = useState();

  const fetchAPi = (url) => {
    const response = await fetch(url);
    const data = await response.json(url);
    setCountry(data);
  }

  useEffect(() => {
    fetchAPi(url);
  })


  return (
    <div>
      {<Countries country={country} />}
    </div>
  )
}

export default App

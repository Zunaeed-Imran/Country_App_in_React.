// ./component/Countries.js


function Countries({ countryData }) {
  return (
    <div>
      {countryData.map((country, index) => (
        <p key={index}>{country.name.common}</p>
      ))}
    </div>
  );
}

export default Countries;

// ./component/Countries.js

// prop type define.
import PropTypes from 'prop-types';

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

Countries.propTypes = {
  countryData: PropTypes.array,
};
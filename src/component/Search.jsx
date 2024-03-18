import React, { useEffect, useState } from 'react';

const Search = (props) => {

// taking useState  
  const [searchText, setSearchText] = useState('');


// using useEffect for immediately search
  useEffect(() => {
    props.onSearch(searchText)
  }, [searchText]);

// makng a function for change value truck.
  const handleChange = e => {
    setSearchText(e.target.value);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search Country"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

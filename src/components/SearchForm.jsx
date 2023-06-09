// this component is created to reduce all form related logic to separate component from the Home.jsx
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  // below state store which option is selected between shows and actors
  const [searchOptionValue, setSearchOptionValue] = useState('shows');

  // below state is used to store what is in searchbar
  const [searchValue, setSearchValue] = useState('');

  const handleSearchOptionChange = ev => {
    setSearchOptionValue(ev.target.value);
  };

  const handleSearchChange = ev => {
    setSearchValue(() => ev.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    const options = {searchOptionValue,searchValue}
    onSearch(options)
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      <label htmlFor="">
        Shows
        <input
          type="radio"
          name="search-option"
          value={'shows'}
          checked={searchOptionValue === 'shows'}
          onClick={handleSearchOptionChange}
        />
      </label>
      <label htmlFor="">
        Actors
        <input
          type="radio"
          name="search-option"
          value={'actors'}
          checked={searchOptionValue === 'actors'}
          onClick={handleSearchOptionChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

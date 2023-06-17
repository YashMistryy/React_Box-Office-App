// this component is created to reduce all form related logic to separate component from the Home.jsx
import { useState } from 'react';
import { usePersistedState } from '../components/lib/usePersistedState';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  // below state store which option is selected between shows and actors
  const [searchOptionValue, setSearchOptionValue] = useState('shows');

  // below state is used to store what is in searchbar
  const [searchValue, setSearchValue] = usePersistedState();
  // console.log(searchValue)
  const handleSearchOptionChange = ev => {
    setSearchOptionValue(ev.target.value);
  };

  const handleSearchChange = ev => {
    sessionStorage.setItem('search_value', ev.target.value);
    setSearchValue(() => ev.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const options = { searchOptionValue, searchValue };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      
      <CustomRadio
        radio_text={'Shows'}
        name="search-option"
        value='shows'
        checked={searchOptionValue === 'shows'}
        onClick={handleSearchOptionChange}
      />

      <CustomRadio
        radio_text={'Actors'}
        name="search-option"
        value='actors'
        checked={searchOptionValue === 'actors'}
        onClick={handleSearchOptionChange}
      />
     
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

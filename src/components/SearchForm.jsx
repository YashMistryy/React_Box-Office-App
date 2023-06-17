// this component is created to reduce all form related logic to separate component from the Home.jsx
import { useState } from 'react';
import { usePersistedState } from '../components/lib/usePersistedState';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

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
      <SearchInput
        type="text"
        placeholder='enter your mind here..'
        value={searchValue}
        onChange={handleSearchChange}
      />
      <RadiosWrapper>
        <CustomRadio
          radio_text={'Shows'}
          name="search-option"
          value="shows"
          checked={searchOptionValue === 'shows'}
          onClick={handleSearchOptionChange}
        />

        <CustomRadio
          radio_text={'Actors'}
          name="search-option"
          value="actors"
          checked={searchOptionValue === 'actors'}
          onClick={handleSearchOptionChange}
        />
      </RadiosWrapper>
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
};

export default SearchForm;

// below stores the css

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

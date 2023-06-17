// this is build on top of useState which helps us storing the searchValue in session storage so that even if we refresh the page we get the same search value in searchbar

import { useState } from 'react';

const usePersistedState = () => {
  const isEmpty = sessionStorage.getItem('search_value');
  const initialState = isEmpty ? isEmpty : '';
  const [searchValue, setSearchValue] = useState(initialState);

  return [searchValue, setSearchValue];
};

export  {usePersistedState};

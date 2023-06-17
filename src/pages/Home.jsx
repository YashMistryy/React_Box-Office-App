/* eslint-disable no-unused-vars */
import { useReducer, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm.jsx';
import { SearchForShows, SearchForActors } from './../api_utils/tvmaze.js';
import ShowGrid from '../components/shows/ShowGrid.jsx';
import ActorsGrid from '../components/actors/ActorsGrid.jsx';
import styled, { css }  from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.$fontSize &&
    css`
      font-size:${props.$fontSize}px
    `};
`;

const reducerFn = (currentCounter, action) => {
  switch (action.type) {
    case 'Increment':
      return currentCounter + 1;
    case 'Decrement':
      return currentCounter - 1;
    case 'Reset':
      return 0;
  }
};

const Home = () => {
  // filter helps us to run the function inside the useQuery to fetch the data
  const [filter, setFilter] = useState('');

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['shows-actors', filter],
    queryFn: () =>
      filter.searchOptionValue === 'shows'
        ? SearchForShows(filter.searchValue)
        : SearchForActors(filter.searchValue),
    refetchOnWindowFocus: false,
    enabled: !!filter,
  });

  const onSearch = async ({ searchOptionValue, searchValue }) => {
    // console.log(searchValue,searchOptionValue);
    setFilter({ searchOptionValue, searchValue });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>{apiDataError.message}</div>;
    }
    console.log('datasss', apiData);

    if (apiData && apiData.length != 0) {
      if (apiData[0].show) {
        return <ShowGrid apiData={apiData} />;
      } else {
        return <ActorsGrid apiData={apiData} />;
      }
    } else {
      return <h1>try searching for shows or actors</h1>;
    }
  };

  return (
    <div>
      <h5>home page</h5>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;

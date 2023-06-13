/* eslint-disable no-unused-vars */
import { useReducer, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm.jsx';
import { SearchForShows, SearchForActors } from './../api_utils/tvmaze.js';
import ShowGrid from '../components/shows/ShowGrid.jsx';
import ActorsGrid from '../components/actors/ActorsGrid.jsx';


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
  // useReducer demo
  const [counterValue, dispatch] = useReducer(reducerFn, 0);

  

  const handleIncrement = () => {
    dispatch({ type: 'Increment' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'Decrement' });
  };
  const handleReset = () => {
    dispatch({ type: 'Reset' });
  };

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
    setFilter({ searchOptionValue, searchValue });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>{apiDataError.message}</div>;
    }

    if (apiData) {
      // if(searchOptionValue === 'shows'){return apiData.map((myShow)=> <div key={myShow.show.id}> {myShow.show.name}</div>)}
      // else{return apiData.map((person)=> <div key={person.person.id}> {person.person.name}</div>)}
      if (apiData[0].show) {
        return <ShowGrid apiData={apiData} />;
      } else {
        return <ActorsGrid apiData={apiData} />;
      }
    } else {
      return null;
    }
  };

  return (
    <div>
      <h5>home page</h5>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>

      <div className="reducerDemo">
        <p>{counterValue}</p>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Home;

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm.jsx';
import { SearchForShows, SearchForActors } from './../api_utils/tvmaze.js';
import ShowGrid from '../components/shows/ShowGrid.jsx';
import ActorsGrid from '../components/actors/ActorsGrid.jsx';

const Home = () => {
  //  below state stores the apiData got from searchShows
  const [apiData, setApiData] = useState([]);
  // below state stores the error which occured during fetching of the data
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ searchOptionValue, searchValue }) => {
    //  this function fetches and set apiData which will be rendered
    // its logic was shifted to othere component but it still works because it get required data as parameters

    try {
      setApiDataError(null);
      let result = null;
      if (searchOptionValue === 'shows') {
        result = await SearchForShows(searchValue);
      } else {
        result = await SearchForActors(searchValue);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
      console.log(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>{apiDataError.message}</div>;
    }

    if (apiData.length != 0) {
      // if(searchOptionValue === 'shows'){return apiData.map((myShow)=> <div key={myShow.show.id}> {myShow.show.name}</div>)}
      // else{return apiData.map((person)=> <div key={person.person.id}> {person.person.name}</div>)}
      if (apiData[0].show) {
        return <ShowGrid apiData={apiData} />;
      } else {
        return <ActorsGrid apiData={apiData} />;
      }
    }else{
      return <div><h1>No Data found</h1></div>
    }
    // return null;
  };

  return (
    <div>
      <h5>home page</h5>
      <SearchForm onSearch={onSearch} />
      {/* <form onSubmit={onSearch}>
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
      </form> */}
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BASE_URL = 'https://api.tvmaze.com';

// below is the function which get the json body for the search result and it is an aysnc function
const apiGet = async queryString => {
  // throw new Error("Something bad happened while fetching the api data!")
  // console.log("the url : ",`${BASE_URL}/${queryString}`)
  const response = await fetch(`${BASE_URL}/${queryString}`);
  const body = await response.json();
  return body;
};


// below function make it convineint to use apiGet method , using only the query string
const SearchForShows = (searchString) => {
 return apiGet(`/search/shows?q=${searchString}`);
};

// below function make it convineint to use apiGet method , using only the query string
const SearchForActors = (searchString) => {
  return apiGet(`/search/people?q=${searchString}`);
 };

const SearchForShow = (showId)=>{
  return apiGet(`shows/${showId}`)
}


export {SearchForActors,SearchForShows,SearchForShow} 
// export default SearchForShows
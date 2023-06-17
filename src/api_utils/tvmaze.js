/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BASE_URL = 'https://api.tvmaze.com';

// below is the function which get the json body for the search result and it is an aysnc function
const apiGet = async queryString => {
  // throw new Error("Something bad happened while fetching the api data!")
  // console.log("the url : ",`${BASE_URL}/${queryString}`)
  const response = await fetch(`${BASE_URL}/${queryString}`);
  const body = await response.json();
  // console.log(body)
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
  return apiGet(`shows/${showId}?embed[]=seasons&embed[]=cast`)
}

const SearchShowsById = async (showIds)=>{
  // we get an array of show Ids and we are suppose to return an array of promises of data for each show ,so that all data is fetched asynchronously and we dont have to fetch data of shows one by one
  const promisesArr = showIds.map((showId)=>{return apiGet(`shows/${showId}`)})
  const res = await Promise.all(promisesArr)
  console.log("result",res);
  return res
}


export {SearchForActors,SearchForShows,SearchForShow,SearchShowsById} 
// export default SearchForShows
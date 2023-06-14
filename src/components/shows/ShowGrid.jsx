import ShowsCard from './ShowsCard';
import { useReducer,useEffect } from 'react';

const usePersistedReducer = (reducerFn, initialstate, localStorageKey) => {
  // we have created a custom hook on top of useReducer which sets inital state to starred shows saved in browser's localstorage
  const [state, dispatch] = useReducer(reducerFn, initialstate, (initialstate) => {
    //initializer function sets the initial state based on conditions
    const starredShows = localStorage.getItem(localStorageKey)
    return starredShows ? JSON.parse(starredShows):initialstate;
  });
  // now the reducer function has been declared which deals with fetching initial state from localstorage
  // we will use useEffect to save state to localstorage
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(state))
  },[state,localStorageKey])
  return [state,dispatch]
};

const reducerFnStarredShow = (starredShowsList, action) => {
  switch (action.type) {
    case 'STAR':
      // return starredShowsList.concat(action.showId);
      return starredShowsList.concat(action.showId);

    case 'UNSTAR':
      return starredShowsList.filter(id => {
        return id !== action.showId;
      });

    default:
      return starredShowsList;
  }
};

const ShowGrid = ({ apiData }) => {
  // we will define a useReducer state for storing the starred shows id in an array
  const [starredShows, dispatchStarredShow] = usePersistedReducer(reducerFnStarredShow, [], 'keyStarredShows');
  
  console.log({ starredShows });

  const onStarredClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarredShow({ type: 'UNSTAR', showId: showId });
    } else {
      dispatchStarredShow({ type: 'STAR', showId: showId });
    }
  };

  return apiData.map(myShow => (
    <ShowsCard
      key={myShow.show.id}
      name={myShow.show.name}
      image={myShow.show.image ? myShow.show.image.medium : '/image_alt.jpeg'}
      summary={myShow.show.summary}
      showId={myShow.show.id}
      onStarredClick={onStarredClick}
    />
  ));
};

export default ShowGrid;

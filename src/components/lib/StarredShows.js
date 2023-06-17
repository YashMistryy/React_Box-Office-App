// this file contains the hook which is created to deal with starred shows and their actions like getting state Starredshows or the dispatchStarshow function.whicherver is useful for any component can use it
import { useReducer, useEffect } from 'react';

const reducerFnStarredShow = (starredShowsList, action) => {
  // reducer function is like setState function with proper format
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
const usePersistedReducer = (reducerFnStarredShow, initialstate, localStorageKey) => {
  // we have created a custom hook on top of useReducer which sets inital state to starred shows saved in browser's localstorage
  const [state, dispatch] = useReducer(
    reducerFnStarredShow,
    initialstate,
    initialstate => {
      //initializer function sets the initial state based on conditions
      const starredShows = localStorage.getItem(localStorageKey);
      return starredShows ? JSON.parse(starredShows) : initialstate;
    }
  );
  // now the reducer function has been declared which deals with fetching initial state from localstorage
  // we will use useEffect to save state to localstorage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

const useStarredShows = () => {
    return usePersistedReducer(reducerFnStarredShow, [], 'keyStarredShows');
};

export  {useStarredShows};

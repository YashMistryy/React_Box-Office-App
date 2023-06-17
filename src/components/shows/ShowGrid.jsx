import ShowsCard from './ShowsCard';
// import { useReducer,useEffect } from 'react';
import {useStarredShows} from '../lib/StarredShows'

const ShowGrid = ({ apiData }) => {
  const [starredShows, dispatchStarredShow] = useStarredShows()
  
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
      isStarred={starredShows.includes(myShow.show.id)}
    />
  ));
};

export default ShowGrid;

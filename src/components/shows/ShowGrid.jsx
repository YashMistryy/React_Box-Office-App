import ShowsCard from './ShowsCard';
// import { useReducer,useEffect } from 'react';\
import { FlexGrid } from '../common/FlexGrid';
import { useStarredShows } from '../lib/StarredShows';
import ImageAltSrc from '../../asset/image_alt.jpeg'

const ShowGrid = ({ apiData }) => {
  const [starredShows, dispatchStarredShow] = useStarredShows();

  // console.log({ starredShows });

  const onStarredClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarredShow({ type: 'UNSTAR', showId: showId });
    } else {
      dispatchStarredShow({ type: 'STAR', showId: showId });
    }
  };

  return (
    <FlexGrid>
      {apiData.map(myShow => (
      <ShowsCard
        key={myShow.show.id}
        name={myShow.show.name}
        image={myShow.show.image ? myShow.show.image.medium : ImageAltSrc}
        summary={myShow.show.summary}
        showId={myShow.show.id}
        onStarredClick={onStarredClick}
        isStarred={starredShows.includes(myShow.show.id)}
      />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;

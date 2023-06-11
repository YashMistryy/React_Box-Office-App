import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { SearchForShow } from '../api_utils/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowDetailPage from './shows/ShowDetailPage';

// OUR COMPONENT
const ShowPage = () => {
  const { showId } = useParams();
  //   const { showDataError, showData } = useShowById(showId);
  // we have used custom hook useQuery which provide easy way to fetch data and all
  const { data: showData, error: showDataError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => SearchForShow(showId),
    refetchOnWindowFocus:false
  });
  if (showDataError) {
    return <h1>error :{showDataError}</h1>;
  }
  if (showData) {
    return (
      <div>
        <ShowDetailPage
          showSummary={showData.summary}
          showRating={showData.rating}
          showName={showData.name}
          showImage={showData.image}
          showLang={showData.language}
          showGenres = {showData.genres}
          seasons = {showData._embedded.seasons}
          cast = {showData._embedded.cast}
        />
      </div>
    );
  }
  return <h1>Data is loading for show : {showId}</h1>;
};
export default ShowPage;

import { Link, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    refetchOnWindowFocus: false,
  });
  if (showDataError) {
    return <h1>error :{showDataError.name}</h1>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to={'/'}>Go back</Link>
        </BackHomeWrapper>
        <ShowDetailPage
          showSummary={showData.summary}
          showRating={showData.rating}
          showName={showData.name}
          showImage={showData.image}
          showLang={showData.language}
          showGenres={showData.genres}
          seasons={showData._embedded.seasons}
          cast={showData._embedded.cast}
        />
      </ShowPageWrapper>
    );
  }
  return <h1>Data is loading for show : {showId}</h1>;
};
export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

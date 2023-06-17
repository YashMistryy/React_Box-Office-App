import Seasons from './Seasons';
import Cast from './Cast';
import styled from 'styled-components';

const ShowDetailPage = ({
  showName,
  showSummary,
  showRating,
  showImage,
  showLang,
  showGenres,
  cast,
  seasons,
}) => {
  return (
    <MainDataWrapper>
      <div className='img-wrap'>

      <img
        src={showImage ? showImage.original : '/image_alt.jpeg'}
        height={1000}
        width={1000}
        alt={showName}
        />
        </div>
      <DataSection >

      <p>{showName}</p>
      <p>{showLang}</p>
      <p>{showRating.average}</p>
      </DataSection>
      <div dangerouslySetInnerHTML={{ __html: showSummary }} />
      <label htmlFor="">Genres</label>
      <Genres>
        {showGenres.map(genre => {
          return <li key={genre}>{genre}</li>;
        })}
      </Genres>
      <InfoBlock>
      <Seasons seasonsData={seasons} /></InfoBlock>
      <Cast castData={cast} />
    </MainDataWrapper>
  );
};

export default ShowDetailPage;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  .img-wrap {
    width: 275px;
    max-width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
  }
`;

const DataSection = styled.div`
  margin-left: 20px;
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Summary = styled.div`
  color: #5f5f5f;
  line-height: 1.5;
`;

const Genres = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
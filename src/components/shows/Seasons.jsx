import styled from 'styled-components';

const Seasons = ({ seasonsData }) => {
  return (
    <SeasonsWrapper>
      <div>Total seasons :{seasonsData.length}</div>
      <div>
        Total episodes :
        {seasonsData.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </div>
      <SeasonList>
        {seasonsData.map(season => {
          return (
            <div key={season.id} className="season-item">
              <div className="left">
                <p key={season.id}>season {season.number}</p>
              </div>
              <div className='right'>
              <p>episodes {season.episodeOrder}</p></div>
            </div>
          );
        })}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;

// css

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;

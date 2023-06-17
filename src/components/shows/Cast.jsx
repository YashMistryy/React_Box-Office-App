import styled from 'styled-components';

const Cast = ({ castData }) => {
  return (
      <CastList>
        {castData.map(castData => (
          <div key={castData.person.id} className='cast-item'>
            <div className='pic-wrapper'>
            <img
              src={
                castData.character.image
                  ? castData.character.image.medium
                  : '/image_alt.jpeg'
              }
              alt=""
            /></div>
            <div className='actor'>
            <p >{castData.person.name}</p>
            </div>
          </div>
        ))}
      </CastList>
  );
};

export default Cast;


// css

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .actor {
    margin-left: 25px;
  }
`;
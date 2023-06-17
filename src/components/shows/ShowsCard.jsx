import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {StarIcon} from '../common/StarIcon'
import { SearchImgWrapper,SearchCard } from '../common/SearchCard';
const ShowsCard = ({
  name,
  image,
  summary,
  showId,
  isStarred,
  onStarredClick,
}) => {
  const strippedSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No data found for this one';

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} width={100} height={100} alt="image not found" />
      </SearchImgWrapper>
      <h3>show : {name}</h3>
        <p>{strippedSummary}</p>
      <ActionSection>
        <Link to={`/shows/${showId}`} target="_blank" rel="noopener noreferrer">
          show more
        </Link>
        <StarBtn onClick={() => onStarredClick(showId)}>
          <StarIcon active = {isStarred}/>
          {/* {isStarred ? 'Un-Star Me' : 'Star Me'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowsCard;

// css

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

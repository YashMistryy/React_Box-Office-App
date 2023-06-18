import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StarIcon } from '../common/StarIcon';
import { useRef } from 'react';
import { SearchImgWrapper, SearchCard } from '../common/SearchCard';
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

  const starBtnRef = useRef();
  
  const handleStarredClick = () => {
    onStarredClick(showId);
    const starBtnEle = starBtnRef.current;
    if (!starBtnEle) {
      return;
    }

    // here we will write login on if show is starred we will get it the animation but it will be shown on button click only
    if (isStarred) {
      starBtnEle.classList.remove('animate');
    } else {
      starBtnEle.classList.add('animate');
    }
  };
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
        <StarBtn
          ref={starBtnRef}
          type="button"
          onClick={handleStarredClick}
          // className={isStarred && 'animate'}
        >
          <StarIcon active={isStarred} />
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
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

import { Link } from 'react-router-dom';

const ShowsCard = ({ name, image, summary, showId, onStarredClick }) => {
  const strippedSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No data found for this one';

  return (
    <div>
      <img src={image} width={100} height={100} alt="image not found" />
      <h3>show : {name}</h3>
      <div>
        <p>{strippedSummary}</p>
        <Link to={`/shows/${showId}`} target="_blank" rel="noopener noreferrer">
          show more
        </Link>
        <button onClick={() => onStarredClick(showId)}>Star Me</button>
      </div>
    </div>
  );
};

export default ShowsCard;

import Seasons from "./Seasons";
import Cast from "./Cast";
const ShowDetailPage = ({
  showName,
  showSummary,
  showRating,
  showImage,
  showLang,
  showGenres,
  cast,
  seasons
}) => {
  console.log({
    cast,
    seasons
  });
  return (
    <div className="showData">
      <h1>this is the show data</h1>
      <img
        src={showImage ? showImage.original : '/image_alt.jpeg'}
        height={1000}
        width={1000}
        alt={showName}
      />
      <p>{showName}</p>
      <br />
      <p>{showLang}</p>
      <br />
      <p>{showRating.average}</p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: showSummary }} />
      <label htmlFor="">Genres</label>
      <ul>
        {showGenres.map(genre => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
      <Seasons seasonsData = {seasons}/>
      <Cast castData = {cast}/>
    </div>
  );
};

export default ShowDetailPage;

const Seasons = ({ seasonsData }) => {
  return (
    <div>
      <div>Total seasons :{seasonsData.length}</div>
      <div>
        Total episodes :
        {seasonsData.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </div>
      <div>
        {seasonsData.map(season => {
          return (
            <div key={season.id} className="season data">
              <p key={season.id}>season {season.number}</p>
              <p>episodes {season.episodeOrder}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;

import ShowsCard from './ShowsCard';

const ShowGrid = ({ apiData }) => {
  return apiData.map(myShow => (
    <ShowsCard
      key={myShow.show.id}
      name={myShow.show.name}
      image={myShow.show.image ? myShow.show.image.medium : '/image_alt.jpeg'}
      summary={myShow.show.summary}
      showId = {myShow.show.id}
    />
  ));
};

export default ShowGrid;

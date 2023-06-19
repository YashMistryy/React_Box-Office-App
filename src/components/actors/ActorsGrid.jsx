import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import ImageAltSrc from '../../asset/image_alt.jpeg'
const ActorsGrid = ({ apiData }) => {
  // console.log({apiData})
  return (
    <FlexGrid>
      {apiData.map(person => (
        <ActorsCard
          key={person.person.id}
          name={person.person.name}
          image={
            person.person.image ? person.person.image.medium : ImageAltSrc
          }
          gender={person.person.gender}
          country={person.person.country}
          birthday={person.person.birthday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;

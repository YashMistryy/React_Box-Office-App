import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchForShow } from '../api_utils/tvmaze';
import { useQuery } from '@tanstack/react-query';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showDataError, setShowDataError] = useState(null);

//   // we have uses a mix of useEffect and useState for our data fetching logic
//   useEffect(() => {
//     // in here we will fetch data using fetch api
//     // data will be fetched on mounting of component
//     async function fetchData() {
//       // we cant use aysnc keyword for useEffect callback so we created an async func inside our callback function and called it
//       try {
//         const resp = await SearchForShow(showId);
//         console.log({resp})
//         setShowData(resp);
//       } catch (err) {
//         setShowDataError(err.name);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return { showData, showDataError };
// };

// OUR COMPONENT
const ShowPage = () => {
  const { showId } = useParams();
  //   const { showDataError, showData } = useShowById(showId);
  // we have used custom hook useQuery which provide easy way to fetch data and all
  const { data: showData, error: showDataError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => SearchForShow(showId),
  });
  if (showDataError) {
    return <h1>error :{showDataError}</h1>;
  }
  if (showData) {
    return (
      <div>
        {showData.id} | {showData.name} | {showData.language}
      </div>
    );
  }
  return <h1>Data is loading for show : {showId}</h1>;
};
export default ShowPage;

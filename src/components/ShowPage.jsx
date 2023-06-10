import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchForShow } from '../api_utils/tvmaze';

const ShowPage = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showDataError, setShowDataError] = useState(null);

  useEffect(() => {
    // in here we will fetch data using fetch api
    // data will be fetched on mounting of component
    async function fetchData() {
      // we cant use aysnc keyword for useEffect callback so we created an async func inside our callback function and called it
      try {
        const resp = await SearchForShow(showId);
        setShowData(resp);
      } catch (err) {
        setShowDataError(err.name);
      }
    }
    fetchData();
  }, [showId]);
  if(showData){return(<div>{showData.id} | {showData.name} | {showData.language}</div>)}
  return <h1>Data is loading for show : {showId}</h1>;
};
export default ShowPage;

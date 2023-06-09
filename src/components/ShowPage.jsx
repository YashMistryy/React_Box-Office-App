import {useParams } from 'react-router-dom';

const ShowPage = ()=>{
    const params = useParams()
return (<h1>Show page come with id : {params.showId}</h1>)
}
export default ShowPage
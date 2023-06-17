// import { useEffect, useState } from "react"
import {useStarredShows} from '../components/lib/StarredShows'
import { useQuery } from "@tanstack/react-query"
import {SearchShowsById} from '../api_utils/tvmaze'
import ShowGrid from "../components/shows/ShowGrid"


const Starred = ()=>{
    const [StarredShowsIds] = useStarredShows()
    // apidData will store an array of shows objects , fetched from SearchShowsById() func
    const {data:apiData,error:apiDataError} = useQuery({
        queryKey:['starred',StarredShowsIds],
        queryFn: () => SearchShowsById(StarredShowsIds).then(result => result.map((show)=>({show}))),
        refetchOnWindowFocus: false
    })
    
    console.log("data ",StarredShowsIds)
    if(apiData && apiData?.length !== 0 ){
        return <ShowGrid apiData={apiData}/>
    }
    return(
        <div>
        <h1>This will be our Starred page</h1>
        </div>)
}
export default Starred
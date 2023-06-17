import { useEffect, useState } from "react"
import {useStarredShows} from '../components/lib/StarredShows'



const Starred = ()=>{
    const [state, dispatch] = useStarredShows()

    const [text,setText] =useState("")
    // useEffect is used to manipulate component lifecycle stages
    useEffect(()=>{
        console.log("starred component mounted!","text:",text)
        return ()=>{
            console.log("starred component un-mounted!",text)
        }
    },[text])


    return(
        <div>
        <h1>This will be our Starred page</h1>
        <h1>{state.length}</h1>
        <input type="text" onChange={(ev)=>setText(ev.target.value)} />
        <p>{text}</p>
        </div>)
}
export default Starred
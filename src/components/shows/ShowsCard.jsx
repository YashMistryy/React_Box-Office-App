import { Link } from "react-router-dom"


const ShowsCard = ({name,image,summary})=>{
    const strippedSummary = summary? summary.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,"")+"...":"No data found for this one"

    // summary.split(" ").slice(0,10).join(" ").replace(/<.+?>/g)+"..."

    console.log(strippedSummary)
    return(
        <div>
            <img src={image} width={100} height={100} alt="image not found" /> 
            <h3>show : {name}</h3>\
            <div>
            <p>{strippedSummary}</p>
            <Link to='/'>show more</Link>
            </div>
        </div>
    )
}

export default ShowsCard
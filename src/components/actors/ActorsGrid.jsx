import ActorsCard from "./ActorsCard"

const ActorsGrid = ({apiData})=>{
// console.log({apiData})
return (
apiData.map(person => (<ActorsCard
     key={person.person.id}
     name={person.person.name}
     image={person.person.image?person.person.image.medium:"/image_alt.jpeg"}
     gender={person.person.gender}
     country={person.person.country}
     birthday = {person.person.birthday}
     />))

)

}


export default ActorsGrid
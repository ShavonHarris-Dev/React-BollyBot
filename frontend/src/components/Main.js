import movies from '../movieData.js'
import {useState} from 'react'

const Main = () => {
  const [newMovie, setNewMovie] = useState({
    "title": "Kuch Kuch Hota Hai",
    "year": 1998,
    "rating": 9.9
})
    
  
  function getRandomMovie(){
const randomNumber = Math.floor(Math.random()* movies.length)
const movieArray = movies[randomNumber]
// console.log(movieArray)


const display= {"title": `${movieArray.title}` , "year": `${movieArray.year} `, "rating": `${movieArray.rating}`}
setNewMovie(display)
console.log(display)

    }

  return (
    <section>
      <h1> 🎬  Bolly BOT  🎬 </h1>
      <h2 className="activity">Get a Random BollyWood Movie</h2>
    <div className="movieContainer">
      <h4>Title: {newMovie.title}  </h4>
     < h4> ..Year: {newMovie.year}    </h4>
     <h4> ..Rating: {newMovie.rating} </h4>
     </div>
      <button onClick={getRandomMovie}></button>
    </section>
  )
}

export default Main

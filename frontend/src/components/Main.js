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
console.log(movieArray)

const display= `Title:${movieArray.title} | Year:${movieArray.year}  | Rating:${movieArray.rating}`
setNewMovie(display)

    }

  return (
    <section>
      <h1> 🎬  Bolly BOT  🎬 </h1>
      <h2 className="activity">Get a Random BollyWood Movie</h2>
      <h4>{newMovie}</h4>
      <button onClick={getRandomMovie}></button>
    </section>
  )
}

export default Main

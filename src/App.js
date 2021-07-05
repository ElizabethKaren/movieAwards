import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import Nav from './Componants/Nav.js'
import MovieList from './Componants/MovieList'

let key = process.env.REACT_APP_API_KEY

const App = () => {

  const [movieList, addToList] = useState("")
  const [input, updateInput] = useState("")
  const [myTopFive, addToTopFive] = useState(null)
  const [clickedMovie, assignMovie] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('myTopFive')){
      const myTopFive = JSON.parse(localStorage.getItem('myTopFive'))
      addToTopFive(myTopFive)
    }
  }, [])

  const handleOnchage = e => {
    const value = e.target.value
    updateInput(value)
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${value}`).then(res => res.json()).then(movieList => addToList(movieList))
  }

  const movieClicked = movie => {
    assignMovie(movie)
    updateInput("")
  }

  const unableToAdd = () => alert("Unable to add")

  const addToFavs = info => {
    if (myTopFive.includes(info) || myTopFive.length === 5) return unableToAdd()

    if (myTopFive){
      addAndSet([...myTopFive, info])
    } else {
      addAndSet([info])
    }
  }

  const removeFromFavs = movie => addAndSet(myTopFive.filter(film => film.Title !== movie.Title))

  const addAndSet = array => {
    addToTopFive(array)
    localStorage.setItem('myTopFive', JSON.stringify(array))
  }

  return (
    <div className="App">
      <Nav topFive={myTopFive} />
      <Switch>
        <Route path='/topfive' render={ () => <MovieList  movieClicked={movieClicked} myTopFive={myTopFive} /> }></Route>
        <Route path='/movie/:title' render={(info)=> <MoviePage removeFromFavs={removeFromFavs} myTopFive={myTopFive} addToFavs={addToFavs} movieClicked={clickedMovie} info={info}/> }></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={movieClicked} list={movieList} handleOnchage={handleOnchage} input={input} /> } /> 
      </Switch>
    </div>
  )
}

export default App;
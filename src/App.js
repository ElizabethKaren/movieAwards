import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import MovieList from './Componants/MovieList'

export class App extends Component{

  state = {
    movieList: '',
    input: ''
  }

  getMovie = (key, movie) => {
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList, input: '' }))
  }

  handleOnchage = e => this.setState({ [e.target.name]: e.target.value })

  handleSearch = () => {
    this.getMovie('429f9e0f', this.state.input)
  }

  render(){
    console.log(this.sate)
    return (
      <div className="App">
        <h2>Top Five Movies</h2>
        <form>
          <input onChange={this.handleOnchage} name='input' placeholder='Search Movie...' value={this.state.input}></input>
        </form>
        <br></br>
        <button onClick={this.handleSearch}>Search For Movie</button>
        <MovieList list={this.state.movieList}/>
      </div>
    )
  }
}

export default App;

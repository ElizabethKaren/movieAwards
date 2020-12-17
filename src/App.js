import './App.css';
import { Component } from 'react'

export class App extends Component{

  state = {
    move: '',
    input: ''
  }

  getMovies = (key, movie) => {
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movies => this.setState({ movies }))
  }

  handleOnchage = e => this.setState({ [e.taget.name]: e.target.value })


  handleSearch = e => console.log(this.state.input)

  render(){
    console.log(this.state.movies)
    return (
      <div className="App">
        <h2>Top Five Movies</h2>
        <form>
          <input onChange={this.handleOnchage} name='input' placeholder='Search Movie...'>{this.state.input}</input>
        </form>
        <button onClick={this.handleSearch}>Search For Movie</button>
      </div>
    )
  }
}

export default App;

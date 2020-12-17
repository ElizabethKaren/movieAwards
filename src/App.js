import './App.css';
import { Component } from 'react'

const url  = 'http://www.omdbapi.com/?apikey=[429f9e0f]&'
const postUrl = 'http://img.omdbapi.com/?apikey=429f9e0f&'

export class App extends Component{

  state = {
    movies: ''
  }

  getMovies = data => fetch(data).then(res => res.json()).then(movies => this.setState({ movies }))

  componentDidMount(){
    this.getMovies(url)
  }

  render(){
    console.log(this.state.movies)
    return (
      <div className="App">
        <h2>Hi Greg</h2>
      </div>
    )
  }
}

export default App;

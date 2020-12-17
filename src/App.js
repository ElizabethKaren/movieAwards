import './App.css';
import { Component } from 'react'

const url  = 'http://www.omdbapi.com/?i=tt3896198&apikey=429f9e0f'

export class App extends Component{

  state = {
    movie: ''
  }

  getMovies = data => fetch(data).then(res => res.json()).then(movie => this.setState({ movie }))

  componentDidMount(){
    this.getMovies(url)
  }

  render(){
    console.log(this.state.movie)
    return (
      <div className="App">
        <h2>Hi Greg</h2>
      </div>
    )
  }
}

export default App;

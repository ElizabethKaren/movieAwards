import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import MovieList from './Componants/MovieList'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import Users from './data.json'

export class App extends Component{

  state = {
    movieList: '',
    input: '',
    myTopFive: [],
    movieClicked: null,
    users: []
  }

  componentDidMount(){
    this.setState({ users: Users })
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList, input: '' }))

  handleOnchage = e => this.setState({ [e.target.name]: e.target.value })

  handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Switch>
        <Route path='/movie/:title' render={(greg)=> <MoviePage greg={greg} movie={this.state.movieClicked}/> }></Route>
        <Route path='/' render={()=> <SearchForMovie handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
        <MovieList movieClicked={this.movieClicked} list={this.state.movieList}/>
      </div>
    )
  }
}

export default App;

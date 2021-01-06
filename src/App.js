import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import Nav from './Componants/Nav'

///remember change search function to work on onChange

export class App extends Component{

  state = {
    user: null,
    movieList: '',
    input: '',
    myTopFive: null,
    movieClicked: null,
    users: [],
    userName: '',
    password1: '',
    password2: ''
  }

  componentDidMount(){
    let myTopFive = ''
    myTopFive = localStorage.getItem(myTopFive)
    this.setState({ myTopFive })
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList }))

  handleOnchage = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.getMovie('429f9e0f', e.target.value)
  }

  // handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  addToFavs = info => {
    let mewTopFive = ''
    if (this.state.myTopFive !== null ){
      newTopFive = [...this.state.myTopFive, info]
    } else {
      mewTopFive = [info]
    }
    this.setState({ myTopFive: mewTopFive })
    localStorage.setItem( 'myTopFive', mewTopFive )
    console.log(localStorage)
  }


  render(){
    console.log(this.state.myTopFive)
    return (
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/movie/:title' render={(greg)=> <MoviePage addToFavs={this.addToFavs} movieClicked={this.state.movieClicked} greg={greg} getMovie={this.getMovie}/> }></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={this.movieClicked} list={this.state.movieList} handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
      </div>
    )
  }
}

export default App;

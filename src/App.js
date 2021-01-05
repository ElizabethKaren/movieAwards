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
    myTopFive: [],
    movieClicked: null,
    users: [],
    userName: '',
    password1: '',
    password2: ''
  }

  componentDidMount(){
    let myTopFive = []
    if (localStorage.getItem(myTopFive)){
      myTopFive =  localStorage.getItem(myTopFive)
    }
    this.setState({ myTopFive })
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList }))

  handleOnchage = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.getMovie('429f9e0f', e.target.value)
  }

  handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  addToFavs = info => {
    const newTopFive = [...this.state.myTopFive, info]
    this.setState({ myTopFive: newTopFive })
    localStorage.setItem( 'myTopFive', JSON.stringify(newTopFive) )
  }


  render(){
    console.log(this.state.myTopFive)
    if (localstorage.getItem(myTopFive)) return console.log(localStorage.getItem(myTopFive))
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

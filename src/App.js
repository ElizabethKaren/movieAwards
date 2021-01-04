import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import data from './Data/data.json'

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
    if (localStorage.myTopFive){
      myTopFive =  localStorage.myTopFive
      console.log(myTopFive)
    }
    this.setState({ users: data, myTopFive: myTopFive })
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList, input: '' }))

  handleOnchage = e => this.getMovie('429f9e0f', e.target.value)

  handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  addToFavs = info => {
    this.setState({ myTopFive: [...this.state.myTopFive, info] }, () => {
      localStorage.setItem( 'myTopFive', JSON.stringify(this.state.myTopFive))
    })
  }


  render(){
    console.log(this.state.myTopFive)
    console.log(this.state.movieClicked)
    return (
      <div className="App">
        <Switch>
        <Route path='/movie/:title' render={(greg)=> <MoviePage addToFavs={this.addToFavs} movieClicked={this.state.movieClicked} greg={greg} getMovie={this.getMovie}/> }></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={this.movieClicked} list={this.state.movieList} handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
      </div>
    )
  }
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import Nav from './Componants/Nav'
import MovieList from './Componants/MovieList'

export class App extends Component{

  state = {
    movieList: '',
    input: '',
    myTopFive: null,
    movieClicked: null
  }

  componentDidMount(){
    let myTopFive = ''
    if (localStorage.getItem('myTopFive')){
      myTopFive = JSON.parse(localStorage.getItem('myTopFive'))
    }
    this.setState({ myTopFive: myTopFive })
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList }))

  handleOnchage = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.getMovie('429f9e0f', e.target.value)
  }

  // handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie, input: '' })

  addToFavs = info => {
      if (this.state.myTopFive.includes(info)){
        alert('Already in your top five.')
      } else if (this.state.myTopFive.length === 5){
        alert('Only Five Movies Allowed in your top five.')
      } else {
        let newTopFive = ''
          if (this.state.myTopFive !== null ){
            newTopFive = [...this.state.myTopFive, info]
          } else {
            newTopFive = [info]
          }
          this.setState({ myTopFive: newTopFive })
          localStorage.setItem( 'myTopFive', JSON.stringify(newTopFive) )
      }
  }

  removeFromFavs = movie => {
    console.log(movie)
    const newArray = this.state.myTopFive.filter(film => film.Title !== movie.Title)
    this.setState({ myTopFive: newArray })
    localStorage.setItem( 'myTopFive', JSON.stringify(newArray) )
  }

  render(){
    console.log(this.state.myTopFive)
    return (
      <div className="App">
        <Nav topFive={this.state.myTopFive} />
        <Switch>
        <Route path='/topfive' render={ () => <MovieList  movieClicked={this.movieClicked} myTopFive={this.state.myTopFive} /> }></Route>
        <Route path='/movie/:title' render={(greg)=> <MoviePage removeFromFavs={this.removeFromFavs} myTopFive={this.state.myTopFive} addToFavs={this.addToFavs} movieClicked={this.state.movieClicked} greg={greg} getMovie={this.getMovie}/> }></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={this.movieClicked} list={this.state.movieList} handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
      </div>
    )
  }
}

export default App;

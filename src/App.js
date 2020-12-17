import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import UserPage from './Componants/UserPage'
import Nav from './Componants/Nav'
import Form from './Componants/Form'
import Users from './data.json'

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
    this.setState({ users: Users })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.password1 === this.state.password2){
      fetch(Users, {
        method: 'POST',
        headers: {
          "content-type": 'application-json',
          "accept": "applicaiton-json"
        },
        body: JSON.stringify({
          'name': this.state.userName,
          'password': this.state.password1
        })
      }).then(data => data.json()).then(person => console.log(person))
    } else {
      alert('Password Must Be The Same')
    }
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList, input: '' }))

  handleOnchage = e => this.setState({ [e.target.name]: e.target.value })

  handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  render(){
    return (
      <div className="App">
        <Nav user={this.state.user}/> 
        <Switch>
        <Route path='/user/:id' render={(history)=> <UserPage history={history} /> }></Route>
        <Route path='/movie/:title' render={(greg)=> <MoviePage movieClicked={this.state.movieClicked} greg={greg} getMovie={this.getMovie}/> }></Route>
        <Route path='/signup' render={()=> <Form handleSubmit={this.handleSubmit} handleOnchage={this.handleOnchage}/>}></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={this.movieClicked} list={this.state.movieList} handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
      </div>
    )
  }
}

export default App;

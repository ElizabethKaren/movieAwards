import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react'
import SearchForMovie from './Componants/SearchForMovie'
import MoviePage from './Componants/MoviePage'
import UserPage from './Componants/UserPage'
import Nav from './Componants/Nav'
import Form from './Componants/Form'
import data from './Data/data.json'
import Users from './Componants/Users'


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
    this.setState({ users: data })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newPerson = {
      'name': this.state.userName,
      'password': this.state.password1,
      'movieList': [],
      'id': parseInt(this.state.users.length) + 1 
    }
    if (this.state.password1 === this.state.password2){
      fetch('./Data/data.json',{
        method: 'POST',
        headers: {
          'content-type':'aplicaiton-json',
          accept: 'application-json'
        },
        body: JSON.stringify(newPerson)
      })
      data.push(newPerson)
      this.setState({ user: newPerson })
      console.log(data)
    } else {
      alert('Password Must Be The Same')
    }
  }

  getMovie = (key, movie) => fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movie}`).then(res => res.json()).then(movieList => this.setState({ movieList, input: '' }))

  handleOnchage = e => this.setState({ [e.target.name]: e.target.value })

  handleSearch = () => this.getMovie('429f9e0f', this.state.input)

  movieClicked = movie => this.setState({ movieClicked: movie })

  addToFavs = info => {
    this.setState({ myTopFive: [...this.state.myTopFive, info] }, () => {
      localStorage.setItem( 'myTopFive', JSON.stringify(this.state.myTopFive))
    })
  }


  render(){
    return (
      <div className="App">
        <Nav user={this.state.user}/> 
        <Switch>
        <Route path='/users/:id' render={(history)=> <UserPage movieClicked={this.state.movieClicked} users={this.state.users} history={history} /> }></Route>
        <Route path='/movie/:title' render={(greg)=> <MoviePage addToFavs={this.addToFavs} movieClicked={this.state.movieClicked} greg={greg} getMovie={this.getMovie}/> }></Route>
        <Route path='/users' render={() => <Users movieClicked={this.state.movieClicked} users={this.state.users}/> } />
        <Route path='/signup' render={()=> <Form handleSubmit={this.handleSubmit} handleOnchage={this.handleOnchage}/>}></Route>
        <Route path='/' render={()=> <SearchForMovie movieClicked={this.movieClicked} list={this.state.movieList} handleOnchage={this.handleOnchage} handleSearch={this.handleSearch} input={this.state.input} /> } /> 
        </Switch>
      </div>
    )
  }
}

export default App;

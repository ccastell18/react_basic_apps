import React, {Component, Fragment} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'

import About from './components/pages/About'

import './App.css';

class App extends Component{
  state = {
    users:[],
    loading: false,
    alert: null,
    user: {}
  }

  // async componentDidMount() {
    //axios uses promises
     // axios.get('https://api.github.com/users').then(res => console.log(res.data))
    
     //use setState({}) to change the state.
  //   this.setState({loading: true})

     //using async add await in front of axios call and get rid of promise and make into a variable.
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`)

  //   this.setState({users: res.data, loading: false})
  // }
  
  //search github users
  searchUsers = async text =>{

    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`)

    this.setState({users: res.data.items, loading: false})
  }

  //Get single Github user
  getUser = async (username) =>{
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`)

    this.setState({user: res.data, loading: false})
  }

  //clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  //set Alert
  setAlert = (msg, type) =>{
    this.setState({alert: {msg,type}})
    
    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render(){

    const{users, user, loading, alert} = this.state

  return (
    <Router>
      <div>
        <Navbar/>
        <div className='container'>
          <Alert alert={alert}/>
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                showClear={users.length > 0 ? true: false} 
                setAlert={this.setAlert}/>
                <Users loading={loading} users={users} />
                </Fragment>
              )}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
        </div>  
      </div>
    </Router>
  );
}
}

export default App;

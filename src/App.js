import React, {Component} from 'react'
import axios from 'axios'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'


import './App.css';

class App extends Component{
  state = {
    users:[],
    loading: false
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

  //clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  render(){

    const{users, loading} = this.state

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false}/>
        <Users loading={loading} users={users}/>
      </div>  
    </div>
  );
}
}

export default App;

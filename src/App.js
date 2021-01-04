import React, {Component} from 'react'
import axios from 'axios'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'


import './App.css';

class App extends Component{
  state = {
    users:[],
    loading: false
  }

  async componentDidMount() {
    //axios uses promises
    // axios.get('https://api.github.com/users').then(res => console.log(res.data))
    
    //use setState({}) to change the state.
    this.setState({loading: true})

    //using async add await in front of axios call and get rid of promise and make into a variable.
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_SECRET}`)

    this.setState({users: res.data, loading: false})
  }

  render(){
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>  
    </div>
  );
}
}

export default App;

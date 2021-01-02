import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
  //users are now props from the api call on App.js
  render() {
    return (
      <div style={userStyle}>
        
        {this.props.users.map(user => (
          //passing user as a prop to UserItem
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr',
  gridGap: '1rem'
}

export default Users

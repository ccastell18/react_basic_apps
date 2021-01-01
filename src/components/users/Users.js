import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
  state = {
    users: [
    {
      id: '1',
      login: 'mojombo',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    },
    {
      id: '2',
      login: 'Bob',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    },
    {
      id: '3',
      login: 'Jim',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    },
    {
      id: '4',
      login: 'Bill',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"
    }
    ]
  }
  render() {
    const {users} = this.state
    return (
      <div style={userStyle}>
        {users.map(user => (
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

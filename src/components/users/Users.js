import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

//deconstructed props from the App.js
const Users = ({users, loading}) => {
  //users are now props from the api call on App.js
  
  if(loading){
    return <Spinner/>
  }
  else{
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

  Users.propTypes ={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr',
  gridGap: '1rem'
}

export default Users

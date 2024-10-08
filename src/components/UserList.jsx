import React from 'react'

//prettier-ignore
const User = ({user}) => {
  return(
  <div>
    <b>이름 : {user.username} 이메일 : {user.email}</b>
  </div>) 
}

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default UserList

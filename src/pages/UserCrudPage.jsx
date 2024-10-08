import React, { useRef, useState } from 'react'
import CreateUser from './../components/CreateUser'
import UserList from './../components/UserList'

const UserCrudPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍길동',
      email: '1234@gmail.com',
    },
    {
      id: 2,
      username: '홍영희',
      email: 'aaqq@gmail.com',
    },
    {
      id: 3,
      username: '김철수',
      email: 'cjftn@gmail.com',
    },
  ])

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const onChange = (event) => {
    const { name, value } = event.target

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const nextId = useRef(users.length + 1)

  const { username, email } = inputs

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }

    setUsers(users.concat(user))

    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1
  }

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="text-center mt-5">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onRemove={onRemove}></UserList>
    </div>
  )
}

export default UserCrudPage

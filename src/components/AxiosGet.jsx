import React, { useState } from 'react'
import axios from 'axios'

//https://jsonplaceholder.typicode.com/posts
const AxiosGet = () => {
  const [data, setData] = useState([])

  const getClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        //통신 성공시
        console.log(response.data)
        setData(response.data)
      })
      .catch(function (error) {
        //에러 발생시
        console.log(error)
      })
      .then(() => {
        // try catch finally 에서의 finally 부분에 해당됨
        console.log('에러 발생 유무 상관없이 무조건 실행')
      })
  }

  const postClick = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 11,
        id: 101,
        body: 'test body',
        title: 'test title',
      })
      .then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <h2>엑시오스(axios) 연습</h2>
      <button onClick={getClick}>Get방식</button>
      <button onClick={postClick}>Post방식</button>

      <hr />

      {data.map((post, index) => (
        <>
          <div key={index}>
            <h3>타이틀: {post.title}</h3>
            <div>
              유저아이디 : {post.userId}, 아이디 : {post.id}
            </div>
            <div>바디 {post.body}</div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}

export default AxiosGet

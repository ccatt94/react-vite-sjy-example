import React, { useState } from 'react'
import axios from 'axios'

//https://sample.bmaster.kro.kr/contacts?pageno=1&pagesize=10
const AxiosClient = () => {
  const [data, setData] = useState([])

  const getClick = () => {
    axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        //통신 성공시
        console.log(response.data.contacts)
        setData(response.data.contacts)
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

  const removeClick = (event) => {
    let no = event.target.name

    //client.no와 내가 클릭했을때의 no이 다르면 필터링해달라는 뜻
    //필터링 후 배열에 다시 값을 넣음
    setData(data.filter((client) => client.no != no))
  }

  return (
    <div>
      <h2>클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick}>클라이언트 데이터</button>
      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
            <th>사진</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post, index) => (
            <>
              <tr key={index}>
                <td>{post.no}</td>
                <td>{post.name}</td>
                <td>{post.tel}</td>
                <td>{post.address}</td>
                <td>
                  <img src={post.photo} alt="" />
                </td>
                <td>
                  <input
                    name={post.no}
                    id={post.no}
                    type="button"
                    onClick={removeClick}
                    value="삭제"
                  />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AxiosClient

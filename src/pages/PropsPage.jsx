import React from 'react'
import Hello from '../components/Hello'
import Hello2 from '../components/Hello2'

const PropsPage = () => {
  return (
    //prettier-ignore
    //함수이기 때문에 파라미터를 만들어서 넘길 수 있음
    <>
    <Hello name="홍길동" color="green" age="25">
    </Hello>
    <br />
    <Hello2 name="홍길순" color="pink" age="21">
    </Hello2>
    </>
  )
}

export default PropsPage

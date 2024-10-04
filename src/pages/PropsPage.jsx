import React from 'react'
import Hello from '../components/Hello'

const PropsPage = () => {
  return (
    //prettier-ignore
    //함수이기 때문에 파라미터를 만들어서 넘길 수 있음
    <>
    <Hello name="홍길동" color="green" age="25">
    </Hello>
    <Hello name="홍길순" color="pink" age="21">
    </Hello>
    </>
  )
}

export default PropsPage

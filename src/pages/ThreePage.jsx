import React from 'react'
import Hello3 from '../components/Hello3'

const ThreePage = () => {
  return (
    //prettier-ignore
    <div>
      <Hello3 name="홍길동" color="blue" isSpecial={true} isName={true}/>
      <Hello3 name="홍길동" color="red" isSpecial={false} isName={false}/>
    </div>
  )
}

export default ThreePage

import React from 'react'

const Hello3 = ({ name, color, isSpecial, isName }) => {
  return (
    //prettier-ignore
    //자바스크립트는 if문 사용 불가 => 그래서 3항연산자 사용함
    // for문 또한 쓰지 못하기 때문에 map / filter 함수 사용
    <div style={{color : color}}>
      하이 {isName ? name : null} <br/>
      색상 : {color} <br/>
      {isSpecial ? <b>*</b> : null}
    </div>
  )
}

export default Hello3

import React from 'react'

const Hello2 = ({ name, color, age }) => {
  return (
    //prettier-ignore
    <div style={{color : color}}>
      하이 {name} <br/>
      색상 : {color} <br/>
      나이 : {age} <br />
    </div>
  )
}

export default Hello2

import React from 'react'

const Hello = (props) => {
  return (
    //prettier-ignore
    <div style={{color : props.color}}>
      하이 {props.name} <br/>
      색상 : {props.color} <br/>
      나이 : {props.age} <br />
    </div>
  )
}

export default Hello
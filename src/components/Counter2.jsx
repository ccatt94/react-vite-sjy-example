import React, { useState } from 'react'

const Counter2 = () => {
  let num = 0

  const onIncrease = () => {
    num++
    console.log('counter work?', num)
  }

  const onDecrease = () => {
    num--
    console.log('counter work?', num)
  }

  return (
    //prettier-ignore
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter2

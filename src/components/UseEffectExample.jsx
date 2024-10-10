import React, { useEffect, useState } from 'react'

// useEffect(() => {
//   // 매 렌더링마다 실행
// });

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링될때만 실행
// }, []);

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 이후 실행
//   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
// }, [a, b]);

const UseEffectExample = () => {
  const [firstCount, setFirstCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  useEffect(() => {
    //매 랜더링마다 실행
    console.log(`매 랜더링마다 실행 ${Date()}`)
  })

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될때만 실행
    console.log(`처음 렌더링될때만 실행 ${Date()}`)
  }, [])

  useEffect(() => {
    // 컴포넌트가 처음 렌더링된 이후 실행
    // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
    console.log(`재랜더링된 이후 실행 ${Date()}`)
  }, [firstCount, secondCount])

  const firstCountHandler = () => {
    setFirstCount((s) => s + 1)
  }

  const secondCountHandler = () => {
    setSecondCount((s) => s + 1)
  }

  return (
    <div className="App">
      <h1>{firstCount}</h1>
      <button onClick={firstCountHandler}>카운터 증가</button>
      <h1 id="hi">{secondCount}</h1>
      <button onClick={secondCountHandler}>카운터 증가</button>
    </div>
  )
}

export default UseEffectExample

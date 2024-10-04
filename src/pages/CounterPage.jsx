import React from 'react'
import Counter from '../components/Counter'
import Counter2 from '../components/Counter2'

const CounterPage = () => {
  return (
    <div className="text-center">
      <Counter />
      <hr />
      <Counter2 />
    </div>
  )
}

export default CounterPage

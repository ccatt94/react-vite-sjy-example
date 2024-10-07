import React from 'react'
import Grade from './../components/Grade'
import Grade2 from './../components/Grade2'

const GradePage = () => {
  return (
    <div className="text-center mt-5">
      <Grade />
      <hr />
      <h3>성적표 input 다중입력</h3>
      <br />
      <Grade2 />
    </div>
  )
}

export default GradePage

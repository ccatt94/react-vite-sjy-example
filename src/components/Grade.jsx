import React, { useState } from 'react'

const Grade = () => {
  const [kor, setKor] = useState(0)
  const [math, setMath] = useState(0)
  const [eng, setEng] = useState(0)
  const [name, setName] = useState('')

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onKorChange = (event) => {
    setKor(event.target.value)
  }

  const onMathChange = (event) => {
    setMath(event.target.value)
  }

  const onEngChange = (event) => {
    setEng(event.target.value)
  }

  //prettier-ignore
  return (
    <div>
      이름 <input name='name' onChange={onNameChange} value={name} placeholder='이름'/><br />
      국어 <input name='kor' onChange={onKorChange} value={kor} /><br />
      수학 <input name='math' onChange={onMathChange} value={math} /><br />
      영어 <input name='eng' onChange={onEngChange} value={eng} /><br />
      <div>
        <div>총점 : {Number(kor) + Number(math) + Number(eng)}</div>
        <div>평균 : {(Number(kor) + Number(math) + Number(eng)) / 3.0}</div>
      </div>
    </div>
  )
}

export default Grade

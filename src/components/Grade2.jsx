import React, { useState } from 'react'

const Grade2 = () => {
  const [grade, setGrade] = useState({
    name: '',
    kor: 0,
    math: 0,
    eng: 0,
  })

  const onChange = (event) => {
    const { name, value } = event.target //객체구조분할

    setGrade({
      //갖고있는 값이 아닌 주소값을 변경해야 함
      ...grade,
      [name]: value,
    })
  }

  //prettier-ignore
  return (
    <div>
      이름 <input name='name' onChange={onChange} value={grade.name} placeholder='이름'/><br />
      국어 <input name='kor' onChange={onChange} value={grade.kor} /><br />
      수학 <input name='math' onChange={onChange} value={grade.math} /><br />
      영어 <input name='eng' onChange={onChange} value={grade.eng} /><br />
      <div>
        <div>총점 : {Number(grade.kor) + Number(grade.math) + Number(grade.eng)}</div>
        <div>평균 : {(Number(grade.kor) + Number(grade.math) + Number(grade.eng)) / 3.0}</div>
      </div>
    </div>
  )
}

export default Grade2

import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const hello = "hi";

  const style = {
    fontSize : 100,
    color : 'red'
  }

  return (
    <>
      <div style = {style}>{hello}</div>
      <div>{hello}</div>
    </>
  )
}

export default App

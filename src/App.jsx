import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapButton from './BootstrapExample'
import Header from './components/Header'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
    const hello = 'hi'

    const style = {
        fontSize: 100,
        color: 'red',
    }

    return (
        <>
            <Header></Header>
            <div style={style}>{hello}</div>
            <div>{hello}</div>
            <BootStrapButton />
        </>
    )
}

export default App

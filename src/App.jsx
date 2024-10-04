import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapButton from './BootstrapExample'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'
import ProfilePage from './pages/ProfilePage'
import routes from './route/Routes'
import HeaderNav from './components/HeaderNav'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/board" element={<BoardPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route> */}
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path || index}
                path={route.path}
                element={route.element}
              ></Route>
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

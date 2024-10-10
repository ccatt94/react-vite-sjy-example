import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from './../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import CounterPage from '../pages/CounterPage'
import InputPage from './../pages/InputPage'
import GradePage from './../pages/GradePage'
import UseRefPage from './../pages/UseRefPage'
import UseRefPage2 from './../pages/UseRefPage2'
import UserArrayPage from '../pages/UserArrayPage'
import UserCrudPage from '../pages/UserCrudPage'
import AxiosPage from './../pages/AxiosPage'
import AxiosClientPage from './../pages/AxiosClientPage'
import UseEffectPage from '../pages/UseEffectPage'

//React Routes, Route 사용시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
  },

  {
    path: '/board',
    element: <BoardPage />,
    title: 'Board',
  },

  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Profile',
  },

  {
    path: '/props',
    element: <PropsPage />,
    title: '프롭스',
  },

  {
    path: '/three',
    element: <ThreePage />,
    title: '조건부렌더링',
  },

  {
    path: '/useState',
    element: <CounterPage />,
    title: 'useState 연습',
  },

  {
    path: '/input',
    element: <InputPage />,
    title: 'input 연습',
  },

  {
    path: '/grade',
    element: <GradePage />,
    title: 'grade 연습',
  },

  {
    path: '/useref',
    element: <UseRefPage />,
    title: 'useRef 예제 1번',
  },

  {
    path: '/useref2',
    element: <UseRefPage2 />,
    title: 'useRef 예제 2번',
  },

  {
    path: '/userpage',
    //element: <UserArrayPage />,
    element: <UserCrudPage />,
    title: 'userpage',
  },

  {
    path: '/axiospage',
    //element: <AxiosPage />,
    element: <AxiosPage />,
    title: 'axiospage',
  },

  {
    path: '/axiosclient',
    element: <AxiosClientPage />,
    title: 'axiosclient',
  },

  {
    path: '/effect',
    element: <UseEffectPage />,
    title: 'useEffect',
  },
]

export default routes

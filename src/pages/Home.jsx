import React from 'react'
import Navbar from '../components/Navbar'
import MainScreen from '../components/MainScreen'
import Achievments from '../components/Achievments'
import Educators from '../components/Educators'

const Home = () => {
  return (
    <div>
       <Navbar /> 
       <MainScreen />
       <Achievments />
       <Educators />
    </div>
  )
}

export default Home
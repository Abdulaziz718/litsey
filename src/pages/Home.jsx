import React from 'react'
import Navbar from '../components/Navbar'
import MainScreen from '../components/MainScreen'
import Achievments from '../components/Achievments'
import Educators from '../components/Educators'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Navbar /> 
       <MainScreen />
       <Achievments />
       <Educators />
       <Footer/>
    </div>
  )
}

export default Home
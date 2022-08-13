import React from 'react'
import About from '../components/Home/About'
import Download from '../components/Home/Download'
import Drive from '../components/Home/Drive'
import Invest from '../components/Home/Invest'

const Home = () => {
  return (
    <div>
      {/* top */}
        <Download/>
      {/* Invest */}
        <Invest/>

      {/* Drive */}
        <Drive/>
      {/* About us */}
        <About/>
    </div>
  )
}

export default Home

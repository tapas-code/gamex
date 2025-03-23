import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
    <main className='min-h-screen relative w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App

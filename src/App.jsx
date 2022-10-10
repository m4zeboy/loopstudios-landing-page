import React, { useState } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Main } from './components/Main'

function App() {
  return (
    <div className="App">
      <Hero />
      <Main/>
      <Footer />
    </div>
  )
}

export default App

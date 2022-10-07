import React, { useState } from 'react'
import { Hero } from './components/Hero'
import interactive from './assets/images/mobile/image-interactive.jpg'
import { Footer } from './components/Footer'
import { Interactive } from './components/Interactive'
import { OurCreations } from './components/OurCreations'

function App() {
  console.log(interactive)
  return (
    <div className="App">
      <Hero />
      <main>
        <Interactive/>
        <OurCreations/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

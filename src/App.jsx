import React, { useState } from 'react'
import { Container } from './components/Container'
import { Hero } from './components/Hero'
import { MobileOnly } from './components/MobileOnly'
import { DesktopOnly } from './components/DesktopOnly'
import interactive from './assets/images/mobile/image-interactive.jpg'
import creations from './services/creations.json'
import { Footer } from './components/Footer'

const SectionInteractive = () => {
  return (
    <section id="interactive">
      <Container>
        <DesktopOnly>
          <div
            id="interactive-desktop-section"
            style={{
              background: `url(${interactive}) left top/contain no-repeat`,
              height: '500px',
            }}
          >
            <div
              className="interactive-text"
              style={{
                maxWidth: '600px',
                padding: '4rem',
              }}
            >
              <h2>The Leader in Interactive VR</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quam atque delectus necessitatibus vel inventore incidunt
                laboriosam modi pariatur, ipsam hic reiciendis quia tenetur.
                Consectetur aliquam harum nostrum libero eos.
              </p>
            </div>
          </div>
        </DesktopOnly>
        <MobileOnly>
          <img src={interactive} alt="" width="100%" />
          <div
            className="interactive-text"
            style={{
              textAlign: 'center',
              marginTop: '2rem',
            }}
          >
            <h2>The Leader in Interactive VR</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quam atque delectus necessitatibus vel inventore incidunt
              laboriosam modi pariatur, ipsam hic reiciendis quia tenetur.
              Consectetur aliquam harum nostrum libero eos.
            </p>
          </div>
        </MobileOnly>
      </Container>
    </section>
  )
}

const SectioOurCreations = () => {
  return (
    <section id="our-creations">
      <Container>
        <MobileOnly>
          <header className="section-header">
            <h2>OUR CREATIONS</h2>
          </header>
          <main className="section-main">
            <ul>
              {creations.map((creation,index) => {
                return (
                  <li key={index}
                    style={{
                      background: `url('${creation.image.mobile}') center top/cover no-repeat`,
                    }}
                  >
                    <h3>{creation.title}</h3>
                  </li>
                )
              })}
            </ul>
          </main>
          <footer className="section-footer">
            <button>SEE ALL</button>
          </footer>
        </MobileOnly>
        <DesktopOnly>
          <div id="our-creations-desktop-section">
            <header className="section-header">
              <h2>OUR CREATIONS</h2>
              <button>SEE ALL</button>
            </header>
            <main className="section-main">
              <ul>
                {creations.map((creation,index) => {
                  return (
                    <li key={index}
                      style={{
                        background: `url('${creation.image.desktop}') center top/cover no-repeat`,
                      }}
                    >
                      <h3>{creation.title}</h3>
                    </li>
                  )
                })}
              </ul>
            </main>
            <footer className="section-footer"></footer>
          </div>
        </DesktopOnly>
      </Container>
    </section>
  )
}

function App() {
  console.log(interactive)
  return (
    <div className="App">
      <Hero />
      <main>
        <SectionInteractive></SectionInteractive>
        <SectioOurCreations></SectioOurCreations>
      </main>
      <Footer/>
    </div>
  )
}

export default App

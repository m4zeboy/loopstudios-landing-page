import React, { useState } from 'react'
import { MobileOnly } from '../MobileOnly'
import { DesktopOnly } from '../DesktopOnly'
import { Container } from '../Container'
import logo from '../../assets/images/logo.svg'
import iconHamburger from '../../assets/images/icon-hamburger.svg'
import iconClose from '../../assets/images/icon-close.svg'
import './style.scss'

export function Hero() {
  const [modal, setModal] = useState(false)
  return (
    <div id="hero">
      <header className="hero-header">
        <Container>
          <a href="#">
            <img src={logo} alt="Loopstudios logo" />
          </a>
          <MobileOnly>
            <a href="#" onClick={() => setModal(!modal)}>
              <img src={iconHamburger} alt="Hamburger menu icon" />
            </a>
          </MobileOnly>
          <DesktopOnly>
            <nav className='nav-desktop'>
              <ul>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">CAREERS</a>
                </li>
                <li>
                  <a href="#">EVENTS</a>
                </li>
                <li>
                  <a href="#">PRODUCTS</a>
                </li>
                <li>
                  <a href="#">SUPPORT</a>
                </li>
              </ul>
            </nav>
          </DesktopOnly>
        </Container>
      </header>
      <Container>
        <div id="hero-title">
          <h1>immersive experience that deliver.</h1>
        </div>
      </Container>
      {modal && (
        <MobileOnly>
          <div className="modal">
            <header className="modal-header">
              <img src={logo} alt="Loopstudios logo" />
              <a href="#">
                <img
                  src={iconClose}
                  alt="icon close"
                  onClick={() => setModal(false)}
                />
              </a>
            </header>
            <main className="modal-main">
              <nav>
                <ul>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">CAREERS</a>
                  </li>
                  <li>
                    <a href="#">EVENTS</a>
                  </li>
                  <li>
                    <a href="#">PRODUCTS</a>
                  </li>
                  <li>
                    <a href="#">SUPPORT</a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </MobileOnly>
      )}
    </div>
  )
}

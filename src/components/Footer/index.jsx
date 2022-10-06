import React from 'react'
import { Container } from '../Container'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import './style.scss'
import { DesktopOnly } from '../DesktopOnly'
import { MobileOnly } from '../MobileOnly'

export function Footer() {
  return (
    <footer className="app-footer">
      <Container>
        <DesktopOnly>
          <header className="footer-header">
            <img src={logo} alt="" />
            <ul>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
            </ul>
          </header>
          <footer className="footer-footer">
            <nav className="nav-footer">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
            <p>&copy; 2022 Loopstudios. All rights reserved.</p>
          </footer>
        </DesktopOnly>
        <MobileOnly>
          <div id="mobile-footer">
            <img src={logo} alt="" />
            <ul>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <p>&copy; 2022 Loopstudios. All rights reserved.</p>
          </div>
        </MobileOnly>
      </Container>
    </footer>
  )
}

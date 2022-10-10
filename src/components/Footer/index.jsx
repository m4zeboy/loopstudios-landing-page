import React, { useState } from "react";
import { Container } from "../Container";
import { DesktopOnly } from "../DesktopOnly";
import { MobileOnly } from "../MobileOnly";
import logo from '../../assets/images/logo.svg'

import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'



import './style.scss'

const links = ['About', 'Careers', 'Events', 'Products', 'Support'];

export function Footer() {
  return (
    <footer className="app-footer">
      <Container >
        <DesktopOnly>
          <header>
            <div><a href="#"><img src={logo} alt="Loopstudios logo" /></a></div>
            <ul>
              <li><a href="#"><img src={iconInstagram} alt="" /></a></li>
              <li><a href="#"><img src={iconFacebook} alt="" /></a></li>
              <li><a href="#"><img src={iconPinterest} alt="" /></a></li>
              <li><a href="#"><img src={iconTwitter} alt="" /></a></li>
            </ul>
          </header>
          <nav>
            <ul>
              {links.map(link => <li><a href="#">{link}</a></li>)}
            </ul>
            <p>&copy; 2022 Loopstusios. All rights reserved.</p>
          </nav>
        </DesktopOnly>
        <MobileOnly>
          <div className="content">
            <div><a href="#"><img src={logo} alt="Loopstudios logo" /></a></div>
            <nav>

              <ul>
                {links.map(link => <li><a href="#">{link}</a></li>)}
              </ul>
            </nav>

            <ul>
              <li><a href="#"><img src={iconInstagram} alt="" /></a></li>
              <li><a href="#"><img src={iconFacebook} alt="" /></a></li>
              <li><a href="#"><img src={iconPinterest} alt="" /></a></li>
              <li><a href="#"><img src={iconTwitter} alt="" /></a></li>
            </ul>
            <p>&copy; 2022 Loopstusios. All rights reserved.</p>
          </div>
        </MobileOnly>
      </Container>
    </footer>
  )
}
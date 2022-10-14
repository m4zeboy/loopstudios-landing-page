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
        <div>
          <img src={logo} alt="Loopstudios Logo" height={32} width={192}/>
          <ul className="footer-navigation">
            {links.map((link, index) => <li key={index}>{link}</li>)}
          </ul>
        </div>

        <div>
          <ul>
            <li><img src={iconFacebook} alt="Facebook" /></li>
            <li><img src={iconInstagram} alt="Instagram" /></li>
            <li><img src={iconPinterest} alt="Pinterest" /></li>
            <li><img src={iconTwitter} alt="Twitter" /></li>
          </ul>
          <p>&copy; 2022 Loopstudios. All rights reserved.</p>
        </div>

      </Container>
    </footer>
  )
}
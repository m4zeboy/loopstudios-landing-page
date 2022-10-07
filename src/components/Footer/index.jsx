import React from 'react'
import { Container } from '../Container'
import logo from '../../assets/images/logo.svg'
import './style.scss'

const socialMediaIconsData = [
  {
    title: 'Facebook',
    src: 'src/assets/images/icon-facebook.svg',
  },
  {
    title: 'Instagram',
    src: 'src/assets/images/icon-instagram.svg',
  },
  {
    title: 'Pinterest',
    src: 'src/assets/images/icon-pinterest.svg',
  },
  {
    title: 'Twitter',
    src: 'src/assets/images/icon-twitter.svg',
  },
]

const paginationData = [
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Careers',
    href: '#',
  },
  {
    title: 'Events',
    href: '#',
  },
  {
    title: 'Products',
    href: '#',
  },
  {
    title: 'Support',
    href: '#',
  },
]

const SocialMedia = ({ data }) => {
  return (
    <Container className="social-media">
      <ul>
        {data.map((icon) => {
          return (
            <li>
              <a href="#">
                <img
                  src={icon.src}
                  alt={icon.title + ' icon'}
                  title={icon.title + ' icon'}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

const NavFooter = ({ data }) => {
  return (
    <nav className="nav-footer">
      <ul>
        {data.map((page) => {
          return (
            <li>
              <a href={page.href}>{page.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="app-footer">
      <Container>
        <div className="content-footer">
          <img src={logo} alt="Loopstudios logo" />
          <SocialMedia data={socialMediaIconsData} />
          <NavFooter data={paginationData} />
          <p>&copy;All rights reserved. Loopstudios 2022.</p>
        </div>
      </Container>
    </footer>
  )
}

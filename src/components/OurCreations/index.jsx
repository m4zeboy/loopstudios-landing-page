import React from 'react'
import { Container } from '../Container'
import creations from '../../services/creations.json'

import { MobileOnly } from '../MobileOnly'
import './style.scss'
import { DesktopOnly } from '../DesktopOnly'

const Creation = ({ data }) => {
  return (
    <div className="creation">
      <MobileOnly>
        <li
          style={{
            background: `url(${data.image.mobile}) center top/cover no-repeat`,
          }}
          className="creation-mobile"
        >
          <p
            style={{
              color: 'white',
              fontSize: '2rem',
            }}
          >
            {data.title}
          </p>
        </li>
      </MobileOnly>

      <DesktopOnly>
        <li
          style={{
            background: `url(${data.image.desktop}) center top/cover no-repeat`,
          }}
          className="creation-desktop"
        >
          <p
            style={{
              color: 'white',
              fontSize: '2rem',
            }}
          >
            {data.title}
          </p>
        </li>
      </DesktopOnly>
    </div>
  )
}

export function OurCreations() {
  return (
    <section>
      <Container>
        <MobileOnly>
          <div className="our-creations-content">
            <header className="section-heading">
              <h2>OUR CREATIONS</h2>
            </header>
            <main className="section-content">
              <ul>
                {creations.map((creation) => {
                  return <Creation data={creation} />
                })}
              </ul>
            </main>
            <footer className="section-footer">
              <button className="primary">SEE ALL</button>
            </footer>
          </div>
        </MobileOnly>
        <DesktopOnly>
        <div className="our-creations-content">
            <header className="section-heading">
              <h2>OUR CREATIONS</h2>
              <button className='primary'>SEE ALL</button>
            </header>
            <main className="section-content">
              <ul style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2rem"
              }}>
                {creations.map((creation) => {
                  return <Creation data={creation} />
                })}
              </ul>
            </main>
          </div>
        </DesktopOnly>
      </Container>
    </section>
  )
}

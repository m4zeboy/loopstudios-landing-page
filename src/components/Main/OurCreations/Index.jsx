import React, { useState } from 'react'
import { Container } from '../../Container';
import { DesktopOnly } from '../../DesktopOnly';
import { MobileOnly } from '../../MobileOnly';
import creations from '../../../services/creations.json';

import './style.scss'

const Creation = ({ data }) => {
  return (
    <>
      <MobileOnly>
        <div className='creation-item' style={{ background: `url(${data.image.mobile}) center top/cover no-repeat`}}>
          <h3>{data.title}</h3>
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className='creation-item' style={{ background: `url(${data.image.desktop}) center top/cover no-repeat`}}>
          <h3>{data.title}</h3>
        </div>
      </DesktopOnly>
    </>

  )
}

export function OurCreations() {
  return (
    <section id="our-creations">
      <Container>
        <header>
          <h2>our creations</h2>
          <DesktopOnly>
            <button className="outline">SEE ALL</button>
          </DesktopOnly>
        </header>

        <main>
          <ul>
            {creations.map(creation => <Creation data={creation} />)}
          </ul>
        </main>

        <MobileOnly>
          <footer style={{ display: "flex" }}>
            <button className="outline">SEE ALL</button>
          </footer>
        </MobileOnly>
      </Container>
    </section>
  )
}
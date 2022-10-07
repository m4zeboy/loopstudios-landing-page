import React from 'react'
import { Container } from '../Container'
import interactive from '../../assets/images/desktop/image-interactive.jpg'
import { DesktopOnly } from '../DesktopOnly'
import { MobileOnly } from '../MobileOnly'
import './style.scss'

export function Interactive() {
  return (
    <section>
      <Container>
        <DesktopOnly>
          <div
            className="interactive-desktop-content"
            style={{
              background: `url(${interactive}) left top/contain no-repeat`,
              height: '500px',
            }}
          >
            <div
              className="interactive-text"
              style={{
                maxWidth: '600px',
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
          <div className="interactive-mobile-content">
            <img src={interactive} alt="" />
            <div className="interactive-text">
              <h2>The Leader in Interactive VR</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quam atque delectus necessitatibus vel inventore incidunt
                laboriosam modi pariatur, ipsam hic reiciendis quia tenetur.
                Consectetur aliquam harum nostrum libero eos.
              </p>
            </div>
          </div>
        </MobileOnly>
      </Container>
    </section>
  )
}

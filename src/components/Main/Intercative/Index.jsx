import React, { useState } from 'react'
import interactive from '../../../assets/images/desktop/image-interactive.jpg';
import { Container } from '../../Container';
import { DesktopOnly } from '../../DesktopOnly';
import { MobileOnly } from '../../MobileOnly';

import './style.scss'

export function Interactive() {
  const ContentDesktopstyles = {
    background: `url(${interactive}) top center/contain no-repeat`,
    height: "500px",
    backgroundPosition: "left",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "end"
  }
  const articleDesktopStyles = {
    padding: "8rem 0 0 8rem",
    background: "white",
    maxWidth: "54rem",
  }
  const articleMobileStyles = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "4.8rem"
  }
  
  return (
    <section id="interactive">
      <Container>

        <DesktopOnly>
          <div className="content" style={ContentDesktopstyles}>
            <article style={articleDesktopStyles}>
              <h2 style={{ marginBottom: "2rem" }}>The Leader in Interactive VR</h2>
              <p>Founded in 2011, Loopstudios has been producing world-calss
                virtual reality projects for some of the best companiesaround the
                globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.</p>
            </article>
          </div>
        </DesktopOnly>
        <MobileOnly>
          <div className="content" style={articleMobileStyles}>
            <img
              style={{ width: "100%" }}
              src={interactive}
              alt="Imagem apresentando a interatividade do óculos VR"
              title="Imagem apresentando a interatividade do óculos VR" />
            <article>
              <h2 style={{ marginBottom: "2rem" }}>The Leader in Interactive VR</h2>
              <p>Founded in 2011, Loopstudios has been producing world-calss
                virtual reality projects for some of the best companiesaround the
                globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.</p>
            </article>
          </div>

        </MobileOnly>
      </Container>
    </section>
  )
}
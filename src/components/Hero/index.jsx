import React, { useState } from "react";
import { Container } from "../Container";
import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-hamburger.svg'
import close from '../../assets/images/icon-close.svg'

import hero from '../../assets/images/desktop/image-hero.jpg';

import { DesktopOnly } from "../DesktopOnly";
import { MobileOnly } from "../MobileOnly";
import './style.scss'

const links = ['About', 'Careers', 'Events', 'Products', 'Support'];

const ModalHero = ({ controls }) => {
  return (
    <div id="modal-hero">
      <Container>
        <header style={{ marginBottom: "16rem"}}>
          <img src={logo} alt="Loopstudios Logo" title="Loopstudios Logo" />
          <button className="glass" onClick={() => controls.setModal(!controls.modal)}><img src={close} alt="close icon" title="Clique para fechar o modal" /></button>
        </header>
        <nav>
          <ul style={{ display: "flex", flexDirection: "column", gap: "3.2rem"}}>{links.map(link => <li><a href="#" style={{ fontFamily: "Josefin Sans", textTransform: "uppercase", fontSize: "24px"}}>{link}</a></li>)}</ul>
        </nav>
      </Container>
    </div>
  )
}

export function Hero() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <header id="hero" style={{
        background: `url(${hero}) center top/cover no-repeat`
      }}>
        <Container>
          <nav>
            <img src={logo} alt="Loopstudios Logo" title="Loopstudios Logo" />
            <DesktopOnly>
              <ul>
                {links.map(link => <li><a href="#">{link}</a></li>)}
              </ul>
            </DesktopOnly>
            <MobileOnly>
              <button className="glass" onClick={() => setModal(!modal)}>
                <img src={hamburger} alt="icon hamburguer" title="click to open a modal with navigation links" />
              </button>

            </MobileOnly>
          </nav>
          <div className="title">
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </Container>
      </header>
      {<MobileOnly>{modal && <ModalHero controls={{ modal, setModal }} />}</MobileOnly>}
    </>

  )
}
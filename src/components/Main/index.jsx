import React, { useState } from 'react'
import { Interactive } from './Intercative/Index'
import { OurCreations } from './OurCreations/Index'
import './style.scss'

export function Main() {
  return (
    <main className='app-main'>
      <Interactive />
      <OurCreations />
    </main>
  )
}
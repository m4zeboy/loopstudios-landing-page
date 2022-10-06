import React from 'react';
import './style.scss'

export function DesktopOnly({children, ...props}) {
  return (
    <div className='desktop-only' {...props}>{children}</div>
  )
}
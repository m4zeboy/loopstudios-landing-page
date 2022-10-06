import React from 'react';
import './style.scss'

export function MobileOnly({children, ...props}) {
  return (
    <div className='mobile-only' {...props}>{children}</div>
  )
}
import React from 'react';
import './style.scss'

export function Container({children, ...props}) {
  return (
    <div className='container' {...props}>{children}</div>
  )
}
import React from 'react';
import './ui.scss';

export const UI = () => {
  
  document.addEventListener('keydown', (e) => {
    if(e.key === ' ') {
      document.getElementById('crosshair').style.visibility = 'hidden';
    }
  })

  document.addEventListener('keyup', (e) => {
    if(e.key === ' ') {
      document.getElementById('crosshair').style.visibility = 'visible';
    }
  })

  return (
    <div className='UI'>
      <div className='Crosshair' id='crosshair'/>
    </div>
  )
}
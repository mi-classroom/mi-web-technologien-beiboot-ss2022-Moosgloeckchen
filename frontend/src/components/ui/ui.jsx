import React from 'react';
import { Legend } from '../legend/legend';
import './ui.scss';

export const UI = () => {

  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      document.getElementById('UI').style.visibility = 'hidden';
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
      document.getElementById('UI').style.visibility = 'visible';
    }
  });

  return (
    <div className='UI'>
      <div className='Crosshair' id='crosshair' />
      <Legend />
    </div>
  );
};
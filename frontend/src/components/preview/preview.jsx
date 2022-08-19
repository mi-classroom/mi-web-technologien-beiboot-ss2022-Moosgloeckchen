import React from 'react';
import './preview.scss';

export const Preview = ({ previewUrl }) => {

  return (
    <div className='Preview'>
      <div className='Preview-image' id='preview-image'>
        <img src={previewUrl} id='preview-imageTag'></img>
      </div>
    </div>
  )
}
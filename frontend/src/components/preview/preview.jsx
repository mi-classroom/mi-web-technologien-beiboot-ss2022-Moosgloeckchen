import React from 'react';
import './preview.scss';

/**
 * takes the href of a painting on tabulation
 * displays preview in the bottom left corner
 */

export const Preview = ({
  previewUrl,
  setPreviewUrl
}) => {

  /**
   * remove preview on body click
   */
  document.body.addEventListener('click', (e) => {
    setPreviewUrl(null)
  })

  return (
    <div className='Preview'>
      <div className='Preview-image' id='preview-image'>
        <img src={previewUrl} id='preview-imageTag'></img>
      </div>
    </div>
  )
}
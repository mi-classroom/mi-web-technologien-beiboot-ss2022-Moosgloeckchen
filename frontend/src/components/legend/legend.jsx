import React from 'react';
import './legend.scss';

export const Legend = () => {

  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      document.getElementById('legendContent').style.visibility = 'hidden';
    }
  })

  document.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
      document.getElementById('legendContent').style.visibility = 'visible';
    }
  })

  return (
    <div className='Legend'>
      <div className='Legend-content' id='legendContent'>
        <p><strong>Legende:</strong></p>
        <p>Mit ASWD kann Bewegung in der Umgebung simuliert werden. </p>
        <p>Um das Gemälde im Archiv einzusehen kann der Informationstext darunter angeklickt werden.</p>
        <p>Um die zugehörigen Werke im Archiv einzusehen kann das jeweilige kleine Vorschau Bild angeklickt werden.</p>
        <p>Um die UI Elemente zu verstecken kann die Leertaste gehalten werden.</p>
      </div>
    </div>
  )
}
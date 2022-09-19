import React from 'react';
import './legend.scss';

export const Legend = () => {
  return (
    <div className='Legend'>
      <div className='Legend-content' id='legendContent'>
        <p><strong>Legende:</strong></p>
        <p>Mit einem Klick in die Umgebung kann die Kamera bewegt werden.</p>
        <p>Zum Verlassen ESC drücken.</p>
        <p>Mit ASWD kann Bewegung in der Umgebung simuliert werden.</p>
        <p>Um das Gemälde im Archiv einzusehen kann der Informationstext darunter angeklickt werden.</p>
        <p>Um die zugehörigen Werke im Archiv einzusehen kann das jeweilige kleine Vorschau Bild angeklickt werden.</p>
        <p>Um die UI Elemente zu verstecken kann die Leertaste gehalten werden.</p>
      </div>
    </div>
  );
};
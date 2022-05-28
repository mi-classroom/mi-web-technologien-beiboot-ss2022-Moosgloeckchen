import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/styles/index.scss';


const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images2 = [
  //positin: [x, y, z] -> rechts/links, oben/unten, vorne/hinten

  { position: [0, 0, 0], rotation: [0, 0, 0], url: pexel(1103970) },
  { position: [0, 0, 1], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(310452) },
  { position: [0, 0, 3], rotation: [0, 0, 0], url: pexel(327482) },
  { position: [0, 0, 4], rotation: [0, 0, 0], url: pexel(325185) },
  { position: [0, 0, 5.5], rotation: [0, 0, 0], url: pexel(358574) },
  { position: [0, 0, 7], rotation: [0, 0, 0], url: pexel(227675) },
  { position: [0, 0, 7.5], rotation: [0, 0, 0], url: pexel(911738) },
  { position: [0, 0, 8], rotation: [0, 0, 0], url: pexel(1738986) }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App images={images2}/>
  </React.StrictMode>
)


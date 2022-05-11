import React, { useEffect, useState } from 'react';
import Overview from './components/overview/overview';

import Data from "./../../data/cda-paintings-2022-04-22.de.json";
import { mergeSort } from './helpers/sorting.helper';
import DetailsView from './components/detailedView/details.view';

const App = () => {

    const [isDetails, setisDetails] = useState(false)
    const [bestOf, setpaintingsBestOf] = useState(null)

    const masterpieces = Data.items;

    useEffect(() => {
      async function getData() {
        const piecesBestOf = masterpieces.filter((painting) => {
            return painting.isBestOf;
        })
        setpaintingsBestOf(piecesBestOf);
      }

      getData();
  
    return () => {
    }
  }, [])


    return (
        <div>
            {!isDetails 
            ? 
                <Overview bestOf={bestOf} setisDetails={setisDetails} />
            :
                <DetailsView bestOf={bestOf} setisDetails={setisDetails}/>
            }
        </div>
    )
}

export default App;
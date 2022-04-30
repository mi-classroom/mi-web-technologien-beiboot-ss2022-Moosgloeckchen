import React, { useState } from 'react';
import Overview from './components/overview/overview';

import Data from "./../../data/cda-paintings-2022-04-22.de.json";
import { mergeSort } from './helpers/sorting.helper';
import DetailsView from './components/detailedView/details.view';

const App = () => {

    const [isDetails, setisDetails] = useState(false)

    return (
        <div>
            {!isDetails 
            ? 
                <Overview setisDetails />
            :
                <DetailsView paintings />
            }
        </div>
    )
}

export default App;
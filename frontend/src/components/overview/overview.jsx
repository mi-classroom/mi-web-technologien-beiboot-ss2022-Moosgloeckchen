import React from 'react';
import { saveInLocalStorage } from '../../helpers/localStorage.helper';
import { mergeSort } from '../../helpers/sorting.helper';
import Data from "./../../../../data/cda-paintings-2022-04-22.de.json";
import './overview.css';

const Overview = ({setisDetails}) => {

    const masterpieces = Data.items;

    const bestOf = masterpieces.filter((painting) => {
        return painting.isBestOf;
    })

    mergeSort(bestOf);

    const handleClick = (paintingNumber) => {
        setisDetails(true);
        saveInLocalStorage('paintingNumber', paintingNumber)
    }

    const getPaintingsPreview = bestOf.map((painting, i) => (
        <div key={i} className='Preview-painting'>
            <button onClick={() => handleClick(painting.sortingNumber)}>
                <img src={painting.images.overall.images[0].sizes.medium.src} height='200px'/>
            </button>
        </div>
    ))

    return (
        <div>
            <h1>This is an overview over Lukas Cranach's masterpieces</h1>
            <div className='Preview'>
                {getPaintingsPreview}
            </div>
        </div>
    )
}

export default Overview;
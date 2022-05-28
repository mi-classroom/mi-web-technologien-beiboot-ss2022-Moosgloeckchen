import React from 'react';
import { saveInLocalStorage } from '../../helpers/localStorage.helper';
import { mergeSort } from '../../helpers/sorting.helper';
import './overview.css';

const Overview = ({bestOf, setisDetails}) => {
    const paintings = bestOf ? bestOf : [];

    mergeSort(paintings);

    const handleClick = (paintingNumber) => {
        setisDetails(true);
        saveInLocalStorage('paintingNumber', paintingNumber)
    }

    const getPaintingsPreview = paintings.map((painting, i) =>  {
        const maxDimensions = painting.images.overall.infos.maxDimensions;
        const fixWidth = 70;
        const paintingWidth = maxDimensions.width;
        const paintingHeight = maxDimensions.height;
        const ratio = (paintingHeight / paintingWidth)
        const fixHeight = ratio * fixWidth;

        return (
            <div key={i} className='Preview-painting'>
                <button onClick={() => handleClick(painting.sortingNumber)}>
                    <img src={painting.images.overall.images[0].sizes.medium.src} height={fixHeight} width="70"/>
                </button>
            </div>
        )
    })

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
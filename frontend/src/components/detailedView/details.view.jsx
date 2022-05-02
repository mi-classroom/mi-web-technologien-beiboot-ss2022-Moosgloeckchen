import React from 'react';
import { getFromLocalStorage } from '../../helpers/localStorage.helper';

const DetailsView = () => {

    const paintingNumber = getFromLocalStorage('paintingNumber');

    return (
        <div>
            <p>test</p>
        </div>
    )
}

export default DetailsView;
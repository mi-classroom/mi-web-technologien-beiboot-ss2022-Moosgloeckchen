import React from 'react';
import Data from "./../../../../data/cda-paintings-2022-04-22.de.json";

const Overview = () => {

    const masterpieces = Data.items;

    const bestOf = masterpieces.filter((painting) => {
        return painting.isBestOf;
    })

    console.log('masterpieces', masterpieces)
    console.log('bestOf', bestOf)
    console.log('bestOf[0].titles.title', bestOf[0].titles[0].title)


    return (
        <div>
            <h1>This is an overview over Lukas Cranach masterpieces</h1>

            {bestOf.map((painting, i) => (

                <li key={i}>

                    <span> {i} Titel {painting.titles[0].title}</span>

                </li>

            ))}
        </div>
    )
}

export default Overview;
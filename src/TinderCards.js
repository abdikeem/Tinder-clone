import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([]);
    // Push to an array in react
    // setPeople([...people, 'Hashim', 'yasir])

    {
        name: 'Richard Hendricks',
        // url: ''
    }
    return (
        <div>
            {people.map(person => (
                <TinderCard>
                    <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards

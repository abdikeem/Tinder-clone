import { SwipeableDrawer } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import database from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([]);
    
// piece of code which runs based on a condition variable
useEffect(() => {
    // this is where the code runs
    database.collection('people').onSnapshot(snapshot => {
        setPeople(snapshot.docs.map(doc => doc.data()))
    })
    // this will run ones when conponent loads, and never again
}, [people])

    return (
        <div className="tinderCards">
            <div className="tinderCards_card_container">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        noSwipe={(dir) => SwipeableDrawer(dir, person.name)}
                    >
                        <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
       
    );
}

export default TinderCards

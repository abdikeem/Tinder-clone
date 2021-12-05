import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
// Push to an array in react
    // setPeople([...people, 'Hashim', 'yasir])

    {
        name: "Richard Hendricks",
        url: "./static/images/richard.jpg"
    },
    {
        name: 'Erlich Bachman',
        url: './static//images/erlich.jpg'
      },
      {
        name: 'Monica Hall',
        url: './static/images/monica.jpg'
      },
      {
        name: 'Jared Dunn',
        url: './static/images/jared.jpg'
      },
      {
        name: 'Dinesh Chugtai',
        url: './static/images/dinesh.jpg'
      }
    ]);
    
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

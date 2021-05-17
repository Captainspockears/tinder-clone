import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";

function Card() {
  const [people, setPeople] = useState([
    {
      name: "Aubameyang",
      url: "https://s.hs-data.com/bilder/spieler/gross/124897.jpg?fallback=png",
    },
    {
      name: "Bukayo Saka",
      url:
        "https://i2-prod.birminghammail.co.uk/incoming/article18651139.ece/ALTERNATES/s1200c/0_saka-shirt.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="card">
      <div className="card_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="inner_card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;

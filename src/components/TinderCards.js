import { Col, Row } from 'antd'
import React, { useState } from 'react'
import TinderCard from "react-tinder-card"


const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: "https://source.unsplash.com/user/erondu/1600x900"
        },
        {
            name: "mark zuckerberg",
            url: "https://source.unsplash.com/user/erondu/1600x901"
        }
    ])
    return (
        <React.Fragment>
            <h1>Tinder</h1>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
                        <div className="card" style={{ backgroundImage: `url(${person.url}` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </React.Fragment>

    )
}

export default TinderCards

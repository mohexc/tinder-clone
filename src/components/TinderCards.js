import React, { useEffect, useState } from 'react'
import TinderCard from "react-tinder-card"
import { db } from '../config/firebase'


const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const unsubscribe = db
            .collection('people')
            .onSnapshot((snapshot) => setPeople(snapshot.docs.map(doc => doc.data())))

        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <React.Fragment>
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

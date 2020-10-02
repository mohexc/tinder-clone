import React, { useState } from 'react'
import Chat from './Chat'

const morkUpChant = [
    {
        name: "Mark",
        message: "Yo whts up",
        timestamp: "40 seconds ago",
        profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Ellen",
        message: "Hey how are you",
        timestamp: "40 seconds ago",
        profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Sandra",
        message: "Ola",
        timestamp: "40 seconds ago",
        profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "Natasha",
        message: "Oops there is he is...💗💗",
        timestamp: "40 seconds ago",
        profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
]

const Chats = () => {
    const [state, setState] = useState(morkUpChant)
    return (
        <div>
            {state.map(data =>
                <Chat
                    name={data.name}
                    message={data.message}
                    timestamp={data.timestamp}
                    profilePic={data.profilePic}
                />

            )}
        </div>
    )
}

export default Chats

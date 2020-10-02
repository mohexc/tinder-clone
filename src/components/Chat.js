import { Avatar } from 'antd'
import React from 'react'

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <div className="chat">
            <Avatar className="chat-image" size="large" src={profilePic} />
            <div className="chat-details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat-timestamp">{timestamp}</p>
        </div>
    )
}

export default Chat

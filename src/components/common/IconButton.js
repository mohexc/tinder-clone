import React from 'react'

const IconButton = ({ children, onClick }) => {
    return (
        <div className="IconButton" onClick={onClick}>
            { children}
        </div>
    )
}

export default IconButton

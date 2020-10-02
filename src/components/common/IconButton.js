import React from 'react'

const IconButton = ({ children, onClick, style }) => {
    return (
        <div className="IconButton" onClick={onClick} style={style}>
            { children}
        </div>
    )
}

export default IconButton

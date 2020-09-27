import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
import { SiTinder } from "react-icons/si";
const Header = () => {
    return (
        <div className="header__app">
            <BsPersonFill className="header__icons" />
            <SiTinder className="header__icons__active" />
            <IoMdChatbubbles className="header__icons" />
        </div>
    )
}

export default Header

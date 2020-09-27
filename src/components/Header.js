import { Button } from 'antd';
import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
import { SiTinder } from "react-icons/si";
import { useHistory } from "react-router-dom";

// main
const Header = () => {
    const history = useHistory()


    return (
        <div className="header__app">
            <Button
                shape="circle"
                style={{ margin: "1rem" }}
                type="text"
                icon={<BsPersonFill className="header__icons" />}
            />
            <Button
                onClick={() => history.push('/')}
                shape="circle"
                style={{ margin: "1rem" }}
                type="text"
                icon={<SiTinder className="header__icons__active" />}
            />
            <Button
                onClick={() => history.push('/chat')}
                shape="circle"
                style={{ margin: "1rem" }}
                type="text"
                icon={<IoMdChatbubbles className="header__icons" />}
            />

        </div>
    )
}

export default Header

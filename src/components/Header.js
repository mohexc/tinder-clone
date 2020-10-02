import { Button } from 'antd';
import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { IoIosArrowBack, IoMdChatbubbles } from "react-icons/io";
import { SiTinder } from "react-icons/si";
import { useHistory } from "react-router-dom";
import IconButton from './common/IconButton';

// main
const Header = ({ backButton }) => {
    const history = useHistory()


    return (
        <div className="header__app">
            {backButton
                ? <IconButton onClick={() => history.replace(backButton)}>
                    <IoIosArrowBack />
                </IconButton>
                : (<IconButton>
                    <BsPersonFill className="header__icons" />
                </IconButton>)
            }
            <IconButton>
                <SiTinder className="header__icons__active" />
            </IconButton>
            <IconButton>
                <IoMdChatbubbles className="header__icons" />
            </IconButton>

        </div>
    )
}

export default Header

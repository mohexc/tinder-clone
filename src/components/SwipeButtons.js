import React from 'react'
import {
    GrUndo,
    GrClose,
    GrStar,
} from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { Button } from 'antd';
import IconButton from './common/IconButton';


const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton size="large" shape="circle" className="icons-button"><GrUndo color="#f5b748" size="24" /></IconButton>
            <Button size="large" shape="circle" className="icons-button"><GrClose color="red" size="24" /></Button>
            <Button size="large" shape="circle" className="icons-button"><GrStar color="#62b4f9" size="24" /></Button>
            <Button size="large" shape="circle" className="icons-button"><BsFillHeartFill color="green" size="24" /></Button>
            <Button size="large" shape="circle" className="icons-button"><AiFillThunderbolt color="violet" size="24" /></Button>
        </div>
    )
}

export default SwipeButtons

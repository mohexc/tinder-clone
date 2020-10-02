import React from 'react'
import {
    GrUndo,
    GrClose,
    GrStar,
} from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import IconButton from './common/IconButton';

const styles = {
    iconButton: { border: "1px solid lightgray" }
}

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton style={styles.iconButton} ><GrUndo color="#f5b748" size="32" /></IconButton>
            <IconButton style={styles.iconButton} ><GrClose color="red" size="32" /></IconButton>
            <IconButton style={styles.iconButton} ><GrStar color="#62b4f9" size="32" /></IconButton>
            <IconButton style={styles.iconButton} ><BsFillHeartFill color="green" size="32" /></IconButton>
            <IconButton style={styles.iconButton} ><AiFillThunderbolt color="violet" size="32" /></IconButton>
        </div>
    )
}

export default SwipeButtons

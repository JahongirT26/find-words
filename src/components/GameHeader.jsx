import React from "react";
import Progress from "./Progress";
import Hearts from "./Hearts";
import { LIVES_COUNT } from "../config/setting";
import logo from '../assets/images/pics-to-words.svg'

export default function GameHeader({value = 0, max = 0, errorsCount = 0}) {
    return (
        <>
            <img 
            src={logo}
            width="112" 
            height="16" 
            alt="Pics to words"/>
            <Progress 
            value={value} 
            max={max}
            />
            <Hearts 
            count={LIVES_COUNT} 
            value={errorsCount}
            />
        </>
    );
}
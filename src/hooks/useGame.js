import React from "react";
import { LIVES_COUNT } from "../config/setting";

export const useGame = (words) => {
    const [finishedItems, setFinishedItems] = React.useState([]);
    const [stepsCount, setStepsCount] = React.useState(0);

    const checkItems = (firstItem, secondItem) => {
        const firstWord = words.find(({id}) => id === firstItem);
        const secondWord = words.find(({id}) => id === secondItem);
        if (firstWord.type === secondWord.type) {
            return;
        }
        if (firstWord.token === secondWord.token) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
    };

    const handleReset = () => {
        setFinishedItems([]);
        setStepsCount(0);
    };

    const errorsCount = stepsCount - finishedItems.length / 2;
    const lives = LIVES_COUNT - errorsCount;
    const isWin = finishedItems.length === words.length;
    const isGameOver = isWin || lives === 0;
    return {
        finishedItems,
        handleReset,
        checkItems,
        errorsCount,
        isGameOver,
        isWin
    };
}
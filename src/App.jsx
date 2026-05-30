import React, { useState } from "react";

import { useGame } from "./hooks/useGame";
import { APPROUTE } from "./config/setting";
import ResultPage from "./components/ResultPage";
import GamePage from "./components/GamePage";

export default function App({words = [], results = []}) {
    const {
        finishedItems,
        handleReset,
        checkItems,
        errorsCount,
        isGameOver,
        isWin
     } = useGame(words);

    const [page, setPage] = useState(APPROUTE.GAME);

    const currentResult = finishedItems.length / 2;

    const resetGame = () => {
        handleReset();
        setPage(APPROUTE.GAME);
    }

    const handleResult = () => {
        setPage(APPROUTE.RESULT);
    }

    const getPage = (page) => {
        switch(page) {
            case APPROUTE.GAME:
                return (<GamePage 
                    isGameOver={isGameOver}
                    showResult={handleResult}
                    finishedItems={finishedItems} 
                    words={words} 
                    errorsCount={errorsCount}
                    checkItems={checkItems}
                    isWin={isWin}
                />)
            case APPROUTE.RESULT:
                return <ResultPage results={results} onResetGame={resetGame} current={currentResult}/>
            default:
                return <div>404</div>
        }
    } 

    return (
        getPage(page)
    );
}


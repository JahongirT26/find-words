import React from "react";
import GameHeader from "./components/GameHeader";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import { useGame } from "./hooks/useGame";

export default function App({words = []}) {
    const {
        finishedItems,
        handleReset,
        checkItems,
        errorsCount,
        isGameOver,
        isWin
     } = useGame(words);

    const modalClassName = isWin ? '' : 'modal-box-lose';
    const modalCaption = isWin ? 'Победа' : 'Поражение';
    const modalDescription = `Вы нашли ${finishedItems.length / 2} слова`;

    return (
        <section className="game">
            <GameHeader value={finishedItems.length} max={words.length} errorsCount={errorsCount} />
            <Grid words={words} finishedItems={finishedItems} checkItems={checkItems} />
            {isGameOver && (
            <Modal className={modalClassName}>
                <h3 className="modal-caption">{modalCaption}</h3>
                <p className="modal-description">{modalDescription}</p>
                <button onClick={handleReset} className="button" type="button">Новая игра</button>
            </Modal>
          )}
        </section>
    );
}
import React from "react";

import GameHeader from "./GameHeader";
import Grid from "./Grid";
import Modal from "./Modal";

export default function GamePage({finishedItems, words, errorsCount, checkItems, isWin, isGameOver, showResult}) {
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
                <button onClick={showResult} className="button" type="button">Результаты</button>
            </Modal>
          )}
        </section>
    )
}
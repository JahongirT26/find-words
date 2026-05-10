import React from "react";

export default function Card({item, isSelected, isFinished, onCardClick, isChecking}) {
    const {type, url, word: text, id} = item;
    const content = type === 'image'
        ? <img src={url} width="185" height="100" alt=""/>
        : <span>{text}</span>;

    const showError = isChecking && isSelected && !isFinished;

    const className = `card ${
        isSelected ? 'selected' : ''
        } ${
        isFinished ? 'disabled' : ''
        } ${
        showError ? 'error' : ''
        }`;

    const handleClick = () => {
        if (isFinished) {
          return;
        }
        onCardClick(id);
    };

    return (
        <li onClick={handleClick} className={className}>
            {content}
        </li>
    );
}
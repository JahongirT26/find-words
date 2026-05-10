import React from "react";
import Card from "./Card";
import { TIMEOUT } from "../config/setting";

export default function Grid({words, finishedItems, checkItems}) {
    const [selectedItems, setSelectedItems] = React.useState([]);

    const handleCardClick = (id) => {
        if (selectedItems.includes(id)) {
          return;
        }
        switch (selectedItems.length) {
            case 0:
                setSelectedItems([id]);
                break;
            case 1:
                setSelectedItems((items) => [...items, id]);
                checkItems(selectedItems[0], id);
                setTimeout(() => {
                    setSelectedItems([]);
                }, TIMEOUT);
                break;
            default:
            setSelectedItems([]);
        }
    };

    const cards = words.map((item) => (
        <Card
            key={item.id}
            item={item}
            isSelected={selectedItems.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
            isChecking={selectedItems.length === 2}
            onCardClick={handleCardClick}
        />
    ));
        return (
            <ul className="cards">
            {cards}
            </ul>
        );
}
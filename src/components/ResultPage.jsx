import React from "react"
import logo from "../assets/images/pics-to-words.svg"

export default function ResultPage({results, onResetGame, name = 'Ваш результат', current = '0'}) {
    const sortedResults = [...results, 
        {name: name, steps: current}
    ].sort((a,b) => b.steps - a.steps)
    
    const resultsRows = sortedResults.map(({name, steps}, i) => (
        <tr key={name} className={`result-table-row ${steps === current ? 'active' : ''}`}>
        <td>{i + 1}</td>
        <td>{name}</td>
        <td>{steps}</td>
        </tr>
    ))

    return(
        <section className="result">
            <img src={logo} alt="" />
            <h2>Лучшие результаты</h2>
            <table className="result-table">
                <thead>
                    <tr className="result-table-row">
                        <th>Место</th>
                        <th>Имя</th>
                        <th>Очки</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsRows}
                </tbody>
            </table>
            <button onClick={onResetGame} className="button" type="button">Новая игра</button>
        </section>
    )
}
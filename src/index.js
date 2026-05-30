import React from "react";
import ReactDOM from "react-dom/client";

import App from './App';
import { words } from "./data/words";
import { results } from "./data/result";

import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App words={words} results={results}/>)
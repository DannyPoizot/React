import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import TestButton from "./components/TestButton";
import ToggleButton from "./components/ToggleButton";


let n = 0;

ReactDOM.render(
    <div>
    <TestButton text="Activer les lasers"/>
    <TestButton text="Envoyer un missile"/>
    <ToggleButton  value={n}  />
    <ToggleButton  value={++n}  />
    </div>,   
    document.getElementById('root')
)

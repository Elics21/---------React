import { useState } from "react";
import "./App.css";
import Gallows from "./components/Gallows/Gallows.";
import KeyboardList from "./components/KeyboardList/KeyboardList";

function App() {
    const [attempt, setAttempt] = useState(0);
    const maxAttempts = 7;

    const addAttempt = () => {
        setAttempt((prevState) =>
            prevState !== maxAttempts.length ? prevState + 1 : 0
        );
    };
    return (
        <div className="app">
            <Gallows attempt={attempt}></Gallows>
            <KeyboardList onClick={addAttempt}></KeyboardList>
        </div>
    );
}

export default App;

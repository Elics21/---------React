import { useState } from "react";
import "./App.css";
import Gallows from "./components/Gallows/Gallows.";
import KeyboardList from "./components/KeyboardList/KeyboardList";
import Word from "./components/Word/word";

const WORDS = ["паша"];
const RUSSIAN_ALPHABET = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
];

function App() {
    const word = WORDS[0].toUpperCase();
    const [attempt, setAttempt] = useState(0);
    const [hiddenWord, setHiddenWord] = useState(
        word.split("").map((symbol) => ({
            symbol,
            visible: false,
        }))
    );
    const [alphabet, setAlphabet] = useState(
        RUSSIAN_ALPHABET.map((symbol) => ({
            symbol,
            state: "default", //default true false
        }))
    );
    const maxAttempts = 7;

    const addAttempt = (item) => {
        if (item.state === "default") {
            const symbol = item.symbol;
            const symbolId = alphabet.findIndex(
                (symb) => item.symbol === symb.symbol
            );
            if (word.includes(symbol)) {
                setHiddenWord((prevState) =>
                    prevState.map((i) => ({
                        symbol: i.symbol,
                        visible: i.symbol === symbol ? true : i.visible,
                    }))
                );
                setAlphabet((prevState) =>
                    prevState.map((s, index) =>
                        index === symbolId ? { ...s, state: "true" } : s
                    )
                );
            } else {
                setAttempt((prevState) => prevState + 1);
                setAlphabet((prevState) =>
                    prevState.map((s, index) =>
                        index === symbolId ? { ...s, state: "false" } : s
                    )
                );
            }
        }
        console.log(alphabet);
    };

    return (
        <div className="app">
            <Gallows attempt={attempt} />
            <div>
                <Word hiddenWord={hiddenWord} />
                <KeyboardList onClick={addAttempt} alphabet={alphabet} />
            </div>
        </div>
    );
}

export default App;

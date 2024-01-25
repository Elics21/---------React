import WordItem from "../WordItem/WordItem";
import "./Word.css";

function Word({ hiddenWord }) {
    return (
        <div className="word">
            {hiddenWord.map((item) => (
                <WordItem key={Math.random()} item={item} />
            ))}
        </div>
    );
}
export default Word;

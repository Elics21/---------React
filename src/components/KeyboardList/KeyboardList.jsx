import "./KeyboardList.css";
import "../KeyboardItem/KeyboardItem";
import KeyboardItem from "../KeyboardItem/KeyboardItem";

function KeyboardList({ alphabet, onClick }) {
    return (
        <div className="keyboard-list">
            {alphabet.map((item) => (
                <KeyboardItem key={item.symbol} onClick={onClick} item={item} />
            ))}
        </div>
    );
}
export default KeyboardList;

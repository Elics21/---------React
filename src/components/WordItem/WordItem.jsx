import "./WordItem.css";

function WordItem({ item }) {
    return (
        <div className="word-item">
            {item.visible && (
                <div className="word-item-symbol">{item.symbol}</div>
            )}
        </div>
    );
}
export default WordItem;

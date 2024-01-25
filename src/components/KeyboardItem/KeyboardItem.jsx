import "./KeyboardItem.css";

function KeyboardItem({ onClick, item }) {
    const cn = () => {
        let str = "";
        if (item.state === "true") {
            str = "true";
        }
        if (item.state === "false") {
            str = "false";
        }
        return "keyboard-item " + str;
    };

    return (
        <button className={cn()} onClick={() => onClick(item)}>
            {item.symbol}
        </button>
    );
}
export default KeyboardItem;

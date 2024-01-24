import "./Gallows.css";

const gallowsStates = [
    "/gallows-start.png",
    "/gallows-1.png",
    "/gallows-2.png",
    "/gallows-3.png",
    "/gallows-4.png",
    "/gallows-5.png",
    "/gallows-6.png",
];

function Gallows({ attempt }) {
    return <img className="gallows" src={gallowsStates[attempt]} alt="" />;
}
export default Gallows;

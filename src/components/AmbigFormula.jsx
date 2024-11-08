import './AmbigFormula.css';
import { useState } from 'react';

function AmbigFormula() {

    const [angleA, setAngle] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState("Press Calulate");

    function ambigFormula(e) {
        e.preventDefault();
        const h = b * Math.sin(angleA * (Math.PI / 180));
        let result;

        if (angleA === 90) {
            result = (a > b) ? "Right Triangle" : "No Triangle";
        } else if (angleA < 90) {
            if (a < h) return "No Triangle";
            if (a === h) return "Right Triangle";
            result = (a >= b) ? "One Triangle" : "Two Triangles (ambiguous)";
        } else {
            result = (a <= b) ? "No Triangle" : "One Triangle";
        }

        setResult(result);
    }

    return (
        <form onSubmit={(e) => ambigFormula(e)}>
            <h1>Ambiguous Formula</h1>
            <label>Angle A:</label>
            <input type="number" min="1" max="179" value={angleA} onChange={(event) => { setAngle(event.target.value) }} required />

            <label>Side a:</label>
            <input type="number" min="0" value={a} onChange={(event) => { setA(event.target.value) }} required />

            <label>Side b:</label>
            <input type="number" min="0" value={b} onChange={(event) => { setB(event.target.value) }} required />

            <label>Triangle Type:</label>
            <input type="text" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default AmbigFormula;
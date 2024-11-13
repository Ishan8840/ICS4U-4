import './AmbigCase.css';
import { useState } from 'react';

function AmbigCase() {
    const [angleA, setAngle] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState("Press Calulate");

    function ambigCase(e) {
        e.preventDefault();

        const h = b * Math.sin(angleA * (Math.PI / 180));
        let result;

        if (angleA === 90) {
            result = (a > b) ? "Right Triangle" : "No Triangle";
        } else if (angleA < 90) {
            if (a < h) {
                result = "No Triangle";
            } else if (a === h) {
                result = "Right Triangle";
            } else {
                result = (a >= b) ? "One Triangle" : "Two Triangles (ambiguous)";
            }
        } else {
            result = (a <= b) ? "No Triangle" : "One Triangle";
        }

        setResult(result);
    }

    return (
        <form onSubmit={(e) => ambigCase(e)}>
            <h1>Ambiguous Case</h1>
            <label>Angle A:</label>
            <input type="number" min="1" max="179" value={angleA} onChange={(event) => { setAngle(event.target.value) }} required />

            <label>Side a:</label>
            <input type="number" min="0" value={a} onChange={(event) => { setA(event.target.value) }} required />

            <label>Side b:</label>
            <input type="number" min="0" value={b} onChange={(event) => { setB(event.target.value) }} required />

            <label>Triangle Type (Result):</label>
            <input type="text" value={result} readOnly />

            <input type="submit" value="Calculate" />
        </form>
    )
}

export default AmbigCase;
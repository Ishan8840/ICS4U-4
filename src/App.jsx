import './App.css';
import HeronFormula from './components/HeronFormula';
import AmbigFormula from './components/AmbigFormula';
import NewtonFormula from './components/NewtonFormula';
import PolynomialFunction from './components/PolynomialFunction';

function App() {
  return (
    <div className="formula-grid">
      <HeronFormula />
      <AmbigFormula />
      <NewtonFormula />
      <PolynomialFunction />
    </div>
  );
}

export default App;

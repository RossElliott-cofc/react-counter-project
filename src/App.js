import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="counter-card">
        <h1> Counter App</h1>
        <p className="subtitle">Dynamic Counter Application using React</p>

        <div className="count-box">
          <h2>{count}</h2>
        </div>

        <div className="button-group">
          <button onClick={increaseCount}>increase</button>
          <button onClick={decreaseCount}>decrease</button>
          <button onClick={resetCount}>reset</button>
        </div>

        <p className="description">
        This website was built using react. it uses usestate to store the
        counter value and updates the page when a button is clicked.
        </p>
      </div>
    </div>
  );
}

export default App;

//http://localhost:3000/
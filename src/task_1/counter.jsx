import { useState } from "react";

function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newValue = count + step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newValue = count - step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  const lastFive = history.slice(-5);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
      <p><strong>Current count:</strong> {count}</p>
      <p><strong>Total operations:</strong> {operationCount}</p>

      <p><strong>History:</strong></p>
      <ul>
        {lastFive.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

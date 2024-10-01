// Import React and useState hook from 'react'
import React, { useState } from 'react';

// Define the MathOperations component
function MathOperations() {
  // State variables for input numbers and result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Math operation functions
  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => setResult(num2 !== 0 ? num1 / num2 : 'Error: Division by zero');

  // Render the component
  return (
    <div>
      {/* Input fields for numbers */}
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      
      {/* Buttons for math operations */}
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      
      {/* Display result */}
      <p>Result: {result}</p>
    </div>
  );
}

// Export the MathOperations component
export default MathOperations;
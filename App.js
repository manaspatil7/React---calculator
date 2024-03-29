import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentInput, setCurrentInput] = useState('');

  const handleClick = (e) => {
    const value = e.target.name;
    setCurrentInput(currentInput + value);
  }

  const clear = () => {
    setCurrentInput('');
  }

  const handleDelete = () => {
    setCurrentInput(currentInput.slice(0, -1));
  }

  const calculate = () => {
    try {
      
      setCurrentInput(eval(currentInput).toString());
    } catch (error) {
      setCurrentInput('Error');
    }
  }

  return (
    <div className="App">
      <h1>Task 1: Calculator</h1>
      <div className="container">
        <input type='text' value={currentInput} readOnly className="input-field" />
        <div className="keypad">
          <button id="clear"  onClick={clear} className='highlight'>AC</button>
          <button onClick={handleDelete} className='highlight'>DEL</button>
          <button name='/' onClick={handleClick} className='highlight'>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='*' onClick={handleClick} className='highlight'>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button name='-' onClick={handleClick} className='highlight'>-</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button name='+' onClick={handleClick} className='highlight'>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button id="equal" onClick={calculate} className='highlight'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

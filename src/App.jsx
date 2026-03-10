import React, { useState } from 'react';
import './App.css';

function App() {
    const [expression, setExpression] = useState('');

    const handleClick = (val) => setExpression(expression + val);
    const clear = () => setExpression('');
    const calculate = () => {
        try {
            // ⚠️ eval solo para ejemplo, mejor usar mathjs
            setExpression(eval(expression).toString());
        } catch {
            setExpression('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={expression} readOnly />
            <div className="buttons">
                {/* Fila 1 */}
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>÷</button>

                {/* Fila 2 */}
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>×</button>

                {/* Fila 3 */}
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>−</button>

                {/* Fila 4 */}
                <button onClick={clear}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
        </div>
    );
}

export default App;

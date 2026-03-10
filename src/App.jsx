import { useState } from 'react';

function App() {
    const [expression, setExpression] = useState('');

    const handleClick = (val) => setExpression(expression + val);
    const clear = () => setExpression('');
    const calculate = () => {
        try {
            setExpression(eval(expression)); // ⚠️ solo ejemplo, mejor usar librerías matemáticas
        } catch {
            setExpression('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={expression} readOnly />
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={calculate}>=</button>
                <button onClick={clear}>C</button>
            </div>
        </div>
    );
}

export default App;

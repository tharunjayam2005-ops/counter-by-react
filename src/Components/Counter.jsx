import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const increment = () => {
        setCount(count + 1);
        setShowMessage(false);
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            if (newCount === 0) {
                setShowMessage(true);
            }
        }
    };

    const reset = () => {
        setCount(0);
        setShowMessage(false);
    };

    return (
        <div className="counter-page">
            <div className="counter-container">
                <span className="badge">COUNTER APP</span>
                <h1><span className="bolt">⚡</span> Neo Counter</h1>

                <h2 className="count">{count}</h2>
                {showMessage && (
                    <p className="message">
                        Minimum limit reached
                    </p>
                )}

                <div className="btn-group">
                    <button className="increment" onClick={increment}>+ Increment</button>
                    <button className="decrement" onClick={decrement}>- Decrement</button>
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
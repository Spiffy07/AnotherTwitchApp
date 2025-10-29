// java script here
import { useState } from 'react';

let random = Math.random() * 100 % 2;
let content;

if (random === 1) {
    content = <h1>Odd Number</h1>
} else {
    content = <h1>Even Number</h1>
}


function MyButton({count, onClick }) {
    return (
        <div>
            <button class="btn btn-primary" onClick={onClick}>
                Click Me  count: {count}
            </button>
        </div>
    )
}

export default function MyComponent() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            {content}
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

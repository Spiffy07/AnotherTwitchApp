// java script here
import { useState } from 'react';
import { Button } from "@/components/ui/button"

let random = Math.random() * 100 % 2;
let content;

if (random === 1) {
    content = <h1>Odd Number</h1>
} else {
    content = <h1>Even Number</h1>
}

function MyButton({count, onClick }) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="secondary" onClick={onClick}>Click Me! count: {count}</Button>
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

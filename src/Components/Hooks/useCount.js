import { useState } from 'react';

export function useCount (startCount) {
    const [count, setCount] = useState(startCount || 1);

    const onChange = event => setCount(event.target.value);

    return { count, setCount, onChange }
}
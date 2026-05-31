import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </section>
  );
};

export default Counter;

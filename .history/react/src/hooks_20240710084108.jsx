


import { useState, useEffect, useMemo} from 'react'

const ExpensiveCalculation = ( number ) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or updated')
        return () => console.log('Component will unmount');
    }, []);

    const handleClick = () => setCount(count + 1);




    const expensiveResult = useMemo(() => {
        console.log('Calculting...');
        return number * 3; 
    }, [number]);


    
  return (
    <div>
        <p>Count: {count}</p>
        <p>Expensive calculation result: {expensiveResult}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ExpensiveCalculation;
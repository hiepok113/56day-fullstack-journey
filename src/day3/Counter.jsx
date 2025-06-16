import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("gia tri moi", count);
    }, [count]);
    return (
        <button onClick={() => setCount(count + 1)}> nhap vo : {count}</button>
    );
};
export default Counter;

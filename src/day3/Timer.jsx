import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("⛔ Đã dọn dẹp timer!");
        };
    }, []);

    return <h1>⏱ {seconds} giây</h1>;
};

export default Timer;

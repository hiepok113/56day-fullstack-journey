import { useState, useEffect } from "react";

const WindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth); // chiều rộng hiện tại

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Gắn sự kiện resize khi component được mount
        window.addEventListener("resize", handleResize);

        // Cleanup: gỡ sự kiện khi component bị unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // chỉ chạy 1 lần khi component mount

    return (
        <div>
            <h2>📐 Chiều rộng trình duyệt</h2>
            <p>
                🔁 Chiều rộng hiện tại: <strong>{width}px</strong>
            </p>
        </div>
    );
};

export default WindowWidth;

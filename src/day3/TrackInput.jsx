import { useState, useEffect } from "react";

const TrackInput = () => {
    const [name, setName] = useState("");

    // Dùng useEffect theo dõi giá trị `name`
    useEffect(() => {
        if (name) {
            console.log("👀 Tên vừa nhập: ", name);
        }
    }, [name]); // Chạy mỗi khi `name` thay đổi

    return (
        <div>
            <h2>👨‍💻 Theo dõi input với useEffect</h2>
            <input
                type="text"
                placeholder="Nhập tên..."
                value={name}
                onChange={e => setName(e.target.value)}
            />
            {name && (
                <p>
                    Xin chào, <strong>{name}</strong>!
                </p>
            )}
        </div>
    );
};

export default TrackInput;

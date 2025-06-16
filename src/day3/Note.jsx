import { useState, useEffect } from "react";

const NoteSaver = () => {
    const [note, setNote] = useState("");

    // Load dữ liệu từ localStorage khi component mount
    useEffect(() => {
        const savedNote = localStorage.getItem("myNote");
        if (savedNote) {
            setNote(savedNote);
        }
    }, []);

    // Lưu dữ liệu vào localStorage mỗi khi note thay đổi
    useEffect(() => {
        localStorage.setItem("myNote", note);
    }, [note]);

    return (
        <div>
            <h2>📝 Ghi chú của bạn</h2>
            <textarea
                rows="6"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Nhập ghi chú tại đây..."
            />
        </div>
    );
};

export default NoteSaver;

import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setSubmittedName(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nhập tên bạn..."
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button type="submit">Gửi</button>
            {submittedName && <p>Xin chào, {submittedName}!</p>}
        </form>
    );
};

export default SimpleForm;

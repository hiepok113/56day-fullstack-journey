const { useState, useEffect } = require("react");

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = () => {
        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Có lỗi xảy ra khi tải dữ liệu!");
                }
                return res.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div>
            <h2>👤 Danh sách người dùng</h2>
            {loading && <p>🔄 Đang tải dữ liệu...</p>}
            {error && <p style={{ color: "red" }}>❌ {error}</p>}

            <button onClick={fetchUsers}>🔄 Refresh</button>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> – {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;

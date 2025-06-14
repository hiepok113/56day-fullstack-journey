const User = ({ name, age, location }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "8px",
                margin: "10px",
                width: "300px",
            }}
        >
            <h2>{name}</h2>
            <p>Tuổi: {age}</p>
            <p>Địa chỉ: {location}</p>
        </div>
    );
};

export default User;

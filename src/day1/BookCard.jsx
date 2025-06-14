// BookCard.jsx
const BookCard = ({ title, author, year, genre }) => {
    return (
        <div
            style={{
                border: "1px solid blue",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h3>{title}</h3>
            <p>Tác giả: {author}</p>
            <p>Năm xuất bản: {year}</p>
            <p>Thể loại: {genre}</p>
        </div>
    );
};

export default BookCard;

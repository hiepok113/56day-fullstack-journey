// day01/index.jsx

import HelloUser from "./HelloUser";
import User from "./User";
import BookCard from "./BookCard";

const Day01 = () => {
    return (
        <div>
            <h1>Day 01 Components</h1>
            <HelloUser name="Hiệp" />
            <User name="Lan" age={22} location="Hà Nội" />
            <BookCard
                title="Clean Code"
                author="Robert C. Martin"
                year={2008}
                genre="Kỹ thuật phần mềm"
            />
        </div>
    );
};

export default Day01;

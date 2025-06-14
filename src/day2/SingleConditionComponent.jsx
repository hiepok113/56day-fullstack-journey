import { useState } from "react";

const SingleConditionComponent = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div>
            <button onClick={() => setShowText(true)}>Hiện nội dung</button>
            {showText && <p>Đây là nội dung chỉ hiển thị khi bạn bấm nút.</p>}
        </div>
    );
};

export default SingleConditionComponent;

import { useState } from "react";

const ToggleText = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Ẩn" : "Hiện"} nội dung
            </button>
            {show && <p>Chào mừng bạn đến với React!</p>}
        </div>
    );
};

export default ToggleText;

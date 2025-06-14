import { useState } from "react";

const ToggleConditionComponent = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Đăng xuất" : "Đăng nhập"}
            </button>

            <h2>{isLogin ? "Xin chào, User!" : "Vui lòng đăng nhập"}</h2>
        </div>
    );
};

export default ToggleConditionComponent;

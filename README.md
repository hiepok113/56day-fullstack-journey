# 56-Day Fullstack Developer Journey 🚀

📅 Thời gian: 11/06/2025 → 06/08/2025  
🎯 Mục tiêu: Luyện tập ReactJS + NodeJS để đạt trình độ tương đương 1 năm kinh nghiệm và apply vị trí Fullstack Web Developer

---

## 📅 Nhật ký học tập

| Ngày   | Chủ đề học                                 | Component đã làm                                                                                          |
| ------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Day 01 | JSX, Component cơ bản, Props               | ✅ `HelloUser.jsx`, `UserCard.jsx`, `BookCard.jsx`                                                        |
| Day 02 | Form, State, onChange, Validate cơ bản     | ✅ `SimpleForm.jsx`, `ValidatedForm.jsx`, `AdvancedForm.jsx`                                              |
| Day 03 | useEffect, Cleanup, API call, localStorage | ✅ `WelcomeUser.jsx`, `CounterWithEffect.jsx`, `UserListAdvanced.jsx`, `WindowWidth.jsx`, `NoteSaver.jsx` |

---

## 📖 Ghi chú – Day 01

### ✅ Những gì đã học:

-   Hiểu JSX là gì và cách viết như HTML trong React
-   Component dạng `function` và cách tái sử dụng
-   Cách truyền dữ liệu qua `props` giữa các component

### 🧩 Các component đã xây dựng:

-   `HelloUser`: Hiển thị lời chào tên người dùng
-   `UserCard`: Hiển thị ảnh đại diện, tên, nghề nghiệp
-   `BookCard`: Hiển thị thông tin sách bằng props

---

## 📖 Ghi chú – Day 02

### ✅ Những gì đã học:

-   Quản lý `state` với `useState` trong Form
-   Bắt sự kiện `onChange` để cập nhật giá trị người dùng nhập
-   Sử dụng thuộc tính `required` trong HTML
-   Tự validate form thủ công bằng `if` trong `handleSubmit`

### 🧩 Các component đã xây dựng:

-   `SimpleForm`: Gửi alert khi submit tên
-   `ValidatedForm`: Kiểm tra tên không được trống
-   `AdvancedForm`: Validate nhiều field: tên, email, mật khẩu

---

## 📖 Ghi chú – Day 03

### ✅ Những gì đã học:

-   `useEffect(fn, [])`: Chạy một lần khi component mount
-   `useEffect(fn, [deps])`: Chạy lại khi `deps` thay đổi
-   Cleanup với `return` trong `useEffect` để tránh memory leak
-   Gọi API với `fetch`, xử lý `loading`, `error`, `data`
-   Lưu & lấy dữ liệu từ `localStorage`

### 🧩 Các component đã xây dựng:

-   `WelcomeUser`: Ghi log khi component mount
-   `CounterWithEffect`: Đếm số, log mỗi lần thay đổi
-   `UserListAdvanced`: Gọi API, hiện người dùng, refresh
-   `WindowWidth`: Theo dõi resize trình duyệt + cleanup
-   `NoteSaver`: Lưu ghi chú và đọc lại từ `localStorage`

---

## 📁 Cấu trúc thư mục

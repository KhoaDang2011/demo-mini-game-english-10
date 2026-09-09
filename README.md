# ⚡ EngGame 10 - Nền Tảng Ôn Luyện Tiếng Anh Lớp 10 Tương Tác

Ứng dụng web mini-game học tập dành cho học sinh và giáo viên môn Tiếng Anh lớp 10, được xây dựng theo kiến trúc Single Page Application (SPA) với chuẩn công nghệ hiện đại, giao diện trực quan và cơ chế game hóa (Gamification).

---

## 📖 Mục lục

- [**Tổng quan dự án**](https://www.google.com/url?sa=E\&q=#-t%E1%BB%95ng-quan-d%E1%BB%B1-%C3%A1n)
- [**Cấu trúc thư mục**](https://www.google.com/url?sa=E\&q=#-c%E1%BA%A5u-tr%C3%BAc-th%C6%B0-m%E1%BB%A5c)
- [**Tính năng chính**](https://www.google.com/url?sa=E\&q=#-t%C3%ADnh-n%C4%83ng-ch%C3%ADnh)
- [**Hệ thống trò chơi & Ngân hàng câu hỏi**](https://www.google.com/url?sa=E\&q=#-h%E1%BB%87-th%E1%BB%91ng-tr%C3%B2-ch%C6%A1i--ng%C3%A2n-h%C3%A0ng-c%C3%A2u-h%E1%BB%8Fi)
- [**Cơ chế trò chơi (Gameplay Mechanics)**](https://www.google.com/url?sa=E\&q=#-c%C6%A1-ch%E1%BA%BF-tr%C3%B2-ch%C6%A1i-gameplay-mechanics)
- [**Hướng dẫn cài đặt & Khởi chạy**](https://www.google.com/url?sa=E\&q=#-h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-c%C3%A0i-%C4%91%E1%BA%B7t--kh%E1%BB%9Fi-ch%E1%BA%A1y)
- [**Hướng dẫn quản lý & Thêm mới câu hỏi**](https://www.google.com/url?sa=E\&q=#-h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-qu%E1%BA%A3n-l%C3%BD--th%C3%AAm-m%E1%BB%9Bi-c%C3%A2u-h%E1%BB%8Fi)
- [**Hệ thống lưu trữ & Khôi phục dữ liệu**](https://www.google.com/url?sa=E\&q=#-h%E1%BB%87-th%E1%BB%91ng-l%C6%B0u-tr%E1%BB%AF--kh%C3%B4i-ph%E1%BB%A5c-d%E1%BB%AF-li%E1%BB%87u)
- [**Khả năng tương thích & Tiếp cận (Accessibility)**](https://www.google.com/url?sa=E\&q=#-kh%E1%BA%A3-n%C4%83ng-t%C6%B0%C6%A1ng-th%C3%ADch--ti%E1%BA%BFp-c%E1%BA%ADn-accessibility)

---

## 🚀 Tổng quan dự án

- **Đối tượng sử dụng**: Học sinh lớp 10 luyện thi, giáo viên tổ chức hoạt động học trên lớp.
- **Phong cách thiết kế**: Hiện đại, tối giản, công nghệ cao, tương thích cả điện thoại, máy tính bảng và màn chiếu trường học.
- **Ngăn xếp công nghệ (Tech Stack)**:
  - **HTML5**: Ngữ nghĩa học chuẩn SEO & Accessibility (\<header>, \<nav>, \<main>, \<dialog>).
  - **CSS3 Native**: CSS Variables (Design Tokens), Flexbox, CSS Grid, Glassmorphism, Responsive Breakpoints, hiệu ứng @keyframes.
  - **Vanilla JavaScript (ES6+)**: Xử lý logic game, Web Audio API (không cần tệp âm thanh ngoài), LocalStorage an toàn.
  - **Frameworks**: Tuyệt đối **không** phụ thuộc vào thư viện bên ngoài (Zero Dependencies).

---

## 📂 Cấu trúc thư mục

Ứng dụng hoạt động độc lập chỉ với 3 tệp nằm cùng thư mục gốc:

**codeText**

```
EngGame10/
├── index.html      # Cấu trúc giao diện ứng dụng (SPA Shell & Modals)
├── style.css       # Toàn bộ hệ thống giao diện, hiệu ứng và theme
└── script.js       # Ngân hàng 75 câu hỏi, Game Engine & State Manager
```

---

## ✨ Tính năng chính

1. **SPA Navigation (Chuyển trang mượt mà)**:
   - Thanh điều hướng Sidebar hỗ trợ mở rộng, thu gọn và Drawer trượt trên Mobile.
   - Chuyển màn hình Dashboard, Chọn game, Đấu trường, Hồ sơ, Thành tích, Chứng nhận, Cài đặt tức thì không cần reload.
2. **Đăng ký & Phân quyền**:
   - Nhập Họ tên, Ngày sinh, Email (tùy chọn) và Vai trò (Học sinh / Giáo viên).
   - Giáo viên được mở khóa toàn bộ màn chơi ngay từ đầu.
3. **Đa ngôn ngữ & Giao diện kép**:
   - Hỗ trợ chuyển đổi nhanh **Tiếng Việt / English**.
   - Hỗ trợ chế độ nền **Dark Mode / Light Mode** độ tương phản cao.
4. **Chứng chỉ danh dự (Certificate of Completion)**:
   - Tự động điền tên, điểm, chuỗi thắng và ngày giờ hoàn thành.
   - Hỗ trợ chế độ in trực tiếp ra giấy/PDF (window\.print()).
5. **Trình mô phỏng bảo mật & Xem mã nguồn**:
   - Giao diện xác minh danh tính Anti-Bot tương tác bảo vệ bảng điểm.
   - Trình đọc mã nguồn dự án tích hợp ngay trong trang với chức năng Copy.

---

## 🎮 Hệ thống trò chơi & Ngân hàng câu hỏi

Hệ thống được nạp sẵn **75 câu hỏi** phân đều theo chuẩn khung chương trình Tiếng Anh lớp 10:

| **Dạng bài**    | **Tên gọi**                    | **Số lượng** | **Hình thức kiểm tra**                                                                                          |
| --------------- | ------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------- |
| **Game Type 1** | **Pronunciation & Vocabulary** | 25 câu       | Đoán từ vựng qua định nghĩa & mẫu trọng âm (•--, -•-, --•-), nhập ô chữ tương tác.                              |
| **Game Type 2** | **Grammar Mastery**            | 25 câu       | Trắc nghiệm chọn đáp án đúng (Thì Hiện tại hoàn thành, Danh động từ, Bị động...), hiển thị giải thích chi tiết. |
| **Game Type 3** | **Fun Mini Games**             | 25 câu       | Chia làm 3 cấp độ (Level 1: Collocations, Level 2: Từ trái nghĩa/Đồng nghĩa, Level 3: Thử thách phản xạ).       |

---

## 🕹️ Cơ chế trò chơi (Gameplay Mechanics)

- **Mạng sống (Lives - ❤️❤️❤️)**: Mỗi phiên chơi cung cấp 3 mạng. Mỗi lần làm sai sẽ bị trừ 1 mạng. Hết 3 mạng sẽ dẫn tới Game Over.
- **Hệ thống Combo (🔥)**: Trả lời đúng liên tiếp để tăng chuỗi combo (+1🔥/câu đúng). Trả lời sai combo về 0. Hoàn thành trọn vẹn màn nhận thêm +2🔥.
- **Hệ số Chuỗi thắng (Streak Multiplier)**: Điểm tổng kết được tính theo hệ số chuỗi thắng tích lũy:

  ```
  ```
  ```math
  Final Score=Base Score×Streak Factor
  ```

- **Đồng hồ đếm ngược (Timer)**: Tùy chọn 60 giây/câu trong phần Cài đặt, tự động chuyển màu cảnh báo khi còn dưới 15 giây.
- **Cơ chế Mở khóa (Unlock Conditions)**:
  - *Học sinh*: Bắt buộc hoàn thành Game Type 1 và Game Type 2 mới mở khóa được Game Type 3.
  - *Giáo viên*: Được mở khóa toàn bộ tất cả màn chơi.

---

## 🛠️ Hướng dẫn cài đặt & Khởi chạy

Không cần cài đặt Node.js, Webpack hay bất kỳ công cụ dòng lệnh nào.

### Cách 1: Chạy trực tiếp trên trình duyệt

1. Tải về hoặc clone cả 3 tệp index.html, style.css, script.js vào cùng một thư mục.
2. Nhấp đúp vào index.html để mở ngay trên trình duyệt (Chrome, Edge, Firefox, Safari...).

### Cách 2: Chạy qua Live Server (Visual Studio Code)

1. Mở thư mục chứa dự án trong Visual Studio Code.
2. Cài đặt tiện ích mở rộng **Live Server**.
3. Nhấp chuột phải vào index.html chọn **"Open with Live Server"**.

---

## 📝 Hướng dẫn quản lý & Thêm mới câu hỏi

Tất cả câu hỏi được quản lý tập trung trong file script.js tại hằng số QUESTION_BANK.

### Thêm câu hỏi cho Game Type 1 (Vocabulary / Crossword)

Thêm một đối tượng vào mảng QUESTION_BANK.type1:

**codeJavaScript**

```
QUESTION_BANK.type1.push({
    id: 26,
    type: "crossword",
    clue: "an electronic machine that can store, organize and find information",
    answer: "computer",
    stress: "-•-"
});
```

### Thêm câu hỏi cho Game Type 2 (Grammar Multiple Choice)

Thêm một đối tượng vào mảng QUESTION_BANK.grammar:

**codeJavaScript**

```
QUESTION_BANK.grammar.push({
    id: 26,
    type: "multiple-choice",
    question: "Smartphones allow students ______ information easily.",
    options: ["accessing", "to access", "access", "accessed"],
    answer: "to access",
    explanation: "Cấu trúc: allow somebody + to-infinitive (cho phép ai làm gì)."
});
```

### Thêm thử thách cho Game Type 3 (Fun Mini Games)

Thêm vào level1, level2 hoặc level3 của QUESTION_BANK.type3:

**codeJavaScript**

```
QUESTION_BANK.type3.level1.push({
    id: 26,
    type: "collocation",
    prompt: "surf the ______",
    answer: "internet",
    options: ["internet", "battery", "keyboard", "wire"]
});
```

---

## 💾 Hệ thống lưu trữ & Khôi phục dữ liệu

Ứng dụng lưu trữ toàn bộ trạng thái vào window\.localStorage của trình duyệt với prefix chuyên biệt:

- englishMiniGame_user: Thông tin người dùng đăng ký (Họ tên, ngày sinh, email, vai trò).
- englishMiniGame_progress: Điểm tích lũy, số câu đúng/sai, kỷ lục cao nhất, trạng thái mở khóa.
- englishMiniGame_settings: Ngôn ngữ, giao diện sáng/tối, bật/tắt âm thanh, bật/tắt timer.
- englishMiniGame_certificate: Dữ liệu tạo chứng nhận hoàn thành.

> 💡 Khôi phục: Trong trang **Hồ Sơ (Profile)**, nhấn nút **"Xóa Dữ Liệu & Chơi Lại"** để đặt lại toàn bộ tiến trình học tập về mặc định.

---

## ♿ Khả năng tương thích & Tiếp cận (Accessibility)

- Tương thích tốt với các tiêu chuẩn điều hướng bàn phím (Tab, Enter).
- Hỗ trợ CSS Media Query @media (prefers-reduced-motion: reduce) dành cho người dùng nhạy cảm với chuyển động.
- Giao diện được tối ưu hóa đặc biệt với kích thước chữ lớn, độ tương phản cao khi trình chiếu trên máy chiếu giảng đường.

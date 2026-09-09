Bạn là một Senior Frontend Developer chuyên xây dựng các website giáo dục tương tác.

Hãy tạo FILE DUY NHẤT:
index.html

QUAN TRỌNG:
- Chỉ viết code cho index.html.
- Không viết style.css.
- Không viết script.js.
- Không sử dụng React, Vue, Angular, Bootstrap hoặc framework khác.
- Website phải sử dụng HTML5 semantic.
- CSS phải được liên kết bằng:
  <link rel="stylesheet" href="style.css">
- JavaScript phải được liên kết bằng:
  <script src="script.js"></script>
- Không viết CSS/JS lớn trực tiếp vào index.html.
- Code phải sạch, có cấu trúc rõ ràng và dễ bảo trì.
- Các phần tử cần JavaScript thao tác phải có id/class/data-* rõ ràng.
- Không sử dụng inline onclick nếu không thật sự cần thiết.

==================================================
1. MỤC TIÊU WEBSITE
==================================================

Xây dựng một Mini-game Website dành cho học sinh Tiếng Anh lớp 10.

Website có phong cách:
- Công nghệ hiện đại.
- Đơn giản.
- Có tính game.
- Không quá màu mè.
- Dễ sử dụng trên máy tính, điện thoại và máy chiếu.
- Có hỗ trợ English / Vietnamese.
- Có Light Mode / Dark Mode.

Website phải có hệ thống:
- Đăng ký thông tin người chơi.
- Dashboard/Profile.
- 3 loại game.
- 75 câu hỏi tổng cộng.
- Chia thành 3 loại, mặc định 25 câu/loại.
- Điểm số.
- Câu đúng/câu sai.
- Timer tùy chọn.
- 3 mạng sống ❤️ cho mỗi màn.
- Combo 🔥.
- Streak.
- Unlock level.
- Certificate.
- About Me.
- Fake anti-bot verification giống giao diện xác minh phổ biến.
- Responsive.

==================================================
2. CẤU TRÚC TRANG
==================================================

index.html phải có các khu vực chính:

A. APP CONTAINER

B. SIDEBAR / NAVIGATION

C. HEADER / TOP BAR

D. AUTH / REGISTER SCREEN

E. DASHBOARD

F. GAME SELECTION

G. GAME SCREEN

H. RESULT SCREEN

I. PROFILE

J. CERTIFICATE

K. ABOUT ME

L. SETTINGS

M. FAKE BOT VERIFICATION MODAL

N. NOTIFICATION / TOAST

O. CONFIRMATION MODAL

==================================================
3. SIDEBAR
==================================================

Dựa theo bản UI Canva được cung cấp.

Khi người dùng vào khu vực chơi, bên trái có sidebar.

Sidebar:
- Có nút hamburger.
- Khi mở rộng hiển thị tên các chức năng.
- Khi thu gọn chỉ hiển thị icon.
- Trên desktop có thể cố định.
- Trên mobile chuyển thành drawer.
- Có animation mở/đóng.

Các mục:

1. 🏠 Trang chủ
2. 🎮 Chơi
3. 👤 Hồ sơ
4. 🏆 Thành tích
5. 📜 Chứng chỉ
6. ⚙️ Cài đặt
7. ℹ️ About Me

Không cần tạo trang HTML riêng.
Tất cả hoạt động trong SPA-style bằng cách ẩn/hiện section.

==================================================
4. MÀN HÌNH ĐĂNG KÝ
==================================================

Trước khi chơi lần đầu, người dùng phải nhập:

- Họ và tên — bắt buộc.
- Ngày tháng năm sinh — bắt buộc.
- Email — không bắt buộc.
- Nghề nghiệp:
  - Học sinh
  - Giáo viên

Form phải có validation.

Không cho phép tiếp tục nếu:
- Họ tên trống.
- Ngày sinh trống.
- Nghề nghiệp chưa chọn.

Email nếu có thì kiểm tra format.

Sau khi đăng ký:
- Lưu thông tin bằng localStorage.
- Chuyển sang Dashboard.

==================================================
5. DASHBOARD
==================================================

Dashboard phải hiển thị:

- Xin chào + tên người chơi.
- Tổng điểm.
- Tổng câu đúng.
- Tổng câu sai.
- Streak hiện tại.
- Màn chơi cao nhất.
- Số màn đã hoàn thành.
- Trạng thái mở khóa Type 3.
- Nút "Chơi".

Có thể dùng card UI.

==================================================
6. GAME SELECTION
==================================================

Đây là màn hình xuất hiện sau khi người dùng bấm "Chơi".

Thiết kế dựa trên bản demo Canva:

- Background gradient hiện đại.
- Sidebar bên trái.
- Khu vực chính nằm bên phải.
- Có 3 nút/card game lớn.
- Card có bo góc.
- Có gradient.
- Text lớn, dễ đọc.
- Có hover animation.
- Có icon.
- Có trạng thái LOCKED.

Ba loại:

GAME TYPE 1:
"Pronunciation & Vocabulary"

GAME TYPE 2:
"Grammar"

GAME TYPE 3:
"Fun Mini Games"

Mỗi card có:
- Tên game.
- Mô tả ngắn.
- Số câu.
- Trạng thái.
- Nút Play.

Nếu học sinh chưa hoàn thành Type 1 và Type 2:
- Type 3 phải hiển thị LOCKED.
- Hiển thị lý do bị khóa.

Nếu tài khoản là giáo viên:
- Mở toàn bộ game.

==================================================
7. GAME TYPE 1
==================================================

Tên:
Pronunciation and Vocabulary

Dạng bài:
Crossword / Vocabulary.

Dữ liệu ban đầu được lấy từ nội dung người dùng cung cấp.

Ví dụ câu hỏi:

1. the advantage (of something); stress pattern: •--
Answer: benefit

2. a new thing; stress pattern: -•-
Answer: innovation

3. the M in (computer) RAM; stress pattern: •--
Answer: memory

4. a device used for long-distance communication; stress pattern: •--
Answer: telephone

5. a modern device which allows us to store information; stress pattern: ••-
Answer: computer

QUAN TRỌNG:
- Đây chỉ là dữ liệu mẫu ban đầu.
- Phải thiết kế cấu trúc HTML để JavaScript có thể render câu hỏi động.
- Không hard-code từng câu hỏi trực tiếp vào layout.
- Dữ liệu câu hỏi sẽ được quản lý trong script.js.

TẠI ĐÂY PHẢI CÓ COMMENT:

<!--
QUESTION ADD/EDIT AREA:
Các câu hỏi của Game Type 1 được quản lý trong script.js.
Có thể thêm/sửa/xóa câu hỏi trong QUESTION_BANK.
-->

==================================================
8. GAME TYPE 2
==================================================

Tên:
Grammar

Dạng:
Multiple Choice.

Câu hỏi mẫu:

1.
They just installed / have just installed some interesting software on the school computers.
The programs are working very well, and everyone enjoys to use / using them.

Correct:
have just installed
using

2.
Smartphones allow people sending / to send information over long distances.
Learn / To learn with a smartphone is fun as well.

Correct:
to send
To learn

3.
Since television was invented / has been invented, TV designs changed / have changed a lot.

Correct:
was invented
have changed

Phải hỗ trợ:
- Multiple choice.
- Một hoặc nhiều đáp án tùy cấu trúc câu.
- Hiển thị đáp án đã chọn.
- Hiển thị đúng/sai.
- Có giải thích sau khi hoàn thành hoặc khi cấu hình cho phép.

TẠI ĐÂY PHẢI CÓ COMMENT:

<!--
QUESTION ADD/EDIT AREA:
Các câu Grammar được quản lý trong script.js.
Có thể thêm câu hỏi mới vào QUESTION_BANK.grammar.
-->

==================================================
9. GAME TYPE 3
==================================================

Tên:
Fun Mini Games

Gồm 3 cấp độ.

Hiện tại nội dung cụ thể chưa được cung cấp.

Do đó:
- Tạo placeholder structure.
- Không tự ý khóa cấu trúc dữ liệu.
- Cho phép bổ sung game sau này.
- Level 1 / Level 2 / Level 3.

TẠI ĐÂY PHẢI CÓ COMMENT:

<!--
GAME TYPE 3 ADD/EDIT AREA:
Nội dung 3 mini-game sẽ được bổ sung sau.
Có thể thêm hoặc thay thế game trong script.js.
-->

==================================================
10. GAME HUD
==================================================

Khi đang chơi phải có:

- Tên game.
- Question x / total.
- Score.
- ❤️ Lives.
- 🔥 Combo.
- Streak.
- Timer nếu bật.
- Progress bar.
- Nút Submit/Finish.
- Nút Quit.

Ví dụ:

QUESTION 7 / 25

❤️❤️❤️

🔥 5

SCORE: 850

TIME: 00:42

==================================================
11. LIVES
==================================================

Mỗi màn chơi:
- Người chơi có 3 ❤️.

Khi bấm Finish:
- Nếu toàn bộ câu đúng:
  - Hoàn thành màn.
  - Unlock màn tiếp theo nếu đủ điều kiện.
- Nếu có câu sai:
  - Hiển thị câu sai.
  - Cho phép làm lại.
  - Trừ 1 ❤️.

Khi ❤️ = 0:
- Hiển thị thông báo Game Over.
- Người chơi phải chơi lại từ đầu màn/game theo logic trong script.js.

==================================================
12. COMBO
==================================================

Mỗi câu đúng:
+1 🔥

Nếu trả lời sai:
Combo reset về 0.

Khi hoàn thành hoàn toàn một màn:
+2 🔥.

Streak được tính theo quy tắc trong script.js.

==================================================
13. SCORE
==================================================

Hiển thị:
- Score hiện tại.
- Tổng score.
- Score từng màn.

Nếu có streak:

totalScore = totalScore * streak

Logic thực tế phải nằm trong script.js.

==================================================
14. RESULT SCREEN
==================================================

Sau khi hoàn thành màn:

Hiển thị:
- 🎉 Congratulations.
- Score.
- Correct answers.
- Wrong answers.
- Accuracy.
- Combo.
- Streak.
- Lives còn lại.
- Best score.
- New record nếu có.
- Nút Next Level.
- Nút Replay.
- Nút Dashboard.

Nếu mở khóa màn mới:
Hiển thị notification nổi bật.

==================================================
15. CERTIFICATE
==================================================

Tạo section Certificate.

Hiển thị:
- Họ tên.
- Nghề nghiệp.
- Tên khóa/game.
- Điểm.
- Streak.
- Ngày.
- Giờ.
- Tháng.
- Năm.
- Trạng thái hoàn thành.

Có nút:
"View Certificate"

Có thể chuẩn bị button:
"Print Certificate"

==================================================
16. ABOUT ME
==================================================

Sidebar phải có:
About Me.

Khi click:
- Hiển thị modal hoặc page section.

Phải có:
- Thông tin người tạo.
- Mô tả dự án.
- Công nghệ sử dụng.

Đặc biệt:
Có nút:

"View Source Code"

Khi click:
- Hiển thị source code của website trong giao diện.
- Có tab:
  - index.html
  - style.css
  - script.js
- Có nút Copy.

LƯU Ý:
Đây chỉ là chức năng hiển thị source code ở frontend.
Không coi đây là cơ chế bảo mật.

==================================================
17. SETTINGS
==================================================

Có:
- English / Vietnamese.
- Light / Dark mode.
- Sound ON/OFF.
- Timer ON/OFF.

Các lựa chọn phải được lưu bằng localStorage.

==================================================
18. RESPONSIVE
==================================================

Website phải hoạt động tốt:

- Desktop.
- Laptop.
- Tablet.
- Smartphone.
- Máy chiếu.

Không để:
- Text tràn.
- Button quá nhỏ.
- Card vượt viewport.
- Horizontal scroll không cần thiết.

==================================================
19. ACCESSIBILITY
==================================================

Sử dụng:
- button đúng semantic.
- label cho input.
- aria-label cho icon button.
- keyboard navigation cơ bản.
- focus state.

==================================================
20. COMMENT
==================================================

Trong HTML phải đánh dấu rõ các khu vực quan trọng.

Đặc biệt:

<!-- QUESTION ADD/EDIT AREA -->

<!-- GAME TYPE 1 -->

<!-- GAME TYPE 2 -->

<!-- GAME TYPE 3 -->

<!-- SOURCE CODE VIEWER -->

<!-- USER PROFILE -->

<!-- CERTIFICATE -->

==================================================
21. KẾT QUẢ
==================================================

Chỉ trả về code hoàn chỉnh của index.html.

Không giải thích dài dòng.

Code phải chạy được khi đặt cùng thư mục với:

index.html
style.css
script.js

Không tạo file khác.
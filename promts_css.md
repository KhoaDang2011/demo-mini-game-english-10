Bạn là Senior UI/UX Frontend Developer.

Hãy tạo FILE DUY NHẤT:

style.css

QUAN TRỌNG:
- Chỉ viết CSS.
- Không viết HTML.
- Không viết JavaScript.
- Không dùng framework CSS.
- CSS phải tương thích với index.html và script.js.
- Không thay đổi logic JavaScript.
- Không tạo CSS inline.
- Không sử dụng !important tràn lan.
- Ưu tiên CSS variables.
- Code có tổ chức, comment rõ ràng.

==================================================
1. PHONG CÁCH TỔNG THỂ
==================================================

Thiết kế Mini-game Website Tiếng Anh lớp 10.

Phong cách:
- Modern technology.
- Educational gaming.
- Clean.
- Futuristic nhẹ.
- Không quá màu mè.
- Không quá trẻ con.
- Có cảm giác game nhưng vẫn phù hợp môi trường học tập.

UI phải ưu tiên:
- readability.
- usability.
- responsive.
- animation nhẹ.
- visual hierarchy.

==================================================
2. MÀU SẮC
==================================================

Sử dụng CSS variables.

Ví dụ:

:root {
    --bg-primary: ...;
    --bg-secondary: ...;
    --surface: ...;
    --text-primary: ...;
    --text-secondary: ...;
    --accent: ...;
    --success: ...;
    --danger: ...;
    --warning: ...;
}

Có:
- Light Mode.
- Dark Mode.

Dark mode phải có contrast tốt.

Không sử dụng quá nhiều màu cùng lúc.

==================================================
3. GAME SELECTION UI
==================================================

Đây là phần quan trọng nhất vì UI Canva người dùng cung cấp đang mô tả màn hình sau khi bấm "Chơi".

Layout:

Desktop:

┌──────────────┬───────────────────────────────┐
│              │                               │
│   SIDEBAR    │       GAME SELECTION          │
│              │                               │
│              │   ┌───────────────────────┐   │
│              │   │ Game Type 1           │   │
│              │   └───────────────────────┘   │
│              │                               │
│              │   ┌───────────────────────┐   │
│              │   │ Game Type 2           │   │
│              │   └───────────────────────┘   │
│              │                               │
│              │   ┌───────────────────────┐   │
│              │   │ Game Type 3           │   │
│              │   └───────────────────────┘   │
│              │                               │
└──────────────┴───────────────────────────────┘

==================================================
4. SIDEBAR
==================================================

Sidebar:
- Fixed/sticky trên desktop.
- Width khoảng 240-280px khi expanded.
- Width khoảng 64-80px khi collapsed.
- Mobile thành overlay drawer.

Có:
- Hamburger button.
- Navigation items.
- Icons.
- Active state.
- Hover state.

Animation:
- width transition.
- transform.
- opacity.

Không làm animation quá chậm.

==================================================
5. GAME CARDS
==================================================

Có 3 game card lớn.

Dựa trên bản Canva:
- Card lớn.
- Border radius khoảng 16-20px.
- Gradient background.
- Text lớn.
- Center aligned.
- Có shadow.
- Có hover effect.

Ví dụ visual direction:

GAME 1:
Gradient xanh/tím.

GAME 2:
Gradient xanh.

GAME 3:
Gradient tím/hồng.

Tuy nhiên không sao chép tuyệt đối màu Canva.
Hãy cải thiện UI thành phong cách hiện đại hơn.

Card phải có:
- icon.
- title.
- description.
- question count.
- play button.
- status.

==================================================
6. LOCKED CARD
==================================================

Game Type 3 khi học sinh chưa đủ điều kiện:

- Có overlay.
- Icon 🔒.
- Text "LOCKED".
- Hiển thị lý do.
- Không cho click chơi.
- Có opacity thấp hơn card bình thường.

Giáo viên:
- Type 3 unlocked.

==================================================
7. BUTTON
==================================================

Button:
- Border radius.
- Hover.
- Active.
- Focus.
- Disabled state.

Primary button phải nổi bật.

Không tạo button quá nhỏ trên mobile.

==================================================
8. GAME HUD
==================================================

Trong game:

Top HUD có:
- Score.
- ❤️.
- 🔥.
- Timer.
- Question counter.

HUD phải dễ đọc.

Trên mobile:
- Cho phép wrap.
- Không làm overflow.

==================================================
9. QUESTION UI
==================================================

Question card:
- Centered.
- max-width khoảng 900-1100px.
- Padding lớn.
- Border radius.
- Shadow nhẹ.

Question text:
- Font-size lớn.
- Line-height tốt.

Multiple choice:
- Button/card dạng option.
- Hover.
- Selected.
- Correct.
- Wrong.
- Disabled.

Đáp án đúng:
- Visual feedback rõ.

Đáp án sai:
- Visual feedback rõ.

==================================================
10. CROSSWORD UI
==================================================

Game Type 1 cần giao diện crossword.

Có:
- Grid.
- Cell vuông.
- Number.
- Input.
- Active cell.
- Correct cell.
- Wrong cell.

Grid responsive.

Desktop:
Grid lớn.

Mobile:
Scale xuống nhưng vẫn dễ thao tác.

==================================================
11. TIMER
==================================================

Timer dạng:
00:59

Khi còn ít thời gian:
- visual warning.
- animation nhẹ.

Không làm nhấp nháy quá mức.

==================================================
12. LIVES
==================================================

Hiển thị:

❤️ ❤️ ❤️

Khi mất life:
- animation nhỏ.
- opacity giảm hoặc biến mất.

==================================================
13. COMBO
==================================================

Hiển thị:

🔥 5

Khi tăng combo:
- scale animation.
- glow nhẹ.

Khi reset:
- animation ngắn.

==================================================
14. RESULT
==================================================

Result screen phải nổi bật.

Có:
- Congratulations.
- Score.
- Correct.
- Wrong.
- Accuracy.
- Streak.
- Combo.

Nếu new record:
- badge.
- animation.

Nếu unlock level:
- modal/notification đẹp.

==================================================
15. NOTIFICATION
==================================================

Tạo toast/notification.

Các loại:
- success.
- error.
- warning.
- info.

Ví dụ:
"🎉 New Level Unlocked!"

"🏆 New High Score!"

==================================================
16. CERTIFICATE
==================================================

Certificate phải giống một certificate hiện đại.

Có:
- border.
- title.
- student name.
- score.
- completion date.
- completion time.
- signature placeholder.

Có nút print.

==================================================
17. ABOUT ME
==================================================

Modal/page:

About Me

Có:
- Avatar placeholder.
- Creator.
- Project description.
- Technology.

Source code viewer:
- dark code editor style.
- tab HTML/CSS/JS.
- copy button.

Code viewer phải scroll được.

==================================================
18. REGISTER FORM
==================================================

Form đẹp, hiện đại.

Input:
- Họ tên.
- Ngày sinh.
- Email.
- Nghề nghiệp.

Có:
- focus state.
- error state.
- validation message.

==================================================
19. DASHBOARD
==================================================

Dashboard card:

Total Score
Correct
Wrong
Streak
Highest Level

Cards có icon.

==================================================
20. ANIMATION
==================================================

Sử dụng CSS animation nhẹ:

- fade.
- slide.
- scale.
- pulse.
- shake khi sai.
- success pop.

Không sử dụng animation gây khó chịu.

Tôn trọng:

@media (prefers-reduced-motion: reduce)

==================================================
21. RESPONSIVE
==================================================

Breakpoints hợp lý.

Desktop:
- Sidebar + content.

Tablet:
- Sidebar thu gọn.

Mobile:
- Sidebar drawer.
- Game cards full width.
- Question card full width.
- HUD wrap.

Máy chiếu:
- Text đủ lớn.
- Contrast cao.
- Button lớn.

==================================================
22. TYPOGRAPHY
==================================================

Ưu tiên font hiện đại, dễ đọc.

Ví dụ:
system-ui,
Inter,
Segoe UI,
sans-serif.

Không sử dụng font quá trang trí.

==================================================
23. CODE ORGANIZATION
==================================================

Chia CSS thành:

1. Reset
2. Variables
3. Base
4. Layout
5. Sidebar
6. Header
7. Dashboard
8. Game Selection
9. Game UI
10. Crossword
11. Multiple Choice
12. HUD
13. Modal
14. Certificate
15. About Me
16. Notifications
17. Responsive
18. Accessibility

Mỗi section có comment.

==================================================
24. KẾT QUẢ
==================================================

Chỉ trả về toàn bộ code style.css.

Không tạo file khác.
Không viết HTML.
Không viết JS.

CSS phải hoạt động với:

index.html
script.js
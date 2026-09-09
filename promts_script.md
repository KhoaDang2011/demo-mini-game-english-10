Bạn là Senior JavaScript Game Developer chuyên xây dựng educational mini-games bằng Vanilla JavaScript.

Hãy tạo FILE DUY NHẤT:

script.js

==================================================
QUY TẮC QUAN TRỌNG
==================================================

- Chỉ viết JavaScript.
- Không viết HTML.
- Không viết CSS.
- Không dùng React.
- Không dùng Vue.
- Không dùng framework.
- Không yêu cầu backend.
- Sử dụng Vanilla JavaScript ES6+.
- Code phải chạy trực tiếp trên trình duyệt.
- Phải tương thích với index.html và style.css.

==================================================
1. KIẾN TRÚC
==================================================

Tổ chức code thành các module/function logic:

1. Constants
2. Question Bank
3. User State
4. LocalStorage
5. Navigation
6. Authentication/Register
7. Game Selection
8. Game Engine
9. Question Engine
10. Timer
11. Lives
12. Score
13. Combo
14. Streak
15. Unlock System
16. Result System
17. Certificate
18. Settings
19. Language
20. Sound
21. Fake Anti-Bot
22. About Me / Source Viewer
23. Utility functions
24. Initialization

Không cần import/export module nếu website chỉ dùng một file JS.

==================================================
2. USER PROFILE
==================================================

Khi website mở:

Kiểm tra localStorage.

Nếu chưa có user:
→ hiển thị Register Screen.

Nếu đã có:
→ load profile
→ Dashboard.

User:

{
    name,
    birthDate,
    email,
    occupation,
    createdAt
}

occupation:
- student
- teacher

Validation:

name:
required

birthDate:
required

email:
optional

occupation:
required

==================================================
3. LOCAL STORAGE
==================================================

Dùng localStorage để lưu:

user profile
settings
game progress
scores
lives
streak
combo
highest level
completed games
certificate data

Không làm mất dữ liệu khi refresh.

Tạo các key có prefix rõ ràng.

Ví dụ:

englishMiniGame_user
englishMiniGame_progress
englishMiniGame_settings

==================================================
4. QUESTION BANK
==================================================

ĐÂY LÀ KHU VỰC QUAN TRỌNG NHẤT.

Tạo cấu trúc:

const QUESTION_BANK = {

    type1: [],

    grammar: [],

    type3: {
        level1: [],
        level2: [],
        level3: []
    }

};

==================================================
5. 75 CÂU HỎI
==================================================

Tổng cộng:

75 câu.

Chia:

TYPE 1 = 25 câu

TYPE 2 = 25 câu

TYPE 3 = 25 câu

Lưu ý:
Type 3 có thể chia tiếp thành:

Level 1
Level 2
Level 3

Ví dụ:

type3.level1 = [...]
type3.level2 = [...]
type3.level3 = [...]

Tổng:
25 câu.

==================================================
6. COMMENT BẮT BUỘC CHO QUESTION BANK
==================================================

Ngay phía trên QUESTION_BANK phải có comment:

// ==================================================
// QUESTION ADD / EDIT AREA
// ==================================================
// Có thể thêm, sửa hoặc xóa câu hỏi tại đây.
//
// TYPE 1:
// QUESTION_BANK.type1
//
// TYPE 2:
// QUESTION_BANK.grammar
//
// TYPE 3:
// QUESTION_BANK.type3.level1
// QUESTION_BANK.type3.level2
// QUESTION_BANK.type3.level3
//
// Khi thêm câu hỏi mới phải giữ đúng cấu trúc object.
// ==================================================

Đây là yêu cầu bắt buộc.

==================================================
7. TYPE 1 - PRONUNCIATION & VOCABULARY
==================================================

Dạng Crossword.

Câu mẫu ban đầu:

1.
the advantage (of something)
stress pattern: •--
answer: benefit

2.
a new thing
stress pattern: -•-
answer: innovation

3.
the M in (computer) RAM
stress pattern: •--
answer: memory

4.
a device used for long-distance communication
stress pattern: •--
answer: telephone

5.
a modern device which allows us to store information
stress pattern: ••-
answer: computer

Có thể bổ sung thêm câu hỏi.

Tạo 25 câu.

Mỗi object có thể có:

{
    id: 1,
    type: "crossword",
    clue: "...",
    answer: "...",
    stress: "..."
}

==================================================
8. TYPE 2 - GRAMMAR
==================================================

Dạng Multiple Choice.

Dùng các nội dung người dùng đã cung cấp làm dữ liệu ban đầu.

Câu mẫu:

Question 1:
They just installed / have just installed some interesting software on the school computers.
The programs are working very well, and everyone enjoys to use / using them.

Correct:
have just installed
using

Question 2:
Smartphones allow people sending / to send information over long distances.
Learn / To learn with a smartphone is fun as well.

Correct:
to send
To learn

Question 3:
Since television was invented / has been invented, TV designs changed / have changed a lot.

Correct:
was invented
have changed

Tạo tổng cộng 25 câu grammar.

Có thể thêm câu hỏi mới.

Cấu trúc:

{
    id: 1,
    type: "multiple-choice",
    question: "...",
    options: [
        "...",
        "...",
        "..."
    ],
    answer: "...",
    explanation: "..."
}

Nếu câu hỏi có nhiều chỗ trống:
cho phép:

answers: [...]

==================================================
9. TYPE 3
==================================================

Type 3 là Fun Mini Games.

Có 3 level:

Level 1
Level 2
Level 3

Hiện tại nội dung cụ thể chưa được cung cấp.

Do đó tạo placeholder data structure nhưng KHÔNG phá vỡ game engine.

Ví dụ:

type3.level1 = []
type3.level2 = []
type3.level3 = []

Để sau này dễ bổ sung.

COMMENT:

// ==================================================
// TYPE 3 MINI-GAME CONTENT WILL BE ADDED LATER
// ==================================================

==================================================
10. RANDOM QUESTION
==================================================

Có thể random thứ tự câu hỏi.

Nhưng:
- Không được random đáp án đúng theo cách làm mất mapping answer.
- Khi người chơi replay có thể random lại.

==================================================
11. GAME STATE
==================================================

Tạo object:

gameState = {
    currentGame,
    currentQuestion,
    questions,
    answers,
    score,
    correct,
    wrong,
    lives,
    combo,
    streak,
    timer,
    timerEnabled,
    startedAt,
    completed
};

==================================================
12. LIVES
==================================================

Mỗi màn bắt đầu:

lives = 3

Hiển thị:

❤️ ❤️ ❤️

Nếu người chơi Finish và có câu sai:

lives -= 1

Nếu lives > 0:
→ hiển thị câu sai
→ cho phép retry.

Nếu lives === 0:
→ Game Over
→ reset màn
→ cho phép chơi lại.

==================================================
13. SCORE
==================================================

Tính điểm theo từng câu.

Ví dụ có thể dùng:

correct answer:
+100

combo bonus:
+combo * bonus

Finish:
bonus.

Không hard-code logic vào HTML.

Tạo constants:

const SCORE_CONFIG = {
    correct: 100,
    levelComplete: 500,
    streakMultiplier: true
};

Có thể chỉnh sau này.

==================================================
14. COMBO
==================================================

Mỗi câu đúng:

combo += 1

Sai:

combo = 0

Khi hoàn thành toàn bộ màn:

combo += 2

Hiển thị 🔥.

==================================================
15. STREAK
==================================================

Streak được tính dựa trên chuỗi hoàn thành.

Khi hoàn thành màn hoàn toàn:
streak tăng.

Khi thất bại nghiêm trọng/game over:
streak có thể reset theo logic.

Tổng điểm:

finalScore = totalScore * streak

Phải bảo đảm không tạo lỗi nếu streak = 0.

==================================================
16. UNLOCK
==================================================

Student:

Type 1 → mở mặc định.

Type 2 → mở mặc định hoặc theo tiến trình.

Type 3:
CHỈ mở khi học sinh hoàn thành đủ điều kiện Type 1 + Type 2.

Teacher:
→ mở toàn bộ.

Tạo function:

isGameUnlocked(gameType)

Không viết điều kiện unlock trực tiếp trong HTML.

==================================================
17. FINISH LOGIC
==================================================

Khi người chơi bấm Finish:

Kiểm tra toàn bộ câu trả lời.

Nếu tất cả đúng:

- completed = true
- tính score
- tăng streak
- cộng +2 combo
- lưu progress
- kiểm tra unlock
- hiển thị Result Screen.

Nếu có câu sai:

- xác định câu sai.
- hiển thị danh sách câu sai.
- lives -= 1.
- cho phép làm lại.

==================================================
18. TIMER
==================================================

Người dùng có thể chọn:

Có thời gian
Không thời gian

Nếu timer ON:
- Có countdown.
- Khi hết thời gian:
  → tự động Finish hoặc Game Over tùy state.

Nếu timer OFF:
- Không hiển thị countdown.

Settings phải được lưu.

==================================================
19. SOUND
==================================================

Có sound:

- chọn đáp án.
- nhập crossword.
- câu đúng.
- câu sai.
- hoàn thành.
- new high score.
- unlock.

Nếu chưa có audio files:
- tạo sound system bằng Web Audio API đơn giản
HOẶC
- tạo placeholder functions để dễ thay audio sau.

Có:

playCorrectSound()
playWrongSound()
playCompleteSound()
playUnlockSound()

Nếu sound OFF:
→ không phát.

==================================================
20. ANIMATION CONTROL
==================================================

JS chỉ thêm/remove class.

Ví dụ:

element.classList.add("correct-animation");

Không viết CSS trong JS.

==================================================
21. HIGH SCORE
==================================================

Theo dõi:

bestScore.

Nếu score > bestScore:

- cập nhật localStorage.
- hiển thị:
"🏆 New High Score!"

==================================================
22. DASHBOARD
==================================================

Update dashboard:

- total score.
- correct.
- wrong.
- streak.
- highest level.
- completed games.

Tạo function:

updateDashboard()

==================================================
23. CERTIFICATE
==================================================

Khi hoàn thành đủ điều kiện:

Tạo certificate data:

{
    name,
    score,
    streak,
    completedAt,
    date,
    time,
    month,
    year
}

Format ngày/giờ theo locale đang chọn.

Hiển thị certificate trong UI.

==================================================
24. LANGUAGE
==================================================

Hỗ trợ:

Vietnamese
English

Tạo dictionary:

const TRANSLATIONS = {
    vi: {},
    en: {}
};

Các text UI có thể dịch.

KHÔNG dịch nội dung câu hỏi nếu không có bản dịch được cung cấp.
Không tự ý dịch câu hỏi học thuật nếu chưa có dữ liệu.

Ngôn ngữ chủ yếu áp dụng cho UI.

==================================================
25. DARK MODE
==================================================

Toggle class:

dark-mode

hoặc data-theme.

Lưu:

settings.theme

==================================================
26. SOUND SETTING
==================================================

settings.sound = true/false

==================================================
27. TIMER SETTING
==================================================

settings.timer = true/false

Có thể cho người dùng chọn thời gian.

Ví dụ:
30s
60s
90s
120s

Nhưng giá trị phải dễ chỉnh trong constants.

==================================================
28. FAKE ANTI-BOT
==================================================

Tạo giao diện fake verification trước khi vào game.

Ví dụ:

☐ I'm not a robot

Khi click:
- animation.
- loading.
- verification success.

Mục đích:
- trải nghiệm UI.

QUAN TRỌNG:
Đây KHÔNG phải hệ thống bảo mật thật.
Không tuyên bố website được bảo vệ bởi Cloudflare thật.

Có thể comment:

// FRONTEND DEMO ANTI-BOT ONLY
// This is not a real security mechanism.

==================================================
29. NAVIGATION
==================================================

Xây dựng SPA-like navigation.

Các section:

dashboard
game-selection
game
result
profile
achievement
certificate
settings
about

Dùng:

showSection("dashboard");

Không reload trang khi chuyển section.

==================================================
30. SIDEBAR
==================================================

Toggle:

sidebar-open
sidebar-collapsed

Mobile:
drawer.

==================================================
31. ABOUT ME SOURCE VIEWER
==================================================

Khi người dùng click:

About Me → View Source Code.

Hiển thị:

index.html
style.css
script.js

Có:
- tab.
- code viewer.
- copy button.

JavaScript phải có function:

showSourceCode()
copySourceCode()

LƯU Ý:
Không đọc file từ server.
Nếu muốn hiển thị source code, tạo placeholder/source strings hoặc cấu trúc phù hợp frontend.

==================================================
32. ERROR HANDLING
==================================================

Không để JavaScript crash nếu:
- localStorage bị lỗi.
- DOM element chưa tồn tại.
- question không tồn tại.
- answer undefined.

Sử dụng defensive programming.

==================================================
33. QUESTION VALIDATION
==================================================

Tạo function:

validateQuestion(question)

Kiểm tra:
- id
- question/clue
- answer
- type

Nếu dữ liệu sai:
console.warn()

Không crash toàn bộ game.

==================================================
34. ADDING QUESTIONS
==================================================

Phải tạo comment rất rõ:

// ==================================================
// HOW TO ADD A NEW QUESTION
// ==================================================
//
// Example:
//
// QUESTION_BANK.grammar.push({
//     id: 26,
//     type: "multiple-choice",
//     question: "Your question here",
//     options: ["A", "B", "C", "D"],
//     answer: "B",
//     explanation: "Explanation here"
// });
//
// ==================================================

Tạo tương tự cho Type 1.

==================================================
35. KHÔNG TỰ Ý THAY ĐỔI CẤU TRÚC
==================================================

Không được:
- đổi tên file.
- tạo backend.
- tạo database.
- dùng npm.
- dùng build tool.
- yêu cầu server.

Website phải chạy bằng cách mở:

index.html

hoặc chạy bằng Live Server.

==================================================
36. CODE QUALITY
==================================================

Dùng:

const
let
arrow functions khi phù hợp
template literals
optional chaining nếu cần
destructuring khi hợp lý

Tránh:
- var nếu không cần.
- global variables không cần thiết.
- duplicate code.

Các function phải có tên rõ ràng.

==================================================
37. COMMENT
==================================================

Code phải có comment tại:

QUESTION BANK
GAME ENGINE
SCORE
LIVES
COMBO
STREAK
UNLOCK
LOCAL STORAGE
CERTIFICATE
SETTINGS
LANGUAGE
ANTI-BOT
SOURCE VIEWER

==================================================
38. CUỐI FILE
==================================================

Có:

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

Tạo:

function initApp() {
    loadSettings();
    loadUser();
    loadProgress();
    bindEvents();
    renderInitialUI();
}

==================================================
39. OUTPUT
==================================================

Chỉ trả về:

script.js

Không trả lời bằng code của index.html.
Không trả lời bằng CSS.
Không tạo file khác.

Code phải hoàn chỉnh và chạy được với:

index.html
style.css
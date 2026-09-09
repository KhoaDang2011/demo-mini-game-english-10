
// ==========================================================================
// ENGGAME 10 - JAVASCRIPT CORE ENGINE
// Comprehensive Game Logic, Question Bank & State Management
// ==========================================================================
// ==========================================================================
// 1. CONSTANTS & CONFIGURATION
// ==========================================================================
var STORAGE_PREFIX = "englishMiniGame_";
const STORAGE_KEYS = {
USER: `${STORAGE_PREFIX}user`,
PROGRESS: `${STORAGE_PREFIX}progress`,
SETTINGS: `${STORAGE_PREFIX}settings`,
CERTIFICATE: `${STORAGE_PREFIX}certificate`
};
const SCORE_CONFIG = {
correctQuestion: 100,
comboMultiplier: 15,
levelCompleteBonus: 500,
flawlessBonus: 300,
streakBonusFactor: 1.2
};
const TIMER_CONFIG = {
defaultSeconds: 60,
warningThreshold: 15
};
// ==========================================================================
// QUESTION ADD / EDIT AREA
// ==========================================================================
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
// ==========================================================================
// ==========================================================================
// HOW TO ADD A NEW QUESTION
// ==========================================================================
//
// Example for Type 1 (Vocabulary / Pronunciation Crossword):
// QUESTION_BANK.type1.push({
// id: 26,
// type: "crossword",
// clue: "an electronic machine that can store, organize and find information",
// answer: "computer",
// stress: "-•-"
// });
//
// Example for Type 2 (Grammar Multiple Choice):
// QUESTION_BANK.grammar.push({
// id: 26,
// type: "multiple-choice",
// question: "Smartphones allow students ______ information easily.",
// options: ["accessing", "to access", "access", "accessed"],
// answer: "to access",
// explanation: "The verb 'allow' is followed by Object + to-infinitive (allow someone to do something)."
// });
//
// ==========================================================================
const QUESTION_BANK = {
// --------------------------------------------------
// TYPE 1: PRONUNCIATION & VOCABULARY (25 QUESTIONS)
// --------------------------------------------------
type1: [
{
id: 1,
type: "crossword",
clue: "the advantage (of something)",
answer: "benefit",
stress: "•--"
},
{
id: 2,
type: "crossword",
clue: "a new idea, method, or thing introduced",
answer: "innovation",
stress: "--•-"
},
{
id: 3,
type: "crossword",
clue: "the M in (computer) RAM; capacity for storing data",
answer: "memory",
stress: "•--"
},
{
id: 4,
type: "crossword",
clue: "a device used for voice communication over distances",
answer: "telephone",
stress: "•--"
},
{
id: 5,
type: "crossword",
clue: "an electronic device which allows us to process and store data",
answer: "computer",
stress: "-•-"
},
{
id: 6,
type: "crossword",
clue: "easy to carry or move around (e.g. laptop, mobile)",
answer: "portable",
stress: "•--"
},
{
id: 7,
type: "crossword",
clue: "a person who does unpaid work to help others",
answer: "volunteer",
stress: "--•"
},
{
id: 8,
type: "crossword",
clue: "to give money, food, or clothes to a charity or organization",
answer: "donate",
stress: "-•"
},
{
id: 9,
type: "crossword",
clue: "all the people who live in a particular area or group",
answer: "community",
stress: "-•--"
},
{
id: 10,
type: "crossword",
clue: "a thing that has been designed or created for the first time",
answer: "invention",
stress: "-•-"
},
{
id: 11,
type: "crossword",
clue: "giving or willing to give freely; kind and helpful",
answer: "generous",
stress: "•--"
},
{
id: 12,
type: "crossword",
clue: "sure of one's own abilities, qualities, or ideas",
answer: "confident",
stress: "•--"
},
{
id: 13,
type: "crossword",
clue: "the natural world in which people, animals and plants live",
answer: "environment",
stress: "-•---"
},
{
id: 14,
type: "crossword",
clue: "a condition or circumstance that puts one in a favorable position",
answer: "advantage",
stress: "-•-"
},
{
id: 15,
type: "crossword",
clue: "relating to electronic technology using discrete numeric digits",
answer: "digital",
stress: "•--"
},
{
id: 16,
type: "crossword",
clue: "an object, tool, or equipment made for a specific purpose",
answer: "device",
stress: "-•"
},
{
id: 17,
type: "crossword",
clue: "a global computer network providing varied information facilities",
answer: "internet",
stress: "•--"
},
{
id: 18,
type: "crossword",
clue: "the programs and other operating information used by a computer",
answer: "software",
stress: "•-"
},
{
id: 19,
type: "crossword",
clue: "the physical machinery and equipment components of a computer",
answer: "hardware",
stress: "•-"
},
{
id: 20,
type: "crossword",
clue: "a portable battery-powered microcomputer suitable for use on one's lap",
answer: "laptop",
stress: "•-"
},
{
id: 21,
type: "crossword",
clue: "a container providing a source of chemical electrical energy",
answer: "battery",
stress: "•--"
},
{
id: 22,
type: "crossword",
clue: "the right or opportunity to use, enter or reach something",
answer: "access",
stress: "•-"
},
{
id: 23,
type: "crossword",
clue: "an electronic device for the visual presentation of data",
answer: "display",
stress: "-•"
},
{
id: 24,
type: "crossword",
clue: "to join or bring together two separate electronic links",
answer: "connect",
stress: "-•"
},
{
id: 25,
type: "crossword",
clue: "worth a great deal of money or of high practical importance",
answer: "valuable",
stress: "•---"
}
],
// --------------------------------------------------
// TYPE 2: GRAMMAR (25 QUESTIONS)
// --------------------------------------------------
grammar: [
    {
        id: 1,
        type: "multiple-choice",
        question: "They ______ some interesting software on the computers, and everyone enjoys ______ them.",
        options: [
            "just installed / to use",
            "have just installed / using",
            "have just installed / to use",
            "just have installed / use"
        ],
        answer: "have just installed / using",
        explanation: "'have just installed' is Present Perfect for a recent event; 'enjoy' is followed by a gerund (-ing form)."
    },
    {
        id: 2,
        type: "multiple-choice",
        question: "Smartphones allow people ______ information over long distances. ______ with a smartphone is fun as well.",
        options: [
            "sending / Learn",
            "to send / To learn",
            "to send / Learning",
            "send / Learned"
        ],
        answer: "to send / Learning",
        explanation: "Structure: 'allow sb to do sth'. In subject position, both 'To learn' and 'Learning' are possible, with gerund being the most natural form."
    },
    {
        id: 3,
        type: "multiple-choice",
        question: "Since television ______, TV designs ______ a lot.",
        options: [
            "was invented / have changed",
            "has been invented / changed",
            "is invented / have changed",
            "was invented / were changed"
        ],
        answer: "was invented / have changed",
        explanation: "Since + Past Simple clause (was invented), main clause uses Present Perfect (have changed)."
    },
    {
        id: 4,
        type: "multiple-choice",
        question: "Many teenagers prefer ______ games online rather than ______ books.",
        options: [
            "playing / reading",
            "to play / read",
            "play / to read",
            "playing / to read"
        ],
        answer: "playing / reading",
        explanation: "Structure: prefer V-ing to/rather than V-ing."
    },
    {
        id: 5,
        type: "multiple-choice",
        question: "She decided ______ for the community charity after ______ the poor children.",
        options: [
            "to volunteer / meeting",
            "volunteering / to meet",
            "to volunteer / meet",
            "volunteer / meeting"
        ],
        answer: "to volunteer / meeting",
        explanation: "Decide + to V; after + preposition takes a gerund (-ing)."
    },
    {
        id: 6,
        type: "multiple-choice",
        question: "The solar chargers ______ by eco-friendly engineers two years ago.",
        options: [
            "are designed",
            "were designed",
            "have been designed",
            "had designed"
        ],
        answer: "were designed",
        explanation: "Past Simple Passive: was/were + V3/ed (two years ago)."
    },
    {
        id: 7,
        type: "multiple-choice",
        question: "Have you ever considered ______ part in international volunteer programs?",
        options: [
            "taking",
            "to take",
            "take",
            "having taken"
        ],
        answer: "taking",
        explanation: "The verb 'consider' is followed by a gerund (-ing)."
    },
    {
        id: 8,
        type: "multiple-choice",
        question: "He promised ______ the digital assignments before midnight.",
        options: [
            "finishing",
            "to finish",
            "finish",
            "finished"
        ],
        answer: "to finish",
        explanation: "Promise + to-infinitive."
    },
    {
        id: 9,
        type: "multiple-choice",
        question: "The classroom ______ with high-speed interactive screens lately.",
        options: [
            "is equipped",
            "was equipped",
            "has been equipped",
            "had equipped"
        ],
        answer: "has been equipped",
        explanation: "'Lately' indicates Present Perfect Passive: has/have been + V3/ed."
    },
    {
        id: 10,
        type: "multiple-choice",
        question: "It is essential for all students ______ computer skills early.",
        options: [
            "master",
            "to master",
            "mastering",
            "mastered"
        ],
        answer: "to master",
        explanation: "Structure: It is + adjective + for sb + to-infinitive."
    },
    {
        id: 11,
        type: "multiple-choice",
        question: "I can't help ______ proud when our team finished the digital robot project.",
        options: [
            "feeling",
            "to feel",
            "feel",
            "felt"
        ],
        answer: "feeling",
        explanation: "Idiom: can't help + V-ing (không thể ngừng cảm thấy...)."
    },
    {
        id: 12,
        type: "multiple-choice",
        question: "While we ______ at the computer lab, the power suddenly went out.",
        options: [
            "are working",
            "were working",
            "worked",
            "have worked"
        ],
        answer: "were working",
        explanation: "Past Continuous (were working) interrupted by a Past Simple event (went out)."
    },
    {
        id: 13,
        type: "multiple-choice",
        question: "She avoided ______ personal contact details on suspicious websites.",
        options: [
            "providing",
            "to provide",
            "provide",
            "provided"
        ],
        answer: "providing",
        explanation: "Avoid + gerund (V-ing)."
    },
    {
        id: 14,
        type: "multiple-choice",
        question: "Smart learning applications make it convenient ______ lessons anywhere.",
        options: [
            "review",
            "to review",
            "reviewing",
            "reviewed"
        ],
        answer: "to review",
        explanation: "Structure: make it + adj + to-infinitive."
    },
    {
        id: 15,
        type: "multiple-choice",
        question: "We ______ English online for three months, and our pronunciation has improved greatly.",
        options: [
            "learned",
            "have learned",
            "are learning",
            "learn"
        ],
        answer: "have learned",
        explanation: "'For three months' combined with result now indicates Present Perfect."
    },
    {
        id: 16,
        type: "multiple-choice",
        question: "Volunteers managed ______ warm clothing to children living in remote areas.",
        options: [
            "distribute",
            "to distribute",
            "distributing",
            "distributed"
        ],
        answer: "to distribute",
        explanation: "Manage + to-infinitive."
    },
    {
        id: 17,
        type: "multiple-choice",
        question: "The newly created microchip was small enough ______ inside any wearable device.",
        options: [
            "fit",
            "to fit",
            "fitting",
            "fitted"
        ],
        answer: "to fit",
        explanation: "Structure: Adj + enough + to-infinitive."
    },
    {
        id: 18,
        type: "multiple-choice",
        question: "Don't forget ______ off the computer after completing the test.",
        options: [
            "turning",
            "to turn",
            "turn",
            "turned"
        ],
        answer: "to turn",
        explanation: "Forget + to V: nhớ để làm gì (nhiệm vụ trong tương lai)."
    },
    {
        id: 19,
        type: "multiple-choice",
        question: "Old laptops ______ by the local environmental club for recycling.",
        options: [
            "are collected",
            "collect",
            "is collecting",
            "were collected"
        ],
        answer: "are collected",
        explanation: "Present Simple Passive for habitual community actions."
    },
    {
        id: 20,
        type: "multiple-choice",
        question: "He admitted ______ internet bandwidth for streaming games during school hours.",
        options: [
            "to use",
            "using",
            "use",
            "used"
        ],
        answer: "using",
        explanation: "Admit + gerund (V-ing)."
    },
    {
        id: 21,
        type: "multiple-choice",
        question: "The teacher suggested ______ educational podcasts to train listening reflexes.",
        options: [
            "listen",
            "listening",
            "to listen",
            "listened"
        ],
        answer: "listening",
        explanation: "Suggest + gerund (V-ing) when there is no direct object pronoun."
    },
    {
        id: 22,
        type: "multiple-choice",
        question: "Artificial Intelligence systems ______ rapidly over the last five years.",
        options: [
            "developed",
            "have developed",
            "are developing",
            "were developing"
        ],
        answer: "have developed",
        explanation: "'Over the last five years' requires Present Perfect tense."
    },
    {
        id: 23,
        type: "multiple-choice",
        question: "They expect the digital library ______ by next semester.",
        options: [
            "completed",
            "to be completed",
            "completing",
            "to complete"
        ],
        answer: "to be completed",
        explanation: "Expect + object + to be V3/ed (Passive infinitive)."
    },
    {
        id: 24,
        type: "multiple-choice",
        question: "Would you mind ______ me how to connect this printer to the WiFi?",
        options: [
            "show",
            "showing",
            "to show",
            "showed"
        ],
        answer: "showing",
        explanation: "Would you mind + gerund (V-ing)."
    },
    {
        id: 25,
        type: "multiple-choice",
        question: "Our school encourages every student ______ at least one technological project.",
        options: [
            "create",
            "to create",
            "creating",
            "created"
        ],
        answer: "to create",
        explanation: "Encourage + object + to-infinitive."
    }
],

// --------------------------------------------------
// TYPE 3: FUN MINI GAMES (25 QUESTIONS PLACEHOLDER)
// --------------------------------------------------
// ==================================================
// TYPE 3 MINI-GAME CONTENT WILL BE ADDED LATER
// ==================================================
type3: {
    // Level 1: Quick Collocations (8 questions)
    level1: [
        { id: 1, type: "collocation", prompt: "browse the ______", answer: "internet", options: ["internet", "battery", "hardware", "screen"] },
        { id: 2, type: "collocation", prompt: "charge the ______", answer: "battery", options: ["battery", "memory", "benefit", "software"] },
        { id: 3, type: "collocation", prompt: "install a ______", answer: "program", options: ["program", "volunteer", "donation", "clue"] },
        { id: 4, type: "collocation", prompt: "raise ______ for charity", answer: "money", options: ["money", "display", "stress", "digital"] },
        { id: 5, type: "collocation", prompt: "make a ______ impact", answer: "positive", options: ["positive", "portable", "wrong", "random"] },
        { id: 6, type: "collocation", prompt: "save ______ on computer", answer: "files", options: ["files", "volunteers", "cables", "tapes"] },
        { id: 7, type: "collocation", prompt: "gain practical ______", answer: "experience", options: ["experience", "hardware", "device", "button"] },
        { id: 8, type: "collocation", prompt: "solve a complex ______", answer: "problem", options: ["problem", "battery", "laptop", "display"] }
    ],
    // Level 2: Word Association & Antonyms (8 questions)
    level2: [
        { id: 9, type: "association", prompt: "Antonym of 'Advantage':", answer: "disadvantage", options: ["disadvantage", "benefit", "device", "portable"] },
        { id: 10, type: "association", prompt: "Antonym of 'Generous':", answer: "selfish", options: ["selfish", "kind", "confident", "helpful"] },
        { id: 11, type: "association", prompt: "Opposite of 'Connect':", answer: "disconnect", options: ["disconnect", "reconnect", "install", "interact"] },
        { id: 12, type: "association", prompt: "Noun of 'Invent':", answer: "invention", options: ["invention", "inventor", "inventive", "inverting"] },
        { id: 13, type: "association", prompt: "Adjective of 'Environment':", answer: "environmental", options: ["environmental", "environmentally", "environmentist", "environs"] },
        { id: 14, type: "association", prompt: "Synonym of 'Portable':", answer: "handy", options: ["handy", "heavy", "locked", "digital"] },
        { id: 15, type: "association", prompt: "Synonym of 'Donate':", answer: "contribute", options: ["contribute", "receive", "purchase", "install"] },
        { id: 16, type: "association", prompt: "Noun of 'Perform':", answer: "performance", options: ["performance", "performer", "performed", "performing"] }
    ],
    // Level 3: Speed Syntax & Challenge (9 questions)
    level3: [
        { id: 17, type: "speed", prompt: "Which is a computer input device?", answer: "keyboard", options: ["keyboard", "monitor", "printer", "speaker"] },
        { id: 18, type: "speed", prompt: "Which word has first-syllable stress?", answer: "benefit", options: ["benefit", "device", "connect", "display"] },
        { id: 19, type: "speed", prompt: "Which word has second-syllable stress?", answer: "computer", options: ["computer", "telephone", "digital", "memory"] },
        { id: 20, type: "speed", prompt: "What does 'WWW' stand for?", answer: "World Wide Web", options: ["World Wide Web", "Wide World Web", "Web World Wide", "World Web Wide"] },
        { id: 21, type: "speed", prompt: "Choose the noun ending suffix:", answer: "-tion", options: ["-tion", "-ly", "-ful", "-ed"] },
        { id: 22, type: "speed", prompt: "Choose the adjective ending suffix:", answer: "-able", options: ["-able", "-ment", "-ness", "-ity"] },
        { id: 23, type: "speed", prompt: "Identify the irregular past verb:", answer: "broke", options: ["broke", "played", "watched", "walked"] },
        { id: 24, type: "speed", prompt: "Present Perfect uses which auxiliary?", answer: "have / has", options: ["have / has", "do / does", "was / were", "will"] },
        { id: 25, type: "speed", prompt: "Final Quiz: Master of Grade 10?", answer: "Yes, ready!", options: ["Yes, ready!", "Almost", "Not sure", "Need review"] }
    ]
}
};
// ==========================================================================
// 2. LOCAL STORAGE MANAGEMENT
// ==========================================================================
// LOCAL STORAGE
// Robust error handling with fallback states for safe access.
const Storage = {
get(key, defaultValue = null) {
try {
const data = localStorage.getItem(key);
return data ? JSON.parse(data) : defaultValue;
} catch (e) {
console.warn(`[Storage] Failed to get key: ${key}`, e);
return defaultValue;
}
},
set(key, value) {
try {
localStorage.setItem(key, JSON.stringify(value));
return true;
} catch (e) {
console.warn(`[Storage] Failed to set key: ${key}`, e);
return false;
}
},
remove(key) {
try {
localStorage.removeItem(key);
return true;
} catch (e) {
console.warn(`[Storage] Failed to remove key: ${key}`, e);
return false;
}
},
clearAll() {
Object.values(STORAGE_KEYS).forEach(k => Storage.remove(k));
}
};
// ==========================================================================
// 3. USER STATE
// ==========================================================================
// USER PROFILE & DEFAULT DATA STRUCTURES
const UserState = {
profile: null,
progress: {
totalScore: 0,
totalCorrect: 0,
totalWrong: 0,
streak: 0,
bestScore: 0,
highestLevel: "Level 1",
completedGames: {
type1: false,
type2: false,
type3: false
},
level3Unlocked: false
},
settings: {
language: "vi",
theme: "dark",
sound: true,
timer: true
}
};
// ==========================================================================
// 4. GAME STATE
// ==========================================================================
// GAME ENGINE STATE
const gameState = {
currentGameType: null, // 1, 2, or 3
currentLevel: 1, // for Type 3
currentIndex: 0,
questions: [],
currentQuestion: null,
userAnswers: {}, // index -> answer
score: 0,
correct: 0,
wrong: 0,
lives: 3,
combo: 0,
maxCombo: 0,
timerInterval: null,
timeRemaining: TIMER_CONFIG.defaultSeconds,
isCompleted: false,
startedAt: null
};
// ==========================================================================
// 5. TRANSLATIONS (LANGUAGE SYSTEM)
// ==========================================================================
// LANGUAGE
const TRANSLATIONS = {
vi: {
title_dashboard: "Dashboard",
title_game_select: "Chọn Màn Chơi",
title_game_play: "Khu Vực Thi Đấu",
title_profile: "Hồ Sơ Cá Nhân",
title_achievements: "Thành Tích",
title_certificate: "Chứng Chỉ",
title_settings: "Cài Đặt",
title_about: "Thông Tin Tác Giả",
nav_home: "Trang chủ",
nav_play: "Chơi",
nav_profile: "Hồ sơ",
nav_achievements: "Thành tích",
nav_certificate: "Chứng chỉ",
nav_settings: "Cài đặt",
nav_about: "About Me",

dash_greeting: "Xin chào,",
    dash_welcome_badge: "Học Kỳ Tiếng Anh 10",
    dash_quote: "Sẵn sàng nâng cao vốn từ vựng và nắm vững ngữ pháp hôm nay?",
    dash_btn_play: "Chơi Ngay",
    dash_btn_cert: "Xem Chứng Chỉ",
    stat_total_score: "Tổng Điểm",
    stat_correct: "Tổng Câu Đúng",
    stat_wrong: "Tổng Câu Sai",
    stat_streak: "Chuỗi Thắng (Streak)",
    stat_highest_level: "Màn Cao Nhất",
    stat_type3_status: "Trạng Thái Type 3",
    status_locked: "ĐANG KHÓA",
    status_unlocked: "ĐÃ MỞ KHÓA",

    hud_streak: "Streak:",
    btn_submit_check: "Kiểm Tra / Nộp Bài",
    btn_next_question: "Câu Kế Tiếp",
    btn_play_now: "Bắt Đầu Chơi",
    btn_next_level: "Màn Tiếp Theo",
    btn_replay: "Chơi Lại",
    btn_dashboard: "Về Dashboard",
    btn_copy: "Sao chép code",

    msg_verified: "Xác minh danh tính thành công!",
    msg_code_copied: "Đã sao chép mã nguồn vào clipboard!",
    msg_save_success: "Lưu cài đặt thành công!",
    msg_game_over: "Bạn đã hết mạng! Hãy thử lại màn chơi này.",
    msg_new_record: "Kỷ lục điểm số mới!",
    msg_stage_complete: "Tuyệt vời! Bạn đã vượt qua màn chơi!",
    msg_type3_unlocked: "Chúc mừng! Bạn đã mở khóa Fun Mini Games!"
},
en: {
    title_dashboard: "Dashboard",
    title_game_select: "Select Mode",
    title_game_play: "Challenge Arena",
    title_profile: "User Profile",
    title_achievements: "Achievements",
    title_certificate: "Certificate",
    title_settings: "Settings",
    title_about: "About Author",
    
    nav_home: "Home",
    nav_play: "Play",
    nav_profile: "Profile",
    nav_achievements: "Achievements",
    nav_certificate: "Certificate",
    nav_settings: "Settings",
    nav_about: "About Me",

    dash_greeting: "Welcome back,",
    dash_welcome_badge: "Grade 10 English",
    dash_quote: "Ready to elevate your vocabulary and master English grammar today?",
    dash_btn_play: "Play Now",
    dash_btn_cert: "View Certificate",
    stat_total_score: "Total Score",
    stat_correct: "Total Correct",
    stat_wrong: "Total Wrong",
    stat_streak: "Winning Streak",
    stat_highest_level: "Highest Level",
    stat_type3_status: "Type 3 Status",
    status_locked: "LOCKED",
    status_unlocked: "UNLOCKED",

    hud_streak: "Streak:",
    btn_submit_check: "Submit / Check Answer",
    btn_next_question: "Next Question",
    btn_play_now: "Start Challenge",
    btn_next_level: "Next Level",
    btn_replay: "Replay",
    btn_dashboard: "Back to Dashboard",
    btn_copy: "Copy Source",

    msg_verified: "Verification completed successfully!",
    msg_code_copied: "Source code copied to clipboard!",
    msg_save_success: "Settings saved successfully!",
    msg_game_over: "Game Over! You ran out of lives. Try again.",
    msg_new_record: "New High Score Achieved!",
    msg_stage_complete: "Awesome! Stage cleared flawlessly!",
    msg_type3_unlocked: "Congrats! Fun Mini Games Unlocked!"
}
};
// ==========================================================================
// 6. SOUND SYSTEM (WEB AUDIO API SYNTHESIZER)
// ==========================================================================
// SOUND
const SoundFX = {
ctx: null,
init() {
if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
const AudioCtx = window.AudioContext || window.webkitAudioContext;
this.ctx = new AudioCtx();
}
},
playTone(freq, type = "sine", duration = 0.15, gainVal = 0.1) {
if (!UserState.settings.sound) return;
try {
this.init();
if (!this.ctx) return;
if (this.ctx.state === "suspended") {
this.ctx.resume();
}

const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
        // Audio context safely ignored if blocked by autoplay policy
    }
},
playClick() {
    this.playTone(480, "sine", 0.06, 0.05);
},
playCorrectSound() {
    if (!UserState.settings.sound) return;
    this.playTone(523.25, "triangle", 0.1, 0.1); // C5
    setTimeout(() => this.playTone(659.25, "triangle", 0.15, 0.1), 90); // E5
},
playWrongSound() {
    if (!UserState.settings.sound) return;
    this.playTone(220, "sawtooth", 0.2, 0.1);
    setTimeout(() => this.playTone(180, "sawtooth", 0.25, 0.12), 120);
},
playCompleteSound() {
    if (!UserState.settings.sound) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C-E-G-C
    notes.forEach((note, i) => {
        setTimeout(() => this.playTone(note, "sine", 0.2, 0.12), i * 110);
    });
},
playUnlockSound() {
    if (!UserState.settings.sound) return;
    [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        setTimeout(() => this.playTone(freq, "sine", 0.25, 0.15), idx * 80);
    });
}
};
// ==========================================================================
// 7. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = "info") {
const container = document.getElementById("toast-container");
if (!container) return;

const toast = document.createElement("div");
toast.className = `toast-item toast-${type}`;

let icon = "ℹ️";
if (type === "success") icon = "✅";
if (type === "error") icon = "❌";
if (type === "warning") icon = "⚠️";

toast.innerHTML = `<span aria-hidden="true">${icon}</span><span>${message}</span>`;
container.appendChild(toast);

setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    setTimeout(() => toast.remove(), 300);
}, 3500);
}
// ==========================================================================
// 8. NAVIGATION & SPA SECTION CONTROLLER
// ==========================================================================
// NAVIGATION
function showSection(sectionId) {
const screens = document.querySelectorAll(".app-screen");
screens.forEach(s => s.classList.remove("active"));

const target = document.getElementById(sectionId);
if (target) {
    target.classList.add("active");
}

// Update Topbar page title & navigation link active state
updatePageTitle(sectionId);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    if (link.getAttribute("data-target") === sectionId) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Close Mobile Drawer if open
closeMobileSidebar();
}
function updatePageTitle(sectionId) {
const titleEl = document.getElementById("page-title");
if (!titleEl) return;
const lang = UserState.settings.language || "vi";

const titleKeyMap = {
    "screen-dashboard": "title_dashboard",
    "screen-game-select": "title_game_select",
    "screen-game-play": "title_game_play",
    "screen-result": "title_game_play",
    "screen-profile": "title_profile",
    "screen-achievements": "title_achievements",
    "screen-certificate": "title_certificate",
    "screen-settings": "title_settings",
    "screen-about": "title_about"
};

const key = titleKeyMap[sectionId] || "title_dashboard";
titleEl.textContent = TRANSLATIONS[lang][key] || "Dashboard";
}
// ==========================================================================
// 9. UNLOCK SYSTEM & ACCESS CONTROL
// ==========================================================================
// UNLOCK
function isGameUnlocked(gameType) {
if (!UserState.profile) return false;
// Teachers have unrestricted access to all game modules
if (UserState.profile.occupation === "teacher") {
    return true;
}

// Student logic:
if (gameType === 1 || gameType === 2) {
    return true; // Available by default for Grade 10 practice
}

if (gameType === 3) {
    // Unlocks only if Type 1 AND Type 2 are completed
    const prog = UserState.progress.completedGames;
    return Boolean(prog.type1 && prog.type2) || UserState.progress.level3Unlocked;
}

return false;
}
function updateUnlockUI() {
const card3 = document.getElementById("card-game-type-3");
const btnStart3 = document.getElementById("btn-start-type-3");
const lockPill3 = document.getElementById("type-3-lock-pill");
const lockReason3 = document.getElementById("type-3-lock-reason");
const dashStatus3 = document.getElementById("dash-type3-status");
const unlocked = isGameUnlocked(3);
const lang = UserState.settings.language || "vi";

if (card3 && btnStart3) {
    if (unlocked) {
        card3.classList.remove("locked");
        card3.removeAttribute("aria-disabled");
        btnStart3.disabled = false;
        btnStart3.className = "btn btn-primary btn-block btn-start-game";
        btnStart3.textContent = TRANSLATIONS[lang].btn_play_now || "Bắt Đầu Chơi";

        if (lockPill3) {
            lockPill3.className = "card-badge";
            lockPill3.textContent = TRANSLATIONS[lang].status_unlocked || "ĐÃ MỞ KHÓA";
        }
        if (lockReason3) lockReason3.style.display = "none";
    } else {
        card3.classList.add("locked");
        card3.setAttribute("aria-disabled", "true");
        btnStart3.disabled = true;
        btnStart3.className = "btn btn-disabled btn-block btn-start-game";
        btnStart3.textContent = lang === "vi" ? "Chưa Mở Khóa" : "Locked";

        if (lockPill3) {
            lockPill3.className = "card-badge locked-badge";
            lockPill3.innerHTML = `🔒 ${TRANSLATIONS[lang].status_locked || "ĐÃ KHÓA"}`;
        }
        if (lockReason3) lockReason3.style.display = "block";
    }
}

if (dashStatus3) {
    dashStatus3.className = `stat-status-badge ${unlocked ? "unlocked" : "locked"}`;
    dashStatus3.textContent = unlocked 
        ? (TRANSLATIONS[lang].status_unlocked || "ĐÃ MỞ KHÓA") 
        : (TRANSLATIONS[lang].status_locked || "ĐANG KHÓA");
}
}
// ==========================================================================
// 10. AUTHENTICATION & USER PROFILE
// ==========================================================================
function loadUser() {
const user = Storage.get(STORAGE_KEYS.USER);
if (!user || !user.name) {
showSection("screen-register");
} else {
UserState.profile = user;
renderUserProfile();
showSection("screen-dashboard");
}
}
function handleRegistration(event) {
event.preventDefault();
const nameInput = document.getElementById("reg-fullname");
const dobInput = document.getElementById("reg-dob");
const emailInput = document.getElementById("reg-email");
const roleSelect = document.getElementById("reg-role");
const errName = document.getElementById("error-fullname");
const errDob = document.getElementById("error-dob");
const errEmail = document.getElementById("error-email");
const errRole = document.getElementById("error-role");

// Clear previous error messages
[errName, errDob, errEmail, errRole].forEach(el => {
    if (el) el.textContent = "";
});

let isValid = true;

const name = nameInput.value.trim();
const dob = dobInput.value.trim();
const email = emailInput.value.trim();
const role = roleSelect.value;

if (!name) {
    errName.textContent = "Vui lòng nhập họ và tên của bạn.";
    isValid = false;
}

if (!dob) {
    errDob.textContent = "Vui lòng chọn ngày tháng năm sinh.";
    isValid = false;
}

if (!role) {
    errRole.textContent = "Vui lòng chọn vai trò (Học sinh hoặc Giáo viên).";
    isValid = false;
}

if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errEmail.textContent = "Định dạng email không hợp lệ.";
        isValid = false;
    }
}

if (!isValid) {
    SoundFX.playWrongSound();
    return;
}

const newUser = {
    name,
    birthDate: dob,
    email: email || null,
    occupation: role, // 'student' | 'teacher'
    createdAt: new Date().toISOString()
};

UserState.profile = newUser;
Storage.set(STORAGE_KEYS.USER, newUser);

SoundFX.playUnlockSound();
showToast(`Chào mừng ${newUser.name} đến với EngGame 10!`, "success");

renderUserProfile();
updateUnlockUI();
showSection("screen-dashboard");
}
function renderUserProfile() {
if (!UserState.profile) return;
const { name, birthDate, email, occupation, createdAt } = UserState.profile;

// Dashboard references
const dashName = document.getElementById("dash-user-name");
if (dashName) dashName.textContent = name;

const miniName = document.getElementById("user-mini-name");
const miniRole = document.getElementById("user-mini-role");
if (miniName) miniName.textContent = name;
if (miniRole) miniRole.textContent = occupation === "teacher" ? "Giáo viên" : "Học sinh";

// Profile Screen references
const pName = document.getElementById("profile-name");
const pRole = document.getElementById("profile-role-badge");
const pDob = document.getElementById("profile-dob");
const pEmail = document.getElementById("profile-email");
const pJoined = document.getElementById("profile-joined-date");

if (pName) pName.textContent = name;
if (pRole) pRole.textContent = occupation === "teacher" ? "Giáo viên (Teacher)" : "Học sinh (Student)";
if (pDob) pDob.textContent = birthDate || "Chưa cập nhật";
if (pEmail) pEmail.textContent = email || "Không cung cấp";
if (pJoined) {
    const d = new Date(createdAt);
    pJoined.textContent = isNaN(d) ? "10/10/2023" : d.toLocaleDateString("vi-VN");
}
}
// ==========================================================================
// 11. DASHBOARD & METRICS
// ==========================================================================
function loadProgress() {
const saved = Storage.get(STORAGE_KEYS.PROGRESS);
if (saved) {
UserState.progress = { ...UserState.progress, ...saved };
}
updateDashboard();
}
function saveProgress() {
Storage.set(STORAGE_KEYS.PROGRESS, UserState.progress);
updateDashboard();
}
function updateDashboard() {
const p = UserState.progress;
// Header Pills
const topStreak = document.getElementById("top-streak-count");
const topScore = document.getElementById("top-total-score");
if (topStreak) topStreak.textContent = p.streak || 0;
if (topScore) topScore.textContent = p.totalScore || 0;

// Dashboard Cards
const dScore = document.getElementById("dash-total-score");
const dCorrect = document.getElementById("dash-total-correct");
const dWrong = document.getElementById("dash-total-wrong");
const dStreak = document.getElementById("dash-streak-count");
const dLevel = document.getElementById("dash-highest-level");

if (dScore) dScore.textContent = p.totalScore || 0;
if (dCorrect) dCorrect.textContent = p.totalCorrect || 0;
if (dWrong) dWrong.textContent = p.totalWrong || 0;
if (dStreak) dStreak.textContent = p.streak || 0;
if (dLevel) dLevel.textContent = p.highestLevel || "Level 1";

// Update Profile Progress Meters
const bar1 = document.getElementById("prof-bar-1");
const pct1 = document.getElementById("prof-prog-pct-1");
const bar2 = document.getElementById("prof-bar-2");
const pct2 = document.getElementById("prof-prog-pct-2");
const bar3 = document.getElementById("prof-bar-3");
const pct3 = document.getElementById("prof-prog-pct-3");

if (bar1 && pct1) {
    const val1 = p.completedGames.type1 ? 100 : 25;
    bar1.style.width = `${val1}%`;
    pct1.textContent = `${val1}%`;
}
if (bar2 && pct2) {
    const val2 = p.completedGames.type2 ? 100 : 15;
    bar2.style.width = `${val2}%`;
    pct2.textContent = `${val2}%`;
}
if (bar3 && pct3) {
    const val3 = p.completedGames.type3 ? 100 : (isGameUnlocked(3) ? 40 : 0);
    bar3.style.width = `${val3}%`;
    pct3.textContent = `${val3}%`;
}

updateUnlockUI();
}
// ==========================================================================
// 12. GAME ENGINE CORE
// ==========================================================================
// GAME ENGINE
function validateQuestion(q) {
if (!q || typeof q !== "object") return false;
if (!q.id || !q.type || !q.answer) {
console.warn("[Validation] Question data invalid:", q);
return false;
}
return true;
}
function shuffleArray(arr) {
const copy = [...arr];
for (let i = copy.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[copy[i], copy[j]] = [copy[j], copy[i]];
}
return copy;
}
function startMiniGame(gameType, level = 1) {
SoundFX.playClick();

if (!isGameUnlocked(gameType)) {
    showToast("Màn chơi này hiện đang bị khóa!", "warning");
    return;
}

let rawQuestions = [];

if (gameType === 1) {
    rawQuestions = QUESTION_BANK.type1;
} else if (gameType === 2) {
    rawQuestions = QUESTION_BANK.grammar;
} else if (gameType === 3) {
    if (level === 1) rawQuestions = QUESTION_BANK.type3.level1;
    else if (level === 2) rawQuestions = QUESTION_BANK.type3.level2;
    else rawQuestions = QUESTION_BANK.type3.level3;
}

const validQuestions = rawQuestions.filter(validateQuestion);

if (validQuestions.length === 0) {
    showToast("Không tìm thấy dữ liệu câu hỏi phù hợp.", "error");
    return;
}

// Shuffle questions safely without breaking option mappings
const activeQuestions = shuffleArray(validQuestions);

// Initialize Game Session State
gameState.currentGameType = gameType;
gameState.currentLevel = level;
gameState.questions = activeQuestions;
gameState.currentIndex = 0;
gameState.currentQuestion = activeQuestions[0];
gameState.userAnswers = {};
gameState.score = 0;
gameState.correct = 0;
gameState.wrong = 0;
gameState.lives = 3;
gameState.combo = 0;
gameState.maxCombo = 0;
gameState.isCompleted = false;
gameState.startedAt = Date.now();

// Prepare Containers & Show Play View
setupGameHUD();
renderQuestionView();
showSection("screen-game-play");

// Start Timer if enabled
startTimer();
}
function setupGameHUD() {
const titleEl = document.getElementById("hud-game-title");
const qCountEl = document.getElementById("hud-question-counter");
const scoreVal = document.getElementById("hud-score-val");
const comboVal = document.getElementById("hud-combo-val");

if (titleEl) {
    if (gameState.currentGameType === 1) titleEl.textContent = "Type 1: Vocab & Stress";
    else if (gameState.currentGameType === 2) titleEl.textContent = "Type 2: Grammar Mastery";
    else titleEl.textContent = `Type 3: Mini Game (Lvl ${gameState.currentLevel})`;
}

if (qCountEl) {
    qCountEl.textContent = `QUESTION 1 / ${gameState.questions.length}`;
}

if (scoreVal) scoreVal.textContent = "0";
if (comboVal) comboVal.textContent = "0";

updateLivesDisplay();
updateProgressBar();
}
// LIVES
function updateLivesDisplay() {
for (let i = 1; i <= 3; i++) {
const heart = document.getElementById(`life-${i}`);
if (heart) {
if (i <= gameState.lives) {
heart.classList.remove("lost");
heart.classList.add("active");
} else {
heart.classList.add("lost");
heart.classList.remove("active");
}
}
}
}
function updateProgressBar() {
const bar = document.getElementById("hud-progress-bar");
if (!bar) return;
const total = gameState.questions.length;
const curr = gameState.currentIndex + 1;
const pct = Math.min(100, Math.round((curr / total) * 100));
bar.style.width = `${pct}%`;
bar.setAttribute("aria-valuenow", pct);
}
// TIMER
function startTimer() {
clearInterval(gameState.timerInterval);
const timerContainer = document.getElementById("hud-timer-container");
const timerVal = document.getElementById("hud-timer-val");

if (!UserState.settings.timer) {
    if (timerContainer) timerContainer.style.display = "none";
    return;
}

if (timerContainer) timerContainer.style.display = "inline-flex";
gameState.timeRemaining = TIMER_CONFIG.defaultSeconds;

updateTimerDisplay();

gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;
    updateTimerDisplay();

    if (gameState.timeRemaining <= 0) {
        clearInterval(gameState.timerInterval);
        handleTimeExpiration();
    }
}, 1000);
}
function updateTimerDisplay() {
const timerVal = document.getElementById("hud-timer-val");
const timerContainer = document.getElementById("hud-timer-container");
if (!timerVal) return;

const mins = Math.floor(gameState.timeRemaining / 60);
const secs = gameState.timeRemaining % 60;
const fmt = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
timerVal.textContent = fmt;

if (timerContainer) {
    if (gameState.timeRemaining <= TIMER_CONFIG.warningThreshold) {
        timerContainer.classList.add("timer-warning");
    } else {
        timerContainer.classList.remove("timer-warning");
    }
}
}
function handleTimeExpiration() {
SoundFX.playWrongSound();
showToast("Đã hết thời gian làm bài!", "warning");
checkCurrentAnswer(true); // Forced timeout evaluation
}
// ==========================================================================
// 13. QUESTION RENDERING ENGINE
// ==========================================================================
function renderQuestionView() {
const q = gameState.questions[gameState.currentIndex];
gameState.currentQuestion = q;

const container1 = document.getElementById("container-game-type-1");
const container2 = document.getElementById("container-game-type-2");
const container3 = document.getElementById("container-game-type-3");

// Hide all containers first
if (container1) container1.style.display = "none";
if (container2) container2.style.display = "none";
if (container3) container3.style.display = "none";

const btnCheck = document.getElementById("btn-check-answer");
const btnNext = document.getElementById("btn-next-question");
if (btnCheck) {
    btnCheck.style.display = "inline-flex";
    btnCheck.disabled = false;
}
if (btnNext) btnNext.style.display = "none";

// Update HUD question index
const qCountEl = document.getElementById("hud-question-counter");
if (qCountEl) {
    qCountEl.textContent = `QUESTION ${gameState.currentIndex + 1} / ${gameState.questions.length}`;
}
updateProgressBar();

// Render by type
if (gameState.currentGameType === 1) {
    if (container1) container1.style.display = "block";
    renderType1Question(q);
} else if (gameState.currentGameType === 2) {
    if (container2) container2.style.display = "block";
    renderType2Question(q);
} else if (gameState.currentGameType === 3) {
    if (container3) container3.style.display = "block";
    renderType3Question(q);
}
}
// RENDER TYPE 1: VOCABULARY & CROSSWORD
function renderType1Question(q) {
const stressBadge = document.getElementById("type1-stress-pattern");
const promptText = document.getElementById("type1-question-prompt");
const wordSlots = document.getElementById("type1-word-slots");
const textInput = document.getElementById("type1-user-input");

if (stressBadge) stressBadge.textContent = q.stress || "•--";
if (promptText) promptText.textContent = q.clue || "";

if (wordSlots) {
    wordSlots.innerHTML = "";
    const cleanAnswer = q.answer.replace(/[^a-zA-Z]/g, "");
    for (let i = 0; i < cleanAnswer.length; i++) {
        const cell = document.createElement("div");
        cell.className = "letter-cell";
        cell.id = `letter-cell-${i}`;
        cell.textContent = "";
        wordSlots.appendChild(cell);
    }
}

if (textInput) {
    textInput.value = "";
    textInput.disabled = false;
    textInput.focus();

    // Synchronize letter boxes with typed text
    textInput.oninput = (e) => {
        const val = e.target.value.trim().toUpperCase();
        const cells = document.querySelectorAll("#type1-word-slots .letter-cell");
        cells.forEach((cell, idx) => {
            if (val[idx]) {
                cell.textContent = val[idx];
                cell.classList.add("filled");
            } else {
                cell.textContent = "";
                cell.classList.remove("filled");
            }
        });
        SoundFX.playClick();
    };

    // Enter key submits answer
    textInput.onkeydown = (e) => {
        if (e.key === "Enter") {
            checkCurrentAnswer();
        }
    };
}
}
// RENDER TYPE 2: GRAMMAR MULTIPLE CHOICE
function renderType2Question(q) {
const sentenceBody = document.getElementById("type2-sentence-body");
const optionsGrid = document.getElementById("type2-options-container");
const explainCard = document.getElementById("type2-explanation-card");
const explainText = document.getElementById("type2-explanation-text");

if (explainCard) explainCard.style.display = "none";
if (explainText) explainText.textContent = "";

if (sentenceBody) {
    sentenceBody.innerHTML = q.question.replace(/______/g, `<span class="grammar-blank-slot">______</span>`);
}

if (optionsGrid) {
    optionsGrid.innerHTML = "";
    q.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "grammar-option-btn";
        btn.dataset.option = optText;
        btn.innerHTML = `<span style="margin-right: 0.5rem; opacity: 0.7;">${String.fromCharCode(65 + idx)}.</span> ${optText}`;

        btn.onclick = () => {
            SoundFX.playClick();
            document.querySelectorAll(".grammar-option-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            gameState.userAnswers[gameState.currentIndex] = optText;
        };

        optionsGrid.appendChild(btn);
    });
}
}
// RENDER TYPE 3: FUN MINI GAMES
function renderType3Question(q) {
const titleEl = document.getElementById("type3-game-title");
const descEl = document.getElementById("type3-game-desc");
const board = document.getElementById("type3-interactive-board");

if (titleEl) titleEl.textContent = `Challenge #${gameState.currentIndex + 1}: ${q.type.toUpperCase()}`;
if (descEl) descEl.textContent = q.prompt;

if (board) {
    board.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "grammar-options-grid";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "grammar-option-btn";
        btn.textContent = opt;
        btn.onclick = () => {
            SoundFX.playClick();
            grid.querySelectorAll(".grammar-option-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            gameState.userAnswers[gameState.currentIndex] = opt;
        };
        grid.appendChild(btn);
    });

    board.appendChild(grid);
}

// Sync Level Selector Pills UI
const pills = document.querySelectorAll("#type3-level-pills .level-pill");
pills.forEach(pill => {
    if (Number(pill.dataset.level) === gameState.currentLevel) {
        pill.classList.add("active");
    } else {
        pill.classList.remove("active");
    }
});
}
// ==========================================================================
// 14. ANSWER EVALUATION & SCORING
// ==========================================================================
// SCORE & COMBO
function checkCurrentAnswer(forcedTimeout = false) {
const q = gameState.currentQuestion;
let userAnswer = "";

if (gameState.currentGameType === 1) {
    const input = document.getElementById("type1-user-input");
    userAnswer = input ? input.value.trim().toLowerCase() : "";
    gameState.userAnswers[gameState.currentIndex] = userAnswer;
} else {
    userAnswer = gameState.userAnswers[gameState.currentIndex] || "";
}

if (!userAnswer && !forcedTimeout) {
    showToast("Vui lòng nhập hoặc chọn câu trả lời trước khi nộp.", "warning");
    return;
}

let isCorrect = false;
if (!forcedTimeout) {
    if (gameState.currentGameType === 1) {
        const cleanUser = userAnswer.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const cleanTarget = q.answer.replace(/[^a-zA-Z]/g, "").toLowerCase();
        isCorrect = cleanUser === cleanTarget;
    } else {
        isCorrect = userAnswer === q.answer;
    }
}

// Visual feedback & Score modification
if (isCorrect) {
    handleCorrectAnswer(q);
} else {
    handleWrongAnswer(q, forcedTimeout);
}

// UI button transition
const btnCheck = document.getElementById("btn-check-answer");
const btnNext = document.getElementById("btn-next-question");
if (btnCheck) btnCheck.style.display = "none";
if (btnNext) btnNext.style.display = "inline-flex";

// Disable inputs after submission
disableCurrentQuestionInputs();
}
function handleCorrectAnswer(q) {
SoundFX.playCorrectSound();
gameState.correct++;
gameState.combo++;
if (gameState.combo > gameState.maxCombo) {
gameState.maxCombo = gameState.combo;
}

// Score calculation
const comboBonus = gameState.combo * SCORE_CONFIG.comboMultiplier;
const earned = SCORE_CONFIG.correctQuestion + comboBonus;
gameState.score += earned;

// Update HUD
const hudScore = document.getElementById("hud-score-val");
const hudCombo = document.getElementById("hud-combo-val");
if (hudScore) hudScore.textContent = gameState.score;
if (hudCombo) hudCombo.textContent = gameState.combo;

// Visual animations
if (gameState.currentGameType === 1) {
    const cells = document.querySelectorAll("#type1-word-slots .letter-cell");
    cells.forEach(c => {
        c.classList.remove("wrong");
        c.classList.add("correct");
    });
} else {
    const selectedBtn = document.querySelector(".grammar-option-btn.selected");
    if (selectedBtn) selectedBtn.classList.add("correct");
}

showToast(`+${earned} Điểm! (Combo: 🔥 ${gameState.combo})`, "success");
}
function handleWrongAnswer(q, forcedTimeout) {
SoundFX.playWrongSound();
gameState.wrong++;
gameState.combo = 0; // Reset combo

const hudCombo = document.getElementById("hud-combo-val");
if (hudCombo) hudCombo.textContent = "0";

// Deduct life
gameState.lives--;
updateLivesDisplay();

// Visual feedback
if (gameState.currentGameType === 1) {
    const cells = document.querySelectorAll("#type1-word-slots .letter-cell");
    cells.forEach(c => c.classList.add("wrong"));
    showToast(`Sai rồi! Đáp án đúng là: "${q.answer}"`, "error");
} else {
    const selectedBtn = document.querySelector(".grammar-option-btn.selected");
    if (selectedBtn) selectedBtn.classList.add("wrong");

    // Highlight correct option
    const allBtns = document.querySelectorAll(".grammar-option-btn");
    allBtns.forEach(b => {
        if (b.dataset.option === q.answer || b.textContent.trim() === q.answer) {
            b.classList.add("correct");
        }
    });

    // Show detailed explanation if available
    if (q.explanation) {
        const explainCard = document.getElementById("type2-explanation-card");
        const explainText = document.getElementById("type2-explanation-text");
        if (explainCard && explainText) {
            explainText.textContent = q.explanation;
            explainCard.style.display = "block";
        }
    }
}

// Check Game Over Condition
if (gameState.lives <= 0) {
    setTimeout(handleGameOver, 900);
}
}
function disableCurrentQuestionInputs() {
if (gameState.currentGameType === 1) {
const input = document.getElementById("type1-user-input");
if (input) input.disabled = true;
} else {
const btns = document.querySelectorAll(".grammar-option-btn");
btns.forEach(b => b.disabled = true);
}
}
function handleNextQuestion() {
SoundFX.playClick();

if (gameState.lives <= 0) {
    handleGameOver();
    return;
}

gameState.currentIndex++;

if (gameState.currentIndex < gameState.questions.length) {
    renderQuestionView();
    // Reset and restart countdown per question
    startTimer();
} else {
    // All questions finished
    finishGameSession();
}
}
// ==========================================================================
// 15. FINISH & STREAK LOGIC
// ==========================================================================
// FINISH LOGIC & STREAK
function finishGameSession() {
clearInterval(gameState.timerInterval);
gameState.isCompleted = true;

// Stage Completion Bonus
gameState.score += SCORE_CONFIG.levelCompleteBonus;
if (gameState.wrong === 0) {
    gameState.score += SCORE_CONFIG.flawlessBonus;
}

// Streak update
UserState.progress.streak++;
gameState.combo += 2; // Completion combo bonus

// Final multiplier by streak
const streakFactor = UserState.progress.streak > 1 ? (UserState.progress.streak * 0.1 + 1) : 1;
const finalScoreEarned = Math.round(gameState.score * streakFactor);

// Save Progress State
UserState.progress.totalScore += finalScoreEarned;
UserState.progress.totalCorrect += gameState.correct;
UserState.progress.totalWrong += gameState.wrong;

let isNewRecord = false;
if (finalScoreEarned > (UserState.progress.bestScore || 0)) {
    UserState.progress.bestScore = finalScoreEarned;
    isNewRecord = true;
}

// Mark completion flags
if (gameState.currentGameType === 1) {
    UserState.progress.completedGames.type1 = true;
} else if (gameState.currentGameType === 2) {
    UserState.progress.completedGames.type2 = true;
} else if (gameState.currentGameType === 3) {
    UserState.progress.completedGames.type3 = true;
}

// Check if Type 3 was unlocked just now
let newlyUnlockedType3 = false;
if (isGameUnlocked(3) && !UserState.progress.level3Unlocked) {
    UserState.progress.level3Unlocked = true;
    newlyUnlockedType3 = true;
}

// Update highest level reached
UserState.progress.highestLevel = `Level ${Math.min(3, (gameState.currentGameType || 1) + 1)}`;

saveProgress();

// Render Result Screen
renderResultScreen({
    score: finalScoreEarned,
    correct: gameState.correct,
    wrong: gameState.wrong,
    total: gameState.questions.length,
    maxCombo: gameState.maxCombo,
    livesRemaining: gameState.lives,
    isNewRecord,
    newlyUnlockedType3
});

SoundFX.playCompleteSound();
showSection("screen-result");
}
function handleGameOver() {
clearInterval(gameState.timerInterval);
SoundFX.playWrongSound();

// Streak reset on complete loss
UserState.progress.streak = 0;
saveProgress();

showConfirmModal(
    "Game Over! 💔",
    "Bạn đã hết mạng sống trong màn chơi này. Nhấn 'Đồng ý' để thử lại từ đầu.",
    () => {
        startMiniGame(gameState.currentGameType, gameState.currentLevel);
    },
    () => {
        showSection("screen-game-select");
    }
);
}
// ==========================================================================
// 16. RESULT SCREEN CONTROLLER
// ==========================================================================
function renderResultScreen(data) {
const trophyEl = document.getElementById("result-trophy-icon");
const recordPill = document.getElementById("result-record-pill");
const scoreVal = document.getElementById("result-score-val");
const correctCount = document.getElementById("result-correct-count");
const wrongCount = document.getElementById("result-wrong-count");
const accuracyPct = document.getElementById("result-accuracy-pct");
const maxComboVal = document.getElementById("result-max-combo");
const livesLeft = document.getElementById("result-lives-left");
const bestScoreVal = document.getElementById("result-best-score");
const unlockBanner = document.getElementById("result-unlock-banner");

if (scoreVal) scoreVal.textContent = data.score;
if (correctCount) correctCount.textContent = data.correct;
if (wrongCount) wrongCount.textContent = data.wrong;

const acc = Math.round((data.correct / (data.total || 1)) * 100);
if (accuracyPct) accuracyPct.textContent = `${acc}%`;

if (maxComboVal) maxComboVal.textContent = `🔥 ${data.maxCombo}`;

if (livesLeft) {
    livesLeft.textContent = "❤️".repeat(Math.max(0, data.livesRemaining));
}

if (bestScoreVal) {
    bestScoreVal.textContent = UserState.progress.bestScore;
}

if (recordPill) {
    recordPill.style.display = data.isNewRecord ? "inline-block" : "none";
}

if (unlockBanner) {
    unlockBanner.style.display = data.newlyUnlockedType3 ? "flex" : "none";
    if (data.newlyUnlockedType3) {
        SoundFX.playUnlockSound();
    }
}
}
// ==========================================================================
// 17. CERTIFICATE GENERATION
// ==========================================================================
// CERTIFICATE
function generateCertificateData() {
if (!UserState.profile) return null;
const now = new Date();
const certData = {
    name: UserState.profile.name,
    role: UserState.profile.occupation === "teacher" ? "Giáo Viên (Teacher)" : "Học Sinh (Student)",
    score: UserState.progress.totalScore || 0,
    streak: UserState.progress.streak || 0,
    date: String(now.getDate()).padStart(2, '0'),
    month: String(now.getMonth() + 1).padStart(2, '0'),
    year: String(now.getFullYear()),
    time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
    completedAt: now.toISOString()
};

Storage.set(STORAGE_KEYS.CERTIFICATE, certData);
return certData;
}
function renderCertificateView() {
let cert = Storage.get(STORAGE_KEYS.CERTIFICATE);
if (!cert) {
cert = generateCertificateData();
}
if (!cert) return;
const nameEl = document.getElementById("cert-user-name");
const roleEl = document.getElementById("cert-user-role");
const scoreEl = document.getElementById("cert-score-display");
const streakEl = document.getElementById("cert-streak-display");
const statusEl = document.getElementById("cert-status-display");

const dateEl = document.getElementById("cert-issue-date");
const monthEl = document.getElementById("cert-issue-month");
const yearEl = document.getElementById("cert-issue-year");
const timeEl = document.getElementById("cert-issue-time");

if (nameEl) nameEl.textContent = (cert.name || "Student").toUpperCase();
if (roleEl) roleEl.textContent = cert.role;
if (scoreEl) scoreEl.textContent = (cert.score || 0).toLocaleString();
if (streakEl) streakEl.textContent = `🔥 ${cert.streak || 0}`;

if (statusEl) {
    const lang = UserState.settings.language || "vi";
    statusEl.textContent = cert.score >= 2000 
        ? (lang === "vi" ? "XUẤT SẮC (DISTINCTION)" : "DISTINCTION WITH HONORS")
        : (lang === "vi" ? "HOÀN THÀNH (MERIT)" : "CERTIFIED COMPLETION");
}

if (dateEl) dateEl.textContent = cert.date;
if (monthEl) monthEl.textContent = cert.month;
if (yearEl) yearEl.textContent = cert.year;
if (timeEl) timeEl.textContent = cert.time;
}
function printCertificate() {
SoundFX.playClick();
generateCertificateData();
renderCertificateView();
window.print();
}
// ==========================================================================
// 18. SETTINGS & LANGUAGE SYSTEM
// ==========================================================================
// SETTINGS
function loadSettings() {
const saved = Storage.get(STORAGE_KEYS.SETTINGS);
if (saved) {
UserState.settings = { ...UserState.settings, ...saved };
}
applyTheme(UserState.settings.theme);
applyLanguage(UserState.settings.language);

// Sync input controls
const langSelect = document.getElementById("setting-language");
const themeSelect = document.getElementById("setting-theme");
const soundToggle = document.getElementById("setting-sound");
const timerToggle = document.getElementById("setting-timer");

if (langSelect) langSelect.value = UserState.settings.language;
if (themeSelect) themeSelect.value = UserState.settings.theme;
if (soundToggle) soundToggle.checked = Boolean(UserState.settings.sound);
if (timerToggle) timerToggle.checked = Boolean(UserState.settings.timer);
}
function applyTheme(theme) {
document.documentElement.setAttribute("data-theme", theme);
UserState.settings.theme = theme;
Storage.set(STORAGE_KEYS.SETTINGS, UserState.settings);
const themeIcon = document.getElementById("theme-toggle-icon");
if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}
}
function toggleTheme() {
SoundFX.playClick();
const nextTheme = UserState.settings.theme === "dark" ? "light" : "dark";
applyTheme(nextTheme);
}
function applyLanguage(lang) {
if (!TRANSLATIONS[lang]) lang = "vi";
document.documentElement.setAttribute("data-lang", lang);
UserState.settings.language = lang;
Storage.set(STORAGE_KEYS.SETTINGS, UserState.settings);
// Update language badge text
const langBadge = document.getElementById("lang-toggle-label");
if (langBadge) {
    langBadge.textContent = lang.toUpperCase();
}

// Apply i18n strings to DOM
const elements = document.querySelectorAll("[data-i18n]");
elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
    }
});

updateUnlockUI();
}
function toggleLanguage() {
SoundFX.playClick();
const nextLang = UserState.settings.language === "vi" ? "en" : "vi";
applyLanguage(nextLang);
}
// ==========================================================================
// 19. FAKE ANTI-BOT SECURITY VERIFICATION
// ==========================================================================
// ANTI-BOT
// FRONTEND DEMO ANTI-BOT ONLY
// This is not a real security mechanism.
function openBotModal() {
SoundFX.playClick();
const modal = document.getElementById("modal-bot-verify");
const checkbox = document.getElementById("bot-checkbox");
const spinner = document.getElementById("cf-spinner-box");
if (checkbox) checkbox.checked = false;
if (spinner) spinner.style.borderColor = "var(--surface-border-strong)";
if (modal) modal.showModal();
}
function handleBotVerification() {
const checkbox = document.getElementById("bot-checkbox");
const spinner = document.getElementById("cf-spinner-box");
const shieldBtn = document.getElementById("bot-shield-btn");
if (!checkbox || !spinner) return;

if (checkbox.checked) {
    SoundFX.playClick();
    spinner.style.border = "2px solid var(--brand-primary)";
    spinner.style.borderTopColor = "transparent";
    spinner.style.animation = "spin 0.6s linear infinite";

    setTimeout(() => {
        spinner.style.animation = "none";
        spinner.style.backgroundColor = "var(--success)";
        spinner.style.borderColor = "var(--success)";
        SoundFX.playUnlockSound();
        showToast("Xác minh bảo mật thành công! Leaderboard an toàn.", "success");

        if (shieldBtn) {
            shieldBtn.style.color = "var(--success)";
        }

        setTimeout(() => {
            const modal = document.getElementById("modal-bot-verify");
            if (modal) modal.close();
        }, 600);
    }, 1200);
}
}
// ==========================================================================
// 20. ABOUT ME & SOURCE CODE VIEWER
// ==========================================================================
// SOURCE VIEWER
const SOURCE_PLACEHOLDERS = {
html: `<!DOCTYPE html>
<html lang="vi" data-theme="dark">
<head>
<meta charset="UTF-8">
<title>EngGame 10</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Complete Modular HTML5 Structure Ready in Production -->
<div id="app" class="app-container">...</div>
<script src="script.js"></script>
</body>
</html>`,
css: `/* EngGame 10 - CSS3 Design Tokens & Glassmorphism */
:root {
--brand-primary: #3b82f6;
--bg-primary: #0f172a;
--game-1-gradient: linear-gradient(135deg, #2563eb, #7c3aed);
}
/* Full typography, HUD, card transitions & print styles included */`,
js: `// EngGame 10 - Vanilla ES6+ Educational Engine
// Features: 75 Questions, Web Audio Synthesizer, Timer, Lives, Combo, Streak
const QUESTION_BANK = { type1: [...], grammar: [...], type3: [...] };
function initApp() { ... }`
};
function openSourceViewerModal() {
SoundFX.playClick();
const modal = document.getElementById("modal-source-code");
if (!modal) return;
const htmlPre = document.getElementById("code-display-html");
const cssPre = document.getElementById("code-display-css");
const jsPre = document.getElementById("code-display-js");

if (htmlPre) htmlPre.textContent = SOURCE_PLACEHOLDERS.html;
if (cssPre) cssPre.textContent = SOURCE_PLACEHOLDERS.css;
if (jsPre) jsPre.textContent = SOURCE_PLACEHOLDERS.js;

switchSourceTab("tab-html");
modal.showModal();
}
function switchSourceTab(tabId) {
SoundFX.playClick();
const tabBtns = document.querySelectorAll(".source-header-tabs .tab-btn");
const panels = document.querySelectorAll(".source-modal-body .tab-panel");
tabBtns.forEach(btn => {
    if (btn.dataset.tab === tabId) {
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
    } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
    }
});

panels.forEach(panel => {
    if (panel.id === tabId) {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
});
}
function copyActiveSourceCode() {
const activeTab = document.querySelector(".source-header-tabs .tab-btn.active");
if (!activeTab) return;
const tabKey = activeTab.dataset.tab;
let content = "";
if (tabKey === "tab-html") content = SOURCE_PLACEHOLDERS.html;
if (tabKey === "tab-css") content = SOURCE_PLACEHOLDERS.css;
if (tabKey === "tab-js") content = SOURCE_PLACEHOLDERS.js;

navigator.clipboard.writeText(content).then(() => {
    SoundFX.playClick();
    showToast("Đã sao chép mã nguồn vào bộ nhớ tạm!", "success");
}).catch(() => {
    showToast("Không thể sao chép tự động.", "error");
});
}
// ==========================================================================
// 21. CONFIRMATION DIALOG MODAL
// ==========================================================================
let confirmCallbackAccept = null;
let confirmCallbackCancel = null;
function showConfirmModal(title, message, onAccept, onCancel) {
const modal = document.getElementById("modal-confirm");
const titleEl = document.getElementById("confirm-modal-title");
const msgEl = document.getElementById("confirm-modal-msg");
if (titleEl) titleEl.textContent = title;
if (msgEl) msgEl.textContent = message;

confirmCallbackAccept = onAccept;
confirmCallbackCancel = onCancel;

if (modal) modal.showModal();
}
function handleConfirmAccept() {
SoundFX.playClick();
const modal = document.getElementById("modal-confirm");
if (modal) modal.close();
if (typeof confirmCallbackAccept === "function") {
confirmCallbackAccept();
}
}
function handleConfirmCancel() {
SoundFX.playClick();
const modal = document.getElementById("modal-confirm");
if (modal) modal.close();
if (typeof confirmCallbackCancel === "function") {
confirmCallbackCancel();
}
}
// ==========================================================================
// 22. SIDEBAR TOGGLE & DRAWER RESPONSIVENESS
// ==========================================================================
function toggleDesktopSidebar() {
SoundFX.playClick();
const sidebar = document.getElementById("sidebar");
if (!sidebar) return;

const isCollapsed = sidebar.getAttribute("data-collapsed") === "true";
sidebar.setAttribute("data-collapsed", isCollapsed ? "false" : "true");
document.body.classList.toggle("sidebar-is-collapsed", !isCollapsed);

const toggleBtn = document.getElementById("sidebar-toggle-btn");
if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", isCollapsed ? "true" : "false");
}
}
function openMobileSidebar() {
SoundFX.playClick();
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebar-backdrop");
if (sidebar) sidebar.classList.add("drawer-open");
if (backdrop) backdrop.classList.add("active");
}
function closeMobileSidebar() {
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebar-backdrop");
if (sidebar) sidebar.classList.remove("drawer-open");
if (backdrop) backdrop.classList.remove("active");
}
// ==========================================================================
// 23. EVENT BINDINGS
// ==========================================================================
function bindEvents() {
// Navigation Links
document.querySelectorAll(".nav-link").forEach(link => {
link.addEventListener("click", () => {
SoundFX.playClick();
const targetId = link.getAttribute("data-target");
if (targetId) {
if (targetId === "screen-certificate") {
renderCertificateView();
}
showSection(targetId);
}
});
});
// Registration Form
const regForm = document.getElementById("form-register");
if (regForm) {
    regForm.addEventListener("submit", handleRegistration);
}

// Dashboard Action Buttons
const dashPlay = document.getElementById("dash-btn-play");
if (dashPlay) {
    dashPlay.addEventListener("click", () => {
        SoundFX.playClick();
        showSection("screen-game-select");
    });
}

const dashCert = document.getElementById("dash-btn-view-cert");
if (dashCert) {
    dashCert.addEventListener("click", () => {
        SoundFX.playClick();
        renderCertificateView();
        showSection("screen-certificate");
    });
}

// Game Mode Selection Cards & Buttons
const btnGame1 = document.getElementById("btn-start-type-1");
if (btnGame1) {
    btnGame1.addEventListener("click", () => startMiniGame(1));
}

const btnGame2 = document.getElementById("btn-start-type-2");
if (btnGame2) {
    btnGame2.addEventListener("click", () => startMiniGame(2));
}

const btnGame3 = document.getElementById("btn-start-type-3");
if (btnGame3) {
    btnGame3.addEventListener("click", () => {
        if (isGameUnlocked(3)) {
            startMiniGame(3, 1);
        }
    });
}

// Game HUD Buttons
const btnQuit = document.getElementById("btn-quit-game");
if (btnQuit) {
    btnQuit.addEventListener("click", () => {
        showConfirmModal(
            "Xác nhận thoát?",
            "Tiến trình làm bài hiện tại sẽ bị hủy và bạn sẽ mất 1 mạng.",
            () => {
                clearInterval(gameState.timerInterval);
                UserState.progress.totalWrong += 1;
                UserState.progress.streak = 0;
                saveProgress();
                showSection("screen-game-select");
            },
            null
        );
    });
}

const btnCheck = document.getElementById("btn-check-answer");
if (btnCheck) {
    btnCheck.addEventListener("click", () => checkCurrentAnswer());
}

const btnNext = document.getElementById("btn-next-question");
if (btnNext) {
    btnNext.addEventListener("click", handleNextQuestion);
}

// Result Screen Actions
const btnResNext = document.getElementById("btn-result-next-level");
if (btnResNext) {
    btnResNext.addEventListener("click", () => {
        SoundFX.playClick();
        const nextType = (gameState.currentGameType % 3) + 1;
        if (isGameUnlocked(nextType)) {
            startMiniGame(nextType, 1);
        } else {
            showSection("screen-game-select");
        }
    });
}

const btnResReplay = document.getElementById("btn-result-replay");
if (btnResReplay) {
    btnResReplay.addEventListener("click", () => {
        startMiniGame(gameState.currentGameType, gameState.currentLevel);
    });
}

const btnResDash = document.getElementById("btn-result-dashboard");
if (btnResDash) {
    btnResDash.addEventListener("click", () => {
        SoundFX.playClick();
        showSection("screen-dashboard");
    });
}

// Level Pills in Game Type 3
document.querySelectorAll("#type3-level-pills .level-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        const lvl = Number(pill.dataset.level);
        startMiniGame(3, lvl);
    });
});

// Profile Screen Reset
const btnReset = document.getElementById("btn-reset-data");
if (btnReset) {
    btnReset.addEventListener("click", () => {
        showConfirmModal(
            "Xóa toàn bộ dữ liệu?",
            "Thao tác này sẽ xóa hồ sơ, điểm số và thành tích của bạn và không thể hoàn tác.",
            () => {
                Storage.clearAll();
                location.reload();
            },
            null
        );
    });
}

const btnEditProfile = document.getElementById("btn-edit-profile");
if (btnEditProfile) {
    btnEditProfile.addEventListener("click", () => {
        SoundFX.playClick();
        showSection("screen-register");
    });
}

// Certificate Actions
const btnPrint = document.getElementById("btn-print-cert");
if (btnPrint) {
    btnPrint.addEventListener("click", printCertificate);
}

// Settings Controls
const setLang = document.getElementById("setting-language");
if (setLang) {
    setLang.addEventListener("change", (e) => applyLanguage(e.target.value));
}

const setTheme = document.getElementById("setting-theme");
if (setTheme) {
    setTheme.addEventListener("change", (e) => applyTheme(e.target.value));
}

const setSound = document.getElementById("setting-sound");
if (setSound) {
    setSound.addEventListener("change", (e) => {
        UserState.settings.sound = e.target.checked;
        Storage.set(STORAGE_KEYS.SETTINGS, UserState.settings);
        if (e.target.checked) SoundFX.playUnlockSound();
    });
}

const setTimer = document.getElementById("setting-timer");
if (setTimer) {
    setTimer.addEventListener("change", (e) => {
        UserState.settings.timer = e.target.checked;
        Storage.set(STORAGE_KEYS.SETTINGS, UserState.settings);
    });
}

// Header Quick Toggles
const btnThemeToggle = document.getElementById("theme-toggle-btn");
if (btnThemeToggle) btnThemeToggle.addEventListener("click", toggleTheme);

const btnLangToggle = document.getElementById("lang-toggle-btn");
if (btnLangToggle) btnLangToggle.addEventListener("click", toggleLanguage);

const btnBotShield = document.getElementById("bot-shield-btn");
if (btnBotShield) btnBotShield.addEventListener("click", openBotModal);

// Bot Verification Modal
const botCheck = document.getElementById("bot-checkbox");
if (botCheck) botCheck.addEventListener("change", handleBotVerification);

const btnCloseBot = document.getElementById("btn-close-bot-modal");
if (btnCloseBot) {
    btnCloseBot.addEventListener("click", () => {
        const m = document.getElementById("modal-bot-verify");
        if (m) m.close();
    });
}

// Source Viewer Modal
const btnOpenSource = document.getElementById("btn-open-source-modal");
if (btnOpenSource) btnOpenSource.addEventListener("click", openSourceViewerModal);

const btnCloseSource = document.getElementById("btn-close-source-modal");
if (btnCloseSource) {
    btnCloseSource.addEventListener("click", () => {
        const m = document.getElementById("modal-source-code");
        if (m) m.close();
    });
}

const btnCopyCode = document.getElementById("btn-copy-code");
if (btnCopyCode) btnCopyCode.addEventListener("click", copyActiveSourceCode);

document.querySelectorAll(".source-header-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchSourceTab(btn.dataset.tab));
});

// Confirmation Modal Actions
const btnConfirmYes = document.getElementById("btn-confirm-accept");
if (btnConfirmYes) btnConfirmYes.addEventListener("click", handleConfirmAccept);

const btnConfirmNo = document.getElementById("btn-confirm-cancel");
if (btnConfirmNo) btnConfirmNo.addEventListener("click", handleConfirmCancel);

// Sidebar Hamburger Buttons
const toggleSidebarBtn = document.getElementById("sidebar-toggle-btn");
if (toggleSidebarBtn) toggleSidebarBtn.addEventListener("click", toggleDesktopSidebar);

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileSidebar);

const backdrop = document.getElementById("sidebar-backdrop");
if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);
}
// ==========================================================================
// 24. INITIALIZATION
// ==========================================================================
function renderInitialUI() {
updateDashboard();
updateUnlockUI();
}
function initApp() {
loadSettings();
loadProgress();
loadUser();
bindEvents();
renderInitialUI();
}
// Entry Point
document.addEventListener("DOMContentLoaded", () => {
initApp();
});
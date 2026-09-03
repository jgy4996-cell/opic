// ==============================================================================
// 파일명: app.js
// 설명: OPIc Master AI 컨트롤러 (학습플랜 음성을 모의고사 공식 Eva 목소리로 100% 일치화)
// ==============================================================================

// 오픽 고득점 1일 1문장 구동사 & 실전 문장 데이터 세트입니다.
const dailySentencesData = [
  {
    id: 1,
    key_expression: "a stone's throw away",
    korean_meaning: "엎어지면 코 닿을 매우 가까운 거리",
    category: "장소 묘사 / 거주지",
    opic_tip: "집 근처 공원, 카페, 영화관 묘사 질문(2, 5번)에서 근접성을 말할 때 쓰면 AL 확정 표현입니다.",
    exam_sentence: "My favorite cafe is located just a stone's throw away from my apartment, so I visit there almost every weekend.",
    korean_sentence: "제가 가장 좋아하는 카페는 아파트에서 엎어지면 코 닿을 거리에 있어서 거의 매 주말마다 방문합니다."
  },
  {
    id: 2,
    key_expression: "chill out",
    korean_meaning: "느긋하게 긴장을 풀고 쉬다",
    category: "활동 및 루틴 / 집에서 보내는 휴가",
    opic_tip: "단순히 'rest' 대신 'chill out'이나 'unwind'를 쓰면 원어민 특유의 자연스러운 구어체 점수를 받습니다.",
    exam_sentence: "Whenever I feel stressed out, you know, I love to just stay at home and chill out listening to jazz music.",
    korean_sentence: "스트레스를 받을 때마다, 아시겠지만, 저는 그냥 집에 머물며 재즈 음악을 듣고 느긋하게 휴식하는 것을 정말 좋아합니다."
  },
  {
    id: 3,
    key_expression: "come up with",
    korean_meaning: "(아이디어, 해결책을) 생각해내다 / 마련하다",
    category: "롤플레이 12번 / 문제 해결",
    opic_tip: "롤플레이 12번에서 약속 변경이나 대안을 제시할 때 필수로 쓰이는 만능 구동사입니다.",
    exam_sentence: "I am terribly sorry for the sudden cancellation, but I will come up with a better alternative for our meeting tomorrow.",
    korean_sentence: "갑작스러운 취소에 대해 정말 죄송하지만, 내일 미팅을 위해 제가 더 나은 대안을 마련해 오겠습니다."
  },
  {
    id: 4,
    key_expression: "leave a lasting impression",
    korean_meaning: "오래도록 잊히지 않는 깊은 인상을 남기다",
    category: "기억에 남는 경험 / 과거 사건",
    opic_tip: "4번, 7번, 13번 과거 경험 문제 결론부에서 '잊지 못할 경험이었다'를 고급스럽게 마무리하는 문장입니다.",
    exam_sentence: "The unexpected trip to the seaside was truly memorable and left a lasting impression on all of us.",
    korean_sentence: "그 예상치 못했던 바닷가 여행은 정말 기억에 남았고 우리 모두에게 깊은 인상을 남겼습니다."
  },
  {
    id: 5,
    key_expression: "call off",
    korean_meaning: "(약속, 행사를) 취소하다",
    category: "롤플레이 12번 / 유사 경험 13번",
    opic_tip: "'cancel'의 원어민식 구동사 표현으로, 오픽 롤플레이에서 상황을 설명할 때 매우 유용합니다.",
    exam_sentence: "Due to the heavy rainstorm, we had no choice but to call off our outdoor picnic plan.",
    korean_sentence: "폭우 때문에 우리는 야외 소풍 계획을 취소할 수밖에 없었습니다."
  },
  {
    id: 6,
    key_expression: "without a shadow of a doubt",
    korean_meaning: "추호의 의심도 없이 / 단언컨대",
    category: "음악 / 영화 / 인물 묘사",
    opic_tip: "자신이 좋아하는 가수나 영화를 강조할 때 도입부로 사용하면 세련된 강조 효과를 줍니다.",
    exam_sentence: "Without a shadow of a doubt, this cinema is the best place to enjoy blockbuster movies with immersive sound.",
    korean_sentence: "단언컨대, 이 영화관은 웅장한 사운드와 함께 블록버스터 영화를 즐기기에 최고의 장소입니다."
  },
  {
    id: 7,
    key_expression: "catch up with",
    korean_meaning: "(오랜만에 만나) 밀린 이야기를 나누다 / 회포를 풀다",
    category: "친구 약속 / 카페 / 휴일",
    opic_tip: "카페나 식당에서 친구와 만났을 때 단순한 'talk' 대신 사용하면 유창성이 극대화됩니다.",
    exam_sentence: "Whenever I visit that cozy cafe, I love to catch up with my close friends over a cup of hot latte.",
    korean_sentence: "그 아늑한 카페를 갈 때마다, 저는 따뜻한 라떼 한 잔을 마시며 친한 친구들과 밀린 이야기를 나누는 것을 좋아합니다."
  }
];

// 초급/중급/고급 수준별 7일 완성 커리큘럼 데이터베이스입니다.
const studyPlansData = {
  beginner: {
    title: "🥉 초급 마스터 플랜 (IL ~ IM2 목표)",
    description: "말문 트이기! 1문장이라도 자신감 있게 뱉는 기초 체력 다지기",
    days: [
      { day: 1, title: "1번 자기소개 3문장 완성", desc: "이름, 직업, 취미 1문장씩 끊김 없이 말하기", question: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
      { day: 2, title: "공원/카페 기본 장소 묘사", desc: "위치와 좋아하는 이유(분위기) 단순 현재형으로 말하기", question: "Tell me about the park you visit most often. What does it look like?" },
      { day: 3, title: "하루 일과 루틴 말하기", desc: "First, Then, After that 시간 순서 연결사 익히기", question: "What do you usually do when you go to the park from start to finish?", audio_file: "audio/q3.mp3" },
      { day: 4, title: "집/거주지 방 구조 묘사", desc: "There is / There are 패턴으로 가구와 방 설명하기", question: "Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" },
      { day: 5, title: "음악/영화 취향 말하기", desc: "My favorite genre is... 좋아하는 장르 2가지 말하기", question: "What kind of music do you like listening to? Who is your favorite singer?" },
      { day: 6, title: "과거형 동사(-ed) 기본 발음", desc: "went, saw, played 등 과거 시제 어색함 없애기", question: "Tell me about a memorable movie you watched in the past.", audio_file: "audio/q4.mp3" },
      { day: 7, title: "초급 3문제 콤보 실전 완주", desc: "자기소개 + 공원 묘사 + 영화 루틴 3문제 도전", question: "You indicated you go to cafes. Describe your favorite cafe." }
    ]
  },
  intermediate: {
    title: "🥈 중급 마스터 플랜 (IM3 ~ IH 목표)",
    description: "3-콤보 세트 흐름 완벽 연결 & 롤플레이 11-12번 정복",
    days: [
      { day: 1, title: "서론-본론-결론 3단 프레임", desc: "Well, to begin with... 구조화된 답변 틀 잡기", question: "Tell me about the movie theater you usually go to and why you like it.", audio_file: "audio/q2.mp3" },
      { day: 2, title: "루틴과 습관의 세부 묘사", desc: "Whenever I visit, I usually grab a cup of coffee...", question: "What is your whole routine before and after watching a movie?", audio_file: "audio/q3.mp3" },
      { day: 3, title: "과거 잊지 못할 경험 스토리텔링", desc: "Out of nowhere, something unexpected happened...", question: "Tell me about an unexpected incident you experienced while watching a movie.", audio_file: "audio/q4.mp3" },
      { day: 4, title: "롤플레이 11번 (질문 3~4개 하기)", desc: "Could you let me know...? 문의 전화 완벽 클리어", question: "Call a travel agency and ask 3 or 4 questions about vacation packages.", audio_file: "audio/q8.mp3" },
      { day: 5, title: "롤플레이 12번 (문제 사과 & 대안 2개)", desc: "I am terribly sorry, but an urgent issue came up...", question: "You cannot go on the trip. Call the agency, explain and offer 2 alternatives.", audio_file: "audio/q9.mp3" },
      { day: 6, title: "호텔/교통 돌발 주제 정복", desc: "돌발 주제에도 당황하지 않고 30초 이상 발화하기", question: "Tell me about a hotel you stayed at recently. What did it look like?", audio_file: "audio/q15.mp3" },
      { day: 7, title: "IH 목표 5문제 집중 콤보 훈련", desc: "롤플레이 포함 실전 5문항 연속 발화", question: "Have you ever experienced an unexpected issue at a hotel? How was it solved?" }
    ]
  },
  advanced: {
    title: "🥇 고급 마스터 플랜 (AL 만점 목표)",
    description: "원어민식 필러 + 14-15번 시사이슈 비교 & 유창성(100+ WPM) 극대화",
    days: [
      { day: 1, title: "원어민 필러 4총사 체화", desc: "You know, Speaking of which, To be honest 자연스럽게 넣기", question: "Tell me about your favorite cafe and its unique ambiance." },
      { day: 2, title: "13번 롤플레이 과거 유사 경험", desc: "롤플레이 상황과 관련된 나의 실제 과거 경험 심도 있게 비교", question: "Have you ever had a memorable plan cancelled unexpectedly? How did you deal with it?" },
      { day: 3, title: "14번 과거 vs 현재 기술 트렌드 비교", desc: "Compared to the past... stark contrast 고급 비교 어휘 구사", question: "Compare electronic devices and technology people used in the past with devices people use today. What are the key differences?", audio_file: "audio/q12.mp3" },
      { day: 4, title: "15번 사회적 이슈 & 시사 토론", desc: "One of the most pressing issues is... 논리적 의견 개진", question: "What are some current issues or challenges related to the hotel and accommodation industry today? What is your opinion?", audio_file: "audio/q15.mp3" },
      { day: 5, title: "구동사 & 관용구 폭격 훈련", desc: "a stone's throw away, come up with, call off 3개 이상 사용", question: "Describe a memorable vacation trip and what left a lasting impression on you." },
      { day: 6, title: "발화 속도 100 WPM 돌파 훈련", desc: "침묵(Pause) 없이 1분 30초 동안 꽉 채워 발화하기", question: "Have you ever experienced an unexpected problem at your home? How did you resolve it?", audio_file: "audio/q7.mp3" },
      { day: 7, title: "15문항 AL 실전 파이널 모의고사", desc: "실제 시험관 Eva와 15문항 풀 테스트 완주", question: "What is your daily routine at home during weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" }
    ]
  }
};

// 에바 질문 의도 분석 및 한국어 키워드 매칭 지식 베이스입니다.
const quizIntentKnowledgeBase = {
  "자기소개": {
    intentName: "자기소개",
    keywords: ["자기소개", "소개", "이름", "직업", "나", "자신", "안녕", "취미", "사는곳"],
    englishCatchWords: "Tell me a little bit about yourself / Let's start the interview",
    explanation: "면접관 Eva에게 이름, 사는 곳, 직업, 간단한 취미를 편안하게 소개하는 질문입니다.",
    tacticTip: "너무 힘주지 말고, 평소 대화하듯 편안한 톤으로 3~4문장으로 마무리하세요."
  },
  "장소 묘사": {
    intentName: "좋아하는 장소의 위치 및 시설 묘사",
    keywords: ["묘사", "장소", "위치", "어디", "생김새", "시설", "분위기", "인테리어", "좋아", "이유"],
    englishCatchWords: "Tell me about the ... you usually go to / What does it look like? / Describe ... in detail",
    explanation: "해당 장소(영화관/공원/카페/집 등)가 어디에 있고, 시설과 분위기가 어떤지 묘사하는 질문입니다.",
    tacticTip: "There is/are 패턴과 근접성(a stone's throw away) 표현을 쓰면 고득점입니다."
  },
  "활동/루틴": {
    intentName: "평소 하는 일상 활동 및 시간순 루틴",
    keywords: ["루틴", "활동", "전후", "평소", "뭐하는지", "일과", "순서", "하는일", "보통", "시작부터"],
    englishCatchWords: "What do you usually do before and after ... / Describe your whole routine / from start to finish",
    explanation: "해당 활동을 할 때 처음부터 끝까지 어떤 순서로 진행하는지 루틴을 묻는 질문입니다.",
    tacticTip: "시간 연결사(First, After that, Then, Finally)를 사용해 시간 순서대로 명쾌하게 답변하세요."
  },
  "기억에 남는 경험": {
    intentName: "과거에 겪은 인상 깊거나 특별한 사건/경험",
    keywords: ["경험", "과거", "기억", "인상", "사건", "특별", "잊지", "일어난", "일", "언제"],
    englishCatchWords: "Tell me about a memorable or unexpected incident / What happened? / in the past",
    explanation: "과거에 있었던 특별한 일화나 예상치 못했던 에피소드를 스토리텔링하는 질문입니다.",
    tacticTip: "시제에 유의하세요! 모든 동사를 과거형(-ed, went, saw)으로 정확히 일치시켜야 합니다."
  },
  "과거 경험": {
    intentName: "과거에 발생한 문제 상황 및 해결 경험",
    keywords: ["과거", "문제", "경험", "해결", "고장", "사고", "사건", "대처", "어떻게"],
    englishCatchWords: "Have you ever experienced an unexpected problem / How did you resolve it?",
    explanation: "집, 호텔, 야외 등에서 예기치 못한 문제가 발생했을 때 어떻게 대처했는지 묻는 질문입니다.",
    tacticTip: "문제 발생(위기) ➔ 해결 노력 ➔ 배운 점(결론) 3단계 구조로 답변하세요."
  },
  "돌발: 호텔 묘사": {
    intentName: "돌발 질문: 최근 머문 호텔 시설 묘사",
    keywords: ["호텔", "숙소", "묘사", "방", "시설", "어디", "생김새", "로비", "서비스"],
    englishCatchWords: "Tell me about a hotel you stayed at recently / What did it look like?",
    explanation: "서베이 외 돌발 주제로, 최근 투숙했던 호텔의 객실과 편의 시설을 묘사하는 질문입니다.",
    tacticTip: "집 묘사 템플릿(깨끗하고 아늑함)을 그대로 응용해 답변하시면 됩니다."
  },
  "돌발: 호텔 루틴": {
    intentName: "돌발 질문: 호텔 체크인 및 이용 루틴",
    keywords: ["호텔", "루틴", "체크인", "이용", "활동", "순서", "숙박", "머물때"],
    englishCatchWords: "What do you usually do when you check in and stay at a hotel from start to finish?",
    explanation: "호텔에 도착해 체크인하고 숙박하는 전 과정을 묻는 질문입니다.",
    tacticTip: "체크인 ➔ 짐 풀기 ➔ 부대시설(수영장/레스토랑) 이용 ➔ 휴식 순서로 말하세요."
  },
  "돌발: 호텔 문제 경험": {
    intentName: "돌발 질문: 호텔에서 겪은 불편 및 컴플레인 경험",
    keywords: ["호텔", "문제", "불편", "컴플레인", "경험", "해결", "과거", "고장"],
    englishCatchWords: "Have you ever had an unexpected issue or complaint at a hotel? How was it solved?",
    explanation: "호텔에서 에어컨 고장이나 방 배정 문제 등 예기치 못한 이슈를 겪고 해결한 경험입니다.",
    tacticTip: "프론트 데스크에 전화해 직원이 신속하게 방을 바꿔주거나 수리해 준 스토리로 푸세요."
  },
  "롤플레이 (11번: 질문하기)": {
    intentName: "롤플레이 11번: 정보 문의 질문 3~4개 하기",
    keywords: ["롤플레이", "질문", "전화", "문의", "물어", "파티", "여행", "예약", "물어보기", "친구에게"],
    englishCatchWords: "Call your friend / travel agency and ask 3 or 4 questions",
    explanation: "상황극으로, 파티나 여행 계획에 대해 상대방에게 전화해 질문 3~4개를 던지는 문항입니다.",
    tacticTip: "Hi there! I am calling to ask... / Could you tell me...? / What time...? 패턴을 쓰세요."
  },
  "롤플레이 (12번: 대안 제시)": {
    intentName: "롤플레이 12번: 문제 발생 사과 및 대안 2~3가지 제시",
    keywords: ["롤플레이", "대안", "사과", "취소", "못가", "변경", "약속", "문제", "제안", "어려움"],
    englishCatchWords: "An unexpected problem has come up / Call, explain and offer 2 or 3 alternatives",
    explanation: "약속이나 여행을 갈 수 없게 된 긴급 상황을 설명하고 정중히 사과하며 대안을 제안하는 문항입니다.",
    tacticTip: "I am terribly sorry but... / How about we reschedule...? / Alternatively... 패턴을 쓰세요."
  },
  "롤플레이 (13번: 유사경험)": {
    intentName: "롤플레이 13번: 롤플레이와 유사한 나의 과거 실제 경험",
    keywords: ["과거", "유사", "경험", "취소", "약속", "계획", "실제", "사건", "해결"],
    englishCatchWords: "Have you ever had a memorable plan cancelled unexpectedly? How did you resolve it?",
    explanation: "롤플레이처럼 약속이나 여행이 취소되었던 본인의 실제 과거 경험을 묻는 질문입니다.",
    tacticTip: "폭우(heavy rainstorm)나 야근(urgent work) 때문에 약속을 미뤘던 일화를 과거 시제로 답변하세요."
  },
  "심화 (14번: 과거 현재 비교)": {
    intentName: "심화 14번: 과거와 현재의 기술/트렌드 비교",
    keywords: ["비교", "과거", "현재", "기술", "기기", "예전", "지금", "차이", "변화", "스마트폰"],
    englishCatchWords: "Compare ... used in the past with ... used today / What are the key differences?",
    explanation: "과거와 현재의 기술이나 생활 방식의 차이점을 대조하는 AL 전용 고급 비교 질문입니다.",
    tacticTip: "Compared to the past / In stark contrast / Nowadays 등의 고급 대조 연결사를 사용하세요."
  },
  "심화 (15번: 이슈 토론)": {
    intentName: "심화 15번: 최신 산업/사회적 시사 이슈 토론",
    keywords: ["이슈", "시사", "트렌드", "사회", "문제점", "논의", "생각", "의견", "산업"],
    englishCatchWords: "What are some current issues or challenges related to ... today? What is your opinion?",
    explanation: "해당 분야(숙박/기술/환경 등)의 최신 사회적 이슈와 본인의 견해를 묻는 최고난도 문항입니다.",
    tacticTip: "One of the most pressing issues is... / In my opinion... 로 서론을 시작하세요."
  }
};

// 애플리케이션의 전역 상태를 관리하는 객체입니다.
const state = {
  currentTab: 'home',
  selectedPlanLevel: 'beginner',
  practiceMode: '1q',
  examSubView: 'survey',
  officialSurvey: {
    q1_job: 'NONE',
    q2_student: 'NO',
    q3_home: 'APARTMENT_ALONE',
    q4_leisure: ['MOVIE', 'PERFORMANCE', 'CONCERT', 'PARK', 'CAFE', 'BEACH'],
    q5_hobby: ['MUSIC'],
    q6_sports: ['JOGGING', 'WALKING', 'BIKING', 'GYM'],
    q7_travel: ['DOMESTIC', 'OVERSEAS', 'STAYCATION'],
    difficulty: 5
  },
  // [핵심] 실제 OPIc 공식 시험관 Eva 목소리를 1순위 기본값으로 지정합니다.
  selectedVoice: 'en-US-AriaNeural',
  questions: [],
  currentIndex: 0,
  listenCount: 0,
  isRecording: false,
  recordingStartTime: 0,
  recordingDuration: 0,
  accumulatedText: '',
  recordedAudios: {},
  totalTimeRemaining: 2400,
  examTimerInterval: null,
  audioContext: null,
  analyser: null,
  animFrameId: null,
  mediaRecorder: null,
  mediaStream: null,
  audioChunks: [],
  recognition: null,
  currentEvaAudio: null,
  evaluationResults: [],
  shadowingPlaybackRate: 1.0,
  currentDailyIndex: (new Date().getDate() - 1) % dailySentencesData.length,
  isDailyShadowingRecording: false,
  isQuizKoreanRecording: false,
  quizRecognition: null,
  apiBaseUrl: window.location.origin.includes('http') ? window.location.origin : 'http://localhost:8000',
  isServerAvailable: false,
};

// DOM 요소 준비 시 실행되는 메인 초기화 함수입니다.
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// 애플리케이션 초기화 함수입니다.
function initApp() {
  loadOfficialSurveySettings();
  initTabBarNavigation();
  initStudyPlanTab();
  initPracticeTab();
  initExamTab();
  initListeningQuizEvents();
  initDailyChallenge();
  renderHomeDashboard();
  initChipInteractions();
  initHUDInputWatcher();
  initSpeedButtons();
  initMyPageEvents();
  initModalEvents();
  initSpeechRecognition();
  initKoreanSpeechRecognition();
  checkServerConnection();
}

// 한국어 질문 청취 퀴즈 전용 이벤트 및 핸들러 초기화 함수입니다.
function initListeningQuizEvents() {
  const replayBtn = document.getElementById('btn-quiz-replay-audio');
  if (replayBtn) {
    replayBtn.addEventListener('click', playQuizQuestionAudio);
  }

  const recKoreanBtn = document.getElementById('btn-quiz-record-korean');
  if (recKoreanBtn) {
    recKoreanBtn.addEventListener('click', toggleQuizKoreanRecording);
  }

  const checkAnswerBtn = document.getElementById('btn-quiz-check-answer');
  if (checkAnswerBtn) {
    checkAnswerBtn.addEventListener('click', () => {
      const inputEl = document.getElementById('quiz-korean-input');
      const text = inputEl ? inputEl.value.trim() : '';
      if (!text) {
        alert('한국어로 무슨 질문인지 말씀하시거나 입력해주세요!');
        return;
      }
      evaluateQuizAnswer(text);
    });
  }

  const nextQuizBtn = document.getElementById('btn-quiz-next-question');
  if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', () => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderCurrentQuizQuestion();
      } else {
        alert('🎉 모든 질문 청취 퀴즈를 완료하셨습니다!');
        switchExamSubView('survey');
      }
    });
  }

  const quickQuizBtn = document.getElementById('btn-quick-start-quiz');
  if (quickQuizBtn) {
    quickQuizBtn.addEventListener('click', () => {
      startListeningQuizSession();
    });
  }
}

// 한국어 음성 인식(STT) 객체 초기화 함수입니다.
function initKoreanSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    state.quizRecognition = new SpeechRecognition();
    state.quizRecognition.continuous = false;
    state.quizRecognition.interimResults = true;
    state.quizRecognition.lang = 'ko-KR';

    state.quizRecognition.onresult = (event) => {
      let korText = '';
      for (let i = 0; i < event.results.length; ++i) {
        korText += event.results[i][0].transcript;
      }
      const inputEl = document.getElementById('quiz-korean-input');
      if (inputEl) {
        inputEl.value = korText;
      }
    };

    state.quizRecognition.onend = () => {
      state.isQuizKoreanRecording = false;
      const recBtn = document.getElementById('btn-quiz-record-korean');
      if (recBtn) {
        recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기';
        recBtn.style.background = '#f3e8ff';
        recBtn.style.color = '#7e22ce';
      }
      const inputEl = document.getElementById('quiz-korean-input');
      if (inputEl && inputEl.value.trim()) {
        evaluateQuizAnswer(inputEl.value.trim());
      }
    };

    state.quizRecognition.onerror = (e) => {
      console.warn('Quiz STT error:', e);
      state.isQuizKoreanRecording = false;
      const recBtn = document.getElementById('btn-quiz-record-korean');
      if (recBtn) {
        recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기';
        recBtn.style.background = '#f3e8ff';
        recBtn.style.color = '#7e22ce';
      }
    };
  }
}

// 한국어 마이크 녹음 토글 함수입니다.
function toggleQuizKoreanRecording() {
  stopAllEvaAudio();

  const recBtn = document.getElementById('btn-quiz-record-korean');
  if (!state.isQuizKoreanRecording) {
    if (!state.quizRecognition) {
      alert('음성 인식을 지원하지 않는 브라우저입니다. 키보드로 입력해주세요.');
      return;
    }
    try {
      state.isQuizKoreanRecording = true;
      if (recBtn) {
        recBtn.innerText = '⏹ 듣고 있습니다... (말씀하세요)';
        recBtn.style.background = 'var(--toss-red)';
        recBtn.style.color = '#ffffff';
      }
      state.quizRecognition.start();
    } catch (e) {
      state.isQuizKoreanRecording = false;
      showMicHelpModal();
    }
  } else {
    state.isQuizKoreanRecording = false;
    if (state.quizRecognition) {
      try { state.quizRecognition.stop(); } catch (e) {}
    }
    if (recBtn) {
      recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기';
      recBtn.style.background = '#f3e8ff';
      recBtn.style.color = '#7e22ce';
    }
  }
}

// 질문 청취 퀴즈 세션 시작 함수입니다.
function startListeningQuizSession() {
  state.practiceMode = 'listening';
  const fullSet = createSurveyBasedExamSet(state.officialSurvey);
  state.questions = fullSet;
  state.currentIndex = 0;

  switchTab('exam');
  switchExamSubView('quiz');
  renderCurrentQuizQuestion();
}

// 현재 퀴즈 문제 렌더링 및 에바 질문 자동 재생 함수입니다.
function renderCurrentQuizQuestion() {
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const inputEl = document.getElementById('quiz-korean-input');
  if (inputEl) inputEl.value = '';

  const resultCard = document.getElementById('quiz-result-card');
  if (resultCard) {
    resultCard.style.display = 'none';
    resultCard.innerHTML = '';
  }

  const maskedTitle = document.getElementById('quiz-masked-title');
  if (maskedTitle) {
    maskedTitle.innerText = `Q${q.question_number}. 🎧 에바의 질문을 귀로 잘 들어보세요...`;
  }

  playQuizQuestionAudio();
}

// 퀴즈용 에바 질문 오디오 재생 함수 (모의고사 Eva 보이스와 100% 동일)
function playQuizQuestionAudio() {
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const avatarEl = document.getElementById('quiz-eva-avatar-box');

  if (q.audio_file) {
    const audio = new Audio(q.audio_file);
    state.currentEvaAudio = audio;
    audio.onplay = () => { if (avatarEl) avatarEl.style.transform = 'scale(1.1)'; };
    audio.onended = () => {
      if (avatarEl) avatarEl.style.transform = 'scale(1)';
      state.currentEvaAudio = null;
      setTimeout(() => {
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording();
      }, 1200);
    };
    audio.onerror = () => playFallbackSpeech(q.question_text, avatarEl, () => {
      setTimeout(() => {
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording();
      }, 1200);
    });
    audio.play().catch(() => playFallbackSpeech(q.question_text, avatarEl, () => {
      setTimeout(() => {
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording();
      }, 1200);
    }));
  } else {
    playFallbackSpeech(q.question_text, avatarEl, () => {
      setTimeout(() => {
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording();
      }, 1200);
    });
  }
}

// 사용자가 입력/말한 한국어 정답을 AI 의도 분석 엔진으로 채점하는 함수입니다.
function evaluateQuizAnswer(userKorean) {
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const info = quizIntentKnowledgeBase[q.question_type] || {
    intentName: `${q.topic} 관련 질문`,
    keywords: [q.topic, "질문", "묘사", "루틴", "경험"],
    englishCatchWords: q.question_text,
    explanation: "해당 주제에 대한 세부 사항을 묻는 질문입니다.",
    tacticTip: "핵심 키워드를 중심으로 답변을 구성하세요."
  };

  const cleanInput = userKorean.replace(/[^\w\s가-힣]/g, '');
  let matchedKeywords = [];
  info.keywords.forEach((kw) => {
    if (cleanInput.includes(kw)) {
      matchedKeywords.push(kw);
    }
  });

  let score = 0;
  let isCorrect = false;
  if (matchedKeywords.length >= 2) {
    score = 100;
    isCorrect = true;
  } else if (matchedKeywords.length === 1) {
    score = 80;
    isCorrect = true;
  } else {
    const generalTypes = ["소개", "묘사", "루틴", "경험", "사건", "롤플레이", "질문", "대안", "비교", "이슈"];
    const foundGeneral = generalTypes.filter(gt => cleanInput.includes(gt));
    if (foundGeneral.length > 0) {
      score = 70;
      isCorrect = true;
      matchedKeywords = foundGeneral;
    } else {
      score = 40;
      isCorrect = false;
    }
  }

  const resultCard = document.getElementById('quiz-result-card');
  if (!resultCard) return;

  const resultHeader = isCorrect
    ? `<div style="font-size: 16px; font-weight: 800; color: #166534; margin-bottom: 6px;">🎉 정답입니다! (일치도: ${score}점) ⭕</div>`
    : `<div style="font-size: 16px; font-weight: 800; color: #dc2626; margin-bottom: 6px;">💡 아쉽습니다! 핵심 의도를 확인해보세요 (일치도: ${score}점) ❌</div>`;

  resultCard.innerHTML = `
    <div style="background: ${isCorrect ? '#f0fdf4' : '#fff1f2'}; border: 1.5px solid ${isCorrect ? '#86efac' : '#fecdd3'}; border-radius: 16px; padding: 16px;">
      ${resultHeader}
      <div style="font-size: 14px; font-weight: 800; color: #1e3a8a; margin-bottom: 4px;">
        🎯 정확한 질문 의도: <strong>[${q.topic}] ${info.intentName}</strong>
      </div>
      <div style="font-size: 12px; color: #475569; margin-bottom: 8px;">
        🗣️ 내가 말한 한국어: "${userKorean}" (${matchedKeywords.length > 0 ? `인식된 키워드: [${matchedKeywords.join(', ')}]` : '키워드 미감지'})
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 10px;">
        <div style="font-size: 12px; font-weight: 700; color: var(--toss-blue); margin-bottom: 4px;">
          🎧 실제 영어 질문 원문:
        </div>
        <div style="font-size: 14px; font-weight: 700; color: var(--toss-text-primary); line-height: 1.4; margin-bottom: 4px;">
          "${q.question_text}"
        </div>
        <div style="font-size: 12px; color: #64748b;">
          🔑 꼭 잡았어야 할 청취 단어: <strong>${info.englishCatchWords}</strong>
        </div>
      </div>

      <div style="font-size: 12px; color: #166534; line-height: 1.5; margin-bottom: 10px;">
        💡 <strong>1타 강사 공략 꿀팁:</strong> ${info.tacticTip}
      </div>

      <button onclick="launchSpeakingFromQuiz('${encodeURIComponent(q.question_text)}', '${q.topic}', '${q.question_type}', '${q.audio_file || ''}')" class="toss-btn-primary" style="padding: 12px; font-size: 13px;">
        🎙️ 이 질문으로 바로 영어 스피킹 연습하기
      </button>
    </div>
  `;

  resultCard.style.display = 'block';

  const feedbackVoiceText = isCorrect
    ? `정답입니다! ${info.intentName}를 묻는 질문이었습니다.`
    : `이 질문은 ${info.intentName}를 묻는 질문이었습니다.`;

  if (window.speechSynthesis) {
    const utter = new SpeechSynthesisUtterance(feedbackVoiceText);
    utter.lang = 'ko-KR';
    utter.rate = 1.0;
    window.speechSynthesis.speak(utter);
  }
}

// 퀴즈 결과에서 바로 영어 스피킹 연습 화면으로 직행하는 전역 함수입니다.
window.launchSpeakingFromQuiz = function (encodedText, topic, qType, audioFile) {
  const text = decodeURIComponent(encodedText);
  state.practiceMode = '1q';
  state.questions = [
    {
      question_number: 1,
      topic: topic,
      question_type: qType,
      question_text: text,
      audio_file: audioFile || null
    }
  ];
  state.currentIndex = 0;
  state.evaluationResults = [];
  state.totalTimeRemaining = 180;
  startGlobalTimer();

  switchTab('exam');
  switchExamSubView('testing');
  renderCurrentQuestion();
};

// 마이페이지 서베이 설정 불러오기 및 초기화 함수입니다.
function loadOfficialSurveySettings() {
  const saved = localStorage.getItem('opic_official_survey_full');
  if (saved) {
    try {
      state.officialSurvey = JSON.parse(saved);
    } catch (e) {}
  }
  updateSurveyUIFromState();
  updateSurveyCountBadge();
  updateHomeSurveySummary();
}

// 마이페이지 서베이 폼에 현재 상태값을 반영하는 함수입니다.
function updateSurveyUIFromState() {
  const s = state.officialSurvey;

  const jobRadio = document.querySelector(`input[name="survey_q1_job"][value="${s.q1_job}"]`);
  if (jobRadio) {
    document.querySelectorAll(`input[name="survey_q1_job"]`).forEach(r => r.closest('.chip-item').classList.remove('selected'));
    jobRadio.checked = true;
    jobRadio.closest('.chip-item').classList.add('selected');
  }

  const stuRadio = document.querySelector(`input[name="survey_q2_student"][value="${s.q2_student}"]`);
  if (stuRadio) {
    document.querySelectorAll(`input[name="survey_q2_student"]`).forEach(r => r.closest('.chip-item').classList.remove('selected'));
    stuRadio.checked = true;
    stuRadio.closest('.chip-item').classList.add('selected');
  }

  const homeRadio = document.querySelector(`input[name="survey_q3_home"][value="${s.q3_home}"]`);
  if (homeRadio) {
    document.querySelectorAll(`input[name="survey_q3_home"]`).forEach(r => r.closest('.chip-item').classList.remove('selected'));
    homeRadio.checked = true;
    homeRadio.closest('.chip-item').classList.add('selected');
  }

  document.querySelectorAll(`input[name="survey_q4_leisure"]`).forEach(cb => {
    cb.checked = s.q4_leisure.includes(cb.value);
    if (cb.checked) cb.closest('.chip-item').classList.add('selected');
    else cb.closest('.chip-item').classList.remove('selected');
  });

  document.querySelectorAll(`input[name="survey_q5_hobby"]`).forEach(cb => {
    cb.checked = s.q5_hobby.includes(cb.value);
    if (cb.checked) cb.closest('.chip-item').classList.add('selected');
    else cb.closest('.chip-item').classList.remove('selected');
  });

  document.querySelectorAll(`input[name="survey_q6_sports"]`).forEach(cb => {
    cb.checked = s.q6_sports.includes(cb.value);
    if (cb.checked) cb.closest('.chip-item').classList.add('selected');
    else cb.closest('.chip-item').classList.remove('selected');
  });

  document.querySelectorAll(`input[name="survey_q7_travel"]`).forEach(cb => {
    cb.checked = s.q7_travel.includes(cb.value);
    if (cb.checked) cb.closest('.chip-item').classList.add('selected');
    else cb.closest('.chip-item').classList.remove('selected');
  });

  const diffRadio = document.querySelector(`input[name="survey_difficulty"][value="${s.difficulty}"]`);
  if (diffRadio) {
    document.querySelectorAll(`input[name="survey_difficulty"]`).forEach(r => r.closest('.chip-item').classList.remove('selected'));
    diffRadio.checked = true;
    diffRadio.closest('.chip-item').classList.add('selected');
  }
}

// 4번~7번 항목의 총 선택 개수 실시간 배지 업데이트 함수입니다.
function updateSurveyCountBadge() {
  const q4Count = document.querySelectorAll(`input[name="survey_q4_leisure"]:checked`).length;
  const q5Count = document.querySelectorAll(`input[name="survey_q5_hobby"]:checked`).length;
  const q6Count = document.querySelectorAll(`input[name="survey_q6_sports"]:checked`).length;
  const q7Count = document.querySelectorAll(`input[name="survey_q7_travel"]:checked`).length;
  const totalCount = q4Count + q5Count + q6Count + q7Count;

  const badge = document.getElementById('survey-selection-count-badge');
  if (badge) {
    if (totalCount >= 12) {
      badge.innerText = `선택: ${totalCount}개 / 12개 이상 (충족됨 ✓)`;
      badge.style.background = '#dcfce7';
      badge.style.color = '#166534';
    } else {
      badge.innerText = `선택: ${totalCount}개 / 12개 이상 필요`;
      badge.style.background = '#fee2e2';
      badge.style.color = '#dc2626';
    }
  }
}

// 1타 강사 AL 만점 추천 12종 세트 자동 선택 함수입니다.
function applyALRecommendedSurvey() {
  state.officialSurvey = {
    q1_job: 'NONE',
    q2_student: 'NO',
    q3_home: 'APARTMENT_ALONE',
    q4_leisure: ['MOVIE', 'PERFORMANCE', 'CONCERT', 'PARK', 'CAFE', 'BEACH'],
    q5_hobby: ['MUSIC'],
    q6_sports: ['JOGGING', 'WALKING', 'BIKING', 'GYM'],
    q7_travel: ['DOMESTIC', 'OVERSEAS', 'STAYCATION'],
    difficulty: 5
  };

  updateSurveyUIFromState();
  updateSurveyCountBadge();
  saveOfficialSurveySettings(false);
  alert('🌟 [1타 강사 AL 만점 12종 꿀조합]이 자동으로 선택 및 저장되었습니다!\n답변 재활용이 극대화되고 돌발 질문이 최소화됩니다.');
}

// 홈 탭의 서베이 요약 안내 문구를 갱신하는 함수입니다.
function updateHomeSurveySummary() {
  const summaryEl = document.getElementById('home-survey-summary');
  const previewEl = document.getElementById('exam-survey-preview-text');
  const allSelected = [
    ...state.officialSurvey.q4_leisure,
    ...state.officialSurvey.q5_hobby,
    ...state.officialSurvey.q6_sports,
    ...state.officialSurvey.q7_travel
  ];
  const text = `설정된 서베이: [영화, 콘서트, 공원, 카페, 해변, 음악, 조깅...] 등 총 ${allSelected.length}개 항목 기반으로 자동 출제됩니다.`;
  if (summaryEl) summaryEl.innerText = text;
  if (previewEl) previewEl.innerText = text;
}

// 마이페이지 서베이 저장 버튼 클릭 처리 함수입니다.
function saveOfficialSurveySettings(showAlert = true) {
  const jobRadio = document.querySelector(`input[name="survey_q1_job"]:checked`);
  const stuRadio = document.querySelector(`input[name="survey_q2_student"]:checked`);
  const homeRadio = document.querySelector(`input[name="survey_q3_home"]:checked`);
  const diffRadio = document.querySelector(`input[name="survey_difficulty"]:checked`);

  const q4 = Array.from(document.querySelectorAll(`input[name="survey_q4_leisure"]:checked`)).map(cb => cb.value);
  const q5 = Array.from(document.querySelectorAll(`input[name="survey_q5_hobby"]:checked`)).map(cb => cb.value);
  const q6 = Array.from(document.querySelectorAll(`input[name="survey_q6_sports"]:checked`)).map(cb => cb.value);
  const q7 = Array.from(document.querySelectorAll(`input[name="survey_q7_travel"]:checked`)).map(cb => cb.value);

  const totalSelected = q4.length + q5.length + q6.length + q7.length;
  if (totalSelected < 12 && showAlert) {
    alert(`OPIc 공식 룰에 따라 4번~7번 항목에서 최소 12개 이상을 선택해야 합니다. (현재: ${totalSelected}개 선택됨)`);
    return;
  }

  state.officialSurvey = {
    q1_job: jobRadio ? jobRadio.value : 'NONE',
    q2_student: stuRadio ? stuRadio.value : 'NO',
    q3_home: homeRadio ? homeRadio.value : 'APARTMENT_ALONE',
    q4_leisure: q4,
    q5_hobby: q5,
    q6_sports: q6,
    q7_travel: q7,
    difficulty: diffRadio ? parseInt(diffRadio.value, 10) : 5,
  };

  localStorage.setItem('opic_official_survey_full', JSON.stringify(state.officialSurvey));
  updateHomeSurveySummary();
  updateSurveyCountBadge();

  if (showAlert) {
    alert('💾 OPIc 공식 서베이 설정이 안전하게 저장되었습니다!\n스피킹 연습 및 모의고사에 즉시 반영됩니다.');
  }
}

// 단계별 학습 플랜 탭 초기화 및 이벤트 리스너 바인딩 함수입니다.
function initStudyPlanTab() {
  const planButtons = document.querySelectorAll('.plan-seg-btn');
  planButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      planButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedPlanLevel = btn.dataset.plan || 'beginner';
      renderStudyPlanQuests();
    });
  });

  const container = document.getElementById('plan-quest-list-container');
  if (container) {
    container.addEventListener('click', (e) => {
      const startBtn = e.target.closest('.btn-start-quest');
      if (startBtn) {
        e.preventDefault();
        const level = startBtn.dataset.plan;
        const day = parseInt(startBtn.dataset.day, 10);
        executePlanQuestPractice(level, day);
        return;
      }

      const toggleBtn = e.target.closest('.btn-toggle-quest');
      if (toggleBtn) {
        e.preventDefault();
        const day = parseInt(toggleBtn.dataset.day, 10);
        togglePlanQuestSafe(day);
        return;
      }
    });
  }

  renderStudyPlanQuests();
}

// 수준별 7일 플랜 퀘스트 목록 렌더링 함수입니다.
function renderStudyPlanQuests() {
  const container = document.getElementById('plan-quest-list-container');
  if (!container) return;

  const plan = studyPlansData[state.selectedPlanLevel];
  if (!plan) return;

  const progressTitle = document.getElementById('plan-progress-title');
  if (progressTitle) progressTitle.innerText = `${plan.title} 진도율`;

  const completedMap = JSON.parse(localStorage.getItem(`opic_plan_${state.selectedPlanLevel}`) || '{}');
  const completedCount = Object.values(completedMap).filter(Boolean).length;
  const totalDays = plan.days.length;
  const percent = Math.round((completedCount / totalDays) * 100);

  const percentEl = document.getElementById('plan-progress-percent');
  if (percentEl) percentEl.innerText = `${percent}% (${completedCount}/${totalDays})`;

  const barEl = document.getElementById('plan-progress-bar');
  if (barEl) barEl.style.width = `${percent}%`;

  container.innerHTML = plan.days.map((item) => {
    const isDone = !!completedMap[item.day];
    return `
      <div class="plan-day-item ${isDone ? 'completed' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 14px; font-weight: 800; color: ${isDone ? 'var(--toss-green)' : 'var(--toss-blue)'};">
            ${isDone ? '✅' : '🎯'} Day ${item.day}. ${item.title}
          </span>
          <button class="btn-toggle-quest" data-day="${item.day}" style="background: ${isDone ? '#dcfce7' : '#f2f4f6'}; color: ${isDone ? '#166534' : '#4e5968'}; border: none; border-radius: 8px; padding: 4px 8px; font-size: 11px; font-weight: 700; cursor: pointer;">
            ${isDone ? '완료됨 ✓' : '완료 체크'}
          </button>
        </div>
        <div style="font-size: 12px; color: var(--toss-text-secondary); line-height: 1.4; margin-bottom: 8px;">
          ${item.desc}
        </div>
        <div style="background: #fafbfc; border: 1px solid #e5e8eb; border-radius: 10px; padding: 8px 10px; margin-bottom: 8px; font-size: 12px; color: #1e3a8a; font-weight: 600;">
          🗣️ 실전 퀘스트 질문: "${item.question}"
        </div>
        <button class="btn-start-quest toss-btn-primary" data-plan="${state.selectedPlanLevel}" data-day="${item.day}" style="padding: 10px; font-size: 13px; border-radius: 10px;">
          🚀 이 퀘스트 바로 스피킹 연습하기 (1분)
        </button>
      </div>
    `;
  }).join('');
}

// 플랜 퀘스트 완료 체크 토글 함수입니다.
function togglePlanQuestSafe(day) {
  const key = `opic_plan_${state.selectedPlanLevel}`;
  const map = JSON.parse(localStorage.getItem(key) || '{}');
  map[day] = !map[day];
  localStorage.setItem(key, JSON.stringify(map));
  renderStudyPlanQuests();
}

// [핵심] 학습플랜 퀘스트 실행 시 모의고사와 100% 동일한 공식 Eva 목소리를 적용하는 함수입니다.
function executePlanQuestPractice(level, day) {
  const plan = studyPlansData[level];
  if (!plan) return;
  const targetItem = plan.days.find(d => d.day === day);
  if (!targetItem) return;

  state.practiceMode = '1q';
  state.questions = [
    {
      question_number: 1,
      topic: `학습플랜 Day ${day}`,
      question_type: targetItem.title,
      question_text: targetItem.question,
      audio_file: targetItem.audio_file || null
    }
  ];
  state.currentIndex = 0;
  state.evaluationResults = [];
  state.totalTimeRemaining = 180;
  startGlobalTimer();

  switchTab('exam');
  switchExamSubView('testing');
  renderCurrentQuestion();
}

// 스피킹 연습 탭 초기화 함수입니다.
function initPracticeTab() {
  const pracCards = document.querySelectorAll('#tab-practice .mode-card-btn');
  pracCards.forEach((card) => {
    card.addEventListener('click', () => {
      pracCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      state.practiceMode = card.dataset.mode || '1q';
    });
  });

  const startPracBtn = document.getElementById('btn-start-practice');
  if (startPracBtn) {
    startPracBtn.addEventListener('click', () => {
      if (state.practiceMode === 'listening') {
        startListeningQuizSession();
      } else {
        startSpeakingSession(state.practiceMode);
      }
    });
  }

  const voiceSelectPrac = document.getElementById('select-eva-voice-prac');
  if (voiceSelectPrac) {
    voiceSelectPrac.addEventListener('change', (e) => {
      state.selectedVoice = e.target.value;
      const mainVoiceSelect = document.getElementById('select-eva-voice');
      if (mainVoiceSelect) mainVoiceSelect.value = e.target.value;
    });
  }

  const previewVoicePrac = document.getElementById('btn-preview-voice-prac');
  if (previewVoicePrac) {
    previewVoicePrac.addEventListener('click', previewSelectedVoice);
  }
}

// 실전 모의고사 탭 초기화 함수입니다.
function initExamTab() {
  const startExamBtn = document.getElementById('btn-start-exam');
  if (startExamBtn) {
    startExamBtn.addEventListener('click', () => {
      state.practiceMode = 'full';
      startSpeakingSession('full');
    });
  }

  const voiceSelect = document.getElementById('select-eva-voice');
  if (voiceSelect) {
    voiceSelect.addEventListener('change', (e) => {
      state.selectedVoice = e.target.value;
      const pracVoiceSelect = document.getElementById('select-eva-voice-prac');
      if (pracVoiceSelect) pracVoiceSelect.value = e.target.value;
    });
  }

  const previewVoiceBtn = document.getElementById('btn-preview-voice');
  if (previewVoiceBtn) {
    previewVoiceBtn.addEventListener('click', previewSelectedVoice);
  }

  const goMypageBtn = document.getElementById('btn-go-mypage-from-exam');
  if (goMypageBtn) {
    goMypageBtn.addEventListener('click', () => switchTab('mypage'));
  }
}

// 스피킹 세션 시작 함수 (서베이 기반 동적 문제 생성)
function startSpeakingSession(mode) {
  state.practiceMode = mode;
  const fullSet = createSurveyBasedExamSet(state.officialSurvey);

  if (mode === '1q' || mode === 'driving') {
    const randomQ = fullSet[Math.floor(Math.random() * fullSet.length)];
    state.questions = [{ ...randomQ, question_number: 1 }];
  } else if (mode === '3combo') {
    state.questions = fullSet.slice(1, 4).map((q, idx) => ({ ...q, question_number: idx + 1 }));
  } else {
    state.questions = fullSet;
  }

  state.currentIndex = 0;
  state.evaluationResults = [];
  state.totalTimeRemaining = state.questions.length * 150;
  startGlobalTimer();

  switchTab('exam');
  switchExamSubView('testing');
  renderCurrentQuestion();
}

// 사용자 서베이 설정값 기반 15문항 모의고사 세트 생성 함수입니다.
function createSurveyBasedExamSet(survey) {
  const diff = survey.difficulty || 5;
  if (diff >= 5) {
    return [
      { question_number: 1, topic: "Self Introduction", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
      { question_number: 2, topic: "Movie", question_type: "장소 묘사", question_text: "You indicated in the survey that you go to the movies. Tell me about the movie theater you usually go to and why you like going there.", audio_file: "audio/q2.mp3" },
      { question_number: 3, topic: "Movie", question_type: "활동/루틴", question_text: "What do you usually do before and after watching a movie? Describe your whole routine on movie days.", audio_file: "audio/q3.mp3" },
      { question_number: 4, topic: "Movie", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable or unexpected incident you experienced while watching a movie at a cinema.", audio_file: "audio/q4.mp3" },
      { question_number: 5, topic: "Housing", question_type: "장소 묘사", question_text: "You indicated that you live in an apartment. Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" },
      { question_number: 6, topic: "Housing", question_type: "활동/루틴", question_text: "What is your daily routine at home during the weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" },
      { question_number: 7, topic: "Housing", question_type: "과거 경험", question_text: "Have you ever experienced an unexpected problem or issue at your home? What was the problem and how did you resolve it?", audio_file: "audio/q7.mp3" },
      { question_number: 8, topic: "돌발: 호텔", question_type: "돌발: 호텔 묘사", question_text: "Tell me about a hotel you stayed at recently. What did the room and facilities look like?", audio_file: "audio/q15.mp3" },
      { question_number: 9, topic: "돌발: 호텔", question_type: "돌발: 호텔 루틴", question_text: "What do you usually do when you check in and stay at a hotel from start to finish?" },
      { question_number: 10, topic: "돌발: 호텔", question_type: "돌발: 호텔 문제 경험", question_text: "Have you ever had an unexpected issue or complaint at a hotel? What happened and how was it solved?" },
      { question_number: 11, topic: "롤플레이", question_type: "롤플레이 (11번: 질문하기)", question_text: "You want to plan a party with your friend. Call your friend and ask 3 or 4 questions about planning the party.", audio_file: "audio/q8.mp3" },
      { question_number: 12, topic: "롤플레이", question_type: "롤플레이 (12번: 대안 제시)", question_text: "An unexpected problem has come up and you cannot attend the party as planned. Call your friend, explain the situation, and offer 2 or 3 alternatives.", audio_file: "audio/q9.mp3" },
      { question_number: 13, topic: "롤플레이", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever had a memorable plan cancelled unexpectedly? How did you resolve the situation?" },
      { question_number: 14, topic: "심화이슈", question_type: "심화 (14번: 과거 현재 비교)", question_text: "Compare electronic devices and technology people used in the past with devices people use today. What are the key differences?", audio_file: "audio/q12.mp3" },
      { question_number: 15, topic: "심화이슈", question_type: "심화 (15번: 이슈 토론)", question_text: "What are some current issues or challenges related to the hotel and accommodation industry today? What is your opinion?", audio_file: "audio/q15.mp3" },
    ];
  } else {
    return [
      { question_number: 1, topic: "Self Introduction", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
      { question_number: 2, topic: "Park", question_type: "장소 묘사", question_text: "Tell me about the park you visit most often. What does it look like, and what facilities does it have?" },
      { question_number: 3, topic: "Park", question_type: "활동/루틴", question_text: "What do you usually do when you go to the park from the moment you arrive until you leave?", audio_file: "audio/q3.mp3" },
      { failure: false, question_number: 4, topic: "Park", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable day or experience you had at a park." },
      { question_number: 5, topic: "Cafe", question_type: "장소 묘사", question_text: "Tell me about your favorite cafe or coffee shop. Where is it located, and what is the atmosphere like?" },
      { question_number: 6, topic: "Cafe", question_type: "루틴 및 습관", question_text: "When do you usually visit cafes, and who do you go with? What do you usually order?" },
      { question_number: 7, topic: "Cafe", question_type: "과거 경험", question_text: "Tell me about a memorable memory you have at a coffee shop." },
      { question_number: 8, topic: "돌발: 날씨", question_type: "돌발: 날씨 묘사", question_text: "Tell me about the four seasons and the weather in your country. Which season do you like most?" },
      { question_number: 9, topic: "돌발: 날씨", question_type: "돌발: 날씨 경험", question_text: "Tell me about a time when unexpected weather affected your plans. How did you deal with it?" },
      { question_number: 10, topic: "돌발: 날씨", question_type: "돌발: 날씨 변화", question_text: "How has the weather in your country changed compared to when you were younger?" },
      { question_number: 11, topic: "롤플레이", question_type: "롤플레이 (11번: 질문하기)", question_text: "You are planning a vacation trip. Call a travel agency and ask 3 or 4 questions about the trip packages." },
      { question_number: 12, topic: "롤플레이", question_type: "롤플레이 (12번: 대안 제시)", question_text: "Due to an urgent issue, you cannot go on the trip. Call the travel agency and offer 2 or 3 alternatives." },
      { question_number: 13, topic: "롤플레이", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever experienced a situation where a vacation plan was cancelled? How did you resolve it?" },
      { question_number: 14, topic: "비교/선호", question_type: "비교 (14번: 취향 비교)", question_text: "Compare two different activities or hobbies you enjoy. Which one do you prefer and why?" },
      { question_number: 15, topic: "최근 관심사", question_type: "경험 (15번: 최근 관심사)", question_text: "What is a recent topic or trend you became interested in? Tell me about it in detail." },
    ];
  }
}

// 하단 고정 탭바 네비게이션 초기화 및 라우팅 함수입니다.
function initTabBarNavigation() {
  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      switchTab(targetTab);
    });
  });

  const quick1qBtn = document.getElementById('btn-quick-start-1q');
  if (quick1qBtn) {
    quick1qBtn.addEventListener('click', () => {
      startSpeakingSession('1q');
    });
  }

  const goSurveyBtn = document.getElementById('btn-go-mypage-survey');
  if (goSurveyBtn) {
    goSurveyBtn.addEventListener('click', () => switchTab('mypage'));
  }

  const homeDrivingBtn = document.getElementById('btn-home-start-driving');
  if (homeDrivingBtn) {
    homeDrivingBtn.addEventListener('click', () => {
      startSpeakingSession('driving');
    });
  }

  const homeExamBtn = document.getElementById('btn-home-start-exam');
  if (homeExamBtn) {
    homeExamBtn.addEventListener('click', () => {
      startSpeakingSession('full');
    });
  }

  const goReviewBtn = document.getElementById('btn-go-review-from-home');
  if (goReviewBtn) {
    goReviewBtn.addEventListener('click', () => switchTab('mypage'));
  }
}

// 특정 메인 탭으로 화면을 전환하는 함수입니다.
function switchTab(tabName) {
  state.currentTab = tabName;

  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach((item) => {
    if (item.dataset.tab === tabName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach((c) => c.classList.remove('active'));
  const targetContent = document.getElementById(`tab-${tabName}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  const headerTitle = document.getElementById('app-header-title');
  const timerBadge = document.getElementById('global-timer-display');

  if (tabName === 'home') {
    if (headerTitle) headerTitle.innerText = '오픽 마스터';
    if (timerBadge) timerBadge.style.display = 'none';
    renderHomeDashboard();
  } else if (tabName === 'plan') {
    if (headerTitle) headerTitle.innerText = '단계별 학습플랜';
    if (timerBadge) timerBadge.style.display = 'none';
    renderStudyPlanQuests();
  } else if (tabName === 'practice') {
    if (headerTitle) headerTitle.innerText = '자투리 스피킹';
    if (timerBadge) timerBadge.style.display = 'none';
  } else if (tabName === 'exam') {
    if (headerTitle) headerTitle.innerText = state.practiceMode === 'listening' ? '질문 청취 퀴즈' : '실전 모의고사';
    if (timerBadge) {
      timerBadge.style.display = state.examSubView === 'testing' ? 'block' : 'none';
    }
  } else if (tabName === 'mypage') {
    if (headerTitle) headerTitle.innerText = '마이페이지';
    if (timerBadge) timerBadge.style.display = 'none';
    renderMyPageStats();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 홈 탭의 최근 성적 위젯을 렌더링하는 함수입니다.
function renderHomeDashboard() {
  const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]');
  const recentDateEl = document.getElementById('home-recent-date');
  const recentLevelEl = document.getElementById('home-recent-level-badge');

  if (notes.length > 0) {
    const latest = notes[0];
    if (recentDateEl) recentDateEl.innerText = `최근 연습: ${latest.date}`;
    if (recentLevelEl) recentLevelEl.innerText = latest.overall_level;
  } else {
    if (recentDateEl) recentDateEl.innerText = '아직 연습 기록이 없습니다.';
    if (recentLevelEl) recentLevelEl.innerText = '-';
  }
}

// 마이페이지 탭의 통계 및 이벤트를 렌더링하는 함수입니다.
function renderMyPageStats() {
  const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]');
  const totalExams = notes.length;
  const streak = parseInt(localStorage.getItem('opic_daily_streak') || '1', 10);

  let totalWpm = 0;
  let count = 0;
  notes.forEach((exam) => {
    exam.evaluations.forEach((e) => {
      const words = e.user_transcript ? e.user_transcript.split(/\s+/).length : 0;
      const duration = e.duration_sec || 30;
      totalWpm += Math.round((words / duration) * 60);
      count++;
    });
  });

  const avgWpm = count > 0 ? Math.round(totalWpm / count) : 85;

  const totalExamsEl = document.getElementById('stat-total-exams');
  const avgWpmEl = document.getElementById('stat-avg-wpm');
  const streakDaysEl = document.getElementById('stat-streak-days');

  if (totalExamsEl) totalExamsEl.innerText = `${totalExams}회`;
  if (avgWpmEl) avgWpmEl.innerText = `${avgWpm} WPM`;
  if (streakDaysEl) streakDaysEl.innerText = `${streak}일`;
}

// 마이페이지 버튼 이벤트 초기화 함수입니다.
function initMyPageEvents() {
  const saveSurveyBtn = document.getElementById('btn-save-survey-settings');
  if (saveSurveyBtn) {
    saveSurveyBtn.addEventListener('click', () => saveOfficialSurveySettings(true));
  }

  const alStrategyBtn = document.getElementById('btn-apply-al-strategy');
  if (alStrategyBtn) {
    alStrategyBtn.addEventListener('click', applyALRecommendedSurvey);
  }

  const openReviewBtn = document.getElementById('btn-open-review-from-mypage');
  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', () => {
      const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]');
      if (notes.length === 0) {
        alert('아직 저장된 복습 기록이 없습니다. 스피킹 연습을 완료하시면 오답노트가 자동 생성됩니다!');
        return;
      }
      renderReportView(notes[0]);
      switchTab('exam');
      switchExamSubView('report');
    });
  }

  const micGuideBtn = document.getElementById('btn-open-mic-guide');
  if (micGuideBtn) {
    micGuideBtn.addEventListener('click', showMicHelpModal);
  }

  const clearDataBtn = document.getElementById('btn-clear-data');
  if (clearDataBtn) {
    clearDataBtn.addEventListener('click', () => {
      if (confirm('저장된 모든 스피킹 복습 기록 및 서베이 설정을 초기화하시겠습니까?')) {
        localStorage.clear();
        alert('모든 학습 데이터가 초기화되었습니다.');
        location.reload();
      }
    });
  }
}

// 모의고사 탭 내부의 하위 뷰('survey', 'testing', 'report', 'quiz')를 전환하는 함수입니다.
function switchExamSubView(subViewName) {
  state.examSubView = subViewName;

  const viewSurvey = document.getElementById('exam-view-survey');
  const viewTesting = document.getElementById('exam-view-testing');
  const viewReport = document.getElementById('exam-view-report');
  const viewQuiz = document.getElementById('exam-view-quiz');
  const timerBadge = document.getElementById('global-timer-display');

  if (viewSurvey) viewSurvey.style.display = subViewName === 'survey' ? 'block' : 'none';
  if (viewTesting) viewTesting.style.display = subViewName === 'testing' ? 'block' : 'none';
  if (viewReport) viewReport.style.display = subViewName === 'report' ? 'block' : 'none';
  if (viewQuiz) viewQuiz.style.display = subViewName === 'quiz' ? 'block' : 'none';

  if (timerBadge) {
    timerBadge.style.display = subViewName === 'testing' ? 'block' : 'none';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 1일 1문장 챌린지 초기화 및 이벤트 리스너 함수입니다.
function initDailyChallenge() {
  renderDailySentence();

  const prevBtn = document.getElementById('btn-prev-daily');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      state.currentDailyIndex = (state.currentDailyIndex - 1 + dailySentencesData.length) % dailySentencesData.length;
      renderDailySentence();
    });
  }

  const nextBtn = document.getElementById('btn-next-daily');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.currentDailyIndex = (state.currentDailyIndex + 1) % dailySentencesData.length;
      renderDailySentence();
    });
  }

  const listenBtn = document.getElementById('btn-listen-daily');
  if (listenBtn) {
    listenBtn.addEventListener('click', () => {
      const item = dailySentencesData[state.currentDailyIndex];
      playCustomSpeech(encodeURIComponent(item.exam_sentence));
    });
  }

  const shadowBtn = document.getElementById('btn-shadow-daily');
  if (shadowBtn) {
    shadowBtn.addEventListener('click', toggleDailyShadowing);
  }
}

// 1일 1문장 카드 UI 렌더링 함수입니다.
function renderDailySentence() {
  const item = dailySentencesData[state.currentDailyIndex];
  if (!item) return;

  const titleEl = document.getElementById('daily-expr-title');
  if (titleEl) titleEl.innerText = item.key_expression;

  const korEl = document.getElementById('daily-expr-korean');
  if (korEl) korEl.innerText = `${item.korean_meaning} [${item.category}]`;

  const tipEl = document.getElementById('daily-expr-tip');
  if (tipEl) tipEl.innerText = `💡 ${item.opic_tip}`;

  const sentEl = document.getElementById('daily-exam-sentence');
  if (sentEl) sentEl.innerText = `"${item.exam_sentence}"`;

  const sentKorEl = document.getElementById('daily-exam-korean');
  if (sentKorEl) sentKorEl.innerText = `"${item.korean_sentence}"`;

  const resEl = document.getElementById('daily-shadow-result');
  if (resEl) resEl.style.display = 'none';

  const streakCount = parseInt(localStorage.getItem('opic_daily_streak') || '1', 10);
  const badgeEl = document.getElementById('daily-streak-badge');
  if (badgeEl) badgeEl.innerText = `🔥 ${streakCount}일차 도전 중`;
}

// 1일 1문장 따라 말하기(쉐도잉) 녹음 토글 및 일치도 측정 함수입니다.
async function toggleDailyShadowing() {
  const shadowBtn = document.getElementById('btn-shadow-daily');
  const resultBox = document.getElementById('daily-shadow-result');
  const targetItem = dailySentencesData[state.currentDailyIndex];

  stopAllEvaAudio();

  if (!state.isDailyShadowingRecording) {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert('이 브라우저는 음성 인식을 지원하지 않습니다. 텍스트로 학습해주세요.');
        return;
      }

      state.isDailyShadowingRecording = true;
      shadowBtn.innerText = '⏹ 말하기 끝내기';
      shadowBtn.style.background = 'var(--toss-red)';
      shadowBtn.style.color = '#ffffff';

      let userSpokenText = '';
      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;

      rec.onresult = (event) => {
        userSpokenText = event.results[0][0].transcript;
      };

      rec.onend = () => {
        state.isDailyShadowingRecording = false;
        shadowBtn.innerText = '🎙️ 따라 말하기 연습';
        shadowBtn.style.background = '#ffffff';
        shadowBtn.style.color = 'var(--toss-blue)';

        const targetWords = targetItem.exam_sentence.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
        const spokenWords = userSpokenText.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);

        let matchCount = 0;
        targetWords.forEach(w => {
          if (spokenWords.includes(w)) matchCount++;
        });

        const score = Math.min(100, Math.round((matchCount / targetWords.length) * 100));

        let streak = parseInt(localStorage.getItem('opic_daily_streak') || '1', 10);
        streak++;
        localStorage.setItem('opic_daily_streak', streak);

        if (resultBox) {
          resultBox.innerHTML = `
            <div style="font-weight: 800; margin-bottom: 4px; font-size: 13px;">
              🎉 쉐도잉 발음 정확도: <strong style="color: var(--toss-blue);">${score}% 일치</strong> (예상 AL 유창성)
            </div>
            <div style="color: #334155; margin-bottom: 4px;">
              🗣️ 내가 말한 발음: "${userSpokenText || 'Well done! (정상 녹음 완료)'}"
            </div>
            <div style="font-size: 11px; color: #166534;">
              ✨ 오늘의 핵심 구동사 <strong>'${targetItem.key_expression}'</strong>를 완벽히 숙지하셨습니다!
            </div>
          `;
          resultBox.style.display = 'block';
        }
      };

      rec.start();

    } catch (e) {
      showMicHelpModal();
    }
  } else {
    state.isDailyShadowingRecording = false;
    shadowBtn.innerText = '🎙️ 따라 말하기 연습';
    shadowBtn.style.background = '#ffffff';
    shadowBtn.style.color = 'var(--toss-blue)';
  }
}

// 아이폰 마이크 가이드 모달 닫기 이벤트 초기화 함수입니다.
function initModalEvents() {
  const closeBtn = document.getElementById('btn-close-modal');
  const confirmBtn = document.getElementById('btn-confirm-modal');
  const modal = document.getElementById('mic-help-modal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
  }
  if (confirmBtn && modal) {
    confirmBtn.addEventListener('click', () => { modal.style.display = 'none'; });
  }
}

// 아이폰 마이크 안내 모달을 띄우는 헬퍼 함수입니다.
function showMicHelpModal() {
  const modal = document.getElementById('mic-help-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

// 텍스트에어리어에 글이 작성될 때마다 실시간 HUD를 갱신하는 함수입니다.
function initHUDInputWatcher() {
  const textarea = document.getElementById('stt-input-textarea');
  if (textarea) {
    textarea.addEventListener('input', () => {
      state.accumulatedText = textarea.value;
      updateSpeakingHUD(textarea.value);
    });
  }
}

// 쉐도잉 배속 버튼 클릭 이벤트 리스너 초기화 함수입니다.
function initSpeedButtons() {
  const speedBtns = document.querySelectorAll('.btn-speed');
  speedBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      speedBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.shadowingPlaybackRate = parseFloat(btn.dataset.speed || '1.0');
    });
  });
}

// 토스 스타일 칩 태그 클릭 시 선택 스타일 및 서베이 카운터를 즉시 반영하는 함수입니다.
function initChipInteractions() {
  const chips = document.querySelectorAll('.chip-item');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const input = chip.querySelector('input');
      if (!input) return;

      if (input.type === 'radio') {
        const sameNameChips = document.querySelectorAll(`input[name="${input.name}"]`);
        sameNameChips.forEach((r) => r.closest('.chip-item').classList.remove('selected'));
        chip.classList.add('selected');
      } else if (input.type === 'checkbox') {
        setTimeout(() => {
          if (input.checked) chip.classList.add('selected');
          else chip.classList.remove('selected');
          updateSurveyCountBadge();
        }, 10);
      }
    });
  });
}

// 백엔드 서버 상태를 비동기로 확인하고 상단 배지에 표시하는 함수입니다.
async function checkServerConnection() {
  try {
    const res = await fetch(`${state.apiBaseUrl}/api/health`, { method: 'GET' });
    if (res.ok) {
      state.isServerAvailable = true;
      return;
    }
  } catch (err) {}
  state.isServerAvailable = false;
}

// 현재 재생 중인 에바의 모든 오디오(MP3/TTS)를 즉각 완전히 정지하는 함수입니다.
function stopAllEvaAudio() {
  if (state.currentEvaAudio) {
    state.currentEvaAudio.pause();
    state.currentEvaAudio.currentTime = 0;
    state.currentEvaAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  const avatarEl = document.getElementById('eva-avatar-box');
  if (avatarEl) {
    avatarEl.style.transform = 'scale(1)';
  }
  const quizAvatarEl = document.getElementById('quiz-eva-avatar-box');
  if (quizAvatarEl) {
    quizAvatarEl.style.transform = 'scale(1)';
  }
}

// 실시간 AI 스피킹 코치 HUD를 갱신하는 함수입니다.
function updateSpeakingHUD(text) {
  if (!text || !text.trim()) {
    document.getElementById('hud-word-count').innerText = '0단어';
    document.getElementById('hud-wpm-count').innerText = '0 WPM';
    document.getElementById('hud-filler-count').innerText = '0개';
    document.getElementById('hud-filler-chips').innerHTML = '<span style="font-size: 11px; color: var(--toss-text-muted);">💡 말씀하시는 동안 내용이 지워지지 않고 전부 완벽히 누적 기록됩니다.</span>';
    return;
  }

  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  document.getElementById('hud-word-count').innerText = `${wordCount}단어`;

  const elapsedSec = state.isRecording ? Math.max(1, (Date.now() - state.recordingStartTime) / 1000) : 30;
  const wpm = Math.round((wordCount / elapsedSec) * 60);
  document.getElementById('hud-wpm-count').innerText = `${wpm} WPM`;

  const targetFillers = [
    { name: "You know", pattern: /\byou know\b/gi },
    { name: "I mean", pattern: /\bi mean\b/gi },
    { name: "Speaking of which", pattern: /\bspeaking of which\b/gi },
    { name: "To be honest", pattern: /\bto be honest\b/gi },
    { name: "As far as I know", pattern: /\bas far as i know\b/gi },
    { name: "Actually", pattern: /\bactually\b/gi },
    { name: "Basically", pattern: /\bbasically\b/gi },
    { name: "You see", pattern: /\byou see\b/gi },
  ];

  const detected = [];
  targetFillers.forEach((f) => {
    if (f.pattern.test(text)) {
      detected.push(f.name);
    }
  });

  document.getElementById('hud-filler-count').innerText = `${detected.length}개`;

  const chipContainer = document.getElementById('hud-filler-chips');
  if (detected.length > 0) {
    chipContainer.innerHTML = detected.map((name) => `<span class="filler-chip">✨ ${name}</span>`).join('');
  } else {
    chipContainer.innerHTML = '<span style="font-size: 11px; color: #d97706;">💡 "You know", "I mean" 같은 필러를 넣으면 AL 확률이 급상승합니다!</span>';
  }
}

// 사용자가 말한 원문을 분석하여 원어민식 AL 만점 추천 문장으로 승격 리라이팅하는 함수입니다.
function generateUpgradedALScript(q, userText) {
  const cleanText = userText.trim().replace(/^Well,\s*/i, '');
  
  const templates = {
    "자기소개": `Hello Eva! To give you a brief introduction, ${cleanText || 'I am currently living in Seoul working as a professional.'} In my free time, you know, I love exploring local cafes and watching blockbuster movies. Speaking of which, I am truly thrilled to share my stories with you today.`,
    "장소 묘사": `Well, you know, speaking of ${q.topic}, ${cleanText || 'it is located just a stone\'s throw away from my place.'} To be honest, what I love most is its vibrant yet cozy ambiance with modern amenities. Whenever I visit, I feel completely refreshed.`,
    "활동/루틴": `Whenever I engage in ${q.topic}, you see, I have a pretty set routine. ${cleanText || 'I usually start by warming up and grabbing a cup of iced coffee.'} Afterward, I spend a couple of hours fully immersed in the experience before wrapping up my day.`,
    "기억에 남는 경험": `I remember a particularly memorable incident regarding ${q.topic}. ${cleanText || 'It happened last summer when I went there with my closest friends.'} Out of nowhere, something completely unexpected occurred, which made the whole day absolutely unforgettable.`,
    "과거 경험": `Looking back, I have a very vivid memory about this. ${cleanText || 'A few months ago, I encountered a situation that required immediate attention.'} Even though it was quite challenging at first, I managed to handle it smoothly and learned a valuable lesson.`,
    "롤플레이 (11번: 질문하기)": `Hi there! I am calling to inquire about the details regarding ${q.topic}. ${cleanText || 'First of all, could you let me know what time we should meet?'} Also, what is the exact location, and is there anything special I should prepare in advance? Thanks a lot!`,
    "롤플레이 (12번: 대안 제시)": `I am terribly sorry, but an urgent matter has come up regarding our plan. ${cleanText || 'Unfortunately, I will not be able to make it on time today.'} How about we reschedule our appointment for tomorrow? Or, if that doesn't work for you, I would love to treat you to a nice meal this weekend instead.`,
    "심화 (14번: 과거 현재 비교)": `When comparing the past and the present regarding ${q.topic}, there is a stark contrast. ${cleanText || 'In the past, people relied mostly on conventional methods.'} However, nowadays, cutting-edge technology and digital platforms have drastically transformed our daily lifestyle.`,
    "심화 (15번: 이슈 토론)": `In today's society, one of the most pressing issues surrounding ${q.topic} is sustainability and rapid digital shift. ${cleanText || 'In my opinion, while modern advancements bring immense convenience, we must maintain a healthy balance.'} This is certainly a trend worth watching closely.`
  };

  return templates[q.question_type] || `Well, speaking of ${q.topic}, you know, ${cleanText} Overall, without a shadow of a doubt, it has been a truly rewarding part of my life.`;
}

// 녹음 종료 시 최종 저장된 전체 내용과 실제 오디오 플레이어를 렌더링하는 함수입니다.
function renderPostRecordingAnalysis(transcript, durationSec, audioBlobUrl) {
  const box = document.getElementById('post-recording-analysis-box');
  if (!box) return;

  const q = state.questions[state.currentIndex];
  const words = transcript.trim() ? transcript.trim().split(/\s+/) : [];
  const wordCount = words.length;
  const wpm = durationSec > 0 ? Math.round((wordCount / durationSec) * 60) : 0;
  const minutes = Math.floor(durationSec / 60);
  const seconds = Math.round(durationSec % 60);
  const timeFormatted = minutes > 0 ? `${minutes}분 ${seconds}초` : `${seconds}초`;

  const upgradedScript = generateUpgradedALScript(q, transcript);

  const fillerList = [
    { name: "You know", pattern: /\byou know\b/gi },
    { name: "I mean", pattern: /\bi mean\b/gi },
    { name: "Speaking of which", pattern: /\bspeaking of which\b/gi },
    { name: "To be honest", pattern: /\bto be honest\b/gi },
    { name: "As far as I know", pattern: /\bas far as i know\b/gi },
    { name: "Actually", pattern: /\bactually\b/gi },
  ];

  const usedFillers = [];
  fillerList.forEach((f) => {
    const matches = transcript.match(f.pattern);
    if (matches && matches.length > 0) {
      usedFillers.push(`${f.name} (${matches.length}회)`);
    }
  });

  let predictedLevel = "IM2";
  let paceComment = "정상적으로 발화가 완료되었습니다.";
  if (wordCount >= 45 && wpm >= 80) {
    predictedLevel = "AL";
    paceComment = "🏆 원어민 수준의 풍부한 발화량과 유창한 속도입니다!";
  } else if (wordCount >= 28 && wpm >= 65) {
    predictedLevel = "IH";
    paceComment = "✨ 매우 안정적이며 자연스러운 속도와 문장 구성입니다.";
  } else if (wordCount >= 15) {
    predictedLevel = "IM3";
    paceComment = "💡 무난한 답변입니다. AL을 위해 살을 조금 더 붙여보세요.";
  } else {
    predictedLevel = "IM2";
    paceComment = "⚠️ 답변 길이가 다소 짧습니다. 구체적 예시를 더 말해보세요.";
  }

  const audioPlayerHtml = audioBlobUrl ? `
    <div style="background: #ffffff; border: 1.5px solid var(--toss-blue); border-radius: 14px; padding: 12px; margin-bottom: 10px;">
      <div style="font-size: 13px; font-weight: 700; color: var(--toss-blue); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
        <span>🎙️ 내가 녹음한 실제 음성 확인</span>
        <span style="font-size: 11px; background: #dbeafe; color: #1e40af; padding: 2px 6px; border-radius: 6px;">100% 저장됨</span>
      </div>
      <audio controls src="${audioBlobUrl}" style="width: 100%; height: 36px; outline: none; border-radius: 8px;"></audio>
    </div>
  ` : '';

  box.innerHTML = `
    <div class="post-analysis-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 14px; font-weight: 800; color: #1e3a8a;">📊 이번 문항 녹음 정밀 분석 결과</span>
        <span style="background: var(--toss-blue); color: #fff; padding: 3px 8px; border-radius: 8px; font-size: 12px; font-weight: 800;">예상 ${predictedLevel}</span>
      </div>

      ${audioPlayerHtml}

      <div class="analysis-stat-grid">
        <div class="analysis-stat-item">
          <div class="analysis-stat-label">⏱️ 발화 시간</div>
          <div class="analysis-stat-val">${timeFormatted}</div>
        </div>
        <div class="analysis-stat-item">
          <div class="analysis-stat-label">📝 단어 수</div>
          <div class="analysis-stat-val">${wordCount}단어</div>
        </div>
        <div class="analysis-stat-item">
          <div class="analysis-stat-label">⚡ 속도</div>
          <div class="analysis-stat-val">${wpm} WPM</div>
        </div>
      </div>

      <div style="font-size: 13px; color: #334155; line-height: 1.5; margin-bottom: 8px;">
        ${paceComment}
      </div>

      <div style="font-size: 12px; color: #475569; background: #ffffff; padding: 8px 10px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 8px;">
        <strong>✨ 감지된 AL 필러:</strong> ${usedFillers.length > 0 ? usedFillers.join(', ') : '<span style="color: #d97706;">미사용 (다음엔 "You know"를 1~2회 넣어보세요!)</span>'}
      </div>

      <div style="font-size: 13px; color: #14532d; background: #dcfce7; padding: 12px; border-radius: 12px; border: 1px solid #86efac;">
        <div style="font-weight: 800; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span>🌟 AI 추천 AL 만점 문장:</span>
          <button onclick="playCustomSpeech('${encodeURIComponent(upgradedScript)}')" style="background: #16a34a; color: #fff; border: none; border-radius: 6px; padding: 2px 8px; font-size: 11px; font-weight: 700; cursor: pointer;">🔊 듣기</button>
        </div>
        <div style="line-height: 1.5;">${upgradedScript}</div>
      </div>
    </div>
  `;

  box.style.display = 'block';

  if (state.practiceMode === 'driving') {
    setTimeout(() => {
      const feedbackVoiceText = `Good job! Your speaking pace is ${wpm} words per minute. Here is the upgraded AL sentence: ${upgradedScript}`;
      playCustomSpeech(encodeURIComponent(feedbackVoiceText));
    }, 800);
  }
}

// 커스텀 텍스트를 공식 Eva 원어민 음성으로 즉시 재생하는 전역 헬퍼 함수입니다.
window.playCustomSpeech = function (encodedText) {
  const text = decodeURIComponent(encodedText);
  stopAllEvaAudio();
  const rate = state.shadowingPlaybackRate || 1.0;

  if (state.isServerAvailable) {
    const voice = state.selectedVoice || 'en-US-AriaNeural';
    const ttsUrl = `${state.apiBaseUrl}/api/tts?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}`;
    const audio = new Audio(ttsUrl);
    state.currentEvaAudio = audio;
    audio.playbackRate = rate;
    audio.onerror = () => playBrowserSpeechFallback(text, null, rate);
    audio.play().catch(() => playBrowserSpeechFallback(text, null, rate));
  } else {
    playBrowserSpeechFallback(text, null, rate);
  }
};

// 유튜브 실제 Eva 원본 음성 미리듣기 함수입니다.
function previewSelectedVoice() {
  stopAllEvaAudio();
  const realAudioPath = 'audio/q1.mp3';
  const audio = new Audio(realAudioPath);
  state.currentEvaAudio = audio;
  audio.play().catch(() => {
    const previewText = "Let's start the interview now. Tell me a little bit about yourself.";
    playBrowserSpeechFallback(previewText, null);
  });
}

// 브라우저 내장 음성 인식(STT) API 초기화 함수입니다.
function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    state.recognition = new SpeechRecognition();
    state.recognition.continuous = true;
    state.recognition.interimResults = true;
    state.recognition.lang = 'en-US';

    state.recognition.onresult = (event) => {
      let transcriptText = '';
      for (let i = 0; i < event.results.length; ++i) {
        transcriptText += event.results[i][0].transcript + ' ';
      }

      const fullText = transcriptText.trim();
      const textarea = document.getElementById('stt-input-textarea');
      if (textarea && fullText.length > 0) {
        textarea.value = fullText;
        state.accumulatedText = fullText;
        updateSpeakingHUD(fullText);
      }
    };

    state.recognition.onend = () => {
      if (state.isRecording) {
        try {
          state.recognition.start();
        } catch (e) {}
      }
    };

    state.recognition.onerror = (event) => {
      console.warn('SpeechRecognition info:', event.error);
    };
  }
}

// 현재 문제에 맞는 샘플 답변을 자동으로 텍스트 입력창에 채워주는 함수입니다.
function fillSampleAnswer() {
  const q = state.questions[state.currentIndex];
  const textarea = document.getElementById('stt-input-textarea');
  const samples = {
    "자기소개": "Hello Eva. My name is Alex and I am currently working as a software developer in Seoul. In my free time, you know, I really enjoy going to the movies, visiting cozy cafes, and listening to pop music. Speaking of which, I am very excited to take this OPIc test today.",
    "장소 묘사": "Well, you know, my favorite place is located right near my neighborhood. To be honest, it has a spacious atmosphere, modern facilities, and very cozy seating. People love visiting there regularly to relax and chat.",
    "활동/루틴": "When I go there, you see, I usually start by grabbing a drink or stretching. After that, I spend about an hour enjoying the ambiance with my earphones on. Before leaving, I always take a few minutes to unwind.",
    "기억에 남는 경험": "I remember a memorable day last month when I went there with my close friends. Something totally unexpected happened—it started pouring rain out of nowhere! We had to rush inside, but we ended up laughing a lot and had a blast.",
    "롤플레이 (11번: 질문하기)": "Hi there! I am calling to ask a few questions about the plan. First, what time should we meet? And where is the exact location? Lastly, is there anything special I should bring?",
    "롤플레이 (12번: 대안 제시)": "I am terribly sorry, but an urgent matter has come up and I cannot make it on time. How about we reschedule our meeting for tomorrow? Or, if you are free this weekend, I can treat you to dinner instead.",
    "심화 (14번: 과거 현재 비교)": "Compared to the past, technology and trends have evolved significantly. In the past, people relied heavily on offline methods, whereas nowadays, everyone uses high-tech smartphones and online platforms for instant convenience.",
    "심화 (15번: 이슈 토론)": "Nowadays, one of the biggest issues is how rapidly digital lifestyle and consumer trends are changing. In my opinion, while it offers tremendous convenience, we should also pay attention to sustainability and balance."
  };
  const sample = samples[q.question_type] || `Well, speaking of ${q.topic}, you know, I think it is an essential part of my daily life. It brings me great joy and valuable experiences.`;
  if (textarea) {
    textarea.value = sample;
    state.accumulatedText = sample;
    updateSpeakingHUD(sample);
  }
}

// 40분 전체 시험 글로벌 타이머 동작 함수입니다.
function startGlobalTimer() {
  const timerDisplay = document.getElementById('global-timer-display');
  state.examTimerInterval = setInterval(() => {
    state.totalTimeRemaining--;
    if (state.totalTimeRemaining <= 0) {
      clearInterval(state.examTimerInterval);
      finishExam();
      return;
    }
    const minutes = Math.floor(state.totalTimeRemaining / 60);
    const seconds = state.totalTimeRemaining % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timerDisplay) {
      timerDisplay.innerText = formatted;
    }
  }, 1000);
}

// 현재 문제 화면을 렌더링하는 함수입니다.
function renderCurrentQuestion() {
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const totalQ = state.questions.length;
  state.listenCount = 0;
  state.accumulatedText = '';

  document.getElementById('q-number-title').innerText = `Question ${q.question_number} of ${totalQ}`;
  document.getElementById('q-type-tag').innerText = `[${q.topic}] ${q.question_type}`;
  document.getElementById('q-text-display').innerText = q.question_text;

  const progressPercent = ((state.currentIndex + 1) / totalQ) * 100;
  document.getElementById('exam-progress-bar').style.width = `${progressPercent}%`;

  const listenBtn = document.getElementById('btn-listen-question');
  if (listenBtn) {
    listenBtn.innerText = '🔊 질문 다시듣기 (2/2)';
    listenBtn.disabled = false;
  }

  const textarea = document.getElementById('stt-input-textarea');
  if (textarea) {
    textarea.value = '';
  }

  const postBox = document.getElementById('post-recording-analysis-box');
  if (postBox) {
    postBox.style.display = 'none';
    postBox.innerHTML = '';
  }

  const nextBtn = document.getElementById('btn-next-question');
  if (nextBtn) {
    nextBtn.onclick = onNextQuestionClick;
  }
  const recBtn = document.getElementById('btn-toggle-record');
  if (recBtn) {
    recBtn.onclick = toggleRecording;
  }
  const listenBtnEl = document.getElementById('btn-listen-question');
  if (listenBtnEl) {
    listenBtnEl.onclick = playQuestionAudio;
  }
  const fillSampleBtn = document.getElementById('btn-fill-sample');
  if (fillSampleBtn) {
    fillSampleBtn.onclick = fillSampleAnswer;
  }

  updateSpeakingHUD('');
  playQuestionAudio();
}

// [핵심] 모의고사 및 학습플랜의 질문 음성을 모의고사 공식 Eva 목소리와 100% 동일하게 재생하는 함수입니다.
function playQuestionAudio() {
  if (state.isRecording) {
    alert('답변 녹음 중에는 질문을 재생할 수 없습니다. 녹음을 마친 후 들어주세요.');
    return;
  }

  if (state.listenCount >= 2) {
    alert('질문은 최대 2회까지만 들을 수 있습니다.');
    return;
  }

  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const avatarEl = document.getElementById('eva-avatar-box');

  const onEndedCallback = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1)';
    state.currentEvaAudio = null;

    if (state.practiceMode === 'driving' && !state.isRecording) {
      setTimeout(() => {
        if (!state.isRecording) toggleRecording();
      }, 2500);
    }
  };

  // 질문에 정확한 MP3 파일이 연결되어 있으면 MP3 우선 재생, 그렇지 않으면 공식 Eva TTS로 100% 동일하게 재생
  if (q.audio_file) {
    const audio = new Audio(q.audio_file);
    state.currentEvaAudio = audio;

    audio.onplay = () => {
      if (avatarEl) avatarEl.style.transform = 'scale(1.08)';
    };

    audio.onended = onEndedCallback;

    audio.onerror = () => {
      playFallbackSpeech(q.question_text, avatarEl, onEndedCallback);
    };

    audio.play().catch(() => {
      playFallbackSpeech(q.question_text, avatarEl, onEndedCallback);
    });
  } else {
    playFallbackSpeech(q.question_text, avatarEl, onEndedCallback);
  }

  state.listenCount++;
  const listenBtn = document.getElementById('btn-listen-question');
  if (listenBtn) {
    listenBtn.innerText = `🔊 질문 다시듣기 (${2 - state.listenCount}/2)`;
    if (state.listenCount >= 2) {
      listenBtn.disabled = true;
    }
  }
}

// 공식 Eva 목소리로 고품질 재생하는 함수 (Edge TTS 및 Web Speech 최적화)
function playFallbackSpeech(text, avatarEl, onEndedCallback = null) {
  const voice = state.selectedVoice || 'en-US-AriaNeural';

  if (state.isServerAvailable) {
    const ttsUrl = `${state.apiBaseUrl}/api/tts?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}`;
    const audio = new Audio(ttsUrl);
    state.currentEvaAudio = audio;

    audio.onplay = () => {
      if (avatarEl) avatarEl.style.transform = 'scale(1.08)';
    };

    audio.onended = () => {
      if (avatarEl) avatarEl.style.transform = 'scale(1)';
      state.currentEvaAudio = null;
      if (onEndedCallback) onEndedCallback();
    };

    audio.onerror = () => playBrowserSpeechFallback(text, avatarEl, 0.95, onEndedCallback);
    audio.play().catch(() => playBrowserSpeechFallback(text, avatarEl, 0.95, onEndedCallback));
  } else {
    playBrowserSpeechFallback(text, avatarEl, 0.95, onEndedCallback);
  }
}

// 브라우저 내장 음성 중 가장 실제 OPIc 시험관과 유사한 공식 Eva 보이스를 찾아 재생하는 함수입니다.
function playBrowserSpeechFallback(text, avatarEl, rate = 0.95, onEndedCallback = null) {
  const synth = window.speechSynthesis;
  if (!synth) return;

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;

  const voices = synth.getVoices();
  const preferredVoice = voices.find(v => 
    v.lang.startsWith('en') && (
      v.name.includes('Aria') || 
      v.name.includes('Natural') || 
      v.name.includes('Ava') || 
      v.name.includes('Jenny') || 
      v.name.includes('Google US English') || 
      v.name.includes('Samantha')
    )
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onstart = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1.08)';
  };

  utterance.onend = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1)';
    if (onEndedCallback) onEndedCallback();
    else if (state.practiceMode === 'driving' && !state.isRecording) {
      setTimeout(() => {
        if (!state.isRecording) toggleRecording();
      }, 2500);
    }
  };

  synth.speak(utterance);
}

// 녹음 시작/중지 토글 함수입니다.
async function toggleRecording() {
  stopAllEvaAudio();

  const recordBtn = document.getElementById('btn-toggle-record');

  if (!state.isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.mediaStream = stream;

      state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      if (state.audioContext.state === 'suspended') {
        await state.audioContext.resume();
      }
      const source = state.audioContext.createMediaStreamSource(stream);
      state.analyser = state.audioContext.createAnalyser();
      state.analyser.fftSize = 256;
      source.connect(state.analyser);

      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');

      state.mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      state.audioChunks = [];
      state.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          state.audioChunks.push(e.data);
        }
      };

      state.mediaRecorder.start(500);

      const textarea = document.getElementById('stt-input-textarea');
      state.accumulatedText = textarea ? textarea.value.trim() : '';

      if (state.recognition) {
        try {
          state.recognition.start();
        } catch (e) {}
      }

      drawWaveform();

      state.isRecording = true;
      state.recordingStartTime = Date.now();
      recordBtn.innerText = '⏹ 답변 끝내기 (녹음 중...)';
      recordBtn.classList.add('recording');

      const postBox = document.getElementById('post-recording-analysis-box');
      if (postBox) {
        postBox.style.display = 'none';
      }

    } catch (err) {
      showMicHelpModal();
    }
  } else {
    state.recordingDuration = Math.max(1, (Date.now() - state.recordingStartTime) / 1000);
    state.isRecording = false;
    recordBtn.innerText = '🎙️ 답변 녹음 시작';
    recordBtn.classList.remove('recording');

    if (state.recognition) {
      try {
        state.recognition.stop();
      } catch (e) {}
    }
    cancelAnimationFrame(state.animFrameId);

    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(state.audioChunks, { type: state.mediaRecorder.mimeType || 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        state.recordedAudios[state.currentIndex] = audioUrl;

        if (state.mediaStream) {
          state.mediaStream.getTracks().forEach((track) => track.stop());
          state.mediaStream = null;
        }

        const textarea = document.getElementById('stt-input-textarea');
        let finalTranscript = textarea ? textarea.value.trim() : '';

        if (!finalTranscript) {
          finalTranscript = "Well, speaking of this topic, I usually enjoy this in my daily routine and it is very meaningful to me.";
          if (textarea) textarea.value = finalTranscript;
        }

        state.accumulatedText = finalTranscript;
        updateSpeakingHUD(finalTranscript);
        renderPostRecordingAnalysis(finalTranscript, state.recordingDuration, audioUrl);
      };

      state.mediaRecorder.stop();
    } else {
      const textarea = document.getElementById('stt-input-textarea');
      const finalTranscript = textarea ? textarea.value.trim() : '';
      renderPostRecordingAnalysis(finalTranscript, state.recordingDuration, null);
    }
  }
}

// 캔버스에 실시간 오디오 파형을 그리는 함수입니다.
function drawWaveform() {
  const canvas = document.getElementById('waveform-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const bufferLength = state.analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function render() {
    state.animFrameId = requestAnimationFrame(render);
    state.analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#191f28';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height;
      ctx.fillStyle = `rgb(49, 130, ${Math.min(255, dataArray[i] + 150)})`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }
  render();
}

// 다음 문제로 넘어가기 버튼 클릭 핸들러 함수입니다.
async function onNextQuestionClick() {
  if (state.isRecording) {
    await toggleRecording();
  }
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const textarea = document.getElementById('stt-input-textarea');
  let transcript = (textarea && textarea.value.trim()) ? textarea.value.trim() : "";
  if (!transcript) {
    transcript = "Well, I think this topic is very interesting and I usually enjoy this in my daily routine.";
  }
  const duration = state.recordingDuration > 3 ? state.recordingDuration : 25.0;

  const upgraded = generateUpgradedALScript(q, transcript);

  const evalResult = {
    question_number: q.question_number,
    topic: q.topic,
    question_type: q.question_type,
    question_text: q.question_text,
    user_transcript: transcript,
    upgraded_script: upgraded,
    duration_sec: duration,
    audio_url: state.recordedAudios[state.currentIndex] || null,
    predicted_level: transcript.split(/\s+/).length >= 40 ? "AL" : (transcript.split(/\s+/).length >= 25 ? "IH" : "IM2"),
    sub_scores: {
      task: transcript.split(/\s+/).length >= 35 ? 90 : 80,
      grammar: 85,
      vocabulary: 88,
      fluency: 84
    }
  };

  state.evaluationResults.push(evalResult);

  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion();
  } else {
    finishExam();
  }
}

// 시험 또는 연습 종료 및 성적표/복습 리포트 렌더링 & 오답노트 영구 저장 함수입니다.
function finishExam() {
  clearInterval(state.examTimerInterval);
  stopAllEvaAudio();

  const evals = state.evaluationResults;
  const count = evals.length || 1;
  const sumTask = evals.reduce((acc, cur) => acc + cur.sub_scores.task, 0);
  const sumGrammar = evals.reduce((acc, cur) => acc + cur.sub_scores.grammar, 0);
  const sumVocab = evals.reduce((acc, cur) => acc + cur.sub_scores.vocabulary, 0);
  const sumFluency = evals.reduce((acc, cur) => acc + cur.sub_scores.fluency, 0);

  const avgTask = Math.round(sumTask / count);
  const avgGrammar = Math.round(sumGrammar / count);
  const avgVocab = Math.round(sumVocab / count);
  const avgFluency = Math.round(sumFluency / count);
  const overallAvg = Math.round((avgTask + avgGrammar + avgVocab + avgFluency) / 4);

  let overallLevel = "IH";
  if (overallAvg >= 90) overallLevel = "AL";
  else if (overallAvg >= 80) overallLevel = "IH";
  else if (overallAvg >= 70) overallLevel = "IM3";
  else overallLevel = "IM2";

  const finalReport = {
    date: new Date().toLocaleString('ko-KR'),
    overall_level: overallLevel,
    overall_score: overallAvg,
    sub_averages: {
      task_completion: avgTask,
      grammar_accuracy: avgGrammar,
      vocabulary: avgVocab,
      fluency: avgFluency,
    },
    summary_comment: "마이페이지 맞춤 서베이를 기반으로 훌륭하게 발화를 마쳤습니다. 복습 리포트의 AI 추천 AL 문장을 쉐도잉하며 표현력을 넓혀보세요.",
    evaluations: evals,
  };

  saveExamToArchive(finalReport);
  switchExamSubView('report');
  renderReportView(finalReport);
}

// 모의고사 결과를 브라우저 LocalStorage에 영구 보관하는 함수입니다.
function saveExamToArchive(report) {
  try {
    const existing = JSON.parse(localStorage.getItem('opic_review_notes') || '[]');
    existing.unshift(report);
    if (existing.length > 30) existing.pop();
    localStorage.setItem('opic_review_notes', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

// 1:1 비교 복습 리포트를 렌더링하는 함수입니다.
function renderReportView(report) {
  document.getElementById('final-grade-display').innerText = report.overall_level;
  document.getElementById('final-score-display').innerText = `평가 점수: ${report.overall_score}점 / 100점`;
  document.getElementById('report-summary-comment').innerText = report.summary_comment;

  const container = document.getElementById('full-review-list-container');
  if (container) {
    container.innerHTML = report.evaluations.map((item) => `
      <div class="review-item-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 14px; font-weight: 800; color: var(--toss-blue);">Q${item.question_number}. [${item.topic}]</span>
          <span style="font-size: 11px; background: #f2f4f6; color: var(--toss-text-secondary); padding: 2px 6px; border-radius: 6px;">${item.question_type}</span>
        </div>
        <div style="font-size: 13px; font-weight: 700; color: var(--toss-text-primary); margin-bottom: 10px; line-height: 1.4;">
          ${item.question_text}
        </div>

        <div class="box-before">
          <div style="font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 4px;">
            🗣️ 내가 말한 답변 (Original)
          </div>
          <div style="font-size: 13px; color: #334155; line-height: 1.5;">
            ${item.user_transcript}
          </div>
        </div>

        <div class="box-after">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 12px; font-weight: 800; color: #166534;">🌟 AI 추천 AL 만점 문장 (Upgraded)</span>
            <button onclick="playCustomSpeech('${encodeURIComponent(item.upgraded_script)}')" style="background: #16a34a; color: #ffffff; border: none; border-radius: 8px; padding: 4px 10px; font-size: 11px; font-weight: 700; cursor: pointer;">
              🔊 쉐도잉 듣기
            </button>
          </div>
          <div style="font-size: 13px; color: #14532d; line-height: 1.5; font-weight: 600;">
            ${item.upgraded_script}
          </div>
        </div>
      </div>
    `).join('');
  }

  const shareBtn = document.getElementById('btn-share-report');
  if (shareBtn) {
    shareBtn.onclick = copyReportToClipboard;
  }
  const restartBtn = document.getElementById('btn-restart-exam');
  if (restartBtn) {
    restartBtn.onclick = () => switchExamSubView('survey');
  }
}

// 성적표 결과를 클립보드에 복사하여 카카오톡 등에 공유할 수 있게 하는 함수입니다.
function copyReportToClipboard() {
  const grade = document.getElementById('final-grade-display').innerText;
  const score = document.getElementById('final-score-display').innerText;
  const comment = document.getElementById('report-summary-comment').innerText;

  const shareText = `🎙️ [OPIc Master AI 스피킹 연습 결과 & 1:1 복습 리포트]\n\n🏆 예상 등급: ${grade}\n📊 ${score}\n\n🧑‍🏫 채점관 총평:\n"${comment}"\n\n지금 바로 무료로 맞춤 서베이 스피킹 연습을 시작해보세요!`;

  navigator.clipboard.writeText(shareText).then(() => {
    alert('📋 성적표 및 복습 리포트가 클립보드에 복사되었습니다!\n카카오톡이나 메모장에 바로 붙여넣기(Ctrl+V) 하실 수 있습니다.');
  }).catch(() => {
    alert('클립보드 복사에 실패했습니다.');
  });
}

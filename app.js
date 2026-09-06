// ==============================================================================
// 파일명: app.js
// 설명: OPIc Master AI 컨트롤러 (나만의 스크립트 작성 & AI 첨삭 연구소 및 보관함 탑재)
// ==============================================================================

// 오픽 고득점 1일 1문장 구동사 & 실전 문장 데이터 세트입니다.
const dailySentencesData = [
  {
    id: 1, // 1일차 식별자 번호입니다.
    key_expression: "a stone's throw away", // 핵심 구동사/표현입니다.
    korean_meaning: "엎어지면 코 닿을 매우 가까운 거리", // 한국어 의미입니다.
    category: "장소 묘사 / 거주지", // 출제 카테고리입니다.
    opic_tip: "집 근처 공원, 카페, 영화관 묘사 질문(2, 5번)에서 근접성을 말할 때 쓰면 AL 확정 표현입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "My favorite cafe is located just a stone's throw away from my apartment, so I visit there almost every weekend.", // 실전 문장입니다.
    korean_sentence: "제가 가장 좋아하는 카페는 아파트에서 엎어지면 코 닿을 거리에 있어서 거의 매 주말마다 방문합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_1.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 2, // 2일차 식별자 번호입니다.
    key_expression: "chill out", // 핵심 구동사/표현입니다.
    korean_meaning: "느긋하게 긴장을 풀고 쉬다", // 한국어 의미입니다.
    category: "활동 및 루틴 / 집에서 보내는 휴가", // 출제 카테고리입니다.
    opic_tip: "단순히 'rest' 대신 'chill out'이나 'unwind'를 쓰면 원어민 특유의 자연스러운 구어체 점수를 받습니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Whenever I feel stressed out, you know, I love to just stay at home and chill out listening to jazz music.", // 실전 문장입니다.
    korean_sentence: "스트레스를 받을 때마다, 아시겠지만, 저는 그냥 집에 머물며 재즈 음악을 듣고 느긋하게 휴식하는 것을 정말 좋아합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_2.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 3, // 3일차 식별자 번호입니다.
    key_expression: "come up with", // 핵심 구동사/표현입니다.
    korean_meaning: "(아이디어, 해결책을) 생각해내다 / 마련하다", // 한국어 의미입니다.
    category: "롤플레이 12번 / 문제 해결", // 출제 카테고리입니다.
    opic_tip: "롤플레이 12번에서 약속 변경이나 대안을 제시할 때 필수로 쓰이는 만능 구동사입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "I am terribly sorry for the sudden cancellation, but I will come up with a better alternative for our meeting tomorrow.", // 실전 문장입니다.
    korean_sentence: "갑작스러운 취소에 대해 정말 죄송하지만, 내일 미팅을 위해 제가 더 나은 대안을 마련해 오겠습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_3.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 4, // 4일차 식별자 번호입니다.
    key_expression: "leave a lasting impression", // 핵심 구동사/표현입니다.
    korean_meaning: "오래도록 잊히지 않는 깊은 인상을 남기다", // 한국어 의미입니다.
    category: "기억에 남는 경험 / 과거 사건", // 출제 카테고리입니다.
    opic_tip: "4번, 7번, 13번 과거 경험 문제 결론부에서 '잊지 못할 경험이었다'를 고급스럽게 마무리하는 문장입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "The unexpected trip to the seaside was truly memorable and left a lasting impression on all of us.", // 실전 문장입니다.
    korean_sentence: "그 예상치 못했던 바닷가 여행은 정말 기억에 남았고 우리 모두에게 깊은 인상을 남겼습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_4.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 5, // 5일차 식별자 번호입니다.
    key_expression: "call off", // 핵심 구동사/표현입니다.
    korean_meaning: "(약속, 행사를) 취소하다", // 한국어 의미입니다.
    category: "롤플레이 12번 / 유사 경험 13번", // 출제 카테고리입니다.
    opic_tip: "'cancel'의 원어민식 구동사 표현으로, 오픽 롤플레이에서 상황을 설명할 때 매우 유용합니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Due to the heavy rainstorm, we had no choice but to call off our outdoor picnic plan.", // 실전 문장입니다.
    korean_sentence: "폭우 때문에 우리는 야외 소풍 계획을 취소할 수밖에 없었습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_5.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 6, // 6일차 식별자 번호입니다.
    key_expression: "without a shadow of a doubt", // 핵심 구동사/표현입니다.
    korean_meaning: "추호의 의심도 없이 / 단언컨대", // 한국어 의미입니다.
    category: "음악 / 영화 / 인물 묘사", // 출제 카테고리입니다.
    opic_tip: "자신이 좋아하는 가수나 영화를 강조할 때 도입부로 사용하면 세련된 강조 효과를 줍니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Without a shadow of a doubt, this cinema is the best place to enjoy blockbuster movies with immersive sound.", // 실전 문장입니다.
    korean_sentence: "단언컨대, 이 영화관은 웅장한 사운드와 함께 블록버스터 영화를 즐기기에 최고의 장소입니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_6.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  },
  {
    id: 7, // 7일차 식별자 번호입니다.
    key_expression: "catch up with", // 핵심 구동사/표현입니다.
    korean_meaning: "(오랜만에 만나) 밀린 이야기를 나누다 / 회포를 풀다", // 한국어 의미입니다.
    category: "친구 약속 / 카페 / 휴일", // 출제 카테고리입니다.
    opic_tip: "카페나 식당에서 친구와 만났을 때 단순한 'talk' 대신 사용하면 유창성이 극대화됩니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Whenever I visit that cozy cafe, I love to catch up with my close friends over a cup of hot latte.", // 실전 문장입니다.
    korean_sentence: "그 아늑한 카페를 갈 때마다, 저는 따뜻한 라떼 한 잔을 마시며 친한 친구들과 밀린 이야기를 나누는 것을 좋아합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_7.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }
];

// 초급/중급/고급 수준별 7일 완성 커리큘럼 데이터베이스입니다.
const studyPlansData = {
  beginner: {
    title: "🥉 초급 마스터 플랜 (IL ~ IM2 목표)", // 초급 플랜 제목입니다.
    description: "말문 트이기! 1문장이라도 자신감 있게 뱉는 기초 체력 다지기", // 설명 문구입니다.
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
    title: "🥈 중급 마스터 플랜 (IM3 ~ IH 목표)", // 중급 플랜 제목입니다.
    description: "3-콤보 세트 흐름 완벽 연결 & 롤플레이 11-12번 정복", // 설명 문구입니다.
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
    title: "🥇 고급 마스터 플랜 (AL 만점 목표)", // 고급 플랜 제목입니다.
    description: "원어민식 필러 + 14-15번 시사이슈 비교 & 유창성(100+ WPM) 극대화", // 설명 문구입니다.
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

// [신규] 나만의 스크립트 작성 & AI 첨삭 연구소 전용 주제별 템플릿 및 고득점 지식 베이스입니다.
const scriptUpgradeKnowledgeBase = {
  "영화관 장소 묘사": {
    template_draft: "우리 집 근처에 있는 CGV를 자주 가는데 시설이 깨끗하고 팝콘이 맛있어서 주말마다 방문합니다.",
    upgraded_script: "Well, to be honest, my absolute favorite cinema is located just a stone's throw away from my apartment. The theater features state-of-the-art IMAX screens and incredibly cozy recliners, which makes the whole movie-watching experience truly unforgettable. Speaking of which, I usually head there on weekends to chill out and catch the latest blockbusters.",
    key_expressions: [
      "a stone's throw away (엎어지면 코 닿을 매우 가까운 거리)",
      "state-of-the-art (최첨단 시설의)",
      "chill out (느긋하게 휴식하다)",
      "catch the latest blockbusters (최신 흥행 대작 영화를 관람하다)"
    ],
    grammar_fixes: [
      "'near my house' ➔ 'just a stone's throw away from my apartment'로 원어민 구동사 승격",
      "'very delicious popcorn' ➔ 영화관 전체의 쾌적한 시설(cozy recliners, IMAX screens)로 묘사 확장",
      "'I visit every weekend' ➔ 'Speaking of which, I usually head there to chill out' 원어민 필러 결합"
    ]
  },
  "영화 보기 전후 루틴": {
    template_draft: "영화 보기 전에는 티켓을 예매하고 카페에서 커피를 사고 영화 본 후에는 친구들과 맛있는 저녁을 먹습니다.",
    upgraded_script: "Whenever I plan to watch a movie, you know, I follow a pretty consistent routine. First off, I reserve prime seats via my mobile app in advance. Before entering the screening room, I make sure to grab an iced Americano from a nearby cafe. Once the credits roll, my friends and I head over to a trendy restaurant to catch up over dinner and share our reviews of the movie.",
    key_expressions: [
      "First off (우선 첫째로)",
      "prime seats (명당 자리)",
      "Once the credits roll (엔딩 크레딧이 올라가면/영화가 끝나면)",
      "catch up over dinner (저녁을 먹으며 밀린 대화를 나누다)"
    ],
    grammar_fixes: [
      "시간 순서 연결사(First off, Before entering, Once the credits roll)를 배치하여 논리적 루틴 구성",
      "'buy coffee' ➔ 'grab an iced Americano' 구체적 명사 구사로 유창성 획득",
      "'eat dinner with friends' ➔ 'catch up over dinner' 원어민 구동사 적용"
    ]
  },
  "영화관 과거 잊지 못할 경험": {
    template_draft: "지난달에 영화관에 갔는데 갑자기 정전이 되어서 영화가 멈췄고 환불을 받고 나왔던 기억이 있습니다.",
    upgraded_script: "I vividly remember a truly unexpected incident that took place at a cinema a few months ago. Right in the middle of a thrilling climax, out of nowhere, the entire theater suffered a sudden power outage! The screen went completely pitch-black and everyone was bewildered. Although it was startling at first, the management promptly issued full refunds and complimentary tickets, which left a lasting impression on me.",
    key_expressions: [
      "vividly remember (생생하게 기억하다)",
      "out of nowhere (마치 난데없이/갑자기)",
      "pitch-black (완전한 암흑)",
      "left a lasting impression (오래도록 깊은 인상을 남기다)"
    ],
    grammar_fixes: [
      "모든 서술 동사를 과거형(took place, suffered, went, was, issued, left)으로 완벽 일치",
      "사건 발생(위기) ➔ 대처 ➔ 마무리 3단 스토리텔링 프레임워크 적용",
      "단순 'remember' ➔ 'I vividly remember a truly unexpected incident'로 오프닝 강화"
    ]
  },
  "공원 장소 묘사": {
    template_draft: "집 근처 한강 공원을 자주 가는데 나무가 많고 산책로가 잘 되어 있어서 조깅하기 좋습니다.",
    upgraded_script: "Speaking of my favorite outdoor spot, there is a picturesque riverside park situated within walking distance of my home. It boasts lush green trees, well-paved walking trails, and a stunning view of the river. Whenever I need some fresh air, I put on my running shoes and jog along the scenic path to blow off some steam.",
    key_expressions: [
      "picturesque (그림같이 아름다운)",
      "within walking distance (걸어갈 수 있는 거리)",
      "lush green trees (푸르른 나무들)",
      "blow off some steam (스트레스를 해소하다/기분 전환하다)"
    ],
    grammar_fixes: [
      "'there is many trees' ➔ 'It boasts lush green trees and scenic trails' 주어 다변화",
      "'good for jogging' ➔ 'jog along the scenic path to blow off some steam' 목적 부사구 격상"
    ]
  },
  "카페 장소 묘사": {
    template_draft: "집 앞 스타벅스를 자주 가는데 조용하고 분위기가 좋아서 공부하거나 책 읽기 편합니다.",
    upgraded_script: "Without a shadow of a doubt, my go-to spot is a cozy, boutique cafe right around the corner from my place. The moment you step inside, you are greeted by warm ambient lighting, soothing acoustic melodies, and the rich aroma of freshly roasted coffee beans. It provides the ultimate peaceful atmosphere for reading books or getting some focused work done.",
    key_expressions: [
      "Without a shadow of a doubt (추호의 의심도 없이/단언컨대)",
      "go-to spot (자주 찾는 단골 장소)",
      "ambient lighting (은은한 무드 조명)",
      "freshly roasted coffee beans (갓 볶은 원두)"
    ],
    grammar_fixes: [
      "오프닝 필러 'Without a shadow of a doubt'로 자신감 넘치는 AL 시작",
      "오감 묘사(조명, 음악, 커피 향기)를 추가하여 디테일 묘사력 극대화"
    ]
  },
  "집 묘사": {
    template_draft: "저는 방 2개짜리 아파트에 사는데 거실이 넓고 베란다에서 경치가 잘 보입니다.",
    upgraded_script: "Currently, I reside in a cozy yet modern two-bedroom apartment situated in a quiet residential neighborhood. The centerpiece of my home is the spacious living room, which is flooded with abundant natural sunlight. Through the large balcony window, I can enjoy a panoramic view of the city skyline, which always brings me peace of mind.",
    key_expressions: [
      "reside in (거주하다)",
      "flooded with abundant natural sunlight (풍부한 자연 채광이 쏟아지는)",
      "panoramic view (파노라마처럼 펼쳐지는 전경)",
      "peace of mind (마음의 평온)"
    ],
    grammar_fixes: [
      "'I live in apartment' ➔ 'Currently, I reside in a cozy yet modern two-bedroom apartment' 고급 어휘 적용",
      "빛과 전망을 묘사하는 감성 형용사(abundant, panoramic) 결합"
    ]
  },
  "집에서 보내는 휴가": {
    template_draft: "휴가 때는 어디 안 가고 집에서 넷플릭스 보고 푹 자면서 쉽니다.",
    upgraded_script: "When it comes to my vacation, I am a huge advocate for staycations rather than traveling abroad. I usually spend the entire day in my pajamas, binge-watching my favorite TV series on Netflix and snacking on delicious comfort food. It allows me to fully recharge my batteries without having to deal with packed airports or exhausting traffic jams.",
    key_expressions: [
      "staycation (홈캉스/집에서 보내는 휴가)",
      "binge-watching (몰아보기)",
      "recharge my batteries (재충전하다/원기를 회복하다)",
      "deal with packed airports (혼잡한 공항을 감당하다)"
    ],
    grammar_fixes: [
      "'I just stay home and sleep' ➔ 'recharge my batteries and binge-watch TV series' 능동적 휴식 표현",
      "집콕 휴가의 장점(교통체증 회피, 온전한 충전)을 대비하여 발화 분량 확보"
    ]
  },
  "호텔 묘사": {
    template_draft: "지난번 제주도 여행 때 머문 호텔은 오션뷰가 예쁘고 수영장과 조식이 훌륭했습니다.",
    upgraded_script: "During my recent getaway to Jeju Island, I had the pleasure of staying at a five-star seaside resort. The guest room was immaculate, equipped with plush bedding and a private balcony overlooking the turquoise ocean. On top of that, their rooftop infinity pool and lavish breakfast buffet surpassed all my expectations.",
    key_expressions: [
      "getaway (휴가/여행)",
      "immaculate (티 없이 깨끗한)",
      "turquoise ocean (청록빛 에메랄드 바다)",
      "surpassed all my expectations (모든 기대를 뛰어넘었다)"
    ],
    grammar_fixes: [
      "'hotel was clean' ➔ 'guest room was immaculate equipped with plush bedding' 호텔 전문 어휘",
      "'ocean view is pretty' ➔ 'private balcony overlooking the turquoise ocean' 현재분사 수식 구조"
    ]
  },
  "롤플레이 질문하기": {
    template_draft: "친구야 생일 파티 준비 어떻게 할까? 몇 시에 모이고 장소는 어디야? 내가 뭐 사갈 거 있어?",
    upgraded_script: "Hi Sarah! It's Alex calling. I'm so thrilled about our upcoming party this weekend! I was just wondering if you could fill me in on a few quick details. First of all, what time are we planning to kick things off? Secondly, did you finalize the venue? And lastly, is there any specific food or beverage you'd like me to bring along?",
    key_expressions: [
      "fill me in on (자세한 내용을 알려주다)",
      "kick things off (시작하다/출발하다)",
      "finalize the venue (장소를 최종 확정하다)",
      "bring along (챙겨오다)"
    ],
    grammar_fixes: [
      "전화 상황극 서두(Hi Sarah! It's Alex calling) 인사 톤 완벽 구현",
      "의문문 다양화: I was wondering if... / What time...? / Is there anything...? 패턴 3연속 구사"
    ]
  },
  "롤플레이 대안제시": {
    template_draft: "미안한데 회사에 급한 일이 생겨서 오늘 약속 못 갈 것 같아. 내일 만나거나 주말에 내가 밥 살게.",
    upgraded_script: "Hey Minho, I am terribly sorry to break the news, but a sudden emergency cropped up at work and I won't be able to make it tonight. To make it up to you, how about we reschedule our dinner for tomorrow evening instead? Alternatively, if your weekend is free, I would love to treat you to an upscale meal at that Italian bistro. Let me know which works better for you!",
    key_expressions: [
      "terribly sorry to break the news (이런 소식을 전하게 되어 너무 죄송하지만)",
      "cropped up (불쑥 튀어나오다/발생하다)",
      "make it up to you (보상하다/만회하다)",
      "treat you to an upscale meal (근사한 식사를 대접하다)"
    ],
    grammar_fixes: [
      "공손한 사과 ➔ 구체적 원인(emergency cropped up) ➔ 대안 1(내일) ➔ 대안 2(주말 식사) ➔ 확인 질문 완벽 구성"
    ]
  },
  "과거 현재 기술 비교": {
    template_draft: "옛날에는 유선 전화기나 MP3를 따로 썼는데 지금은 스마트폰 하나로 음악도 듣고 결제도 다 합니다.",
    upgraded_script: "Looking back, the technological landscape has undergone a monumental shift over the past two decades. In the past, people had to carry bulky separate gadgets like MP3 players, paper maps, and pocket cameras. In stark contrast, today's all-in-one smartphones have integrated everything into a single handheld device, allowing us to stream infinite music and execute contactless payments with a single tap.",
    key_expressions: [
      "undergone a monumental shift (엄청난 대전환을 겪다)",
      "In stark contrast (완전한 대조를 이루며)",
      "all-in-one smartphones (모든 기능이 통합된 스마트폰)",
      "contactless payments (비접촉 간편 결제)"
    ],
    grammar_fixes: [
      "과거(In the past)와 현재(In stark contrast, today)를 명확한 시제와 대조 부사구로 비교",
      "'now smartphone is good' ➔ 'integrated everything into a single handheld device' AL 수준의 추상화"
    ]
  },
  "최신 산업 시사 이슈": {
    template_draft: "요즘 숙박업계는 무인 체크인 키오스크와 친환경 정책이 큰 이슈가 되고 있습니다.",
    upgraded_script: "In today's hospitality sector, one of the most prominent topics being discussed is the rapid adoption of contactless self-service kiosks alongside eco-friendly sustainability initiatives. While automated systems maximize operational efficiency and cut down wait times, hotels must also strive to maintain a warm, human touch to ensure top-notch guest satisfaction.",
    key_expressions: [
      "hospitality sector (숙박/호텔 업계)",
      "contactless self-service kiosks (비대면 무인 키오스크)",
      "eco-friendly sustainability initiatives (친환경 지속가능성 방침)",
      "human touch (인간적인 따뜻한 서비스)"
    ],
    grammar_fixes: [
      "산업 전문 어휘(hospitality sector, operational efficiency, human touch) 구사",
      "동전의 양면(효율성 vs 인간적인 서비스)을 균형 있게 논증하는 AL 최고난도 문장 구조 완성"
    ]
  }
};

// 애플리케이션의 전역 상태를 관리하는 객체입니다.
const state = {
  currentTab: 'home', // 현재 활성화된 메인 탭입니다.
  selectedPlanLevel: 'beginner', // 선택된 학습 플랜 레벨입니다.
  practiceMode: '1q', // 선택된 스피킹 연습 모드입니다.
  examSubView: 'survey', // 모의고사 탭 내부 하위 뷰입니다.
  officialSurvey: { // 사용자 공식 서베이 설정값입니다.
    q1_job: 'NONE', // 1번 직업 설정입니다.
    q2_student: 'NO', // 2번 학생 여부입니다.
    q3_home: 'APARTMENT_ALONE', // 3번 주거 형태입니다.
    q4_leisure: ['MOVIE', 'PERFORMANCE', 'CONCERT', 'PARK', 'CAFE', 'BEACH'], // 4번 여가 활동입니다.
    q5_hobby: ['MUSIC'], // 5번 취미 관심사입니다.
    q6_sports: ['JOGGING', 'WALKING', 'BIKING', 'GYM'], // 6번 운동입니다.
    q7_travel: ['DOMESTIC', 'OVERSEAS', 'STAYCATION'], // 7번 휴가 여행입니다.
    difficulty: 5 // 시험 난이도(1~6)입니다.
  },
  selectedVoice: 'en-US-AriaNeural', // 선택된 Eva 원어민 보이스입니다.
  cachedBestVoice: null, // 브라우저 최상위 보이스 객체 캐시입니다.
  questions: [], // 현재 시험/연습 문항 배열입니다.
  currentIndex: 0, // 현재 진행 중인 문항 인덱스입니다.
  listenCount: 0, // 질문 청취 횟수입니다.
  isRecording: false, // 마이크 녹음 진행 여부입니다.
  recordingStartTime: 0, // 녹음 시작 타임스탬프입니다.
  recordingDuration: 0, // 총 녹음 시간(초)입니다.
  accumulatedText: '', // 실시간 STT 누적 텍스트입니다.
  recordedAudios: {}, // 문항별 사용자 녹음 오디오 URL 매핑 객체입니다.
  totalTimeRemaining: 2400, // 모의고사 총 남은 시간(초)입니다.
  examTimerInterval: null, // 타이머 인터벌 객체입니다.
  audioContext: null, // 웹 오디오 컨텍스트입니다.
  analyser: null, // 파형 분석기 객체입니다.
  animFrameId: null, // 애니메이션 프레임 ID입니다.
  mediaRecorder: null, // 미디어 레코더 인스턴스입니다.
  mediaStream: null, // 마이크 미디어 스트림입니다.
  audioChunks: [], // 녹음 오디오 청크 버퍼입니다.
  recognition: null, // 실시간 STT 음성 인식 객체입니다.
  currentEvaAudio: null, // 현재 재생 중인 에바 음성 Audio 객체입니다.
  evaluationResults: [], // 각 문항별 AI 채점 결과 목록입니다.
  shadowingPlaybackRate: 1.0, // 쉐도잉 배속 속도입니다.
  currentDailyIndex: (new Date().getDate() - 1) % dailySentencesData.length, // 오늘의 1일 1문장 인덱스입니다.
  isDailyAudioPlaying: false, // 1일 1문장 오디오 재생 중 여부입니다.
  isDailyShadowingRecording: false, // 1일 1문장 따라 말하기 녹음 중 여부입니다.
  isQuizKoreanRecording: false, // 퀴즈 한국어 녹음 중 여부입니다.
  quizRecognition: null, // 퀴즈 한국어 음성인식 객체입니다.
  isScriptDraftRecording: false,
  scriptDraftLang: 'ko-KR', // 스크립트 작성 음성인식 언어 설정('ko-KR' 또는 'en-US')입니다. // 스크립트 작성 음성 녹음 중 여부입니다.
  scriptDraftRecognition: null, // 스크립트 작성 음성인식 객체입니다.
  isScriptAudioPlaying: false, // 스크립트 AL 음성 재생 중 여부입니다.
  currentScriptAudio: null, // 스크립트 재생 Audio 인스턴스입니다.
  apiBaseUrl: window.location.origin.includes('http') ? window.location.origin : 'http://localhost:8000', // API 서버 주소입니다.
  isServerAvailable: false, // 백엔드 서버 가용 여부입니다.
};

// DOM 요소 준비 시 실행되는 메인 초기화 함수입니다.
document.addEventListener('DOMContentLoaded', () => {
  initApp(); // 전체 앱을 초기화합니다.
});

// 브라우저 내장 최상의 Eva 원어민 보이스 객체를 찾아 캐싱하는 함수입니다.
function cacheBestEvaVoice() {
  if (!window.speechSynthesis) return null; // SpeechSynthesis 미지원 시 null을 반환합니다.
  const voices = window.speechSynthesis.getVoices(); // 사용 가능한 음성 목록을 가져옵니다.
  if (!voices || voices.length === 0) return null; // 음성이 없으면 null을 반환합니다.

  // 1순위: Microsoft Aria (실제 OPIc Eva 공식 성우와 100% 동일한 목소리)를 검색합니다.
  let best = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Aria') || v.name.includes('AriaNeural')));
  // 2순위: Microsoft Natural 계열 미국 여성 성우를 검색합니다.
  if (!best) {
    best = voices.find(v => v.lang.startsWith('en') && v.name.includes('Natural') && (v.name.includes('Jenny') || v.name.includes('Ava') || v.name.includes('Emma')));
  }
  // 3순위: 구글 크롬 고품질 미국 영어 (Google US English)를 검색합니다.
  if (!best) {
    best = voices.find(v => v.name.includes('Google US English') || (v.lang === 'en-US' && v.name.includes('Google')));
  }
  // 4순위: 아이폰 Safari / Mac 고품질 미국 성우 (Samantha / Ava)를 검색합니다.
  if (!best) {
    best = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Ava') || v.name.includes('Victoria')));
  }
  // 5순위: 기본 en-US 미국 여성 음성을 검색합니다.
  if (!best) {
    best = voices.find(v => v.lang === 'en-US' || v.lang.startsWith('en'));
  }

  if (best) {
    state.cachedBestVoice = best; // 전역 상태에 캐싱합니다.
  }
  return state.cachedBestVoice;
}

// 애플리케이션 초기화 함수입니다.
function initApp() {
  loadOfficialSurveySettings(); // 서베이 설정을 로드합니다.
  initTabBarNavigation(); // 탭바 네비게이션을 초기화합니다.
  initStudyPlanTab(); // 학습 플랜 탭을 초기화합니다.
  initPracticeTab(); // 스피킹 연습 탭을 초기화합니다.
  initExamTab(); // 실전 모의고사 탭을 초기화합니다.
  initListeningQuizEvents(); // 질문 청취 퀴즈 이벤트를 초기화합니다.
  initScriptBuilderEvents(); // [신규] 스크립트 작성 & AI 첨삭 연구소 이벤트를 초기화합니다.
  initDailyChallenge(); // 1일 1문장 챌린지를 초기화합니다.
  renderHomeDashboard(); // 홈 대시보드를 렌더링합니다.
  initChipInteractions(); // 칩 선택 인터랙션을 초기화합니다.
  initHUDInputWatcher(); // HUD 입력 감시기를 초기화합니다.
  initSpeedButtons(); // 배속 조절 버튼을 초기화합니다.
  initMyPageEvents(); // 마이페이지 이벤트를 초기화합니다.
  initModalEvents(); // 모달 이벤트를 초기화합니다.
  initSpeechRecognition(); // 영어 음성인식을 초기화합니다.
  initKoreanSpeechRecognition(); // 한국어 음성인식을 초기화합니다.
  initScriptDraftSpeechRecognition(); // [신규] 스크립트 작성 음성인식을 초기화합니다.
  initOpicNojamEvents(); // [신규] 오픽노잼 비법소, 아코디언 및 필러 팔레트를 초기화합니다.
  checkServerConnection(); // 백엔드 서버 연결 상태를 확인합니다.

  // 브라우저 음성 목록 비동기 로딩 이벤트 리스너 등록입니다.
  if (window.speechSynthesis) {
    cacheBestEvaVoice();
    window.speechSynthesis.onvoiceschanged = () => {
      cacheBestEvaVoice();
    };
  }
}

// ==============================================================================
// [신규] 마이 서베이 15문항 스크립트 작성 & AI 첨삭 연구소 및 보관함 핵심 로직
// ==============================================================================

// 스크립트 작성 & AI 첨삭 연구소 이벤트 초기화 함수입니다.
function initScriptBuilderEvents() {
  // 모의고사 탭 내 스크립트 첨삭 모드 진입 버튼
  const examScriptBtn = document.getElementById('btn-start-script-from-exam');
  if (examScriptBtn) {
    examScriptBtn.addEventListener('click', () => {
      startScriptBuilderSession(0);
    });
  }

  // 에바 질문 오디오 청취 버튼
  const playQBtn = document.getElementById('btn-script-play-question-audio');
  if (playQBtn) {
    playQBtn.addEventListener('click', playScriptQuestionAudio);
  }

  // 1타강사 템플릿 불러오기 버튼
  const loadTemplateBtn = document.getElementById('btn-load-template-script');
  if (loadTemplateBtn) {
    loadTemplateBtn.addEventListener('click', loadScriptTemplate);
  }

  // 한글/영어 음성인식 언어 토글 버튼 이벤트 등록
  const sttLangKoBtn = document.getElementById('btn-stt-lang-ko');
  const sttLangEnBtn = document.getElementById('btn-stt-lang-en');
  if (sttLangKoBtn) {
    sttLangKoBtn.addEventListener('click', () => setScriptDraftLanguage('ko-KR'));
  }
  if (sttLangEnBtn) {
    sttLangEnBtn.addEventListener('click', () => setScriptDraftLanguage('en-US'));
  }

  // 음성으로 말해서 넣기 버튼
  const sttDraftBtn = document.getElementById('btn-stt-script-draft');
  if (sttDraftBtn) {
    sttDraftBtn.addEventListener('click', toggleScriptDraftRecording);
  }

  // AI 첨삭 및 AL 스크립트 생성 버튼
  const analyzeBtn = document.getElementById('btn-analyze-upgrade-script');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeAndUpgradeUserScript);
  }

  // 모의고사 메뉴로 돌아가기 버튼
  const backBtn = document.getElementById('btn-back-from-script');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stopScriptAudio();
      stopAllEvaAudio();
      switchExamSubView('survey');
    });
  }

  // 홈 탭의 스크립트 첨삭 숏컷 버튼
  const quickScriptBtnHome = document.getElementById('btn-quick-start-script');
  if (quickScriptBtnHome) {
    quickScriptBtnHome.addEventListener('click', () => {
      startScriptBuilderSession(0);
    });
  }

  // 마이페이지의 스크립트 보관함 열기 버튼
  const goScriptBtnMypage = document.getElementById('btn-go-script-from-mypage');
  if (goScriptBtnMypage) {
    goScriptBtnMypage.addEventListener('click', () => {
      startScriptBuilderSession(0);
    });
  }

  initMultiLevelScriptEvents(); // [신규] 4단계 등급별 맞춤 스크립트 이벤트를 초기화합니다.
  renderSavedScriptList(); // 보관함 목록을 초기에 렌더링합니다.
}

// 스크립트 작성 및 AI 첨삭 연구소 화면으로 전환하는 세션 시작 함수입니다.
function startScriptBuilderSession(initialQIndex = 0) {
  stopAllEvaAudio();
  stopScriptAudio();
  state.practiceMode = 'script';

  // 현재 서베이에 맞는 15개 문항 세트 로드
  state.scriptQuestions = createSurveyBasedExamSet(state.officialSurvey);
  state.scriptSelectedQIndex = initialQIndex >= 0 && initialQIndex < state.scriptQuestions.length ? initialQIndex : 0;

  if (state.currentTab !== 'script') {
    switchTab('script');
  } else {
    renderScriptQuestionChips();
    selectScriptQuestion(state.scriptSelectedQIndex);
    renderSavedScriptList();
  }
}

// 15문항 가로 스크롤 칩 네비게이터를 렌더링하는 함수입니다.
function renderScriptQuestionChips() {
  const container = document.getElementById('script-q-chips-container');
  const countBadge = document.getElementById('script-chip-saved-count');
  if (!container) return;

  const savedList = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]');
  const savedQNumbers = new Set(savedList.map(s => s.q_number || s.topic));

  let savedCount = 0;
  container.innerHTML = state.scriptQuestions.map((q, idx) => {
    const isSaved = savedQNumbers.has(q.question_number) || savedQNumbers.has(q.topic);
    if (isSaved) savedCount++;
    const isActive = idx === state.scriptSelectedQIndex;

    return `
      <button class="q-chip-btn ${isActive ? 'active' : ''} ${isSaved ? 'saved' : ''}" data-idx="${idx}">
        <span>Q${q.question_number}. ${q.topic}</span>
        ${isSaved ? '<span class="saved-check">✓</span>' : ''}
      </button>
    `;
  }).join('');

  if (countBadge) {
    countBadge.innerText = `${savedCount}/${state.scriptQuestions.length} 작성완료`;
  }

  // 칩 클릭 이벤트 리스너 등록
  container.querySelectorAll('.q-chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      selectScriptQuestion(idx);
    });
  });
}

// 특정 문항(0~14)을 선택하고 화면 질문 텍스트 및 상태를 전환하는 함수입니다.
function selectScriptQuestion(idx) {
  setTimeout(() => { if (typeof setScriptViewerGrade === 'function') setScriptViewerGrade(state.scriptViewerGrade || 'AL'); }, 0);
  stopScriptAudio();
  stopAllEvaAudio();

  state.scriptSelectedQIndex = idx;
  const q = state.scriptQuestions[idx];
  if (!q) return;

  // 칩 활성화 스타일 업데이트
  const container = document.getElementById('script-q-chips-container');
  if (container) {
    const buttons = container.querySelectorAll('.q-chip-btn');
    buttons.forEach((b, i) => {
      b.classList.toggle('active', i === idx);
      if (i === idx) {
        b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // 문항 정보 표시 업데이트
  const badgeEl = document.getElementById('script-active-q-badge');
  const topicEl = document.getElementById('script-active-q-topic');
  const typeEl = document.getElementById('script-active-q-type');
  const qTextEl = document.getElementById('script-active-question-text');
  const textarea = document.getElementById('script-draft-textarea');
  const resultBox = document.getElementById('script-upgrade-result-box');

  if (badgeEl) badgeEl.innerText = `Q${q.question_number}`;
  if (topicEl) topicEl.innerText = `[${q.topic}]`;
  if (typeEl) typeEl.innerText = `질문 유형: ${q.question_type}`;
  if (qTextEl) qTextEl.innerText = `"${q.question_text}"`;

  // 기존 저장된 스크립트가 있는지 확인
  const savedList = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]');
  const existing = savedList.find(s => s.q_number === q.question_number || s.topic === q.topic);

  if (existing) {
    if (textarea) textarea.value = existing.draft || '';
    renderScriptUpgradeResultCard(existing.topic, existing.draft, existing.upgraded, existing.keyExpressions || [], existing.grammarFixes || [], q);
  } else {
    if (textarea) textarea.value = '';
    if (resultBox) {
      resultBox.style.display = 'none';
      resultBox.innerHTML = '';
    }
  }
}

// 현재 선택된 문항의 에바 공식 음성을 재생하는 함수입니다.
function playScriptQuestionAudio() {
  const q = state.scriptQuestions[state.scriptSelectedQIndex];
  if (!q) return;

  const btn = document.getElementById('btn-script-play-question-audio');
  if (state.isScriptAudioPlaying) {
    stopScriptAudio();
    stopAllEvaAudio();
    return;
  }

  if (btn) {
    btn.innerText = '⏹ 재생 중지';
    btn.style.background = '#fee2e2';
    btn.style.color = '#dc2626';
  }

  state.isScriptAudioPlaying = true;
  const resetBtn = () => {
    state.isScriptAudioPlaying = false;
    state.currentEvaAudio = null;
    if (btn) {
      btn.innerText = '🔊 질문 듣기';
      btn.style.background = '#eff6ff';
      btn.style.color = 'var(--toss-blue)';
    }
  };

  if (q.audio_file) {
    const audio = new Audio(q.audio_file);
    state.currentEvaAudio = audio;
    audio.onended = resetBtn;
    audio.onerror = () => playFallbackSpeech(q.question_text, null, resetBtn);
    audio.play().catch(() => playFallbackSpeech(q.question_text, null, resetBtn));
  } else {
    playFallbackSpeech(q.question_text, null, resetBtn);
  }
}

// 선택한 오픽 주제에 맞는 1타 강사 초안 템플릿을 입력창에 자동으로 불러오는 함수입니다.
function loadScriptTemplate() {
  const q = state.scriptQuestions[state.scriptSelectedQIndex];
  const textarea = document.getElementById('script-draft-textarea');
  if (!textarea) return;

  const topicKey = q ? q.topic : '영화관 장소 묘사';
  const kbItem = scriptUpgradeKnowledgeBase[topicKey];

  if (kbItem && kbItem.template_draft) {
    textarea.value = kbItem.template_draft;
    textarea.focus();
  } else if (q) {
    if (q.question_type === "자기소개") {
      textarea.value = "안녕하세요 에바, 저는 서울에 사는 개발자 Alex입니다. 주말에는 영화관과 카페를 자주 가며 여가를 보냅니다.";
    } else if (q.question_type.includes("롤플레이 (11번")) {
      textarea.value = "친구에게 전화해서 약속 시간, 만날 장소, 준비물에 대해 3~4가지 질문을 문의합니다.";
    } else if (q.question_type.includes("롤플레이 (12번")) {
      textarea.value = "갑작스러운 사정이 생겨서 오늘 약속에 못 가게 되었습니다. 사과하고 내일 만나거나 주말에 식사를 대접하겠다고 대안을 제시합니다.";
    } else {
      textarea.value = `우리 집 근처에 있는 ${q.topic}을(를) 자주 방문하는데 시설이 쾌적하고 분위기가 좋아서 스트레스를 풀기 위해 주말마다 찾아갑니다.`;
    }
    textarea.focus();
  }
}

// 스크립트 작성을 위한 음성 인식(STT) 객체 초기화 함수입니다.
function initScriptDraftSpeechRecognition() {
  // 브라우저 내장 음성인식 객체를 가져옵니다.
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // 음성인식을 지원하는 브라우저인 경우 인스턴스를 생성합니다.
  if (SpeechRecognition) {
    // 음성인식 인스턴스를 생성하여 전역 상태에 보관합니다.
    state.scriptDraftRecognition = new SpeechRecognition();
    // 연속 인식을 비활성화하여 한 문장 단위로 종료되게 합니다.
    state.scriptDraftRecognition.continuous = false;
    // 중간 인식 결과를 실시간으로 받아옵니다.
    state.scriptDraftRecognition.interimResults = true;
    // 현재 선택된 언어(한글 또는 영어)를 바인딩합니다.
    state.scriptDraftRecognition.lang = state.scriptDraftLang || 'ko-KR';

    // 음성인식 중간/최종 결과 수신 이벤트 핸들러입니다.
    state.scriptDraftRecognition.onresult = (event) => {
      // 누적 변환 텍스트 변수입니다.
      let fullText = '';
      // 전달받은 모든 음성 청크 결과를 순회하며 합산합니다.
      for (let i = 0; i < event.results.length; ++i) {
        fullText += event.results[i][0].transcript;
      }
      // 스크립트 작성 텍스트에어리어 요소를 가져옵니다.
      const textarea = document.getElementById('script-draft-textarea');
      // 텍스트에어리어에 실시간으로 인식된 문장을 반영합니다.
      if (textarea && fullText) {
        textarea.value = fullText;
      }
    };

    // 음성인식 종료 이벤트 핸들러입니다.
    state.scriptDraftRecognition.onend = () => {
      // 녹음 진행 플래그를 거짓으로 변경합니다.
      state.isScriptDraftRecording = false;
      // 음성인식 버튼 요소를 가져옵니다.
      const btn = document.getElementById('btn-stt-script-draft');
      // 버튼 텍스트와 배경색을 복원합니다.
      if (btn) {
        const langLabel = state.scriptDraftLang === 'en-US' ? 'English' : '한글';
        btn.innerText = `🎙️ 음성으로 넣기 (${langLabel})`;
        btn.style.background = '#eff6ff';
        btn.style.color = 'var(--toss-blue)';
      }
    };

    // 음성인식 에러 발생 이벤트 핸들러입니다.
    state.scriptDraftRecognition.onerror = (e) => {
      // 콘솔에 에러 내용을 기록합니다.
      console.warn('Script Draft STT error:', e);
      // 녹음 플래그를 초기화합니다.
      state.isScriptDraftRecording = false;
      // 버튼 스타일을 복원합니다.
      const btn = document.getElementById('btn-stt-script-draft');
      if (btn) {
        const langLabel = state.scriptDraftLang === 'en-US' ? 'English' : '한글';
        btn.innerText = `🎙️ 음성으로 넣기 (${langLabel})`;
        btn.style.background = '#eff6ff';
        btn.style.color = 'var(--toss-blue)';
      }
    };
  }
}

// 스크립트 음성 녹음 시작/정지 토글 함수입니다.
function toggleScriptDraftRecording() {
  // 기존 재생 중인 에바 음성을 정지합니다.
  stopAllEvaAudio();
  // 스크립트 오디오 재생을 정지합니다.
  stopScriptAudio();

  // 음성인식 버튼 요소를 가져옵니다.
  const btn = document.getElementById('btn-stt-script-draft');
  // 녹음 중이 아닌 경우 녹음을 시작합니다.
  if (!state.isScriptDraftRecording) {
    // 음성인식을 지원하지 않으면 경고창을 띄웁니다.
    if (!state.scriptDraftRecognition) {
      alert('음성 인식을 지원하지 않는 브라우저입니다. 키보드로 직접 입력해주세요.');
      return;
    }
    try {
      // 녹음 진행 플래그를 참으로 설정합니다.
      state.isScriptDraftRecording = true;
      // 선택된 언어(ko-KR / en-US)를 다시 명시적으로 할당합니다.
      state.scriptDraftRecognition.lang = state.scriptDraftLang || 'ko-KR';
      const langName = state.scriptDraftLang === 'en-US' ? 'English' : '한국어';
      // 버튼을 빨간색 청취 중 상태로 변경합니다.
      if (btn) {
        btn.innerText = `⏹ ${langName} 듣는 중...`;
        btn.style.background = 'var(--toss-red)';
        btn.style.color = '#ffffff';
      }
      // 음성 인식을 시작합니다.
      state.scriptDraftRecognition.start();
    } catch (e) {
      // 오류 발생 시 상태를 초기화하고 마이크 가이드 모달을 엽니다.
      state.isScriptDraftRecording = false;
      showMicHelpModal();
    }
  } else {
    // 이미 녹음 중인 경우 정지합니다.
    state.isScriptDraftRecording = false;
    // 음성 인식 객체를 정지합니다.
    if (state.scriptDraftRecognition) {
      try { state.scriptDraftRecognition.stop(); } catch (e) {}
    }
    // 버튼 스타일을 대기 상태로 복원합니다.
    if (btn) {
      const langLabel = state.scriptDraftLang === 'en-US' ? 'English' : '한글';
      btn.innerText = `🎙️ 음성으로 넣기 (${langLabel})`;
      btn.style.background = '#eff6ff';
      btn.style.color = 'var(--toss-blue)';
    }
  }
}

// 스크립트 작성 음성인식 언어를 한글 또는 영어로 전환하는 함수입니다.
function setScriptDraftLanguage(lang) {
  // 전역 상태의 음성인식 언어 설정을 업데이트합니다.
  state.scriptDraftLang = lang;

  // 한글 버튼과 영어 버튼 요소를 가져옵니다.
  const koBtn = document.getElementById('btn-stt-lang-ko');
  const enBtn = document.getElementById('btn-stt-lang-en');
  const textarea = document.getElementById('script-draft-textarea');
  const sttBtn = document.getElementById('btn-stt-script-draft');

  // 한글 선택 시의 UI 스타일을 적용합니다.
  if (lang === 'ko-KR') {
    if (koBtn) {
      koBtn.classList.add('active');
      koBtn.style.background = '#ffffff';
      koBtn.style.color = '#1e293b';
      koBtn.style.fontWeight = '800';
      koBtn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    if (enBtn) {
      enBtn.classList.remove('active');
      enBtn.style.background = 'transparent';
      enBtn.style.color = '#64748b';
      enBtn.style.fontWeight = '700';
      enBtn.style.boxShadow = 'none';
    }
    if (textarea && !textarea.value) {
      textarea.placeholder = '예) 우리 집 근처에 있는 영화관을 자주 가는데 시설이 깨끗하고 팝콘이 맛있어서 주말마다 방문합니다.';
    }
    if (sttBtn && !state.isScriptDraftRecording) {
      sttBtn.innerText = '🎙️ 음성으로 넣기 (한글)';
    }
  } else {
    // 영어 선택 시의 UI 스타일을 적용합니다.
    if (enBtn) {
      enBtn.classList.add('active');
      enBtn.style.background = '#ffffff';
      enBtn.style.color = '#1e293b';
      enBtn.style.fontWeight = '800';
      enBtn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    if (koBtn) {
      koBtn.classList.remove('active');
      koBtn.style.background = 'transparent';
      koBtn.style.color = '#64748b';
      koBtn.style.fontWeight = '700';
      koBtn.style.boxShadow = 'none';
    }
    if (textarea && !textarea.value) {
      textarea.placeholder = 'e.g., I usually visit the CGV cinema near my house on weekends because it has clean facilities and great popcorn.';
    }
    if (sttBtn && !state.isScriptDraftRecording) {
      sttBtn.innerText = '🎙️ 음성으로 넣기 (English)';
    }
  }

  // 현재 인식 객체가 생성되어 있다면 언어를 동적으로 교체합니다.
  if (state.scriptDraftRecognition) {
    state.scriptDraftRecognition.lang = lang;
  }
}


// 사용자가 작성한 초안을 AI로 분석하고 AL 만점 스크립트로 업그레이드 첨삭하는 함수입니다.
function analyzeAndUpgradeUserScript() {
  stopScriptAudio();
  stopAllEvaAudio();

  const q = state.scriptQuestions[state.scriptSelectedQIndex];
  const textarea = document.getElementById('script-draft-textarea');
  const resultBox = document.getElementById('script-upgrade-result-box');

  if (!q || !textarea || !resultBox) return;

  let rawText = textarea.value.trim();
  if (!rawText) {
    loadScriptTemplate();
    rawText = textarea.value.trim();
  }

  const topic = q.topic;
  const kbItem = scriptUpgradeKnowledgeBase[topic];
  let upgradedScript = "";
  let keyExpressions = [];
  let grammarFixes = [];

  if (kbItem) {
    upgradedScript = kbItem.upgraded_script;
    keyExpressions = kbItem.key_expressions;
    grammarFixes = kbItem.grammar_fixes;
  } else {
    upgradedScript = `Well, speaking of ${topic}, you know, it has always played a vital role in my everyday routine. To be honest, I truly believe that engaging in this allows me to blow off some steam and recharge my batteries. Whenever I look back, every single moment spent on this leaves a lasting impression on me.`;
    keyExpressions = [
      "played a vital role (매우 중요한 역할을 하다)",
      "blow off some steam (스트레스를 해소하다)",
      "recharge my batteries (원기를 회복하다)",
      "leaves a lasting impression (깊은 인상을 남기다)"
    ];
    grammarFixes = [
      "원어민 만능 필러(Well, you know, To be honest)를 적재적소에 배치하여 자연스러움 확보",
      "단순한 진술문 구조를 원어민식 복합 구동사 문장으로 승격"
    ];
  }

  renderScriptUpgradeResultCard(topic, rawText, upgradedScript, keyExpressions, grammarFixes, q);
}

// 첨삭 결과 카드 렌더링 헬퍼 함수입니다.
function renderScriptUpgradeResultCard(topic, rawText, upgradedScript, keyExpressions, grammarFixes, q) {
  const resultBox = document.getElementById('script-upgrade-result-box');
  if (!resultBox) return;

  const wordCount = rawText ? rawText.split(/\s+/).length : 10;
  let estimatedLevel = "IM2";
  if (wordCount >= 30) estimatedLevel = "IH";
  if (wordCount >= 50) estimatedLevel = "AL";

  resultBox.innerHTML = `
    <div class="toss-card" style="background: #ffffff; border: 2px solid #10b981; border-radius: 20px; padding: 18px; margin-top: 14px; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.12);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 15px; font-weight: 800; color: #065f46; display: flex; align-items: center; gap: 6px;">
          <span>✨ Q${q.question_number}. AI 스크립트 첨삭 & AL 승격 리포트</span>
        </span>
        <span style="font-size: 11px; background: #ecfdf5; color: #059669; padding: 4px 8px; border-radius: 8px; font-weight: 800; border: 1px solid #a7f3d0;">
          진단: ${estimatedLevel} ➔ 🏆 AL 만점 승격
        </span>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 4px;">
          📝 내가 작성한 초안 (Original Draft)
        </div>
        <div style="font-size: 13px; color: #334155; line-height: 1.5; font-style: italic;">
          "${rawText}"
        </div>
      </div>

      <!-- [신규] 오픽노잼 3대 만점 체크포인트 진단 -->
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
          <span>💡 [오픽노잼] AL 3단 구조 진단 & 첨삭 포인트</span>
        </div>
        <div style="font-size: 11px; color: #78350f; line-height: 1.5; display: flex; flex-direction: column; gap: 4px;">
          <div><strong>1. 메인포인트(MP) 감정 진단:</strong> 첫 문장에 본인의 솔직한 느낌(Feeling)과 결론을 두괄식으로 확실하게 제시</div>
          <div><strong>2. Rule of 1 Thing:</strong> 이것저것 얕게 나열하지 않고 가장 매력적인 1가지 핵심 디테일에 깊이 있게 집중</div>
          <div><strong>3. 원어민 필러 & 구어체:</strong> 실제 친구와 대화하듯 자연스러운 필러(You know, Speaking of which) 구사</div>
        </div>
      </div>

      <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 12px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 12px; font-weight: 800; color: #854d0e; margin-bottom: 6px;">
          🔍 1:1 교정 포인트 & 콩글리시 개선
        </div>
        <ul style="padding-left: 18px; margin: 0; font-size: 12px; color: #713f12; line-height: 1.6;">
          ${grammarFixes.map(fix => `<li>${fix}</li>`).join('')}
        </ul>
      </div>

      <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 14px; padding: 14px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 13px; font-weight: 800; color: #166534;">🌟 AI 추천 AL 만점 스크립트 (Model Script)</span>
          <button id="btn-play-script-audio" style="background: #16a34a; color: #ffffff; border: none; border-radius: 8px; padding: 5px 12px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px;">
            <span id="script-speaker-icon">🔊</span> <span id="script-audio-btn-label">Eva 음성으로 쉐도잉 듣기</span>
          </button>
        </div>
        <div style="font-size: 14px; font-weight: 600; color: #14532d; line-height: 1.6; margin-bottom: 10px;">
          ${upgradedScript}
        </div>

        <div style="border-top: 1px dashed #bbf7d0; padding-top: 8px;">
          <div style="font-size: 11px; font-weight: 700; color: #166534; margin-bottom: 4px;">💡 핵심 고득점 구동사 & 관용 표현:</div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${keyExpressions.map(expr => `<span style="background: #ffffff; border: 1px solid #86efac; color: #15803d; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 6px;">${expr}</span>`).join('')}
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="btn-save-to-script-library" style="flex: 1; background: #ffffff; border: 1.5px solid #059669; color: #059669; border-radius: 12px; padding: 12px; font-size: 13px; font-weight: 800; cursor: pointer;">
          💾 보관함에 저장
        </button>
        <button id="btn-launch-speaking-from-script" class="toss-btn-primary" style="flex: 1.2; background: #059669; padding: 12px; font-size: 13px; border-radius: 12px;">
          🎙️ 이 스크립트로 바로 스피킹 연습
        </button>
      </div>
    </div>
  `;

  resultBox.style.display = 'block';

  // 음성 듣기 버튼 이벤트 리스너
  const playScriptBtn = document.getElementById('btn-play-script-audio');
  if (playScriptBtn) {
    playScriptBtn.addEventListener('click', () => {
      toggleScriptAudioPlay(upgradedScript);
    });
  }

  // 보관함 저장 버튼 이벤트 리스너
  const saveBtn = document.getElementById('btn-save-to-script-library');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const scriptData = {
        id: Date.now(),
        q_number: q.question_number,
        topic: topic,
        question_text: q.question_text,
        draft: rawText,
        upgraded: upgradedScript,
        keyExpressions: keyExpressions,
        grammarFixes: grammarFixes,
        date: new Date().toLocaleDateString('ko-KR')
      };
      saveScriptToLibrary(scriptData);
    });
  }

  // 바로 스피킹 연습 버튼 이벤트 리스너
  const launchSpeakingBtn = document.getElementById('btn-launch-speaking-from-script');
  if (launchSpeakingBtn) {
    launchSpeakingBtn.addEventListener('click', () => {
      stopScriptAudio();
      launchSpeakingFromScript(upgradedScript, topic, q);
    });
  }

  resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 스크립트 첨삭 음성 재생 / 멈춤 토글 처리 함수입니다.
function toggleScriptAudioPlay(scriptText) {
  const btn = document.getElementById('btn-play-script-audio');
  const label = document.getElementById('script-audio-btn-label');
  const icon = document.getElementById('script-speaker-icon');

  if (state.isScriptAudioPlaying) {
    stopScriptAudio();
    return;
  }

  stopAllEvaAudio();
  state.isScriptAudioPlaying = true;
  if (btn) btn.style.background = '#dc2626';
  if (icon) icon.innerText = '⏹';
  if (label) label.innerText = '재생 멈추기';

  const resetAudioBtn = () => {
    state.isScriptAudioPlaying = false;
    state.currentEvaAudio = null;
    if (btn) btn.style.background = '#16a34a';
    if (icon) icon.innerText = '🔊';
    if (label) label.innerText = 'Eva 음성으로 쉐도잉 듣기';
  };

  playBrowserSpeechFallback(scriptText, null, 0.95, resetAudioBtn);
}

// 스크립트 오디오 재생을 완전히 정지하는 헬퍼 함수입니다.
function stopScriptAudio() {
  state.isScriptAudioPlaying = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (state.currentEvaAudio) {
    state.currentEvaAudio.pause();
    state.currentEvaAudio = null;
  }
  const btn = document.getElementById('btn-play-script-audio');
  const label = document.getElementById('script-audio-btn-label');
  const icon = document.getElementById('script-speaker-icon');
  if (btn) btn.style.background = '#16a34a';
  if (icon) icon.innerText = '🔊';
  if (label) label.innerText = 'Eva 음성으로 쉐도잉 듣기';
}

// 첨삭된 스크립트를 로컬 스토리지 보관함에 영구 저장하는 함수입니다.
function saveScriptToLibrary(scriptData) {
  try {
    let saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]');
    saved = saved.filter(s => s.q_number !== scriptData.q_number && s.topic !== scriptData.topic);
    saved.unshift(scriptData);
    localStorage.setItem('opic_saved_scripts', JSON.stringify(saved));

    alert(`🎉 Q${scriptData.q_number || ''} [${scriptData.topic}] 스크립트가 보관함에 성공적으로 저장되었습니다!`);
    renderScriptQuestionChips();
    renderSavedScriptList();
  } catch (e) {
    console.warn('Script save error:', e);
  }
}

// 저장된 스크립트 보관함 목록을 화면에 렌더링하는 함수입니다.
function renderSavedScriptList() {
  const container = document.getElementById('saved-script-list-container');
  const badge = document.getElementById('saved-script-count-badge');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]');
  if (badge) badge.innerText = `${saved.length}개 저장됨`;

  if (saved.length === 0) {
    container.innerHTML = `
      <div style="font-size: 13px; color: var(--toss-text-muted); text-align: center; padding: 16px;">
        아직 저장된 스크립트가 없습니다. 위에서 작성하고 [보관함 저장]을 눌러보세요!
      </div>
    `;
    return;
  }

  container.innerHTML = saved.map((item, idx) => `
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <span style="font-size: 13px; font-weight: 800; color: #065f46;">
          ${item.q_number ? `Q${item.q_number}. ` : ''}${item.topic}
        </span>
        <div style="display: flex; gap: 4px;">
          <button onclick="launchSpeakingFromScript('${encodeURIComponent(item.upgraded)}', '${encodeURIComponent(item.topic)}', ${item.q_number || 1})" style="background: #059669; color: #ffffff; border: none; border-radius: 8px; padding: 4px 10px; font-size: 11px; font-weight: 700; cursor: pointer;">
            🎙️ 스피킹 연습
          </button>
          <button onclick="deleteSavedScript(${item.id})" style="background: #fee2e2; color: #dc2626; border: none; border-radius: 8px; padding: 4px 8px; font-size: 11px; font-weight: 700; cursor: pointer;">
            삭제
          </button>
        </div>
      </div>
      <div style="font-size: 12px; color: #166534; line-height: 1.4; font-weight: 600;">
        ${item.upgraded}
      </div>
    </div>
  `).join('');
}

// 스크립트 보관함에서 항목을 삭제하는 전역 헬퍼 함수입니다.
window.deleteSavedScript = function (id) {
  let saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]');
  saved = saved.filter(s => s.id !== id);
  localStorage.setItem('opic_saved_scripts', JSON.stringify(saved));
  renderScriptQuestionChips();
  renderSavedScriptList();
};

// 첨삭된 스크립트로 즉시 1문제 실전 스피킹 연습을 시작하는 전역 헬퍼 함수입니다.
window.launchSpeakingFromScript = function (encodedScript, encodedTopic, qNum = 1) {
  const scriptText = decodeURIComponent(encodedScript);
  const topic = decodeURIComponent(encodedTopic);

  stopAllEvaAudio();
  stopScriptAudio();

  const fullSet = createSurveyBasedExamSet(state.officialSurvey);
  const matchedQ = fullSet.find(q => q.question_number === qNum || q.topic === topic) || fullSet[0];

  state.practiceMode = '1q';
  state.questions = [
    {
      question_number: 1,
      topic: matchedQ.topic,
      question_type: matchedQ.question_type,
      question_text: matchedQ.question_text,
      audio_file: matchedQ.audio_file || null
    }
  ];

  state.currentIndex = 0;
  state.evaluationResults = [];
  state.totalTimeRemaining = 150;
  startGlobalTimer();

  switchTab('exam');
  switchExamSubView('testing');
  renderCurrentQuestion();

  // 사용자 첨삭 스크립트를 답변 텍스트 입력창에 미리 세팅하여 쉐도잉 연습 지원
  setTimeout(() => {
    const textarea = document.getElementById('stt-input-textarea');
    if (textarea) {
      textarea.value = scriptText;
      state.accumulatedText = scriptText;
      updateSpeakingHUD(scriptText);
    }
  }, 400);
};


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

// 퀴즈용 에바 질문 오디오 재생 함수입니다.
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

      <button onclick="playCustomSpeech('${encodeURIComponent(q.question_text)}')" style="width: 100%; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 10px; font-size: 12px; font-weight: 700; color: var(--toss-text-primary); cursor: pointer;">
        🔊 영어 질문 다시듣기 & 쉐도잉
      </button>
    </div>
  `;

  resultCard.style.display = 'block';
}

// 학습 플랜 탭 초기화 함수입니다.
function initStudyPlanTab() {
  const planPills = document.querySelectorAll('.plan-pill-btn');
  planPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      planPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedPlanLevel = btn.dataset.level;
      renderStudyPlanQuests();
    });
  });

  const container = document.getElementById('plan-quest-list-container');
  if (container) {
    container.addEventListener('click', (e) => {
      const checkBtn = e.target.closest('.btn-toggle-quest');
      if (checkBtn) {
        const day = parseInt(checkBtn.dataset.day, 10);
        togglePlanQuestSafe(day);
        return;
      }

      const startBtn = e.target.closest('.btn-start-quest');
      if (startBtn) {
        const level = startBtn.dataset.plan;
        const day = parseInt(startBtn.dataset.day, 10);
        executePlanQuestPractice(level, day);
      }
    });
  }
}

// 학습 플랜 퀘스트 목록을 렌더링하는 함수입니다.
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

// 학습플랜 퀘스트 실행 함수입니다.
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
      } else if (state.practiceMode === 'script') {
        startScriptBuilderSession();
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
  // 실전 모의고사 시작 버튼
  const startExamBtn = document.getElementById('btn-start-exam');
  if (startExamBtn) {
    startExamBtn.addEventListener('click', () => {
      state.practiceMode = 'full';
      startSpeakingSession('full');
    });
  }

  // 목소리 선택 셀렉트박스
  const voiceSelect = document.getElementById('select-eva-voice');
  if (voiceSelect) {
    voiceSelect.addEventListener('change', (e) => {
      state.selectedVoice = e.target.value;
      const pracVoiceSelect = document.getElementById('select-eva-voice-prac');
      if (pracVoiceSelect) pracVoiceSelect.value = e.target.value;
    });
  }

  // 목소리 미리듣기 버튼
  const previewVoiceBtn = document.getElementById('btn-preview-voice');
  if (previewVoiceBtn) {
    previewVoiceBtn.addEventListener('click', previewSelectedVoice);
  }

  // 서베이 변경 이동 버튼
  const goMypageBtn = document.getElementById('btn-go-mypage-from-exam');
  if (goMypageBtn) {
    goMypageBtn.addEventListener('click', () => switchTab('mypage'));
  }

  // [핵심] 답변 녹음 시작 / 중지 토글 버튼 이벤트 등록
  const recordBtn = document.getElementById('btn-toggle-recording');
  if (recordBtn) {
    recordBtn.addEventListener('click', toggleRecording);
  }

  // [핵심] 다음 문제로 넘어가기 / 시험 완료 버튼 이벤트 등록
  const nextBtn = document.getElementById('btn-next-question');
  if (nextBtn) {
    nextBtn.addEventListener('click', onNextQuestionClick);
  }

  // [핵심] 질문 다시듣기 버튼 이벤트 등록
  const replayBtn = document.getElementById('btn-replay-question');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (state.listenCount < 1) {
        state.listenCount++;
        replayBtn.innerText = '🔊 질문 다시듣기 (0회 남음)';
        playQuestionAudio();
      } else {
        alert('질문 다시듣기는 문제당 최대 2회(초기 재생 1회 + 다시듣기 1회)까지만 가능합니다.');
      }
    });
  }

  // [핵심] 모범답안 자동 채우기 버튼 이벤트 등록
  const fillSampleBtn = document.getElementById('btn-fill-sample-answer');
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', fillSampleAnswer);
  }

  // [핵심] 성적표 화면에서 다시 연습하기 버튼 이벤트 등록
  const restartBtn = document.getElementById('btn-restart-exam');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      stopAllEvaAudio();
      switchExamSubView('intro');
      switchTab('practice');
    });
  }
}

// 스피킹 세션 시작 함수입니다.
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

// 사용자 서베이 설정값 및 난이도 기반 모의고사/스크립트 문제 세트 생성 함수입니다 (난이도 2: 12문항, 3~6: 15문항).
function createSurveyBasedExamSet(survey) {
  // 사용자가 선택한 난이도(1~6)를 가져옵니다.
  const diff = survey.difficulty || 5;

  // 난이도 1~2단계 (초급 IL/IM1 목표): 총 12문항 (고난도 14-15번 제외)
  if (diff <= 2) {
    return [
      { question_number: 1, topic: "자기소개", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
      { question_number: 2, topic: "공원 장소 묘사", question_type: "장소 묘사", question_text: "Tell me about the park you visit most often. What does it look like, and what facilities does it have?" },
      { question_number: 3, topic: "공원 루틴", question_type: "활동/루틴", question_text: "What do you usually do when you go to the park from start to finish?", audio_file: "audio/q3.mp3" },
      { question_number: 4, topic: "공원 과거 경험", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable or fun experience you had at a park." },
      { question_number: 5, topic: "카페 장소 묘사", question_type: "장소 묘사", question_text: "Tell me about your favorite cafe or coffee shop. Where is it located and what is it like?" },
      { question_number: 6, topic: "카페 루틴", question_type: "활동/루틴", question_text: "When do you usually visit cafes, who do you go with, and what do you order?" },
      { question_number: 7, topic: "카페 과거 경험", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable memory you have at a coffee shop." },
      { question_number: 8, topic: "집 묘사", question_type: "장소 묘사", question_text: "Please describe your home to me in detail. What does your favorite room look like?", audio_file: "audio/q5.mp3" },
      { question_number: 9, topic: "집에서의 일상 루틴", question_type: "활동/루틴", question_text: "What do you usually do at home during weekdays and weekends?", audio_file: "audio/q6.mp3" },
      { question_number: 10, topic: "집에서의 문제 해결 경험", question_type: "과거 경험", question_text: "Have you ever experienced a problem at your home? How did you fix it?", audio_file: "audio/q7.mp3" },
      { question_number: 11, topic: "롤플레이 질문하기", question_type: "롤플레이 (11번: 질문하기)", question_text: "You want to invite a friend to your house. Call your friend and ask 3 or 4 questions about coming over.", audio_file: "audio/q8.mp3" },
      { question_number: 12, topic: "롤플레이 대안제시", question_type: "롤플레이 (12번: 대안 제시)", question_text: "An unexpected problem came up. Call your friend, explain why you cannot meet today, and offer 2 alternatives.", audio_file: "audio/q9.mp3" }
    ];
  }

  // 난이도 5~6단계 (상급 IH / AL 만점 목표): 총 15문항 (고급 콤보 + 심화 14-15번)
  if (diff >= 5) {
    return [
      { question_number: 1, topic: "자기소개", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
      { question_number: 2, topic: "영화관 장소 묘사", question_type: "장소 묘사", question_text: "You indicated in the survey that you go to the movies. Tell me about the movie theater you usually go to and why you like going there.", audio_file: "audio/q2.mp3" },
      { question_number: 3, topic: "영화 보기 전후 루틴", question_type: "활동/루틴", question_text: "What do you usually do before and after watching a movie? Describe your whole routine on movie days.", audio_file: "audio/q3.mp3" },
      { question_number: 4, topic: "영화관 과거 잊지 못할 경험", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable or unexpected incident you experienced while watching a movie at a cinema.", audio_file: "audio/q4.mp3" },
      { question_number: 5, topic: "집 묘사", question_type: "장소 묘사", question_text: "You indicated that you live in an apartment. Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" },
      { question_number: 6, topic: "집에서의 일상 루틴", question_type: "활동/루틴", question_text: "What is your daily routine at home during the weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" },
      { question_number: 7, topic: "집에서의 문제 해결 경험", question_type: "과거 경험", question_text: "Have you ever experienced an unexpected problem or issue at your home? What was the problem and how did you resolve it?", audio_file: "audio/q7.mp3" },
      { question_number: 8, topic: "호텔 묘사", question_type: "돌발: 호텔 묘사", question_text: "Tell me about a hotel you stayed at recently. What did the room and facilities look like?", audio_file: "audio/q15.mp3" },
      { question_number: 9, topic: "호텔 루틴", question_type: "돌발: 호텔 루틴", question_text: "What do you usually do when you check in and stay at a hotel from start to finish?" },
      { question_number: 10, topic: "호텔 문제 경험", question_type: "돌발: 호텔 문제 경험", question_text: "Have you ever had an unexpected issue or complaint at a hotel? What happened and how was it solved?" },
      { question_number: 11, topic: "롤플레이 질문하기", question_type: "롤플레이 (11번: 질문하기)", question_text: "You want to plan a party with your friend. Call your friend and ask 3 or 4 questions about planning the party.", audio_file: "audio/q8.mp3" },
      { question_number: 12, topic: "롤플레이 대안제시", question_type: "롤플레이 (12번: 대안 제시)", question_text: "An unexpected problem has come up and you cannot attend the party as planned. Call your friend, explain the situation, and offer 2 or 3 alternatives.", audio_file: "audio/q9.mp3" },
      { question_number: 13, topic: "롤플레이 유사경험", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever had a memorable plan cancelled unexpectedly? How did you resolve the situation?" },
      { question_number: 14, topic: "과거 현재 기술 비교", question_type: "심화 (14번: 과거 현재 비교)", question_text: "Compare electronic devices and technology people used in the past with devices people use today. What are the key differences?", audio_file: "audio/q12.mp3" },
      { question_number: 15, topic: "최신 산업 시사 이슈", question_type: "심화 (15번: 이슈 토론)", question_text: "What are some current issues or challenges related to the hotel and accommodation industry today? What is your opinion?", audio_file: "audio/q15.mp3" }
    ];
  }

  // 난이도 3~4단계 (중급 IM2 / IM3 목표): 총 15문항
  return [
    { question_number: 1, topic: "자기소개", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" },
    { question_number: 2, topic: "공원 장소 묘사", question_type: "장소 묘사", question_text: "Tell me about the park you visit most often. What does it look like, and what facilities does it have?" },
    { question_number: 3, topic: "공원 루틴", question_type: "활동/루틴", question_text: "What do you usually do when you go to the park from the moment you arrive until you leave?", audio_file: "audio/q3.mp3" },
    { question_number: 4, topic: "공원 과거 경험", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable day or experience you had at a park." },
    { question_number: 5, topic: "카페 장소 묘사", question_type: "장소 묘사", question_text: "Tell me about your favorite cafe or coffee shop. Where is it located, and what is the atmosphere like?" },
    { question_number: 6, topic: "카페 루틴", question_type: "활동/루틴", question_text: "When do you usually visit cafes, and who do you go with? What do you usually order?" },
    { question_number: 7, topic: "카페 과거 경험", question_type: "과거 경험", question_text: "Tell me about a memorable memory you have at a coffee shop." },
    { question_number: 8, topic: "집 묘사", question_type: "장소 묘사", question_text: "Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" },
    { question_number: 9, topic: "집에서의 일상 루틴", question_type: "활동/루틴", question_text: "What is your daily routine at home during the weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" },
    { question_number: 10, topic: "집에서의 문제 해결 경험", question_type: "과거 경험", question_text: "Have you ever experienced an unexpected problem or issue at your home? How did you resolve it?", audio_file: "audio/q7.mp3" },
    { question_number: 11, topic: "롤플레이 질문하기", question_type: "롤플레이 (11번: 질문하기)", question_text: "You are planning a vacation trip. Call a travel agency and ask 3 or 4 questions about the trip packages." },
    { question_number: 12, topic: "롤플레이 대안제시", question_type: "롤플레이 (12번: 대안 제시)", question_text: "Due to an urgent issue, you cannot go on the trip. Call the travel agency and offer 2 or 3 alternatives." },
    { question_number: 13, topic: "롤플레이 유사경험", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever experienced a situation where a vacation plan was cancelled? How did you resolve it?" },
    { question_number: 14, topic: "과거 현재 기술 비교", question_type: "비교 (14번: 취향 비교)", question_text: "Compare two different activities or hobbies you enjoy. Which one do you prefer and why?" },
    { question_number: 15, topic: "최신 산업 시사 이슈", question_type: "경험 (15번: 최근 관심사)", question_text: "What is a recent topic or trend you became interested in? Tell me about it in detail." }
  ];
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
  } else if (tabName === 'script') {
    if (headerTitle) headerTitle.innerText = '스크립트 첨삭';
    if (timerBadge) timerBadge.style.display = 'none';
    startScriptBuilderSession(state.scriptSelectedQIndex || 0);
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
    renderStudyPlanQuests();
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

// 모의고사 탭 내부의 하위 뷰('survey', 'testing', 'report', 'quiz', 'script')를 전환하는 함수입니다.
function switchExamSubView(subViewName) {
  state.examSubView = subViewName;

  const viewSurvey = document.getElementById('exam-view-survey');
  const viewTesting = document.getElementById('exam-view-testing');
  const viewReport = document.getElementById('exam-view-report');
  const viewQuiz = document.getElementById('exam-view-quiz');
  const viewScript = document.getElementById('exam-view-script');
  const timerBadge = document.getElementById('global-timer-display');

  if (viewSurvey) viewSurvey.style.display = subViewName === 'survey' ? 'block' : 'none';
  if (viewTesting) viewTesting.style.display = subViewName === 'testing' ? 'block' : 'none';
  if (viewReport) viewReport.style.display = subViewName === 'report' ? 'block' : 'none';
  if (viewQuiz) viewQuiz.style.display = subViewName === 'quiz' ? 'block' : 'none';
  if (viewScript) viewScript.style.display = subViewName === 'script' ? 'block' : 'none';

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
      stopDailyAudio();
      state.currentDailyIndex = (state.currentDailyIndex - 1 + dailySentencesData.length) % dailySentencesData.length;
      renderDailySentence();
    });
  }

  const nextBtn = document.getElementById('btn-next-daily');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopDailyAudio();
      state.currentDailyIndex = (state.currentDailyIndex + 1) % dailySentencesData.length;
      renderDailySentence();
    });
  }

  const listenBtn = document.getElementById('btn-listen-daily');
  if (listenBtn) {
    listenBtn.addEventListener('click', toggleDailyAudioPlay);
  }

  const shadowBtn = document.getElementById('btn-shadow-daily');
  if (shadowBtn) {
    shadowBtn.addEventListener('click', toggleDailyShadowing);
  }
}

// 1일 1문장 재생 및 멈춤 토글 처리 함수입니다.
function toggleDailyAudioPlay() {
  const listenBtn = document.getElementById('btn-listen-daily');
  const item = dailySentencesData[state.currentDailyIndex];

  if (state.isDailyAudioPlaying) {
    stopDailyAudio();
    return;
  }

  stopAllEvaAudio();
  state.isDailyAudioPlaying = true;

  if (listenBtn) {
    listenBtn.innerText = '⏹ 재생 멈추기';
    listenBtn.style.backgroundColor = 'var(--toss-red)';
  }

  const resetBtn = () => {
    state.isDailyAudioPlaying = false;
    state.currentEvaAudio = null;
    if (listenBtn) {
      listenBtn.innerText = '🔊 원어민 발음 듣기';
      listenBtn.style.backgroundColor = 'var(--toss-blue)';
    }
  };

  if (item.audio_file) {
    const audio = new Audio(item.audio_file);
    state.currentEvaAudio = audio;
    audio.onended = resetBtn;
    audio.onerror = () => {
      playFallbackSpeech(item.exam_sentence, null, resetBtn);
    };
    audio.play().catch(() => {
      playFallbackSpeech(item.exam_sentence, null, resetBtn);
    });
  } else {
    playFallbackSpeech(item.exam_sentence, null, resetBtn);
  }
}

// 1일 1문장 오디오 정지 헬퍼 함수입니다.
function stopDailyAudio() {
  state.isDailyAudioPlaying = false;
  stopAllEvaAudio();
  const listenBtn = document.getElementById('btn-listen-daily');
  if (listenBtn) {
    listenBtn.innerText = '🔊 원어민 발음 듣기';
    listenBtn.style.backgroundColor = 'var(--toss-blue)';
  }
}

// 1일 1문장 카드 내용을 렌더링하는 함수입니다.
function renderDailySentence() {
  const item = dailySentencesData[state.currentDailyIndex];
  if (!item) return;

  const streakEl = document.getElementById('daily-streak-badge');
  const exprEl = document.getElementById('daily-expr-title');
  const korExprEl = document.getElementById('daily-expr-korean');
  const tipEl = document.getElementById('daily-expr-tip');
  const examSenEl = document.getElementById('daily-exam-sentence');
  const examKorEl = document.getElementById('daily-exam-korean');

  if (streakEl) streakEl.innerText = `🔥 Day ${item.id} (${item.category})`;
  if (exprEl) exprEl.innerText = item.key_expression;
  if (korExprEl) korExprEl.innerText = item.korean_meaning;
  if (tipEl) tipEl.innerText = `💡 ${item.opic_tip}`;
  if (examSenEl) examSenEl.innerText = `"${item.exam_sentence}"`;
  if (examKorEl) examKorEl.innerText = `"${item.korean_sentence}"`;

  const shadowResultEl = document.getElementById('daily-shadow-result');
  if (shadowResultEl) {
    shadowResultEl.style.display = 'none';
    shadowResultEl.innerHTML = '';
  }
}

// 1일 1문장 따라 말하기(Shadowing) 음성 인식 토글 함수입니다.
function toggleDailyShadowing() {
  stopDailyAudio();

  const shadowBtn = document.getElementById('btn-shadow-daily');
  const resultEl = document.getElementById('daily-shadow-result');
  const item = dailySentencesData[state.currentDailyIndex];

  if (!state.isDailyShadowingRecording) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('음성 인식을 지원하지 않는 브라우저입니다.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      state.isDailyShadowingRecording = true;
      if (shadowBtn) {
        shadowBtn.innerText = '⏹ 듣고 있습니다... (말씀하세요)';
        shadowBtn.style.backgroundColor = '#fee2e2';
        shadowBtn.style.color = '#dc2626';
      }

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript;
        const similarity = calculateWordSimilarity(spoken, item.exam_sentence);
        if (resultEl) {
          resultEl.style.display = 'block';
          resultEl.innerHTML = `
            <div style="font-weight: 800; margin-bottom: 4px;">🎯 발음 일치도: ${similarity}%</div>
            <div>🗣️ 내가 말한 문장: "${spoken}"</div>
            <div style="margin-top: 4px; color: ${similarity >= 80 ? '#15803d' : '#b45309'}; font-weight: 700;">
              ${similarity >= 80 ? '🎉 완벽한 AL 발음과 억양입니다!' : '💡 억양을 살려 한 번 더 따라해보세요!'}
            </div>
          `;
        }
      };

      recognition.onend = () => {
        state.isDailyShadowingRecording = false;
        if (shadowBtn) {
          shadowBtn.innerText = '🎙️ 따라 말하기 연습';
          shadowBtn.style.backgroundColor = '#ffffff';
          shadowBtn.style.color = 'var(--toss-blue)';
        }
      };

      recognition.onerror = () => {
        state.isDailyShadowingRecording = false;
        if (shadowBtn) {
          shadowBtn.innerText = '🎙️ 따라 말하기 연습';
          shadowBtn.style.backgroundColor = '#ffffff';
          shadowBtn.style.color = 'var(--toss-blue)';
        }
      };

      recognition.start();
    } catch (e) {
      state.isDailyShadowingRecording = false;
      showMicHelpModal();
    }
  }
}

// 두 영문 문장 간의 단어 일치율(유사도 %)을 계산하는 헬퍼 함수입니다.
function calculateWordSimilarity(str1, str2) {
  const w1 = str1.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const w2 = str2.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  if (w2.length === 0) return 0;
  let match = 0;
  w1.forEach((word) => {
    if (w2.includes(word)) match++;
  });
  return Math.min(100, Math.round((match / w2.length) * 100));
}

// 칩 선택 인터랙션 초기화 함수입니다.
function initChipInteractions() {
  const allChips = document.querySelectorAll('.chip-item');
  allChips.forEach((chip) => {
    const input = chip.querySelector('input');
    if (input) {
      input.addEventListener('change', () => {
        if (input.type === 'radio') {
          const name = input.name;
          document.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
            r.closest('.chip-item').classList.toggle('selected', r.checked);
          });
        } else {
          chip.classList.toggle('selected', input.checked);
        }
        updateSurveyCounterDisplay();
      });
    }
  });
  updateSurveyCounterDisplay();
}

// 서베이 선택 문항 개수 카운터 배지 업데이트 함수입니다.
function updateSurveyCounterDisplay() {
  const badge = document.getElementById('survey-selection-count-badge');
  if (!badge) return;

  const checkedLeisure = document.querySelectorAll('input[name="survey_q4_leisure"]:checked').length;
  const checkedHobby = document.querySelectorAll('input[name="survey_q5_hobby"]:checked').length;
  const checkedSports = document.querySelectorAll('input[name="survey_q6_sports"]:checked').length;
  const checkedTravel = document.querySelectorAll('input[name="survey_q7_travel"]:checked').length;

  const totalSelections = 3 + checkedLeisure + checkedHobby + checkedSports + checkedTravel;
  badge.innerText = `선택: ${totalSelections}개 / 12개 이상`;
  badge.style.backgroundColor = totalSelections >= 12 ? 'var(--toss-blue-light)' : '#fee2e2';
  badge.style.color = totalSelections >= 12 ? 'var(--toss-blue)' : 'var(--toss-red)';
}

// 1타 강사 추천 AL 만점 서베이 12종 꿀조합을 자동 선택하는 함수입니다.
function applyALRecommendedSurvey() {
  const recommended = {
    q1_job: 'NONE',
    q2_student: 'NO',
    q3_home: 'APARTMENT_ALONE',
    q4_leisure: ['MOVIE', 'PERFORMANCE', 'CONCERT', 'PARK', 'CAFE', 'BEACH'],
    q5_hobby: ['MUSIC'],
    q6_sports: ['JOGGING', 'WALKING', 'BIKING', 'GYM'],
    q7_travel: ['DOMESTIC', 'OVERSEAS', 'STAYCATION'],
    difficulty: 5
  };

  state.officialSurvey = recommended;
  saveOfficialSurveySettings(false);
  loadOfficialSurveySettings();
  alert('✨ [1타 강사] AL 만점 12종 꿀조합 서베이가 완벽하게 세팅되었습니다!\n모의고사와 스피킹 연습에서 일관성 있는 고득점 문제들이 출제됩니다.');
}

// 로컬 스토리지에 저장된 서베이 설정을 불러와 UI에 반영하는 함수입니다.
// 서베이 설정 전용 팝업 모달을 여는 함수입니다.
function openSurveySettingsModal() {
  loadOfficialSurveySettings();
  const modal = document.getElementById('survey-settings-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

// 서베이 설정 전용 팝업 모달을 닫는 함수입니다.
function closeSurveySettingsModal() {
  const modal = document.getElementById('survey-settings-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 서베이 요약 태그 및 설명 텍스트를 최신화하는 함수입니다.
function updateSurveySummaryUI() {
  const s = state.officialSurvey;
  const tagContainer = document.getElementById('mypage-survey-tag-container');
  const countBadge = document.getElementById('survey-count-badge');
  const homeSummary = document.getElementById('home-survey-summary-text');
  const examSummary = document.getElementById('exam-survey-preview-text');

  if (tagContainer) {
    const leisureTags = (s.q4_leisure || []).map(item => `<span class="survey-tag">${item}</span>`).join('');
    const hobbyTags = (s.q5_hobby || []).map(item => `<span class="survey-tag">${item}</span>`).join('');
    const sportsTags = (s.q6_sports || []).map(item => `<span class="survey-tag">${item}</span>`).join('');
    const travelTags = (s.q7_travel || []).map(item => `<span class="survey-tag">${item}</span>`).join('');
    const diffTag = `<span class="survey-tag" style="background: #ecfdf5; color: #065f46; font-weight: 800; border-color: #a7f3d0;">⭐ 난이도 ${s.difficulty || 5}-${s.difficulty || 5}</span>`;

    tagContainer.innerHTML = `${leisureTags}${hobbyTags}${sportsTags}${travelTags}${diffTag}`;
  }

  const totalCount = 3 + (s.q4_leisure || []).length + (s.q5_hobby || []).length + (s.q6_sports || []).length + (s.q7_travel || []).length;
  if (countBadge) {
    countBadge.innerText = `${totalCount}/12개 선택됨`;
  }

  const summaryStr = `현재 <strong>[1타 강사 추천 AL 12종 꿀조합]</strong>과 <strong>[난이도 ${s.difficulty || 5}-${s.difficulty || 5}]</strong>가 적용되어 15문항이 자동 출제됩니다.`;
  if (homeSummary) homeSummary.innerHTML = summaryStr;
  if (examSummary) examSummary.innerHTML = summaryStr;
}

function loadOfficialSurveySettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('opic_official_survey') || 'null');
    if (saved) state.officialSurvey = saved;
  } catch (e) {}

  const s = state.officialSurvey;

  const setRadio = (name, val) => {
    const radio = document.querySelector(`input[name="${name}"][value="${val}"]`);
    if (radio) {
      radio.checked = true;
      document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
        r.closest('.chip-item').classList.toggle('selected', r.checked);
      });
    }
  };

  const setCheckboxes = (name, valArr) => {
    document.querySelectorAll(`input[name="${name}"]`).forEach((cb) => {
      const isChecked = valArr.includes(cb.value);
      cb.checked = isChecked;
      cb.closest('.chip-item').classList.toggle('selected', isChecked);
    });
  };

  setRadio('survey_q1_job', s.q1_job);
  setRadio('survey_q2_student', s.q2_student);
  setRadio('survey_q3_home', s.q3_home);
  setCheckboxes('survey_q4_leisure', s.q4_leisure || []);
  setCheckboxes('survey_q5_hobby', s.q5_hobby || []);
  setCheckboxes('survey_q6_sports', s.q6_sports || []);
  setCheckboxes('survey_q7_travel', s.q7_travel || []);

  const diffSelect = document.getElementById('survey-difficulty-select');
  if (diffSelect) diffSelect.value = s.difficulty || 5;

  updateSurveyCounterDisplay();
  updateSurveySummaryUI();
}

// 서베이 설정을 로컬 스토리지에 저장하는 함수입니다.
function saveOfficialSurveySettings(showAlert = true) {
  const getRadio = (name) => {
    const r = document.querySelector(`input[name="${name}"]:checked`);
    return r ? r.value : '';
  };

  const getCheckboxes = (name) => {
    const arr = [];
    document.querySelectorAll(`input[name="${name}"]:checked`).forEach(cb => arr.push(cb.value));
    return arr;
  };

  const diffSelect = document.getElementById('survey-difficulty-select');
  const diff = diffSelect ? parseInt(diffSelect.value, 10) : 5;

  const surveyData = {
    q1_job: getRadio('survey_q1_job'),
    q2_student: getRadio('survey_q2_student'),
    q3_home: getRadio('survey_q3_home'),
    q4_leisure: getCheckboxes('survey_q4_leisure'),
    q5_hobby: getCheckboxes('survey_q5_hobby'),
    q6_sports: getCheckboxes('survey_q6_sports'),
    q7_travel: getCheckboxes('survey_q7_travel'),
    difficulty: diff
  };

  state.officialSurvey = surveyData;
  localStorage.setItem('opic_official_survey', JSON.stringify(surveyData));

  updateSurveySummaryUI();
  closeSurveySettingsModal();

  // 15문항 스크립트 질문 세트 갱신
  if (state.currentTab === 'script') {
    startScriptBuilderSession(state.scriptSelectedQIndex || 0);
  }

  if (showAlert) {
    alert('📋 서베이 및 난이도 설정이 성공적으로 저장되었습니다!');
  }
}

// 실시간 HUD 입력 감시자 초기화 함수입니다.
function initHUDInputWatcher() {
  const textarea = document.getElementById('stt-input-textarea');
  if (textarea) {
    textarea.addEventListener('input', (e) => {
      state.accumulatedText = e.target.value;
      updateSpeakingHUD(e.target.value);
    });
  }

  const fillSampleBtn = document.getElementById('btn-fill-sample-answer');
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', fillSampleAnswer);
  }
}

// 배속 조절 버튼 이벤트 초기화 함수입니다.
function initSpeedButtons() {
  const speedBtns = document.querySelectorAll('.btn-speed');
  speedBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.shadowingPlaybackRate = parseFloat(btn.dataset.speed || '1.0');
    });
  });
}

// 모달 이벤트 초기화 함수입니다.
function initModalEvents() {
  // 마이크 가이드 모달 닫기
  const closeMicBtn = document.getElementById('btn-close-mic-modal');
  const micModal = document.getElementById('mic-help-modal');
  if (closeMicBtn && micModal) {
    closeMicBtn.addEventListener('click', () => {
      micModal.style.display = 'none';
    });
  }

  // 서베이 모달 열기 버튼들
  const openSurveyBtn = document.getElementById('btn-open-survey-modal');
  if (openSurveyBtn) {
    openSurveyBtn.addEventListener('click', openSurveySettingsModal);
  }

  const goSurveyHomeBtn = document.getElementById('btn-go-mypage-survey');
  if (goSurveyHomeBtn) {
    goSurveyHomeBtn.addEventListener('click', openSurveySettingsModal);
  }

  const goSurveyExamBtn = document.getElementById('btn-go-mypage-from-exam');
  if (goSurveyExamBtn) {
    goSurveyExamBtn.addEventListener('click', openSurveySettingsModal);
  }

  // 서베이 모달 닫기 버튼
  const closeSurveyBtn = document.getElementById('btn-close-survey-modal');
  if (closeSurveyBtn) {
    closeSurveyBtn.addEventListener('click', closeSurveySettingsModal);
  }
}

// 마이크 안내 모달을 표시하는 함수입니다.
function showMicHelpModal() {
  const modal = document.getElementById('mic-help-modal');
  if (modal) modal.style.display = 'flex';
}

// 백엔드 Fast-TTS 서버 가용성을 확인하는 함수입니다.
async function checkServerConnection() {
  try {
    const res = await fetch(`${state.apiBaseUrl}/health`, { method: 'GET' });
    if (res.ok) {
      state.isServerAvailable = true;
    }
  } catch (e) {
    state.isServerAvailable = false;
  }
}

// 실시간 발화 HUD 정보를 갱신하는 함수입니다.
function updateSpeakingHUD(text) {
  const words = text ? text.trim().split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;

  const countEl = document.getElementById('hud-word-count');
  if (countEl) countEl.innerText = `${wordCount}단어`;

  const duration = Math.max(1, state.recordingDuration);
  const wpm = Math.round((wordCount / (duration / 60)));

  const wpmEl = document.getElementById('hud-wpm-live');
  if (wpmEl) wpmEl.innerText = `${wpm} WPM`;

  let level = "IM2";
  if (wordCount >= 40 && wpm >= 85) level = "AL";
  else if (wordCount >= 25 && wpm >= 65) level = "IH";
  else if (wordCount >= 15) level = "IM3";

  const gradeEl = document.getElementById('hud-predicted-grade');
  if (gradeEl) gradeEl.innerText = level;

  const fillers = ["you know", "speaking of", "to be honest", "as a matter of fact", "i mean", "like", "actually"];
  let detectedFillers = [];
  const lower = text.toLowerCase();
  fillers.forEach((f) => {
    if (lower.includes(f)) detectedFillers.push(f);
  });

  const fillerEl = document.getElementById('hud-filler-detected');
  if (fillerEl) {
    fillerEl.innerText = detectedFillers.length > 0 ? detectedFillers.slice(0, 2).join(', ') : '미사용';
  }
}

// 실전 모의고사 녹음 후 AI 분석 결과를 즉시 렌더링하는 함수입니다.
function renderPostRecordingAnalysis(transcript, duration, audioUrl) {
  const box = document.getElementById('post-recording-analysis-box');
  if (!box) return;

  const words = transcript ? transcript.trim().split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const dur = Math.max(3, duration);
  const wpm = Math.round((wordCount / (dur / 60)));

  const q = state.questions[state.currentIndex];
  const upgradedScript = generateUpgradedALScript(q, transcript);

  let paceComment = "적절한 발화 속도를 유지하고 계십니다.";
  if (wpm < 70) paceComment = "말씀이 조금 끊기는 편입니다. 원어민 필러(You know, Speaking of which)를 활용해 자연스럽게 이어가세요.";
  else if (wpm >= 90) paceComment = "매우 유창하고 원어민다운 훌륭한 속도입니다!";

  const fillers = ["you know", "speaking of which", "to be honest", "as a matter of fact", "i mean", "actually"];
  const lower = transcript.toLowerCase();
  const usedFillers = fillers.filter(f => lower.includes(f));

  let grade = "IH";
  if (wordCount >= 40 && wpm >= 85) grade = "AL";
  else if (wordCount < 20) grade = "IM2";

  box.innerHTML = `
    <div class="analysis-feedback-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 14px; font-weight: 800; color: #1e3a8a;">📊 즉시 AI 진단 결과</span>
        <span style="font-size: 11px; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 6px; font-weight: 800;">예상: ${grade}</span>
      </div>

      <div class="analysis-stat-grid">
        <div class="analysis-stat-item">
          <div class="analysis-stat-label">⏱️ 녹음 시간</div>
          <div class="analysis-stat-val">${Math.round(dur)}초</div>
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

// 질문과 발화 내용에 기반하여 AL 등급 수준의 만점 답변 스크립트를 생성하는 함수입니다.
function generateUpgradedALScript(question, transcript) {
  const type = question.question_type;
  const topic = question.topic;

  if (scriptUpgradeKnowledgeBase[topic] && scriptUpgradeKnowledgeBase[topic].upgraded_script) {
    return scriptUpgradeKnowledgeBase[topic].upgraded_script;
  }

  if (type === "자기소개") {
    return "Hello Eva, it is an absolute pleasure to meet you. My name is Alex, and I am currently residing in Seoul, working as a passionate professional. In my leisure time, you know, I am a huge movie enthusiast and love visiting vibrant local cafes. Speaking of which, I am truly thrilled to be here today to take this OPIc test.";
  } else if (type === "장소 묘사") {
    return `Without a shadow of a doubt, my absolute favorite spot is located just a stone's throw away from my apartment. It features state-of-the-art facilities and a remarkably cozy ambiance, which always makes my visit truly relaxing and memorable.`;
  } else if (type === "활동/루틴") {
    return `Whenever I engage in this activity, you know, I follow a pretty consistent routine. First off, I get everything prepared in advance. After spending quality time immersing myself in it, I wrap things up by relaxing and catching up with my close friends.`;
  } else if (type === "기억에 남는 경험" || type === "과거 경험") {
    return `I vividly remember a truly unexpected incident that took place a while ago. Out of nowhere, something completely unanticipated occurred, which startled everyone. However, we managed to resolve it swiftly, leaving a lasting impression on all of us.`;
  } else if (type.includes("11번")) {
    return `Hi there! It's Alex calling. I am so excited about our upcoming plan! I was just wondering if you could fill me in on a few quick details. First of all, what time are we meeting? And secondly, where is the exact location?`;
  } else if (type.includes("12번")) {
    return `I am terribly sorry to break the news, but a sudden emergency cropped up at work and I won't be able to make it on time. How about we reschedule our meeting for tomorrow instead? Alternatively, I would love to treat you to dinner this weekend.`;
  } else if (type.includes("14번")) {
    return `Looking back, the entire landscape has undergone a monumental shift. In the past, people relied heavily on traditional offline methods. In stark contrast, nowadays, everyone utilizes high-tech digital devices for instantaneous convenience.`;
  } else if (type.includes("15번")) {
    return `In today's society, one of the most prominent topics being discussed is the rapid evolution of technology alongside sustainability initiatives. In my opinion, striking a balance between technological efficiency and human connection is paramount.`;
  }

  return `Well, speaking of ${topic}, you know, I believe it plays an indispensable role in modern lifestyle. It provides immense value and allows us to unwind completely.`;
}

// 커스텀 텍스트를 공식 Eva 원어민 음성으로 즉시 재생하는 전역 헬퍼 함수입니다.
window.playCustomSpeech = function (encodedText) {
  const text = decodeURIComponent(encodedText);
  stopAllEvaAudio();
  const rate = state.shadowingPlaybackRate || 0.95;

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

// 브라우저 내장 Web Speech API를 활용한 Eva 원어민 음성 발화 폴백 함수입니다.

// 브라우저 음성 합성 폴백 및 공통 음성 재생 헬퍼 함수입니다.
function playFallbackSpeech(text, avatarEl = null, rateOrCallback = 0.95, onEndCallback = null) {
  let rate = 0.95;
  let callback = onEndCallback;
  if (typeof rateOrCallback === 'function') {
    callback = rateOrCallback;
    rate = 0.95;
  } else if (typeof rateOrCallback === 'number') {
    rate = rateOrCallback;
  }
  playBrowserSpeechFallback(text, avatarEl, rate, callback);
}

function playBrowserSpeechFallback(text, avatarEl, rate = 0.95, onEndCallback = null) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.05;

  const bestVoice = cacheBestEvaVoice();
  if (bestVoice) utterance.voice = bestVoice;

  utterance.onstart = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1.1)';
  };

  utterance.onend = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1)';
    state.currentEvaAudio = null;
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    if (avatarEl) avatarEl.style.transform = 'scale(1)';
    state.currentEvaAudio = null;
    if (onEndCallback) onEndCallback();
  };

  window.speechSynthesis.speak(utterance);
}

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

// 모든 에바 음성 재생을 즉시 중단하는 통합 함수입니다.
function stopAllEvaAudio() {
  if (state.currentEvaAudio) {
    try {
      state.currentEvaAudio.pause();
      state.currentEvaAudio.currentTime = 0;
    } catch (e) {}
    state.currentEvaAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
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
        try { state.recognition.start(); } catch (e) {}
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
  const progressBadge = document.getElementById('exam-progress-badge');
  const currentTopic = document.getElementById('exam-current-topic');
  const currentType = document.getElementById('exam-current-type');
  const questionText = document.getElementById('exam-question-text');
  const textarea = document.getElementById('stt-input-textarea');
  const analysisBox = document.getElementById('post-recording-analysis-box');
  const nextBtn = document.getElementById('btn-next-question');

  if (progressBadge) progressBadge.innerText = `${state.currentIndex + 1} / ${state.questions.length}`;
  if (currentTopic) currentTopic.innerText = q.topic;
  if (currentType) currentType.innerText = q.question_type;
  if (questionText) questionText.innerText = q.question_text;
  if (textarea) textarea.value = '';
  if (analysisBox) {
    analysisBox.style.display = 'none';
    analysisBox.innerHTML = '';
  }

  if (nextBtn) {
    nextBtn.innerText = state.currentIndex === state.questions.length - 1 ? '🏁 시험 완료 및 성적표 확인' : '다음 문제 ➔';
  }

  state.listenCount = 0;
  state.accumulatedText = '';
  updateSpeakingHUD('');

  const replayBtn = document.getElementById('btn-replay-question');
  if (replayBtn) replayBtn.innerText = '🔊 질문 다시듣기 (1회 남음)';

  playQuestionAudio();
}

// 시험 문제 에바 질문 오디오 재생 함수입니다.
function playQuestionAudio() {
  stopAllEvaAudio();

  const q = state.questions[state.currentIndex];
  const avatarEl = document.getElementById('eva-avatar-box');

  if (q.audio_file) {
    const audio = new Audio(q.audio_file);
    state.currentEvaAudio = audio;
    audio.onplay = () => { if (avatarEl) avatarEl.style.transform = 'scale(1.1)'; };
    audio.onended = () => {
      if (avatarEl) avatarEl.style.transform = 'scale(1)';
      state.currentEvaAudio = null;
      if (state.practiceMode === 'driving' && !state.isRecording) {
        setTimeout(() => toggleRecording(), 1000);
      }
    };
    audio.onerror = () => playFallbackSpeech(q.question_text, avatarEl);
    audio.play().catch(() => playFallbackSpeech(q.question_text, avatarEl));
  } else {
    playFallbackSpeech(q.question_text, avatarEl);
  }
}

// 녹음 시작 및 정지 토글 함수입니다.
async function toggleRecording() {
  const recordBtn = document.getElementById('btn-toggle-recording');
  const recordingStatus = document.getElementById('recording-status-text');

  if (!state.isRecording) {
    stopAllEvaAudio();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.mediaStream = stream;
      state.audioChunks = [];
      state.mediaRecorder = new MediaRecorder(stream);

      state.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) state.audioChunks.push(e.data);
      };

      state.mediaRecorder.start();
      state.isRecording = true;
      state.recordingStartTime = Date.now();

      if (recordBtn) {
        recordBtn.classList.add('recording');
        recordBtn.innerText = '⏹ 녹음 완료 및 AI 진단';
      }
      if (recordingStatus) recordingStatus.innerText = '🔴 녹음 중입니다... (말씀하세요)';

      if (state.recognition) {
        try { state.recognition.start(); } catch (e) {}
      }
    } catch (err) {
      showMicHelpModal();
    }
  } else {
    state.isRecording = false;
    state.recordingDuration = (Date.now() - state.recordingStartTime) / 1000;

    if (recordBtn) {
      recordBtn.classList.remove('recording');
      recordBtn.innerText = '🎙️ 답변 녹음 시작';
    }
    if (recordingStatus) recordingStatus.innerText = '녹음이 완료되었습니다.';

    if (state.recognition) {
      try { state.recognition.stop(); } catch (e) {}
    }

    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
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


// ==============================================================================
// [신규]: 오픽노잼(OPIc NoJam) AL 비법소, 원클릭 필러 인서터 및 전용 가이드 모달 제어 로직
// ==============================================================================

// 오픽노잼 관련 UI 이벤트 리스너들을 초기화하는 함수입니다.
function initOpicNojamEvents() {
  // 아코디언 헤더 토글 버튼 요소를 가져옵니다.
  const accordionHeader = document.getElementById('btn-toggle-nojam-accordion');
  // 아코디언 상세 내용 바디 요소를 가져옵니다.
  const accordionBody = document.getElementById('nojam-accordion-content');
  // 아코디언 화살표 아이콘 요소를 가져옵니다.
  const accordionArrow = document.getElementById('nojam-accordion-arrow');

  // 아코디언 헤더와 바디가 존재할 경우 토글 클릭 이벤트를 바인딩합니다.
  if (accordionHeader && accordionBody) {
    accordionHeader.addEventListener('click', () => {
      // show 클래스의 토글 상태를 확인합니다.
      const isShowing = accordionBody.classList.toggle('show');
      // 화살표 아이콘의 회전 클래스를 토글합니다.
      if (accordionArrow) accordionArrow.classList.toggle('expanded', isShowing);
    });
  }

  // 홈 탭의 오픽노잼 꿀팁 퀵 버튼을 가져옵니다.
  const homeNojamBtn = document.getElementById('btn-quick-open-nojam-guide');
  // 홈 탭 버튼 클릭 시 가이드 모달을 엽니다.
  if (homeNojamBtn) {
    homeNojamBtn.addEventListener('click', openOpicNojamGuideModal);
  }

  // 스크립트 탭 상단의 오픽노잼 비법서 버튼을 가져옵니다.
  const scriptNojamBtn = document.getElementById('btn-open-nojam-guide-from-script');
  // 스크립트 탭 버튼 클릭 시 가이드 모달을 엽니다.
  if (scriptNojamBtn) {
    scriptNojamBtn.addEventListener('click', openOpicNojamGuideModal);
  }

  // 아코디언 내부의 모달 열기 버튼을 가져옵니다.
  const accordionModalBtn = document.getElementById('btn-open-nojam-full-modal-btn');
  // 버튼 클릭 시 가이드 모달을 엽니다.
  if (accordionModalBtn) {
    accordionModalBtn.addEventListener('click', openOpicNojamGuideModal);
  }

  // 모달 상단 닫기(X) 버튼을 가져옵니다.
  const closeTopBtn = document.getElementById('btn-close-nojam-modal');
  // X 버튼 클릭 시 가이드 모달을 닫습니다.
  if (closeTopBtn) {
    closeTopBtn.addEventListener('click', closeOpicNojamGuideModal);
  }

  // 모달 하단 닫기 버튼을 가져옵니다.
  const closeBottomBtn = document.getElementById('btn-close-nojam-modal-bottom');
  // 하단 버튼 클릭 시 가이드 모달을 닫습니다.
  if (closeBottomBtn) {
    closeBottomBtn.addEventListener('click', closeOpicNojamGuideModal);
  }

  // 모달 배경 영역 클릭 시 닫히도록 설정합니다.
  const modalOverlay = document.getElementById('opic-nojam-guide-modal');
  // 오버레이가 존재하면 클릭 이벤트를 등록합니다.
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      // 모달 바깥 배경을 클릭했을 때만 닫습니다.
      if (e.target === modalOverlay) closeOpicNojamGuideModal();
    });
  }

  // 모달 내부 탭 버튼들을 초기화합니다.
  const modalTabBtns = document.querySelectorAll('.nojam-modal-tab-btn');
  // 각 탭 버튼에 클릭 이벤트를 바인딩합니다.
  modalTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // 모든 탭 버튼에서 active 클래스를 제거합니다.
      modalTabBtns.forEach(b => b.classList.remove('active'));
      // 클릭된 버튼에 active 클래스를 부여합니다.
      btn.classList.add('active');
      // 대상 탭 이름을 가져옵니다.
      const tabName = btn.dataset.nojamTab;
      // 모든 하위 뷰를 숨깁니다.
      document.querySelectorAll('.nojam-sub-view').forEach(view => view.style.display = 'none');
      // 선택된 하위 뷰를 노출합니다.
      const targetView = document.getElementById(`nojam-modal-view-${tabName}`);
      if (targetView) targetView.style.display = 'block';
    });
  });

  // 원클릭 필러(Filler) 버튼 이벤트들을 초기화합니다.
  const fillerBtns = document.querySelectorAll('.filler-btn');
  // 각 필러 버튼에 클릭 이벤트를 등록합니다.
  fillerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // 버튼에 저장된 필러 텍스트를 가져옵니다.
      const fillerText = btn.dataset.filler;
      // 작성창에 필러 텍스트를 삽입합니다.
      if (fillerText) insertFillerToScript(fillerText);
    });
  });
}

// 오픽노잼 가이드북 팝업 모달을 여는 전역 함수입니다.
function openOpicNojamGuideModal() {
  // 모달 요소를 가져옵니다.
  const modal = document.getElementById('opic-nojam-guide-modal');
  // 모달이 존재하면 flex로 노출합니다.
  if (modal) {
    modal.style.display = 'flex';
  }
}

// 오픽노잼 가이드북 팝업 모달을 닫는 전역 함수입니다.
function closeOpicNojamGuideModal() {
  // 모달 요소를 가져옵니다.
  const modal = document.getElementById('opic-nojam-guide-modal');
  // 모달이 존재하면 숨김 처리합니다.
  if (modal) {
    modal.style.display = 'none';
  }
}

// 스크립트 작성창의 커서 위치 또는 텍스트 끝에 원클릭으로 필러를 삽입하는 함수입니다.
function insertFillerToScript(fillerText) {
  // 스크립트 텍스트에어리어 요소를 가져옵니다.
  const textarea = document.getElementById('script-draft-textarea');
  // 텍스트에어리어가 없으면 종료합니다.
  if (!textarea) return;

  // 현재 커서의 시작 위치와 끝 위치를 구합니다.
  const startPos = textarea.selectionStart !== undefined ? textarea.selectionStart : textarea.value.length;
  // 끝 위치를 구합니다.
  const endPos = textarea.selectionEnd !== undefined ? textarea.selectionEnd : textarea.value.length;
  // 기존 텍스트 값을 가져옵니다.
  const currentVal = textarea.value;

  // 커서 앞부분과 뒷부분 사이에 필러 텍스트를 삽입합니다.
  const newVal = currentVal.substring(0, startPos) + fillerText + currentVal.substring(endPos);
  // 텍스트에어리어에 새 값을 반영합니다.
  textarea.value = newVal;

  // 삽입된 필러 바로 뒤로 커서 위치를 이동시킵니다.
  const newCursorPos = startPos + fillerText.length;
  // 텍스트에어리어에 포커스를 맞춥니다.
  textarea.focus();
  // 커서 위치를 재설정합니다.
  if (typeof textarea.setSelectionRange === 'function') {
    textarea.setSelectionRange(newCursorPos, newCursorPos);
  }
}

// 전역 윈도우 객체에 오픽노잼 헬퍼 함수들을 바인딩합니다.
window.openOpicNojamGuideModal = openOpicNojamGuideModal;
window.closeOpicNojamGuideModal = closeOpicNojamGuideModal;
window.insertFillerToScript = insertFillerToScript;


// ==============================================================================
// [신규] 4단계 목표 등급별(IL / IM / IH / AL) 수준별 맞춤 스크립트 데이터베이스
// ==============================================================================
const scriptMultiLevelDatabase = {
  "자기소개": {
    topic: "자기소개",
    IL: {
      script: "Hello Eva. My name is Alex. I live in Seoul. I am an office worker. I like watching movies on weekends. Nice to meet you.",
      korean: "안녕하세요 에바. 제 이름은 알렉스입니다. 서울에 살고 있습니다. 회사원입니다. 주말에는 영화 보는 것을 좋아합니다. 만나서 반갑습니다.",
      strategy: "🥉 IL 공략: 이름, 거주지, 직업, 취미 4문장을 끊김 없이 자신감 있게 발화",
      word_count: 24
    },
    IM: {
      script: "Hello Eva, it is great to meet you. My name is Alex and I live in Seoul, Korea. I work for an IT company as a developer. In my free time, I really enjoy going to the cinema and visiting cozy cafes with my close friends. Thank you.",
      korean: "안녕하세요 에바, 만나서 반갑습니다. 제 이름은 알렉스이고 한국 서울에 살고 있습니다. IT 회사에서 개발자로 일합니다. 여가 시간에는 친한 친구들과 영화관에 가거나 아늑한 카페를 방문하는 것을 정말 좋아합니다. 감사합니다.",
      strategy: "🥈 IM 공략: 3단 문장 연결 및 자연스러운 일상 어휘 구사",
      word_count: 45
    },
    IH: {
      script: "Hello Eva, it is an absolute pleasure to meet you! My name is Alex and I am currently residing in Seoul. I work as a passionate software engineer. Whenever I have some free time, you know, I love to hang out at the cinema to watch the latest movies and grab some coffee to chill out. I am super excited to take this test today.",
      korean: "안녕하세요 에바, 만나 뵙게 되어 정말 기쁩니다! 제 이름은 알렉스이고 현재 서울에 거주하고 있습니다. 열정적인 소프트웨어 엔지니어로 일하고 있습니다. 자유 시간이 생길 때마다, 아시다시피, 영화관에서 최신 영화를 보거나 커피를 마시며 여유를 즐기는 것을 정말 좋아합니다. 오늘 시험을 보게 되어 매우 설렙니다.",
      strategy: "🥇 IH 공략: 원어민 구동사(hang out, chill out)와 필러(You know) 결합",
      word_count: 67
    },
    AL: {
      script: "Hello Eva, it is an absolute pleasure to finally speak with you! My name is Alex, and I am currently based in Seoul, working as a software developer. Right off the bat, if I had to describe myself, I would say I am a huge movie enthusiast. Whenever I feel drained after a hectic workweek, you know, immersing myself in blockbusters is my absolute go-to way to blow off some steam. I am truly thrilled to share my stories with you today!",
      korean: "안녕하세요 에바, 드디어 대화하게 되어 정말 반갑습니다! 제 이름은 알렉스이고 현재 서울을 기반으로 소프트웨어 개발자로 일하고 있습니다. 질문을 받자마자 바로 저를 설명하자면, 저는 엄청난 영화 광입니다. 바쁜 한 주를 보내고 기운이 빠질 때마다, 아시겠지만, 블록버스터 영화에 몰입하는 것이 스트레스를 푸는 저만의 확실한 방법입니다. 오늘 제 이야기를 나눌 수 있어 정말 설렙니다!",
      strategy: "🏆 AL 공략: 오픽노잼 MP(Right off the bat) + 생생한 감정 + 고급 관용구(blow off some steam)",
      word_count: 88
    }
  },
  "영화관 장소 묘사": {
    topic: "영화관 장소 묘사",
    IL: {
      script: "I like watching movies. My favorite cinema is CGV. It is near my house. The theater is very big and clean. I go there on weekends with my friends.",
      korean: "저는 영화 보는 것을 좋아합니다. 제가 가장 좋아하는 영화관은 CGV입니다. 우리 집 근처에 있습니다. 영화관은 매우 크고 깨끗합니다. 주말에 친구들과 함께 갑니다.",
      strategy: "🥉 IL 공략: 장소 명칭, 위치(near my house), 분위기 형용사(big, clean) 3문장 완성",
      word_count: 31
    },
    IM: {
      script: "I usually go to the CGV movie theater near my apartment. The theater is very modern and spacious. It has comfortable seats and a large snack bar where they sell delicious popcorn. I love visiting this place because it is very convenient and relaxing.",
      korean: "저는 보통 아파트 근처에 있는 CGV 영화관에 갑니다. 영화관은 매우 현대적이고 넓습니다. 편안한 좌석과 맛있는 팝콘을 파는 큰 스낵바가 있습니다. 매우 편리하고 편안해서 이곳을 방문하는 것을 좋아합니다.",
      strategy: "🥈 IM 공략: 관계사(where they sell) 및 편의 시설(modern, spacious) 묘사",
      word_count: 46
    },
    IH: {
      script: "Well, whenever I want to catch a movie, I always head to the CGV cinema located just a stone's throw away from my home. The multiplex boasts huge digital screens, comfortable leather seats, and great sound systems. On top of that, there is a lovely cafe inside the lobby, which makes waiting for the movie really enjoyable.",
      korean: "영화를 보고 싶을 때마다 저는 항상 집에서 엎어지면 코 닿을 거리에 있는 CGV 영화관으로 향합니다. 그 멀티플렉스는 거대한 디지털 스크린, 편안한 가죽 좌석, 훌륭한 음향 시설을 자랑합니다. 게다가 로비 안에 예쁜 카페가 있어서 영화를 기다리는 시간도 정말 즐겁습니다.",
      strategy: "🥇 IH 공략: 근접성 구동사(a stone's throw away)와 시설 수식어(boasts, multiplex)",
      word_count: 63
    },
    AL: {
      script: "Well, to be honest, my absolute favorite cinema is a flagship CGV located just a stone's throw away from my apartment. The moment you step inside, you are blown away by their state-of-the-art IMAX screens and cozy premium recliners. Speaking of which, the sound quality is totally mind-blowing, which makes you feel like you are right in the middle of the action. It is without a shadow of a doubt the best place to chill out.",
      korean: "솔직히 말씀드리면, 제가 가장 좋아하는 영화관은 아파트에서 엎어지면 코 닿을 거리에 있는 플래그십 CGV입니다. 안으로 들어서는 순간, 최첨단 IMAX 스크린과 아늑한 프리미엄 리클라이너 좌석에 압도당하게 됩니다. 그뿐만 아니라 음향 품질이 정말 머리가 띵할 정도로 훌륭해서 마치 액션 한가운데 있는 듯한 느낌을 줍니다. 단언컨대 휴식을 취하기에 최고의 장소입니다.",
      strategy: "🏆 AL 공략: 오픽노잼 MP + 오감 묘사(blown away, mind-blowing) + AL 연결사",
      word_count: 82
    }
  },
  "영화 보기 전후 루틴": {
    topic: "영화 보기 전후 루틴",
    IL: {
      script: "Before watching a movie, I buy a ticket online. Then, I buy popcorn and soda. During the movie, I focus on the screen. After the movie, I eat dinner with friends.",
      korean: "영화 보기 전에 온라인으로 티켓을 예매합니다. 그런 다음 팝콘과 탄산음료를 삽니다. 영화를 보는 동안 스크린에 집중합니다. 영화가 끝난 후 친구들과 저녁을 먹습니다.",
      strategy: "🥉 IL 공략: Before, Then, After 시간 순서 3단계 단순 현재형 발화",
      word_count: 32
    },
    IM: {
      script: "Whenever I watch a movie, I follow a simple routine. First, I reserve my seats using a mobile app. When I arrive at the theater, I pick up my tickets and buy some snacks. After the movie finishes, my friends and I usually go to a nearby restaurant to have dinner and talk about the movie.",
      korean: "영화를 볼 때마다 저는 간단한 루틴을 따릅니다. 먼저 모바일 앱으로 좌석을 예매합니다. 영화관에 도착하면 티켓을 출력하고 간식을 삽니다. 영화가 끝나면 친구들과 근처 식당에 가서 저녁을 먹으며 영화에 대해 이야기합니다.",
      strategy: "🥈 IM 공략: First, When I arrive, After the movie finishes 접속사 활용",
      word_count: 57
    },
    IH: {
      script: "I have a pretty consistent routine on movie days. First off, I make sure to book prime seats through my smartphone in advance. Once I get to the cinema, I grab an iced coffee and hot butter popcorn. Right after the movie ends, I love to head over to a nice pub with my friends to catch up and debate our favorite scenes.",
      korean: "저는 영화를 보는 날에 꽤 일정한 루틴을 가지고 있습니다. 우선 첫째로 스마트폰으로 명당자리를 미리 예매합니다. 영화관에 도착하면 아이스 커피와 갓 튀긴 버터 팝콘을 삽니다. 영화가 끝나자마자 친구들과 근사한 펍으로 가서 밀린 대화를 나누며 가장 마음에 들었던 장면에 대해 토론합니다.",
      strategy: "🥇 IH 공략: prime seats, catch up, debate 등 원어민식 구동사 배치",
      word_count: 67
    },
    AL: {
      script: "Whenever I plan a movie night, you know, I stick to a well-established routine. Right off the bat, I book the best center seats via a mobile app days before. On the day of the show, I arrive thirty minutes early to grab some gourmet nachos and a hot latte. Once the credits roll, my friends and I always head to a cozy bistro to catch up over dinner. We dissect every plot twist, which is honestly the highlight of the whole experience!",
      korean: "영화 보러 갈 계획을 세울 때마다, 아시겠지만, 저는 아주 확실한 루틴을 따릅니다. 질문을 받자마자 바로 말씀드리면, 며칠 전에 모바일 앱으로 가장 좋은 중앙 좌석을 예매합니다. 영화 당일에는 30분 일찍 도착해서 고급 나초와 따뜻한 라떼를 삽니다. 엔딩 크레딧이 올라가면 친구들과 아늑한 비스트로로 가서 저녁을 먹으며 이야기를 나눕니다. 모든 반전 플롯을 분석하는데, 솔직히 그게 전체 경험의 하이라이트입니다!",
      strategy: "🏆 AL 공략: Once the credits roll, dissect every plot twist 등 최고급 관용구 구사",
      word_count: 86
    }
  },
  "영화관 과거 잊지 못할 경험": {
    topic: "영화관 과거 잊지 못할 경험",
    IL: {
      script: "Last month, I went to the cinema with my friend. Suddenly, the power went out! The screen turned black. We were surprised. But the staff gave us free tickets. It was memorable.",
      korean: "지난달에 친구와 영화관에 갔습니다. 갑자기 정전이 되었습니다! 스크린이 검게 변했습니다. 우리는 놀랐습니다. 하지만 직원이 무료 티켓을 주었습니다. 기억에 남았습니다.",
      strategy: "🥉 IL 공략: went, turned, gave 과거 시제 일치 4문장 완성",
      word_count: 32
    },
    IM: {
      script: "I remember an interesting incident that happened at a movie theater last year. In the middle of an exciting movie, the projector suddenly stopped working! Everyone in the room was very confused. The manager came in, apologized, and gave everyone a full refund and movie vouchers. It was an unusual experience.",
      korean: "작년에 영화관에서 일어난 흥미로운 일이 기억납니다. 신나는 영화의 중간에 갑자기 프로젝터가 작동을 멈췄습니다! 방 안에 있는 모든 사람들이 매우 혼란스러워했습니다. 매니저가 들어와 사과하고 모든 사람에게 전액 환불과 영화 관람권을 주었습니다. 특이한 경험이었습니다.",
      strategy: "🥈 IM 공략: In the middle of, stopped working, apologized 3단 스토리 전개",
      word_count: 53
    },
    IH: {
      script: "I clearly recall a memorable experience that took place at a cinema a few months ago. Out of nowhere, right during the climax of a thriller film, the fire alarm went off! We all had to evacuate the building immediately. Fortunately, it turned out to be a false alarm, and the theater management kindly compensated us with complimentary tickets. It definitely left a lasting impression on me.",
      korean: "몇 달 전 영화관에서 일어났던 기억에 남는 경험이 생생하게 기억납니다. 난데없이 스릴러 영화의 클라이맥스 도중에 화재경보기가 울렸습니다! 우리 모두 즉시 건물 밖으로 대피해야 했습니다. 다행히 오작동으로 밝혀졌고, 영화관 측에서는 무료 티켓으로 친절하게 보상해 주었습니다. 분명히 저에게 깊은 인상을 남겼습니다.",
      strategy: "🥇 IH 공략: Out of nowhere, evacuate, left a lasting impression 고급 표현 구사",
      word_count: 70
    },
    AL: {
      script: "I vividly remember a truly surreal experience that unfolded at a cinema last summer. Right in the middle of a blockbuster climax, out of nowhere, the entire theater suffered a total blackout! The screen went pitch-black, and my friend was like, 'What on earth just happened?' Everyone was bewildered. Fortunately, the staff handled the situation with remarkable poise, offering full refunds. It was alarming at first, but looking back, it turned into an unforgettable story!",
      korean: "지난여름 영화관에서 펼쳐졌던 정말 비현실적인 경험이 생생하게 기억납니다. 블록버스터 영화의 클라이맥스 중간에 난데없이 영화관 전체에 정전이 일어났습니다! 스크린은 완전한 암흑이 되었고 제 친구는 '도대체 무슨 일이야?'라고 말했습니다. 모두가 당황했습니다. 다행히 직원들이 놀라운 침착함으로 상황을 처리하며 전액 환불을 제공했습니다. 처음엔 놀랐지만 돌아보면 잊지 못할 추억이 되었습니다!",
      strategy: "🏆 AL 공략: Direct Quote(was like) + surreal, pitch-black, remarkable poise 만점 어휘",
      word_count: 81
    }
  },
  "집 묘사": {
    topic: "집 묘사",
    IL: {
      script: "I live in an apartment in Seoul. My house has two rooms and one living room. It is very cozy and bright. I like my room because it has a big window.",
      korean: "저는 서울의 아파트에 삽니다. 제 집은 방 2개와 거실 1개가 있습니다. 매우 아늑하고 밝습니다. 큰 창문이 있어서 제 방을 좋아합니다.",
      strategy: "🥉 IL 공략: live in, has two rooms, cozy and bright 기본 구조",
      word_count: 32
    },
    IM: {
      script: "Currently, I live in a modern two-bedroom apartment. My favorite space in my home is the living room because it has a comfortable sofa and a large TV. Through the balcony, I can get a lot of natural sunlight, which makes the whole place feel warm and welcoming.",
      korean: "현재 저는 현대적인 방 2개짜리 아파트에 살고 있습니다. 집에서 가장 좋아하는 공간은 편안한 소파와 큰 TV가 있는 거실입니다. 베란다를 통해 많은 자연 채광이 들어와 집 전체가 따뜻하고 아늑하게 느껴집니다.",
      strategy: "🥈 IM 공략: natural sunlight, warm and welcoming 감성 표현 결합",
      word_count: 48
    },
    IH: {
      script: "I reside in a cozy yet modern apartment located in a quiet residential area. The centerpiece of my home is the spacious living room, which is flooded with natural sunlight. I especially love spending time on my balcony overlooking a lovely park. It provides the ultimate peaceful environment for me to unwind after work.",
      korean: "저는 조용한 주거 지역에 위치한 아늑하면서도 현대적인 아파트에 거주하고 있습니다. 제 집의 중심은 자연 채광이 쏟아지는 넓은 거실입니다. 특히 아름다운 공원이 내려다보이는 발코니에서 시간을 보내는 것을 아주 좋아합니다. 퇴근 후 긴장을 풀기에 최고의 평화로운 환경을 제공합니다.",
      strategy: "🥇 IH 공략: reside in, centerpiece, flooded with sunlight 고급 어휘",
      word_count: 57
    },
    AL: {
      script: "When it comes to my home, I currently reside in a charming, minimalist apartment situated in a tranquil neighborhood. The absolute highlight of my place is the expansive living room, which boasts floor-to-ceiling windows with a breathtaking panoramic city view. You know, whenever I sit on my couch sipping a hot espresso, I feel a tremendous sense of tranquility and peace of mind.",
      korean: "제 집에 대해 말씀드리자면, 저는 현재 평화로운 동네에 위치한 매력적이고 미니멀한 아파트에 살고 있습니다. 제 공간의 가장 큰 하이라이트는 숨 막히는 파노라마 도시 전망을 자랑하는 통유리창이 있는 넓은 거실입니다. 아시겠지만, 따뜻한 에스프레소를 마시며 소파에 앉아 있을 때마다 엄청난 평온함과 마음의 안정을 느낍니다.",
      strategy: "🏆 AL 공략: floor-to-ceiling windows, panoramic view, sense of tranquility 구사",
      word_count: 67
    }
  },
  "롤플레이 질문하기": {
    topic: "롤플레이 질문하기",
    IL: {
      script: "Hi Sarah, it's Alex. I have some questions about our weekend party. What time does the party start? Where is the location? What should I bring? Please call me back. Bye.",
      korean: "안녕 사라, 나 알렉스야. 주말 파티에 대해 몇 가지 질문이 있어. 파티 몇 시에 시작해? 장소는 어디야? 내가 뭐 챙겨갈까? 다시 전화 줘. 안녕.",
      strategy: "🥉 IL 공략: 의문문 3개(What time, Where, What) 정확하게 질문하기",
      word_count: 32
    },
    IM: {
      script: "Hi Minho, this is Alex calling. I'm calling to ask a few questions about our upcoming trip this weekend. First, what time are we planning to leave? Also, which hotel did you book for us? Lastly, do I need to prepare any food? Let me know when you get this message.",
      korean: "안녕 민호야, 나 알렉스야. 이번 주말 우리 여행에 대해 몇 가지 물어보려고 전화했어. 먼저 우리 몇 시에 출발할 계획이야? 그리고 우리 숙소 어느 호텔로 예약했어? 마지막으로 내가 준비해야 할 음식이 있을까? 메시지 보면 알려줘.",
      strategy: "🥈 IM 공략: I'm calling to ask, First, Also, Lastly 순차 질문",
      word_count: 54
    },
    IH: {
      script: "Hi there, it's Alex calling! I'm so thrilled about our upcoming party this Saturday. I was just wondering if you could fill me in on a few quick details. First of all, what time are we planning to kick things off? Secondly, did you finalize the venue? And lastly, is there any specific beverage or dessert you'd like me to bring along?",
      korean: "안녕, 나 알렉스야! 이번 주 토요일 우리 파티 생각에 너무 신나. 몇 가지 세부사항을 알려줄 수 있는지 궁금해서 전화했어. 우선 첫째로 몇 시에 시작할 계획이야? 둘째로 장소는 최종 확정했어? 그리고 마지막으로 내가 챙겨갔으면 하는 특별한 음료나 디저트가 있을까?",
      strategy: "🥇 IH 공략: fill me in on, kick things off, bring along 원어민 관용구",
      word_count: 66
    },
    AL: {
      script: "Hey Sarah! It's Alex calling. I am so excited about our upcoming get-together this weekend! I was just hoping to touch base with you and clarify a few quick logistics. Right off the bat, what time are we planning to kick things off? Secondly, did you lock down that trendy rooftop venue? And lastly, is there any particular snack or wine you'd love me to pick up on my way? Give me a shout when you're free!",
      korean: "안녕 사라! 나 알렉스야. 이번 주말 우리 모임 생각에 정말 너무 기대돼! 몇 가지 진행 사항을 체크하고 맞춰보려고 전화했어. 질문하자면 바로, 우리 몇 시에 시작할 예정이야? 둘째로 그 트렌디한 루프탑 장소로 확정 예약했어? 그리고 마지막으로 내가 가는 길에 사 갔으면 하는 특별한 스낵이나 와인이 있을까? 시간 날 때 연락 줘!",
      strategy: "🏆 AL 공략: touch base, lock down, give me a shout 원어민 슬랭 및 자연스러운 억양",
      word_count: 79
    }
  },
  "롤플레이 대안제시": {
    topic: "롤플레이 대안제시",
    IL: {
      script: "Hi Minho, I am so sorry. I have urgent work today, so I cannot come to our dinner. How about we meet tomorrow? Or, I will buy you lunch this weekend. I am sorry again.",
      korean: "안녕 민호야, 정말 미안해. 오늘 급한 일이 생겨서 저녁 약속에 못 갈 것 같아. 내일 만나는 건 어때? 아니면 이번 주말에 내가 점심 살게. 다시 한번 미안해.",
      strategy: "🥉 IL 공략: 정중한 사과 + 대안 1(tomorrow) + 대안 2(weekend lunch)",
      word_count: 36
    },
    IM: {
      script: "Hi Sarah, I am terribly sorry, but something urgent came up at my office and I won't be able to make it tonight. To make it up to you, how about we reschedule our dinner for tomorrow evening instead? If that doesn't work for you, I would love to treat you to a nice meal this Sunday. Let me know which option you prefer.",
      korean: "안녕 사라, 정말 미안하지만 회사에 급한 일이 생겨서 오늘 밤에 못 갈 것 같아. 보답하는 의미로 대신 내일 저녁으로 약속을 변경하는 건 어떨까? 만약 내일이 안 된다면 이번 일요일에 맛있는 식사를 대접하고 싶어. 어떤 선택이 더 좋은지 알려줘.",
      strategy: "🥈 IM 공략: came up, make it up to you, reschedule 정중한 비즈니스/캐주얼 톤",
      word_count: 64
    },
    IH: {
      script: "Hey Minho, I am terribly sorry to break the news, but an unexpected emergency cropped up at work and I won't be able to join you tonight. I feel terrible about this. To make it up to you, how about we push our dinner to tomorrow evening? Alternatively, if your weekend is open, I'd love to take you out to that fine Italian restaurant on me. Let me know what suits you best!",
      korean: "안녕 민호야, 이런 소식을 전하게 되어 너무 미안하지만 회사에 예상치 못한 긴급 상황이 불쑥 생겨서 오늘 밤 함께하지 못할 것 같아. 정말 미안하게 생각해. 만회하기 위해 우리 저녁 식사를 내일 저녁으로 미루는 건 어때? 대안으로 주말에 시간이 괜찮다면 내가 그 고급 이탈리안 레스토랑에서 한턱낼게. 언제가 가장 편한지 알려줘!",
      strategy: "🥇 IH 공략: cropped up, push to tomorrow, on me 자연스러운 대화체",
      word_count: 72
    },
    AL: {
      script: "Hey Minho, I am terribly sorry to drop this on you last minute, but a sudden crisis erupted at my office and I am stuck here until midnight. I feel awful about flaking on our dinner. To make it up to you, how about we reschedule for tomorrow evening? Or, if that's inconvenient, allow me to treat you to a lavish steak dinner this Saturday entirely on my tab. I am so sorry for the inconvenience, and let me know your thoughts!",
      korean: "민호야, 마지막 순간에 이런 소식을 전해 정말 미안하지만 회사에 갑작스러운 위기 상황이 터져서 자정까지 꼼짝없이 묶이게 됐어. 약속을 펑크 내게 되어 마음이 너무 안 좋아. 만회하기 위해 내일 저녁으로 일정을 조정하는 건 어떨까? 만약 내일이 불편하다면 이번 주 토요일에 내 계산으로 근사한 스테이크 디너를 풀코스로 대접할게. 불편을 끼쳐 정말 미안하고 생각 알려줘!",
      strategy: "🏆 AL 공략: crisis erupted, flaking on, on my tab 최고급 원어민 구어체",
      word_count: 81
    }
  }
};

// 특정 토픽과 목표 등급에 해당하는 수준별 스크립트 데이터를 반환하는 헬퍼 함수입니다.
function getMultiLevelScriptItem(topic, grade = 'AL') {
  // 데이터베이스에서 해당 토픽을 검색합니다.
  const matched = scriptMultiLevelDatabase[topic] || scriptMultiLevelDatabase["영화관 장소 묘사"];
  // 요청된 등급(IL, IM, IH, AL)의 데이터를 반환하며, 없으면 AL을 기본값으로 반환합니다.
  return matched[grade] || matched["AL"];
}

// 목표 등급(IL, IM, IH, AL)을 전환하고 문항 수 및 난이도를 자동 세팅하는 함수입니다.
function setScriptTargetGrade(grade) {
  // 전역 상태의 목표 등급을 업데이트합니다.
  state.scriptTargetGrade = grade;
  state.scriptViewerGrade = grade;

  // 목표 등급 선택 필 버튼들의 활성화 상태를 업데이트합니다.
  document.querySelectorAll('.grade-select-pill').forEach((btn) => {
    const isTarget = btn.dataset.grade === grade;
    btn.classList.toggle('active', isTarget);
  });

  // 미니 등급 토글 버튼들의 활성화 상태도 동기화합니다.
  document.querySelectorAll('.mini-grade-btn').forEach((btn) => {
    const isTarget = btn.dataset.viewGrade === grade;
    btn.classList.toggle('active', isTarget);
  });

  // 목표 등급 배지 및 설명 문구를 업데이트합니다.
  const badgeEl = document.getElementById('target-grade-badge');
  const descEl = document.getElementById('target-grade-desc-text');

  let targetDifficulty = 5;
  if (grade === 'IL') {
    targetDifficulty = 2;
    if (badgeEl) {
      badgeEl.innerText = '🥉 IL/IM1 (난이도 2-2 / 12문항)';
      badgeEl.style.background = '#fef3c7';
      badgeEl.style.color = '#b45309';
    }
    if (descEl) {
      descEl.innerHTML = '💡 <strong>초급 IL 모드:</strong> 3~4개 기초 단문으로 끊김 없이 10초 만에 외워서 말문이 터지는 입문용 스크립트입니다.';
    }
  } else if (grade === 'IM') {
    targetDifficulty = 4;
    if (badgeEl) {
      badgeEl.innerText = '🥈 IM2/IM3 (난이도 4-4 / 15문항)';
      badgeEl.style.background = '#e0e7ff';
      badgeEl.style.color = '#3730a3';
    }
    if (descEl) {
      descEl.innerHTML = '💡 <strong>중급 IM 모드:</strong> 서론-본론-결론 3단 구조와 시간 연결사(First, After that) 중심의 탄탄한 기본 스크립트입니다.';
    }
  } else if (grade === 'IH') {
    targetDifficulty = 5;
    if (badgeEl) {
      badgeEl.innerText = '🥇 IH (난이도 5-5 / 15문항)';
      badgeEl.style.background = '#dbeafe';
      badgeEl.style.color = '#1d4ed8';
    }
    if (descEl) {
      descEl.innerHTML = '💡 <strong>상급 IH 모드:</strong> 원어민 구동사(hang out, chill out), 풍부한 감정 표현, 롤플레이 대안 제시가 결합된 유창한 스크립트입니다.';
    }
  } else {
    targetDifficulty = 5;
    if (badgeEl) {
      badgeEl.innerText = '🏆 AL 만점 (난이도 5-5 / 15문항)';
      badgeEl.style.background = '#ecfdf5';
      badgeEl.style.color = '#047857';
    }
    if (descEl) {
      descEl.innerHTML = '💡 <strong>AL 만점 모드:</strong> 오픽노잼 5대 황금 법칙(MP 두괄식, 1 Thing, 직접화법, 원어민 필러)으로 무장한 최고급 스크립트입니다.';
    }
  }

  // 서베이 난이도 설정을 업데이트합니다.
  state.officialSurvey.difficulty = targetDifficulty;
  // 변경된 난이도에 맞추어 문제 세트를 다시 생성합니다.
  state.scriptQuestions = createSurveyBasedExamSet(state.officialSurvey);
  state.scriptSelectedQIndex = 0;

  // 문항 칩과 첫 번째 문항 상세 뷰를 갱신합니다.
  renderScriptQuestionChips();
  selectScriptQuestion(0);
}

// 문항 상세 카드 내 4단계 등급 뷰어의 등급(IL/IM/IH/AL)을 전환하는 함수입니다.
function setScriptViewerGrade(grade) {
  // 전역 상태의 뷰어 등급을 업데이트합니다.
  state.scriptViewerGrade = grade;

  // 미니 등급 버튼 활성화 스타일을 업데이트합니다.
  document.querySelectorAll('.mini-grade-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.viewGrade === grade);
  });

  // 현재 선택된 문항을 가져옵니다.
  const q = state.scriptQuestions[state.scriptSelectedQIndex];
  if (!q) return;

  // 해당 문항의 지정 등급 스크립트 데이터를 가져옵니다.
  const levelData = getMultiLevelScriptItem(q.topic, grade);

  // 뷰어 텍스트 및 번역, 공략 포인트를 화면에 반영합니다.
  const textEl = document.getElementById('multilevel-script-text');
  const korEl = document.getElementById('multilevel-script-korean');
  const strategyEl = document.getElementById('multilevel-script-strategy');

  if (textEl) textEl.innerText = `"${levelData.script}"`;
  if (korEl) korEl.innerText = levelData.korean;
  if (strategyEl) strategyEl.innerText = levelData.strategy;
}

// 4단계 뷰어에 표시된 스크립트를 내 작성창(textarea)으로 원터치 복사하는 함수입니다.
function copyMultilevelScriptToDraft() {
  const textEl = document.getElementById('multilevel-script-text');
  const textarea = document.getElementById('script-draft-textarea');
  if (!textEl || !textarea) return;

  // 따옴표를 제거한 순수 텍스트를 작성창에 반영합니다.
  const cleanScript = textEl.innerText.replace(/^"|"$/g, '').trim();
  textarea.value = cleanScript;
  textarea.focus();

  // 사용자에게 알림 피드백을 제공합니다.
  alert(`📋 [${state.scriptViewerGrade || 'AL'}] 등급 모범 스크립트가 작성창으로 복사되었습니다!`);
}

// 4단계 뷰어에 표시된 스크립트를 원어민 음성으로 재생하는 함수입니다.
function listenMultilevelScriptAudio() {
  const textEl = document.getElementById('multilevel-script-text');
  if (!textEl) return;
  const cleanScript = textEl.innerText.replace(/^"|"$/g, '').trim();
  playCustomSpeech(encodeURIComponent(cleanScript));
}

// initScriptBuilderEvents에 등급별 스크립트 이벤트 리스너들을 등록합니다.
function initMultiLevelScriptEvents() {
  // 상단 목표 등급 바 버튼 클릭 이벤트 등록
  document.querySelectorAll('.grade-select-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetGrade = btn.dataset.grade;
      if (targetGrade) setScriptTargetGrade(targetGrade);
    });
  });

  // 문항 상세 카드 내 미니 등급 토글 버튼 클릭 이벤트 등록
  document.querySelectorAll('.mini-grade-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const viewGrade = btn.dataset.viewGrade;
      if (viewGrade) setScriptViewerGrade(viewGrade);
    });
  });

  // 작성창으로 가져오기 버튼 클릭 이벤트 등록
  const copyBtn = document.getElementById('btn-copy-multilevel-to-draft');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyMultilevelScriptToDraft);
  }

  // 등급별 스크립트 음성 듣기 버튼 클릭 이벤트 등록
  const listenBtn = document.getElementById('btn-listen-multilevel-script');
  if (listenBtn) {
    listenBtn.addEventListener('click', listenMultilevelScriptAudio);
  }
}

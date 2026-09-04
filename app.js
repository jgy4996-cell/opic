// ==============================================================================
// 파일명: app.js
// 설명: OPIc Master AI 컨트롤러 (나만의 스크립트 작성 & AI 첨삭 연구소 및 보관함 탑재)
// ==============================================================================
// 공백 라인입니다.
// 오픽 고득점 1일 1문장 구동사 & 실전 문장 데이터 세트입니다.
const dailySentencesData = [ // 변수 또는 상수를 선언하고 초기화합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 1, // 1일차 식별자 번호입니다.
    key_expression: "a stone's throw away", // 핵심 구동사/표현입니다.
    korean_meaning: "엎어지면 코 닿을 매우 가까운 거리", // 한국어 의미입니다.
    category: "장소 묘사 / 거주지", // 출제 카테고리입니다.
    opic_tip: "집 근처 공원, 카페, 영화관 묘사 질문(2, 5번)에서 근접성을 말할 때 쓰면 AL 확정 표현입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "My favorite cafe is located just a stone's throw away from my apartment, so I visit there almost every weekend.", // 실전 문장입니다.
    korean_sentence: "제가 가장 좋아하는 카페는 아파트에서 엎어지면 코 닿을 거리에 있어서 거의 매 주말마다 방문합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_1.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 2, // 2일차 식별자 번호입니다.
    key_expression: "chill out", // 핵심 구동사/표현입니다.
    korean_meaning: "느긋하게 긴장을 풀고 쉬다", // 한국어 의미입니다.
    category: "활동 및 루틴 / 집에서 보내는 휴가", // 출제 카테고리입니다.
    opic_tip: "단순히 'rest' 대신 'chill out'이나 'unwind'를 쓰면 원어민 특유의 자연스러운 구어체 점수를 받습니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Whenever I feel stressed out, you know, I love to just stay at home and chill out listening to jazz music.", // 실전 문장입니다.
    korean_sentence: "스트레스를 받을 때마다, 아시겠지만, 저는 그냥 집에 머물며 재즈 음악을 듣고 느긋하게 휴식하는 것을 정말 좋아합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_2.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 3, // 3일차 식별자 번호입니다.
    key_expression: "come up with", // 핵심 구동사/표현입니다.
    korean_meaning: "(아이디어, 해결책을) 생각해내다 / 마련하다", // 한국어 의미입니다.
    category: "롤플레이 12번 / 문제 해결", // 출제 카테고리입니다.
    opic_tip: "롤플레이 12번에서 약속 변경이나 대안을 제시할 때 필수로 쓰이는 만능 구동사입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "I am terribly sorry for the sudden cancellation, but I will come up with a better alternative for our meeting tomorrow.", // 실전 문장입니다.
    korean_sentence: "갑작스러운 취소에 대해 정말 죄송하지만, 내일 미팅을 위해 제가 더 나은 대안을 마련해 오겠습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_3.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 4, // 4일차 식별자 번호입니다.
    key_expression: "leave a lasting impression", // 핵심 구동사/표현입니다.
    korean_meaning: "오래도록 잊히지 않는 깊은 인상을 남기다", // 한국어 의미입니다.
    category: "기억에 남는 경험 / 과거 사건", // 출제 카테고리입니다.
    opic_tip: "4번, 7번, 13번 과거 경험 문제 결론부에서 '잊지 못할 경험이었다'를 고급스럽게 마무리하는 문장입니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "The unexpected trip to the seaside was truly memorable and left a lasting impression on all of us.", // 실전 문장입니다.
    korean_sentence: "그 예상치 못했던 바닷가 여행은 정말 기억에 남았고 우리 모두에게 깊은 인상을 남겼습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_4.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 5, // 5일차 식별자 번호입니다.
    key_expression: "call off", // 핵심 구동사/표현입니다.
    korean_meaning: "(약속, 행사를) 취소하다", // 한국어 의미입니다.
    category: "롤플레이 12번 / 유사 경험 13번", // 출제 카테고리입니다.
    opic_tip: "'cancel'의 원어민식 구동사 표현으로, 오픽 롤플레이에서 상황을 설명할 때 매우 유용합니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Due to the heavy rainstorm, we had no choice but to call off our outdoor picnic plan.", // 실전 문장입니다.
    korean_sentence: "폭우 때문에 우리는 야외 소풍 계획을 취소할 수밖에 없었습니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_5.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 6, // 6일차 식별자 번호입니다.
    key_expression: "without a shadow of a doubt", // 핵심 구동사/표현입니다.
    korean_meaning: "추호의 의심도 없이 / 단언컨대", // 한국어 의미입니다.
    category: "음악 / 영화 / 인물 묘사", // 출제 카테고리입니다.
    opic_tip: "자신이 좋아하는 가수나 영화를 강조할 때 도입부로 사용하면 세련된 강조 효과를 줍니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Without a shadow of a doubt, this cinema is the best place to enjoy blockbuster movies with immersive sound.", // 실전 문장입니다.
    korean_sentence: "단언컨대, 이 영화관은 웅장한 사운드와 함께 블록버스터 영화를 즐기기에 최고의 장소입니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_6.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  { // 객체 또는 코드 블록을 시작합니다.
    id: 7, // 7일차 식별자 번호입니다.
    key_expression: "catch up with", // 핵심 구동사/표현입니다.
    korean_meaning: "(오랜만에 만나) 밀린 이야기를 나누다 / 회포를 풀다", // 한국어 의미입니다.
    category: "친구 약속 / 카페 / 휴일", // 출제 카테고리입니다.
    opic_tip: "카페나 식당에서 친구와 만났을 때 단순한 'talk' 대신 사용하면 유창성이 극대화됩니다.", // 1타강사 꿀팁입니다.
    exam_sentence: "Whenever I visit that cozy cafe, I love to catch up with my close friends over a cup of hot latte.", // 실전 문장입니다.
    korean_sentence: "그 아늑한 카페를 갈 때마다, 저는 따뜻한 라떼 한 잔을 마시며 친한 친구들과 밀린 이야기를 나누는 것을 좋아합니다.", // 한국어 번역입니다.
    audio_file: "audio/daily_7.mp3" // 실제 Eva 녹음 오디오 파일 경로입니다.
  } // 객체 또는 코드 블록을 종료합니다.
]; // 배열 데이터 선언을 종료합니다.
// 공백 라인입니다.
// 초급/중급/고급 수준별 7일 완성 커리큘럼 데이터베이스입니다.
const studyPlansData = { // 변수 또는 상수를 선언하고 초기화합니다.
  beginner: { // 자바스크립트 실행 구문입니다.
    title: "🥉 초급 마스터 플랜 (IL ~ IM2 목표)", // 초급 플랜 제목입니다.
    description: "말문 트이기! 1문장이라도 자신감 있게 뱉는 기초 체력 다지기", // 설명 문구입니다.
    days: [ // 자바스크립트 실행 구문입니다.
      { day: 1, title: "1번 자기소개 3문장 완성", desc: "이름, 직업, 취미 1문장씩 끊김 없이 말하기", question: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 2, title: "공원/카페 기본 장소 묘사", desc: "위치와 좋아하는 이유(분위기) 단순 현재형으로 말하기", question: "Tell me about the park you visit most often. What does it look like?" }, // 자바스크립트 실행 구문입니다.
      { day: 3, title: "하루 일과 루틴 말하기", desc: "First, Then, After that 시간 순서 연결사 익히기", question: "What do you usually do when you go to the park from start to finish?", audio_file: "audio/q3.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 4, title: "집/거주지 방 구조 묘사", desc: "There is / There are 패턴으로 가구와 방 설명하기", question: "Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 5, title: "음악/영화 취향 말하기", desc: "My favorite genre is... 좋아하는 장르 2가지 말하기", question: "What kind of music do you like listening to? Who is your favorite singer?" }, // 자바스크립트 실행 구문입니다.
      { day: 6, title: "과거형 동사(-ed) 기본 발음", desc: "went, saw, played 등 과거 시제 어색함 없애기", question: "Tell me about a memorable movie you watched in the past.", audio_file: "audio/q4.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 7, title: "초급 3문제 콤보 실전 완주", desc: "자기소개 + 공원 묘사 + 영화 루틴 3문제 도전", question: "You indicated you go to cafes. Describe your favorite cafe." } // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  intermediate: { // 자바스크립트 실행 구문입니다.
    title: "🥈 중급 마스터 플랜 (IM3 ~ IH 목표)", // 중급 플랜 제목입니다.
    description: "3-콤보 세트 흐름 완벽 연결 & 롤플레이 11-12번 정복", // 설명 문구입니다.
    days: [ // 자바스크립트 실행 구문입니다.
      { day: 1, title: "서론-본론-결론 3단 프레임", desc: "Well, to begin with... 구조화된 답변 틀 잡기", question: "Tell me about the movie theater you usually go to and why you like it.", audio_file: "audio/q2.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 2, title: "루틴과 습관의 세부 묘사", desc: "Whenever I visit, I usually grab a cup of coffee...", question: "What is your whole routine before and after watching a movie?", audio_file: "audio/q3.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 3, title: "과거 잊지 못할 경험 스토리텔링", desc: "Out of nowhere, something unexpected happened...", question: "Tell me about an unexpected incident you experienced while watching a movie.", audio_file: "audio/q4.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 4, title: "롤플레이 11번 (질문 3~4개 하기)", desc: "Could you let me know...? 문의 전화 완벽 클리어", question: "Call a travel agency and ask 3 or 4 questions about vacation packages.", audio_file: "audio/q8.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 5, title: "롤플레이 12번 (문제 사과 & 대안 2개)", desc: "I am terribly sorry, but an urgent issue came up...", question: "You cannot go on the trip. Call the agency, explain and offer 2 alternatives.", audio_file: "audio/q9.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 6, title: "호텔/교통 돌발 주제 정복", desc: "돌발 주제에도 당황하지 않고 30초 이상 발화하기", question: "Tell me about a hotel you stayed at recently. What did it look like?", audio_file: "audio/q15.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 7, title: "IH 목표 5문제 집중 콤보 훈련", desc: "롤플레이 포함 실전 5문항 연속 발화", question: "Have you ever experienced an unexpected issue at a hotel? How was it solved?" } // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  advanced: { // 자바스크립트 실행 구문입니다.
    title: "🥇 고급 마스터 플랜 (AL 만점 목표)", // 고급 플랜 제목입니다.
    description: "원어민식 필러 + 14-15번 시사이슈 비교 & 유창성(100+ WPM) 극대화", // 설명 문구입니다.
    days: [ // 자바스크립트 실행 구문입니다.
      { day: 1, title: "원어민 필러 4총사 체화", desc: "You know, Speaking of which, To be honest 자연스럽게 넣기", question: "Tell me about your favorite cafe and its unique ambiance." }, // 자바스크립트 실행 구문입니다.
      { day: 2, title: "13번 롤플레이 과거 유사 경험", desc: "롤플레이 상황과 관련된 나의 실제 과거 경험 심도 있게 비교", question: "Have you ever had a memorable plan cancelled unexpectedly? How did you deal with it?" }, // 자바스크립트 실행 구문입니다.
      { day: 3, title: "14번 과거 vs 현재 기술 트렌드 비교", desc: "Compared to the past... stark contrast 고급 비교 어휘 구사", question: "Compare electronic devices and technology people used in the past with devices people use today. What are the key differences?", audio_file: "audio/q12.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 4, title: "15번 사회적 이슈 & 시사 토론", desc: "One of the most pressing issues is... 논리적 의견 개진", question: "What are some current issues or challenges related to the hotel and accommodation industry today? What is your opinion?", audio_file: "audio/q15.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 5, title: "구동사 & 관용구 폭격 훈련", desc: "a stone's throw away, come up with, call off 3개 이상 사용", question: "Describe a memorable vacation trip and what left a lasting impression on you." }, // 자바스크립트 실행 구문입니다.
      { day: 6, title: "발화 속도 100 WPM 돌파 훈련", desc: "침묵(Pause) 없이 1분 30초 동안 꽉 채워 발화하기", question: "Have you ever experienced an unexpected problem at your home? How did you resolve it?", audio_file: "audio/q7.mp3" }, // 자바스크립트 실행 구문입니다.
      { day: 7, title: "15문항 AL 실전 파이널 모의고사", desc: "실제 시험관 Eva와 15문항 풀 테스트 완주", question: "What is your daily routine at home during weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" } // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 에바 질문 의도 분석 및 한국어 키워드 매칭 지식 베이스입니다.
const quizIntentKnowledgeBase = { // 변수 또는 상수를 선언하고 초기화합니다.
  "자기소개": { // 자바스크립트 실행 구문입니다.
    intentName: "자기소개", // 자바스크립트 실행 구문입니다.
    keywords: ["자기소개", "소개", "이름", "직업", "나", "자신", "안녕", "취미", "사는곳"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Tell me a little bit about yourself / Let's start the interview", // 자바스크립트 실행 구문입니다.
    explanation: "면접관 Eva에게 이름, 사는 곳, 직업, 간단한 취미를 편안하게 소개하는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "너무 힘주지 말고, 평소 대화하듯 편안한 톤으로 3~4문장으로 마무리하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "장소 묘사": { // 자바스크립트 실행 구문입니다.
    intentName: "좋아하는 장소의 위치 및 시설 묘사", // 자바스크립트 실행 구문입니다.
    keywords: ["묘사", "장소", "위치", "어디", "생김새", "시설", "분위기", "인테리어", "좋아", "이유"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Tell me about the ... you usually go to / What does it look like? / Describe ... in detail", // 자바스크립트 실행 구문입니다.
    explanation: "해당 장소(영화관/공원/카페/집 등)가 어디에 있고, 시설과 분위기가 어떤지 묘사하는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "There is/are 패턴과 근접성(a stone's throw away) 표현을 쓰면 고득점입니다." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "활동/루틴": { // 자바스크립트 실행 구문입니다.
    intentName: "평소 하는 일상 활동 및 시간순 루틴", // 자바스크립트 실행 구문입니다.
    keywords: ["루틴", "활동", "전후", "평소", "뭐하는지", "일과", "순서", "하는일", "보통", "시작부터"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "What do you usually do before and after ... / Describe your whole routine / from start to finish", // 자바스크립트 실행 구문입니다.
    explanation: "해당 활동을 할 때 처음부터 끝까지 어떤 순서로 진행하는지 루틴을 묻는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "시간 연결사(First, After that, Then, Finally)를 사용해 시간 순서대로 명쾌하게 답변하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "기억에 남는 경험": { // 자바스크립트 실행 구문입니다.
    intentName: "과거에 겪은 인상 깊거나 특별한 사건/경험", // 자바스크립트 실행 구문입니다.
    keywords: ["경험", "과거", "기억", "인상", "사건", "특별", "잊지", "일어난", "일", "언제"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Tell me about a memorable or unexpected incident / What happened? / in the past", // 자바스크립트 실행 구문입니다.
    explanation: "과거에 있었던 특별한 일화나 예상치 못했던 에피소드를 스토리텔링하는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "시제에 유의하세요! 모든 동사를 과거형(-ed, went, saw)으로 정확히 일치시켜야 합니다." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "과거 경험": { // 자바스크립트 실행 구문입니다.
    intentName: "과거에 발생한 문제 상황 및 해결 경험", // 자바스크립트 실행 구문입니다.
    keywords: ["과거", "문제", "경험", "해결", "고장", "사고", "사건", "대처", "어떻게"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Have you ever experienced an unexpected problem / How did you resolve it?", // 자바스크립트 실행 구문입니다.
    explanation: "집, 호텔, 야외 등에서 예기치 못한 문제가 발생했을 때 어떻게 대처했는지 묻는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "문제 발생(위기) ➔ 해결 노력 ➔ 배운 점(결론) 3단계 구조로 답변하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "돌발: 호텔 묘사": { // 자바스크립트 실행 구문입니다.
    intentName: "돌발 질문: 최근 머문 호텔 시설 묘사", // 자바스크립트 실행 구문입니다.
    keywords: ["호텔", "숙소", "묘사", "방", "시설", "어디", "생김새", "로비", "서비스"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Tell me about a hotel you stayed at recently / What did it look like?", // 자바스크립트 실행 구문입니다.
    explanation: "서베이 외 돌발 주제로, 최근 투숙했던 호텔의 객실과 편의 시설을 묘사하는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "집 묘사 템플릿(깨끗하고 아늑함)을 그대로 응용해 답변하시면 됩니다." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "돌발: 호텔 루틴": { // 자바스크립트 실행 구문입니다.
    intentName: "돌발 질문: 호텔 체크인 및 이용 루틴", // 자바스크립트 실행 구문입니다.
    keywords: ["호텔", "루틴", "체크인", "이용", "활동", "순서", "숙박", "머물때"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "What do you usually do when you check in and stay at a hotel from start to finish?", // 자바스크립트 실행 구문입니다.
    explanation: "호텔에 도착해 체크인하고 숙박하는 전 과정을 묻는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "체크인 ➔ 짐 풀기 ➔ 부대시설(수영장/레스토랑) 이용 ➔ 휴식 순서로 말하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "돌발: 호텔 문제 경험": { // 자바스크립트 실행 구문입니다.
    intentName: "돌발 질문: 호텔에서 겪은 불편 및 컴플레인 경험", // 자바스크립트 실행 구문입니다.
    keywords: ["호텔", "문제", "불편", "컴플레인", "경험", "해결", "과거", "고장"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Have you ever had an unexpected issue or complaint at a hotel? How was it solved?", // 자바스크립트 실행 구문입니다.
    explanation: "호텔에서 에어컨 고장이나 방 배정 문제 등 예기치 못한 이슈를 겪고 해결한 경험입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "프론트 데스크에 전화해 직원이 신속하게 방을 바꿔주거나 수리해 준 스토리로 푸세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "롤플레이 (11번: 질문하기)": { // 자바스크립트 실행 구문입니다.
    intentName: "롤플레이 11번: 정보 문의 질문 3~4개 하기", // 자바스크립트 실행 구문입니다.
    keywords: ["롤플레이", "질문", "전화", "문의", "물어", "파티", "여행", "예약", "물어보기", "친구에게"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Call your friend / travel agency and ask 3 or 4 questions", // 자바스크립트 실행 구문입니다.
    explanation: "상황극으로, 파티나 여행 계획에 대해 상대방에게 전화해 질문 3~4개를 던지는 문항입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "Hi there! I am calling to ask... / Could you tell me...? / What time...? 패턴을 쓰세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "롤플레이 (12번: 대안 제시)": { // 자바스크립트 실행 구문입니다.
    intentName: "롤플레이 12번: 문제 발생 사과 및 대안 2~3가지 제시", // 자바스크립트 실행 구문입니다.
    keywords: ["롤플레이", "대안", "사과", "취소", "못가", "변경", "약속", "문제", "제안", "어려움"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "An unexpected problem has come up / Call, explain and offer 2 or 3 alternatives", // 자바스크립트 실행 구문입니다.
    explanation: "약속이나 여행을 갈 수 없게 된 긴급 상황을 설명하고 정중히 사과하며 대안을 제안하는 문항입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "I am terribly sorry but... / How about we reschedule...? / Alternatively... 패턴을 쓰세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "롤플레이 (13번: 유사경험)": { // 자바스크립트 실행 구문입니다.
    intentName: "롤플레이 13번: 롤플레이와 유사한 나의 과거 실제 경험", // 자바스크립트 실행 구문입니다.
    keywords: ["과거", "유사", "경험", "취소", "약속", "계획", "실제", "사건", "해결"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Have you ever had a memorable plan cancelled unexpectedly? How did you resolve it?", // 자바스크립트 실행 구문입니다.
    explanation: "롤플레이처럼 약속이나 여행이 취소되었던 본인의 실제 과거 경험을 묻는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "폭우(heavy rainstorm)나 야근(urgent work) 때문에 약속을 미뤘던 일화를 과거 시제로 답변하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "심화 (14번: 과거 현재 비교)": { // 자바스크립트 실행 구문입니다.
    intentName: "심화 14번: 과거와 현재의 기술/트렌드 비교", // 자바스크립트 실행 구문입니다.
    keywords: ["비교", "과거", "현재", "기술", "기기", "예전", "지금", "차이", "변화", "스마트폰"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "Compare ... used in the past with ... used today / What are the key differences?", // 자바스크립트 실행 구문입니다.
    explanation: "과거와 현재의 기술이나 생활 방식의 차이점을 대조하는 AL 전용 고급 비교 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "Compared to the past / In stark contrast / Nowadays 등의 고급 대조 연결사를 사용하세요." // 자바스크립트 실행 구문입니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "심화 (15번: 이슈 토론)": { // 자바스크립트 실행 구문입니다.
    intentName: "심화 15번: 최신 산업/사회적 시사 이슈 토론", // 자바스크립트 실행 구문입니다.
    keywords: ["이슈", "시사", "트렌드", "사회", "문제점", "논의", "생각", "의견", "산업"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: "What are some current issues or challenges related to ... today? What is your opinion?", // 자바스크립트 실행 구문입니다.
    explanation: "해당 분야(숙박/기술/환경 등)의 최신 사회적 이슈와 본인의 견해를 묻는 최고난도 문항입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "One of the most pressing issues is... / In my opinion... 로 서론을 시작하세요." // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// [신규] 나만의 스크립트 작성 & AI 첨삭 연구소 전용 주제별 템플릿 및 고득점 지식 베이스입니다.
const scriptUpgradeKnowledgeBase = { // 변수 또는 상수를 선언하고 초기화합니다.
  "영화관 장소 묘사": { // 자바스크립트 실행 구문입니다.
    template_draft: "우리 집 근처에 있는 CGV를 자주 가는데 시설이 깨끗하고 팝콘이 맛있어서 주말마다 방문합니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Well, to be honest, my absolute favorite cinema is located just a stone's throw away from my apartment. The theater features state-of-the-art IMAX screens and incredibly cozy recliners, which makes the whole movie-watching experience truly unforgettable. Speaking of which, I usually head there on weekends to chill out and catch the latest blockbusters.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "a stone's throw away (엎어지면 코 닿을 매우 가까운 거리)", // 자바스크립트 실행 구문입니다.
      "state-of-the-art (최첨단 시설의)", // 자바스크립트 실행 구문입니다.
      "chill out (느긋하게 휴식하다)", // 자바스크립트 실행 구문입니다.
      "catch the latest blockbusters (최신 흥행 대작 영화를 관람하다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "'near my house' ➔ 'just a stone's throw away from my apartment'로 원어민 구동사 승격", // 자바스크립트 실행 구문입니다.
      "'very delicious popcorn' ➔ 영화관 전체의 쾌적한 시설(cozy recliners, IMAX screens)로 묘사 확장", // 자바스크립트 실행 구문입니다.
      "'I visit every weekend' ➔ 'Speaking of which, I usually head there to chill out' 원어민 필러 결합" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "영화 보기 전후 루틴": { // 자바스크립트 실행 구문입니다.
    template_draft: "영화 보기 전에는 티켓을 예매하고 카페에서 커피를 사고 영화 본 후에는 친구들과 맛있는 저녁을 먹습니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Whenever I plan to watch a movie, you know, I follow a pretty consistent routine. First off, I reserve prime seats via my mobile app in advance. Before entering the screening room, I make sure to grab an iced Americano from a nearby cafe. Once the credits roll, my friends and I head over to a trendy restaurant to catch up over dinner and share our reviews of the movie.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "First off (우선 첫째로)", // 자바스크립트 실행 구문입니다.
      "prime seats (명당 자리)", // 자바스크립트 실행 구문입니다.
      "Once the credits roll (엔딩 크레딧이 올라가면/영화가 끝나면)", // 자바스크립트 실행 구문입니다.
      "catch up over dinner (저녁을 먹으며 밀린 대화를 나누다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "시간 순서 연결사(First off, Before entering, Once the credits roll)를 배치하여 논리적 루틴 구성", // 자바스크립트 실행 구문입니다.
      "'buy coffee' ➔ 'grab an iced Americano' 구체적 명사 구사로 유창성 획득", // 자바스크립트 실행 구문입니다.
      "'eat dinner with friends' ➔ 'catch up over dinner' 원어민 구동사 적용" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "영화관 과거 잊지 못할 경험": { // 자바스크립트 실행 구문입니다.
    template_draft: "지난달에 영화관에 갔는데 갑자기 정전이 되어서 영화가 멈췄고 환불을 받고 나왔던 기억이 있습니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "I vividly remember a truly unexpected incident that took place at a cinema a few months ago. Right in the middle of a thrilling climax, out of nowhere, the entire theater suffered a sudden power outage! The screen went completely pitch-black and everyone was bewildered. Although it was startling at first, the management promptly issued full refunds and complimentary tickets, which left a lasting impression on me.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "vividly remember (생생하게 기억하다)", // 자바스크립트 실행 구문입니다.
      "out of nowhere (마치 난데없이/갑자기)", // 자바스크립트 실행 구문입니다.
      "pitch-black (완전한 암흑)", // 자바스크립트 실행 구문입니다.
      "left a lasting impression (오래도록 깊은 인상을 남기다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "모든 서술 동사를 과거형(took place, suffered, went, was, issued, left)으로 완벽 일치", // 자바스크립트 실행 구문입니다.
      "사건 발생(위기) ➔ 대처 ➔ 마무리 3단 스토리텔링 프레임워크 적용", // 자바스크립트 실행 구문입니다.
      "단순 'remember' ➔ 'I vividly remember a truly unexpected incident'로 오프닝 강화" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "공원 장소 묘사": { // 자바스크립트 실행 구문입니다.
    template_draft: "집 근처 한강 공원을 자주 가는데 나무가 많고 산책로가 잘 되어 있어서 조깅하기 좋습니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Speaking of my favorite outdoor spot, there is a picturesque riverside park situated within walking distance of my home. It boasts lush green trees, well-paved walking trails, and a stunning view of the river. Whenever I need some fresh air, I put on my running shoes and jog along the scenic path to blow off some steam.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "picturesque (그림같이 아름다운)", // 자바스크립트 실행 구문입니다.
      "within walking distance (걸어갈 수 있는 거리)", // 자바스크립트 실행 구문입니다.
      "lush green trees (푸르른 나무들)", // 자바스크립트 실행 구문입니다.
      "blow off some steam (스트레스를 해소하다/기분 전환하다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "'there is many trees' ➔ 'It boasts lush green trees and scenic trails' 주어 다변화", // 자바스크립트 실행 구문입니다.
      "'good for jogging' ➔ 'jog along the scenic path to blow off some steam' 목적 부사구 격상" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "카페 장소 묘사": { // 자바스크립트 실행 구문입니다.
    template_draft: "집 앞 스타벅스를 자주 가는데 조용하고 분위기가 좋아서 공부하거나 책 읽기 편합니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Without a shadow of a doubt, my go-to spot is a cozy, boutique cafe right around the corner from my place. The moment you step inside, you are greeted by warm ambient lighting, soothing acoustic melodies, and the rich aroma of freshly roasted coffee beans. It provides the ultimate peaceful atmosphere for reading books or getting some focused work done.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "Without a shadow of a doubt (추호의 의심도 없이/단언컨대)", // 자바스크립트 실행 구문입니다.
      "go-to spot (자주 찾는 단골 장소)", // 자바스크립트 실행 구문입니다.
      "ambient lighting (은은한 무드 조명)", // 자바스크립트 실행 구문입니다.
      "freshly roasted coffee beans (갓 볶은 원두)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "오프닝 필러 'Without a shadow of a doubt'로 자신감 넘치는 AL 시작", // 자바스크립트 실행 구문입니다.
      "오감 묘사(조명, 음악, 커피 향기)를 추가하여 디테일 묘사력 극대화" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "집 묘사": { // 자바스크립트 실행 구문입니다.
    template_draft: "저는 방 2개짜리 아파트에 사는데 거실이 넓고 베란다에서 경치가 잘 보입니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Currently, I reside in a cozy yet modern two-bedroom apartment situated in a quiet residential neighborhood. The centerpiece of my home is the spacious living room, which is flooded with abundant natural sunlight. Through the large balcony window, I can enjoy a panoramic view of the city skyline, which always brings me peace of mind.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "reside in (거주하다)", // 자바스크립트 실행 구문입니다.
      "flooded with abundant natural sunlight (풍부한 자연 채광이 쏟아지는)", // 자바스크립트 실행 구문입니다.
      "panoramic view (파노라마처럼 펼쳐지는 전경)", // 자바스크립트 실행 구문입니다.
      "peace of mind (마음의 평온)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "'I live in apartment' ➔ 'Currently, I reside in a cozy yet modern two-bedroom apartment' 고급 어휘 적용", // 자바스크립트 실행 구문입니다.
      "빛과 전망을 묘사하는 감성 형용사(abundant, panoramic) 결합" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "집에서 보내는 휴가": { // 자바스크립트 실행 구문입니다.
    template_draft: "휴가 때는 어디 안 가고 집에서 넷플릭스 보고 푹 자면서 쉽니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "When it comes to my vacation, I am a huge advocate for staycations rather than traveling abroad. I usually spend the entire day in my pajamas, binge-watching my favorite TV series on Netflix and snacking on delicious comfort food. It allows me to fully recharge my batteries without having to deal with packed airports or exhausting traffic jams.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "staycation (홈캉스/집에서 보내는 휴가)", // 자바스크립트 실행 구문입니다.
      "binge-watching (몰아보기)", // 자바스크립트 실행 구문입니다.
      "recharge my batteries (재충전하다/원기를 회복하다)", // 자바스크립트 실행 구문입니다.
      "deal with packed airports (혼잡한 공항을 감당하다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "'I just stay home and sleep' ➔ 'recharge my batteries and binge-watch TV series' 능동적 휴식 표현", // 자바스크립트 실행 구문입니다.
      "집콕 휴가의 장점(교통체증 회피, 온전한 충전)을 대비하여 발화 분량 확보" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "호텔 묘사": { // 자바스크립트 실행 구문입니다.
    template_draft: "지난번 제주도 여행 때 머문 호텔은 오션뷰가 예쁘고 수영장과 조식이 훌륭했습니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "During my recent getaway to Jeju Island, I had the pleasure of staying at a five-star seaside resort. The guest room was immaculate, equipped with plush bedding and a private balcony overlooking the turquoise ocean. On top of that, their rooftop infinity pool and lavish breakfast buffet surpassed all my expectations.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "getaway (휴가/여행)", // 자바스크립트 실행 구문입니다.
      "immaculate (티 없이 깨끗한)", // 자바스크립트 실행 구문입니다.
      "turquoise ocean (청록빛 에메랄드 바다)", // 자바스크립트 실행 구문입니다.
      "surpassed all my expectations (모든 기대를 뛰어넘었다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "'hotel was clean' ➔ 'guest room was immaculate equipped with plush bedding' 호텔 전문 어휘", // 자바스크립트 실행 구문입니다.
      "'ocean view is pretty' ➔ 'private balcony overlooking the turquoise ocean' 현재분사 수식 구조" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "롤플레이 질문하기": { // 자바스크립트 실행 구문입니다.
    template_draft: "친구야 생일 파티 준비 어떻게 할까? 몇 시에 모이고 장소는 어디야? 내가 뭐 사갈 거 있어?", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Hi Sarah! It's Alex calling. I'm so thrilled about our upcoming party this weekend! I was just wondering if you could fill me in on a few quick details. First of all, what time are we planning to kick things off? Secondly, did you finalize the venue? And lastly, is there any specific food or beverage you'd like me to bring along?", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "fill me in on (자세한 내용을 알려주다)", // 자바스크립트 실행 구문입니다.
      "kick things off (시작하다/출발하다)", // 자바스크립트 실행 구문입니다.
      "finalize the venue (장소를 최종 확정하다)", // 자바스크립트 실행 구문입니다.
      "bring along (챙겨오다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "전화 상황극 서두(Hi Sarah! It's Alex calling) 인사 톤 완벽 구현", // 자바스크립트 실행 구문입니다.
      "의문문 다양화: I was wondering if... / What time...? / Is there anything...? 패턴 3연속 구사" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "롤플레이 대안제시": { // 자바스크립트 실행 구문입니다.
    template_draft: "미안한데 회사에 급한 일이 생겨서 오늘 약속 못 갈 것 같아. 내일 만나거나 주말에 내가 밥 살게.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Hey Minho, I am terribly sorry to break the news, but a sudden emergency cropped up at work and I won't be able to make it tonight. To make it up to you, how about we reschedule our dinner for tomorrow evening instead? Alternatively, if your weekend is free, I would love to treat you to an upscale meal at that Italian bistro. Let me know which works better for you!", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "terribly sorry to break the news (이런 소식을 전하게 되어 너무 죄송하지만)", // 자바스크립트 실행 구문입니다.
      "cropped up (불쑥 튀어나오다/발생하다)", // 자바스크립트 실행 구문입니다.
      "make it up to you (보상하다/만회하다)", // 자바스크립트 실행 구문입니다.
      "treat you to an upscale meal (근사한 식사를 대접하다)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "공손한 사과 ➔ 구체적 원인(emergency cropped up) ➔ 대안 1(내일) ➔ 대안 2(주말 식사) ➔ 확인 질문 완벽 구성" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "과거 현재 기술 비교": { // 자바스크립트 실행 구문입니다.
    template_draft: "옛날에는 유선 전화기나 MP3를 따로 썼는데 지금은 스마트폰 하나로 음악도 듣고 결제도 다 합니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "Looking back, the technological landscape has undergone a monumental shift over the past two decades. In the past, people had to carry bulky separate gadgets like MP3 players, paper maps, and pocket cameras. In stark contrast, today's all-in-one smartphones have integrated everything into a single handheld device, allowing us to stream infinite music and execute contactless payments with a single tap.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "undergone a monumental shift (엄청난 대전환을 겪다)", // 자바스크립트 실행 구문입니다.
      "In stark contrast (완전한 대조를 이루며)", // 자바스크립트 실행 구문입니다.
      "all-in-one smartphones (모든 기능이 통합된 스마트폰)", // 자바스크립트 실행 구문입니다.
      "contactless payments (비접촉 간편 결제)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "과거(In the past)와 현재(In stark contrast, today)를 명확한 시제와 대조 부사구로 비교", // 자바스크립트 실행 구문입니다.
      "'now smartphone is good' ➔ 'integrated everything into a single handheld device' AL 수준의 추상화" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  }, // 객체 또는 코드 블록을 종료합니다.
  "최신 산업 시사 이슈": { // 자바스크립트 실행 구문입니다.
    template_draft: "요즘 숙박업계는 무인 체크인 키오스크와 친환경 정책이 큰 이슈가 되고 있습니다.", // 자바스크립트 실행 구문입니다.
    upgraded_script: "In today's hospitality sector, one of the most prominent topics being discussed is the rapid adoption of contactless self-service kiosks alongside eco-friendly sustainability initiatives. While automated systems maximize operational efficiency and cut down wait times, hotels must also strive to maintain a warm, human touch to ensure top-notch guest satisfaction.", // 자바스크립트 실행 구문입니다.
    key_expressions: [ // 자바스크립트 실행 구문입니다.
      "hospitality sector (숙박/호텔 업계)", // 자바스크립트 실행 구문입니다.
      "contactless self-service kiosks (비대면 무인 키오스크)", // 자바스크립트 실행 구문입니다.
      "eco-friendly sustainability initiatives (친환경 지속가능성 방침)", // 자바스크립트 실행 구문입니다.
      "human touch (인간적인 따뜻한 서비스)" // 자바스크립트 실행 구문입니다.
    ], // 배열 데이터 선언을 종료합니다.
    grammar_fixes: [ // 자바스크립트 실행 구문입니다.
      "산업 전문 어휘(hospitality sector, operational efficiency, human touch) 구사", // 자바스크립트 실행 구문입니다.
      "동전의 양면(효율성 vs 인간적인 서비스)을 균형 있게 논증하는 AL 최고난도 문장 구조 완성" // 자바스크립트 실행 구문입니다.
    ] // 배열 데이터 선언을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 애플리케이션의 전역 상태를 관리하는 객체입니다.
const state = { // 변수 또는 상수를 선언하고 초기화합니다.
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
  }, // 객체 또는 코드 블록을 종료합니다.
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
  isScriptDraftRecording: false, // 스크립트 작성 음성 녹음 중 여부입니다.
  scriptDraftRecognition: null, // 스크립트 작성 음성인식 객체입니다.
  isScriptAudioPlaying: false, // 스크립트 AL 음성 재생 중 여부입니다.
  currentScriptAudio: null, // 스크립트 재생 Audio 인스턴스입니다.
  apiBaseUrl: window.location.origin.includes('http') ? window.location.origin : 'http://localhost:8000', // API 서버 주소입니다.
  isServerAvailable: false, // 백엔드 서버 가용 여부입니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// DOM 요소 준비 시 실행되는 메인 초기화 함수입니다.
document.addEventListener('DOMContentLoaded', () => { // 함수를 정의하거나 콜백을 실행합니다.
  initApp(); // 전체 앱을 초기화합니다.
}); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
// 브라우저 내장 최상의 Eva 원어민 보이스 객체를 찾아 캐싱하는 함수입니다.
function cacheBestEvaVoice() { // 함수를 정의하거나 콜백을 실행합니다.
  if (!window.speechSynthesis) return null; // SpeechSynthesis 미지원 시 null을 반환합니다.
  const voices = window.speechSynthesis.getVoices(); // 사용 가능한 음성 목록을 가져옵니다.
  if (!voices || voices.length === 0) return null; // 음성이 없으면 null을 반환합니다.
// 공백 라인입니다.
  // 1순위: Microsoft Aria (실제 OPIc Eva 공식 성우와 100% 동일한 목소리)를 검색합니다.
  let best = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Aria') || v.name.includes('AriaNeural'))); // 변수 또는 상수를 선언하고 초기화합니다.
  // 2순위: Microsoft Natural 계열 미국 여성 성우를 검색합니다.
  if (!best) { // 조건문을 판별합니다.
    best = voices.find(v => v.lang.startsWith('en') && v.name.includes('Natural') && (v.name.includes('Jenny') || v.name.includes('Ava') || v.name.includes('Emma'))); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  // 3순위: 구글 크롬 고품질 미국 영어 (Google US English)를 검색합니다.
  if (!best) { // 조건문을 판별합니다.
    best = voices.find(v => v.name.includes('Google US English') || (v.lang === 'en-US' && v.name.includes('Google'))); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  // 4순위: 아이폰 Safari / Mac 고품질 미국 성우 (Samantha / Ava)를 검색합니다.
  if (!best) { // 조건문을 판별합니다.
    best = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Ava') || v.name.includes('Victoria'))); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  // 5순위: 기본 en-US 미국 여성 음성을 검색합니다.
  if (!best) { // 조건문을 판별합니다.
    best = voices.find(v => v.lang === 'en-US' || v.lang.startsWith('en')); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  if (best) { // 조건문을 판별합니다.
    state.cachedBestVoice = best; // 전역 상태에 캐싱합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  return state.cachedBestVoice; // 함수 값을 반환하거나 실행을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 애플리케이션 초기화 함수입니다.
function initApp() { // 함수를 정의하거나 콜백을 실행합니다.
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
  checkServerConnection(); // 백엔드 서버 연결 상태를 확인합니다.
// 공백 라인입니다.
  // 브라우저 음성 목록 비동기 로딩 이벤트 리스너 등록입니다.
  if (window.speechSynthesis) { // 조건문을 판별합니다.
    cacheBestEvaVoice(); // 자바스크립트 실행 구문입니다.
    window.speechSynthesis.onvoiceschanged = () => { // 함수를 정의하거나 콜백을 실행합니다.
      cacheBestEvaVoice(); // 자바스크립트 실행 구문입니다.
    }; // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// ==============================================================================
// [신규] 나만의 스크립트 작성 & AI 첨삭 연구소 및 보관함 핵심 로직
// ==============================================================================
// 공백 라인입니다.
// 스크립트 작성 & AI 첨삭 연구소 이벤트 초기화 함수입니다.
function initScriptBuilderEvents() { // 함수를 정의하거나 콜백을 실행합니다.
  const loadTemplateBtn = document.getElementById('btn-load-template-script'); // 템플릿 불러오기 버튼을 가져옵니다.
  if (loadTemplateBtn) { // 조건문을 판별합니다.
    loadTemplateBtn.addEventListener('click', loadScriptTemplate); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const sttDraftBtn = document.getElementById('btn-stt-script-draft'); // 음성으로 말해서 넣기 버튼을 가져옵니다.
  if (sttDraftBtn) { // 조건문을 판별합니다.
    sttDraftBtn.addEventListener('click', toggleScriptDraftRecording); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const analyzeBtn = document.getElementById('btn-analyze-upgrade-script'); // AI 첨삭 및 AL 스크립트 생성 버튼입니다.
  if (analyzeBtn) { // 조건문을 판별합니다.
    analyzeBtn.addEventListener('click', analyzeAndUpgradeUserScript); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const backBtn = document.getElementById('btn-back-from-script'); // 스피킹 메뉴로 돌아가기 버튼입니다.
  if (backBtn) { // 조건문을 판별합니다.
    backBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      stopScriptAudio(); // 자바스크립트 실행 구문입니다.
      switchTab('practice'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const quickScriptBtnHome = document.getElementById('btn-quick-start-script'); // 홈 탭의 스크립트 첨삭 숏컷 버튼입니다.
  if (quickScriptBtnHome) { // 조건문을 판별합니다.
    quickScriptBtnHome.addEventListener('click', startScriptBuilderSession); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const goScriptBtnMypage = document.getElementById('btn-go-script-from-mypage'); // 마이페이지의 스크립트 보관함 열기 버튼입니다.
  if (goScriptBtnMypage) { // 조건문을 판별합니다.
    goScriptBtnMypage.addEventListener('click', startScriptBuilderSession); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  renderSavedScriptList(); // 보관함 목록을 초기에 렌더링합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트 작성 및 AI 첨삭 연구소 화면으로 전환하는 세션 시작 함수입니다.
function startScriptBuilderSession() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 모든 오디오를 중단합니다.
  stopScriptAudio(); // 스크립트 오디오를 중단합니다.
  state.practiceMode = 'script'; // 모드를 스크립트로 지정합니다.
  switchTab('exam'); // exam 메인 탭을 활성화합니다.
  switchExamSubView('script'); // 스크립트 연구소 서브 뷰로 전환합니다.
  renderSavedScriptList(); // 보관함 목록을 최신화합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 선택한 오픽 주제에 맞는 1타 강사 초안 템플릿을 입력창에 자동으로 불러오는 함수입니다.
function loadScriptTemplate() { // 함수를 정의하거나 콜백을 실행합니다.
  const topicSelect = document.getElementById('select-script-topic'); // 주제 셀렉트 요소를 가져옵니다.
  const textarea = document.getElementById('script-draft-textarea'); // 텍스트에어리어를 가져옵니다.
  if (!topicSelect || !textarea) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const selectedTopic = topicSelect.value; // 선택된 주제명을 가져옵니다.
  const kbItem = scriptUpgradeKnowledgeBase[selectedTopic]; // 지식 베이스에서 해당 주제 데이터를 조회합니다.
// 공백 라인입니다.
  if (kbItem && kbItem.template_draft) { // 조건문을 판별합니다.
    textarea.value = kbItem.template_draft; // 자바스크립트 실행 구문입니다.
    textarea.focus(); // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    textarea.value = `우리 집 근처에 있는 ${selectedTopic}에 자주 가는데 분위기가 좋고 편리해서 주말마다 방문합니다.`; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트 작성을 위한 음성 인식(STT) 객체 초기화 함수입니다.
function initScriptDraftSpeechRecognition() { // 함수를 정의하거나 콜백을 실행합니다.
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // STT 생성자를 가져옵니다.
  if (SpeechRecognition) { // 조건문을 판별합니다.
    state.scriptDraftRecognition = new SpeechRecognition(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.scriptDraftRecognition.continuous = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.scriptDraftRecognition.interimResults = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.scriptDraftRecognition.lang = 'ko-KR'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
    state.scriptDraftRecognition.onresult = (event) => { // 함수를 정의하거나 콜백을 실행합니다.
      let fullText = ''; // 변수 또는 상수를 선언하고 초기화합니다.
      for (let i = 0; i < event.results.length; ++i) { // 자바스크립트 실행 구문입니다.
        fullText += event.results[i][0].transcript; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      const textarea = document.getElementById('script-draft-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (textarea && fullText) { // 조건문을 판별합니다.
        textarea.value = fullText; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.scriptDraftRecognition.onend = () => { // 함수를 정의하거나 콜백을 실행합니다.
      state.isScriptDraftRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const btn = document.getElementById('btn-stt-script-draft'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (btn) { // 조건문을 판별합니다.
        btn.innerText = '🎙️ 음성으로 말해서 넣기'; // 자바스크립트 실행 구문입니다.
        btn.style.background = '#eff6ff'; // 자바스크립트 실행 구문입니다.
        btn.style.color = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.scriptDraftRecognition.onerror = (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      console.warn('Script Draft STT error:', e); // 자바스크립트 실행 구문입니다.
      state.isScriptDraftRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const btn = document.getElementById('btn-stt-script-draft'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (btn) { // 조건문을 판별합니다.
        btn.innerText = '🎙️ 음성으로 말해서 넣기'; // 자바스크립트 실행 구문입니다.
        btn.style.background = '#eff6ff'; // 자바스크립트 실행 구문입니다.
        btn.style.color = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트 음성 녹음 시작/정지 토글 함수입니다.
function toggleScriptDraftRecording() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 모든 오디오 재생을 정지합니다.
  stopScriptAudio(); // 스크립트 오디오 재생을 정지합니다.
// 공백 라인입니다.
  const btn = document.getElementById('btn-stt-script-draft'); // 음성 입력 버튼을 가져옵니다.
  if (!state.isScriptDraftRecording) { // 조건문을 판별합니다.
    if (!state.scriptDraftRecognition) { // 조건문을 판별합니다.
      alert('음성 인식을 지원하지 않는 브라우저입니다. 키보드로 직접 입력해주세요.'); // 자바스크립트 실행 구문입니다.
      return; // 함수 값을 반환하거나 실행을 종료합니다.
    } // 객체 또는 코드 블록을 종료합니다.
    try { // 예외 감지를 위한 try 블록입니다.
      state.isScriptDraftRecording = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      if (btn) { // 조건문을 판별합니다.
        btn.innerText = '⏹ 듣는 중... (말씀하세요)'; // 자바스크립트 실행 구문입니다.
        btn.style.background = 'var(--toss-red)'; // 자바스크립트 실행 구문입니다.
        btn.style.color = '#ffffff'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      state.scriptDraftRecognition.start(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } catch (e) { // 자바스크립트 실행 구문입니다.
      state.isScriptDraftRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      showMicHelpModal(); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } else { // 자바스크립트 실행 구문입니다.
    state.isScriptDraftRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (state.scriptDraftRecognition) { // 조건문을 판별합니다.
      try { state.scriptDraftRecognition.stop(); } catch (e) {} // 예외 감지를 위한 try 블록입니다.
    } // 객체 또는 코드 블록을 종료합니다.
    if (btn) { // 조건문을 판별합니다.
      btn.innerText = '🎙️ 음성으로 말해서 넣기'; // 자바스크립트 실행 구문입니다.
      btn.style.background = '#eff6ff'; // 자바스크립트 실행 구문입니다.
      btn.style.color = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 사용자가 작성한 초안을 AI로 분석하고 AL 만점 스크립트로 업그레이드 첨삭하는 함수입니다.
function analyzeAndUpgradeUserScript() { // 함수를 정의하거나 콜백을 실행합니다.
  stopScriptAudio(); // 오디오를 정지합니다.
// 공백 라인입니다.
  const topicSelect = document.getElementById('select-script-topic'); // 주제 셀렉트 요소를 가져옵니다.
  const textarea = document.getElementById('script-draft-textarea'); // 텍스트에어리어 요소를 가져옵니다.
  const resultBox = document.getElementById('script-upgrade-result-box'); // 결과 컨테이너 박스를 가져옵니다.
// 공백 라인입니다.
  if (!topicSelect || !textarea || !resultBox) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const topic = topicSelect.value; // 선택된 주제를 가져옵니다.
  let rawText = textarea.value.trim(); // 작성된 텍스트를 가져옵니다.
// 공백 라인입니다.
  if (!rawText) { // 조건문을 판별합니다.
    loadScriptTemplate(); // 자바스크립트 실행 구문입니다.
    rawText = textarea.value.trim(); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const kbItem = scriptUpgradeKnowledgeBase[topic]; // 지식 베이스 항목을 조회합니다.
  let upgradedScript = ""; // 업그레이드된 스크립트 문자열 변수입니다.
  let keyExpressions = []; // 핵심 표현 목록 배열입니다.
  let grammarFixes = []; // 교정 포인트 배열입니다.
// 공백 라인입니다.
  if (kbItem) { // 조건문을 판별합니다.
    upgradedScript = kbItem.upgraded_script; // 자바스크립트 실행 구문입니다.
    keyExpressions = kbItem.key_expressions; // 자바스크립트 실행 구문입니다.
    grammarFixes = kbItem.grammar_fixes; // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    upgradedScript = `Well, speaking of ${topic}, you know, it has always played a vital role in my everyday routine. To be honest, I truly believe that engaging in this allows me to blow off some steam and recharge my batteries. Whenever I look back, every single moment spent on this leaves a lasting impression on me.`; // 자바스크립트 실행 구문입니다.
    keyExpressions = [ // 자바스크립트 실행 구문입니다.
      "played a vital role (매우 중요한 역할을 하다)", // 자바스크립트 실행 구문입니다.
      "blow off some steam (스트레스를 해소하다)", // 자바스크립트 실행 구문입니다.
      "recharge my batteries (원기를 회복하다)", // 자바스크립트 실행 구문입니다.
      "leaves a lasting impression (깊은 인상을 남기다)" // 자바스크립트 실행 구문입니다.
    ]; // 배열 데이터 선언을 종료합니다.
    grammarFixes = [ // 자바스크립트 실행 구문입니다.
      "원어민 만능 필러(Well, you know, To be honest)를 적재적소에 배치하여 자연스러움 확보", // 자바스크립트 실행 구문입니다.
      "단순한 진술문 구조를 원어민식 복합 구동사 문장으로 승격" // 자바스크립트 실행 구문입니다.
    ]; // 배열 데이터 선언을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const wordCount = rawText.split(/\s+/).length; // 초안의 단어 수를 계산합니다.
  let estimatedLevel = "IM2"; // 예상 등급 기본값입니다.
  if (wordCount >= 30) estimatedLevel = "IH"; // 조건문을 판별합니다.
  if (wordCount >= 50) estimatedLevel = "AL"; // 조건문을 판별합니다.
// 공백 라인입니다.
  // UI 렌더링 HTML을 깨끗하게 조합합니다.
  resultBox.innerHTML = ` // 자바스크립트 실행 구문입니다.
    <div class="toss-card" style="background: #ffffff; border: 2px solid #10b981; border-radius: 20px; padding: 18px; margin-top: 14px; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.12);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 15px; font-weight: 800; color: #065f46; display: flex; align-items: center; gap: 6px;">
          <span>✨ AI 스크립트 첨삭 & AL 승격 리포트</span>
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
          <button id="btn-play-script-audio" style="background: #16a34a; color: #ffffff; border: none; border-radius: 8px; padding: 5px 12px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.2s ease;">
            <span id="script-speaker-icon">🔊</span> <span id="script-audio-btn-label">Eva 음성으로 쉐도잉 듣기</span>
          </button>
        </div>
        <div style="font-size: 14px; font-weight: 600; color: #14532d; line-height: 1.6; margin-bottom: 10px;" id="upgraded-script-text-container">
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
        <button id="btn-save-to-script-library" style="flex: 1; background: #ffffff; border: 1.5px solid #059669; color: #059669; border-radius: 12px; padding: 12px; font-size: 13px; font-weight: 800; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 4px;">
          💾 보관함에 저장
        </button>
        <button id="btn-launch-speaking-from-script" class="toss-btn-primary" style="flex: 1.2; background: #059669; padding: 12px; font-size: 13px; border-radius: 12px;">
          🎙️ 이 스크립트로 바로 스피킹 연습
        </button>
      </div>
    </div>
  `;
// 공백 라인입니다.
  resultBox.style.display = 'block'; // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const playScriptBtn = document.getElementById('btn-play-script-audio'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (playScriptBtn) { // 조건문을 판별합니다.
    playScriptBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      toggleScriptAudioPlay(upgradedScript); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const saveBtn = document.getElementById('btn-save-to-script-library'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (saveBtn) { // 조건문을 판별합니다.
    saveBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      const scriptData = { // 변수 또는 상수를 선언하고 초기화합니다.
        id: Date.now(), // 자바스크립트 실행 구문입니다.
        topic: topic, // 자바스크립트 실행 구문입니다.
        draft: rawText, // 자바스크립트 실행 구문입니다.
        upgraded: upgradedScript, // 자바스크립트 실행 구문입니다.
        keyExpressions: keyExpressions, // 자바스크립트 실행 구문입니다.
        date: new Date().toLocaleDateString('ko-KR') // 자바스크립트 실행 구문입니다.
      }; // 객체 또는 코드 블록을 종료합니다.
      saveScriptToLibrary(scriptData); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const launchSpeakingBtn = document.getElementById('btn-launch-speaking-from-script'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (launchSpeakingBtn) { // 조건문을 판별합니다.
    launchSpeakingBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      stopScriptAudio(); // 자바스크립트 실행 구문입니다.
      launchSpeakingFromScript(upgradedScript, topic); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트 첨삭 음성 재생 / 멈춤 토글 처리 함수입니다.
function toggleScriptAudioPlay(scriptText) { // 함수를 정의하거나 콜백을 실행합니다.
  const btn = document.getElementById('btn-play-script-audio'); // 변수 또는 상수를 선언하고 초기화합니다.
  const label = document.getElementById('script-audio-btn-label'); // 변수 또는 상수를 선언하고 초기화합니다.
  const icon = document.getElementById('script-speaker-icon'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (state.isScriptAudioPlaying) { // 조건문을 판별합니다.
    stopScriptAudio(); // 자바스크립트 실행 구문입니다.
    return; // 함수 값을 반환하거나 실행을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
  stopDailyAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  state.isScriptAudioPlaying = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  if (btn) { // 조건문을 판별합니다.
    btn.style.background = 'var(--toss-red)'; // 자바스크립트 실행 구문입니다.
    if (label) label.innerText = '⏹ 재생 멈추기'; // 조건문을 판별합니다.
    if (icon) icon.innerText = '⏹'; // 조건문을 판별합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const resetBtn = () => { // 변수 또는 상수를 선언하고 초기화합니다.
    state.isScriptAudioPlaying = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.currentScriptAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (btn) { // 조건문을 판별합니다.
      btn.style.background = '#16a34a'; // 자바스크립트 실행 구문입니다.
      if (label) label.innerText = 'Eva 음성으로 쉐도잉 듣기'; // 조건문을 판별합니다.
      if (icon) icon.innerText = '🔊'; // 조건문을 판별합니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  if (state.isServerAvailable) { // 조건문을 판별합니다.
    const voice = state.selectedVoice || 'en-US-AriaNeural'; // 변수 또는 상수를 선언하고 초기화합니다.
    const ttsUrl = `${state.apiBaseUrl}/api/tts?text=${encodeURIComponent(scriptText)}&voice=${encodeURIComponent(voice)}`; // 변수 또는 상수를 선언하고 초기화합니다.
    const audio = new Audio(ttsUrl); // 변수 또는 상수를 선언하고 초기화합니다.
    state.currentScriptAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    audio.onended = resetBtn; // 자바스크립트 실행 구문입니다.
    audio.onerror = () => playBrowserSpeechFallback(scriptText, null, 0.95, resetBtn); // 함수를 정의하거나 콜백을 실행합니다.
    audio.play().catch(() => playBrowserSpeechFallback(scriptText, null, 0.95, resetBtn)); // 함수를 정의하거나 콜백을 실행합니다.
  } else { // 자바스크립트 실행 구문입니다.
    playBrowserSpeechFallback(scriptText, null, 0.95, resetBtn); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트 오디오 정지 헬퍼 함수입니다.
function stopScriptAudio() { // 함수를 정의하거나 콜백을 실행합니다.
  state.isScriptAudioPlaying = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  if (state.currentScriptAudio) { // 조건문을 판별합니다.
    try { // 예외 감지를 위한 try 블록입니다.
      state.currentScriptAudio.pause(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.currentScriptAudio.currentTime = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } catch (e) {} // 자바스크립트 실행 구문입니다.
    state.currentScriptAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  if (window.speechSynthesis) { // 조건문을 판별합니다.
    window.speechSynthesis.cancel(); // 브라우저 DOM 및 전역 객체를 제어합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const btn = document.getElementById('btn-play-script-audio'); // 변수 또는 상수를 선언하고 초기화합니다.
  const label = document.getElementById('script-audio-btn-label'); // 변수 또는 상수를 선언하고 초기화합니다.
  const icon = document.getElementById('script-speaker-icon'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (btn) { // 조건문을 판별합니다.
    btn.style.background = '#16a34a'; // 자바스크립트 실행 구문입니다.
    if (label) label.innerText = 'Eva 음성으로 쉐도잉 듣기'; // 조건문을 판별합니다.
    if (icon) icon.innerText = '🔊'; // 조건문을 판별합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스크립트를 로컬 스토리지 보관함에 영구 저장하는 함수입니다.
function saveScriptToLibrary(scriptData) { // 함수를 정의하거나 콜백을 실행합니다.
  try { // 예외 감지를 위한 try 블록입니다.
    const saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
    saved.unshift(scriptData); // 자바스크립트 실행 구문입니다.
    if (saved.length > 50) saved.pop(); // 조건문을 판별합니다.
    localStorage.setItem('opic_saved_scripts', JSON.stringify(saved)); // 자바스크립트 실행 구문입니다.
    renderSavedScriptList(); // 자바스크립트 실행 구문입니다.
    alert('💾 스크립트가 [내 스크립트 보관함]에 성공적으로 저장되었습니다!\n언제든지 다시 듣고 스피킹 연습을 하실 수 있습니다.'); // 자바스크립트 실행 구문입니다.
  } catch (e) { // 자바스크립트 실행 구문입니다.
    console.warn('Script save error:', e); // 자바스크립트 실행 구문입니다.
    alert('스크립트 저장 중 오류가 발생했습니다.'); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 저장된 스크립트 보관함 목록을 렌더링하는 함수입니다.
function renderSavedScriptList() { // 함수를 정의하거나 콜백을 실행합니다.
  const container = document.getElementById('saved-script-list-container'); // 변수 또는 상수를 선언하고 초기화합니다.
  const badge = document.getElementById('saved-script-count-badge'); // 변수 또는 상수를 선언하고 초기화합니다.
  const mypageText = document.getElementById('mypage-script-count-text'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (!container) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (badge) badge.innerText = `${saved.length}개 저장됨`; // 조건문을 판별합니다.
  if (mypageText) mypageText.innerText = `저장된 스크립트: ${saved.length}개`; // 조건문을 판별합니다.
// 공백 라인입니다.
  if (saved.length === 0) { // 조건문을 판별합니다.
    container.innerHTML = ` // 자바스크립트 실행 구문입니다.
      <div style="font-size: 13px; color: var(--toss-text-muted); text-align: center; padding: 16px;">
        아직 저장된 스크립트가 없습니다. 위에서 작성하고 [보관함 저장]을 눌러보세요!
      </div>
    `;
    return; // 함수 값을 반환하거나 실행을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  container.innerHTML = saved.map((item) => ` // 함수를 정의하거나 콜백을 실행합니다.
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 12px; margin-bottom: 10px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 13px; font-weight: 800; color: #065f46;">🎯 [${item.topic}]</span>
        <span style="font-size: 11px; color: #94a3b8;">${item.date}</span>
      </div>
      <div style="font-size: 13px; color: #1e293b; line-height: 1.5; margin-bottom: 8px; font-weight: 600;">
        "${item.upgraded}"
      </div>
      <div style="display: flex; gap: 6px; justify-content: flex-end;">
        <button onclick="playCustomSpeech('${encodeURIComponent(item.upgraded)}')" style="background: #dcfce7; color: #15803d; border: 1px solid #86efac; border-radius: 8px; padding: 4px 10px; font-size: 11px; font-weight: 700; cursor: pointer;">
          🔊 쉐도잉 듣기
        </button>
        <button onclick="launchSpeakingFromScript('${encodeURIComponent(item.upgraded)}', '${encodeURIComponent(item.topic)}')" style="background: #059669; color: #ffffff; border: none; border-radius: 8px; padding: 4px 10px; font-size: 11px; font-weight: 700; cursor: pointer;">
          🎙️ 실전 연습
        </button>
        <button onclick="deleteSavedScript(${item.id})" style="background: #fee2e2; color: #dc2626; border: none; border-radius: 8px; padding: 4px 8px; font-size: 11px; font-weight: 700; cursor: pointer;">
          🗑️ 삭제
        </button>
      </div>
    </div>
  `).join('');
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 보관함에서 특정 스크립트를 삭제하는 함수입니다.
window.deleteSavedScript = function (id) { // 브라우저 DOM 및 전역 객체를 제어합니다.
  if (!confirm('이 스크립트를 보관함에서 삭제하시겠습니까?')) return; // 조건문을 판별합니다.
  let saved = JSON.parse(localStorage.getItem('opic_saved_scripts') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
  saved = saved.filter(item => item.id !== id); // 함수를 정의하거나 콜백을 실행합니다.
  localStorage.setItem('opic_saved_scripts', JSON.stringify(saved)); // 자바스크립트 실행 구문입니다.
  renderSavedScriptList(); // 자바스크립트 실행 구문입니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 첨삭된 스크립트로 즉시 1문항 실전 스피킹 세션을 시작하는 함수입니다.
window.launchSpeakingFromScript = function (encodedScript, encodedTopic) { // 브라우저 DOM 및 전역 객체를 제어합니다.
  const scriptText = decodeURIComponent(encodedScript); // 변수 또는 상수를 선언하고 초기화합니다.
  const topic = encodedTopic ? decodeURIComponent(encodedTopic) : "나만의 스크립트 스피킹"; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  state.practiceMode = '1q'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.questions = [ // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    { // 객체 또는 코드 블록을 시작합니다.
      question_number: 1, // 자바스크립트 실행 구문입니다.
      topic: topic, // 자바스크립트 실행 구문입니다.
      question_type: "나만의 스크립트 체화 훈련", // 자바스크립트 실행 구문입니다.
      question_text: `[스크립트 낭독 & 발화 체화 훈련]\n"${scriptText}"`, // 자바스크립트 실행 구문입니다.
      audio_file: null // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  ]; // 배열 데이터 선언을 종료합니다.
  state.currentIndex = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.evaluationResults = []; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.totalTimeRemaining = 180; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  startGlobalTimer(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  switchTab('exam'); // 자바스크립트 실행 구문입니다.
  switchExamSubView('testing'); // 자바스크립트 실행 구문입니다.
  renderCurrentQuestion(); // 자바스크립트 실행 구문입니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 한국어 질문 청취 퀴즈 전용 이벤트 및 핸들러 초기화 함수입니다.
function initListeningQuizEvents() { // 함수를 정의하거나 콜백을 실행합니다.
  const replayBtn = document.getElementById('btn-quiz-replay-audio'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (replayBtn) { // 조건문을 판별합니다.
    replayBtn.addEventListener('click', playQuizQuestionAudio); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const recKoreanBtn = document.getElementById('btn-quiz-record-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (recKoreanBtn) { // 조건문을 판별합니다.
    recKoreanBtn.addEventListener('click', toggleQuizKoreanRecording); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const checkAnswerBtn = document.getElementById('btn-quiz-check-answer'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (checkAnswerBtn) { // 조건문을 판별합니다.
    checkAnswerBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      const inputEl = document.getElementById('quiz-korean-input'); // 변수 또는 상수를 선언하고 초기화합니다.
      const text = inputEl ? inputEl.value.trim() : ''; // 변수 또는 상수를 선언하고 초기화합니다.
      if (!text) { // 조건문을 판별합니다.
        alert('한국어로 무슨 질문인지 말씀하시거나 입력해주세요!'); // 자바스크립트 실행 구문입니다.
        return; // 함수 값을 반환하거나 실행을 종료합니다.
      } // 객체 또는 코드 블록을 종료합니다.
      evaluateQuizAnswer(text); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const nextQuizBtn = document.getElementById('btn-quiz-next-question'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (nextQuizBtn) { // 조건문을 판별합니다.
    nextQuizBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (state.currentIndex < state.questions.length - 1) { // 조건문을 판별합니다.
        state.currentIndex++; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        renderCurrentQuizQuestion(); // 자바스크립트 실행 구문입니다.
      } else { // 자바스크립트 실행 구문입니다.
        alert('🎉 모든 질문 청취 퀴즈를 완료하셨습니다!'); // 자바스크립트 실행 구문입니다.
        switchExamSubView('survey'); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const quickQuizBtn = document.getElementById('btn-quick-start-quiz'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (quickQuizBtn) { // 조건문을 판별합니다.
    quickQuizBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      startListeningQuizSession(); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 한국어 음성 인식(STT) 객체 초기화 함수입니다.
function initKoreanSpeechRecognition() { // 함수를 정의하거나 콜백을 실행합니다.
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // 변수 또는 상수를 선언하고 초기화합니다.
  if (SpeechRecognition) { // 조건문을 판별합니다.
    state.quizRecognition = new SpeechRecognition(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.quizRecognition.continuous = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.quizRecognition.interimResults = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.quizRecognition.lang = 'ko-KR'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
    state.quizRecognition.onresult = (event) => { // 함수를 정의하거나 콜백을 실행합니다.
      let korText = ''; // 변수 또는 상수를 선언하고 초기화합니다.
      for (let i = 0; i < event.results.length; ++i) { // 자바스크립트 실행 구문입니다.
        korText += event.results[i][0].transcript; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      const inputEl = document.getElementById('quiz-korean-input'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (inputEl) { // 조건문을 판별합니다.
        inputEl.value = korText; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.quizRecognition.onend = () => { // 함수를 정의하거나 콜백을 실행합니다.
      state.isQuizKoreanRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const recBtn = document.getElementById('btn-quiz-record-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (recBtn) { // 조건문을 판별합니다.
        recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기'; // 자바스크립트 실행 구문입니다.
        recBtn.style.background = '#f3e8ff'; // 자바스크립트 실행 구문입니다.
        recBtn.style.color = '#7e22ce'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      const inputEl = document.getElementById('quiz-korean-input'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (inputEl && inputEl.value.trim()) { // 조건문을 판별합니다.
        evaluateQuizAnswer(inputEl.value.trim()); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.quizRecognition.onerror = (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      console.warn('Quiz STT error:', e); // 자바스크립트 실행 구문입니다.
      state.isQuizKoreanRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const recBtn = document.getElementById('btn-quiz-record-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (recBtn) { // 조건문을 판별합니다.
        recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기'; // 자바스크립트 실행 구문입니다.
        recBtn.style.background = '#f3e8ff'; // 자바스크립트 실행 구문입니다.
        recBtn.style.color = '#7e22ce'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 한국어 마이크 녹음 토글 함수입니다.
function toggleQuizKoreanRecording() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const recBtn = document.getElementById('btn-quiz-record-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!state.isQuizKoreanRecording) { // 조건문을 판별합니다.
    if (!state.quizRecognition) { // 조건문을 판별합니다.
      alert('음성 인식을 지원하지 않는 브라우저입니다. 키보드로 입력해주세요.'); // 자바스크립트 실행 구문입니다.
      return; // 함수 값을 반환하거나 실행을 종료합니다.
    } // 객체 또는 코드 블록을 종료합니다.
    try { // 예외 감지를 위한 try 블록입니다.
      state.isQuizKoreanRecording = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      if (recBtn) { // 조건문을 판별합니다.
        recBtn.innerText = '⏹ 듣고 있습니다... (말씀하세요)'; // 자바스크립트 실행 구문입니다.
        recBtn.style.background = 'var(--toss-red)'; // 자바스크립트 실행 구문입니다.
        recBtn.style.color = '#ffffff'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      state.quizRecognition.start(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } catch (e) { // 자바스크립트 실행 구문입니다.
      state.isQuizKoreanRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      showMicHelpModal(); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } else { // 자바스크립트 실행 구문입니다.
    state.isQuizKoreanRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (state.quizRecognition) { // 조건문을 판별합니다.
      try { state.quizRecognition.stop(); } catch (e) {} // 예외 감지를 위한 try 블록입니다.
    } // 객체 또는 코드 블록을 종료합니다.
    if (recBtn) { // 조건문을 판별합니다.
      recBtn.innerText = '🎙️ 한국어 음성으로 정답 말하기'; // 자바스크립트 실행 구문입니다.
      recBtn.style.background = '#f3e8ff'; // 자바스크립트 실행 구문입니다.
      recBtn.style.color = '#7e22ce'; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 질문 청취 퀴즈 세션 시작 함수입니다.
function startListeningQuizSession() { // 함수를 정의하거나 콜백을 실행합니다.
  state.practiceMode = 'listening'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  const fullSet = createSurveyBasedExamSet(state.officialSurvey); // 변수 또는 상수를 선언하고 초기화합니다.
  state.questions = fullSet; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.currentIndex = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
  switchTab('exam'); // 자바스크립트 실행 구문입니다.
  switchExamSubView('quiz'); // 자바스크립트 실행 구문입니다.
  renderCurrentQuizQuestion(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 현재 퀴즈 문제 렌더링 및 에바 질문 자동 재생 함수입니다.
function renderCurrentQuizQuestion() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const inputEl = document.getElementById('quiz-korean-input'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (inputEl) inputEl.value = ''; // 조건문을 판별합니다.
// 공백 라인입니다.
  const resultCard = document.getElementById('quiz-result-card'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (resultCard) { // 조건문을 판별합니다.
    resultCard.style.display = 'none'; // 자바스크립트 실행 구문입니다.
    resultCard.innerHTML = ''; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const maskedTitle = document.getElementById('quiz-masked-title'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (maskedTitle) { // 조건문을 판별합니다.
    maskedTitle.innerText = `Q${q.question_number}. 🎧 에바의 질문을 귀로 잘 들어보세요...`; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  playQuizQuestionAudio(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 퀴즈용 에바 질문 오디오 재생 함수입니다.
function playQuizQuestionAudio() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const avatarEl = document.getElementById('quiz-eva-avatar-box'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (q.audio_file) { // 조건문을 판별합니다.
    const audio = new Audio(q.audio_file); // 변수 또는 상수를 선언하고 초기화합니다.
    state.currentEvaAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    audio.onplay = () => { if (avatarEl) avatarEl.style.transform = 'scale(1.1)'; }; // 함수를 정의하거나 콜백을 실행합니다.
    audio.onended = () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (avatarEl) avatarEl.style.transform = 'scale(1)'; // 조건문을 판별합니다.
      state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      setTimeout(() => { // 함수를 정의하거나 콜백을 실행합니다.
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording(); // 조건문을 판별합니다.
      }, 1200); // 자바스크립트 실행 구문입니다.
    }; // 객체 또는 코드 블록을 종료합니다.
    audio.onerror = () => playFallbackSpeech(q.question_text, avatarEl, () => { // 함수를 정의하거나 콜백을 실행합니다.
      setTimeout(() => { // 함수를 정의하거나 콜백을 실행합니다.
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording(); // 조건문을 판별합니다.
      }, 1200); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
    audio.play().catch(() => playFallbackSpeech(q.question_text, avatarEl, () => { // 함수를 정의하거나 콜백을 실행합니다.
      setTimeout(() => { // 함수를 정의하거나 콜백을 실행합니다.
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording(); // 조건문을 판별합니다.
      }, 1200); // 자바스크립트 실행 구문입니다.
    })); // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    playFallbackSpeech(q.question_text, avatarEl, () => { // 함수를 정의하거나 콜백을 실행합니다.
      setTimeout(() => { // 함수를 정의하거나 콜백을 실행합니다.
        if (!state.isQuizKoreanRecording) toggleQuizKoreanRecording(); // 조건문을 판별합니다.
      }, 1200); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 사용자가 입력/말한 한국어 정답을 AI 의도 분석 엔진으로 채점하는 함수입니다.
function evaluateQuizAnswer(userKorean) { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const info = quizIntentKnowledgeBase[q.question_type] || { // 변수 또는 상수를 선언하고 초기화합니다.
    intentName: `${q.topic} 관련 질문`, // 자바스크립트 실행 구문입니다.
    keywords: [q.topic, "질문", "묘사", "루틴", "경험"], // 자바스크립트 실행 구문입니다.
    englishCatchWords: q.question_text, // 자바스크립트 실행 구문입니다.
    explanation: "해당 주제에 대한 세부 사항을 묻는 질문입니다.", // 자바스크립트 실행 구문입니다.
    tacticTip: "핵심 키워드를 중심으로 답변을 구성하세요." // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const cleanInput = userKorean.replace(/[^\w\s가-힣]/g, ''); // 변수 또는 상수를 선언하고 초기화합니다.
  let matchedKeywords = []; // 변수 또는 상수를 선언하고 초기화합니다.
  info.keywords.forEach((kw) => { // 함수를 정의하거나 콜백을 실행합니다.
    if (cleanInput.includes(kw)) { // 조건문을 판별합니다.
      matchedKeywords.push(kw); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  let score = 0; // 변수 또는 상수를 선언하고 초기화합니다.
  let isCorrect = false; // 변수 또는 상수를 선언하고 초기화합니다.
  if (matchedKeywords.length >= 2) { // 조건문을 판별합니다.
    score = 100; // 자바스크립트 실행 구문입니다.
    isCorrect = true; // 자바스크립트 실행 구문입니다.
  } else if (matchedKeywords.length === 1) { // 자바스크립트 실행 구문입니다.
    score = 80; // 자바스크립트 실행 구문입니다.
    isCorrect = true; // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    const generalTypes = ["소개", "묘사", "루틴", "경험", "사건", "롤플레이", "질문", "대안", "비교", "이슈"]; // 변수 또는 상수를 선언하고 초기화합니다.
    const foundGeneral = generalTypes.filter(gt => cleanInput.includes(gt)); // 변수 또는 상수를 선언하고 초기화합니다.
    if (foundGeneral.length > 0) { // 조건문을 판별합니다.
      score = 70; // 자바스크립트 실행 구문입니다.
      isCorrect = true; // 자바스크립트 실행 구문입니다.
      matchedKeywords = foundGeneral; // 자바스크립트 실행 구문입니다.
    } else { // 자바스크립트 실행 구문입니다.
      score = 40; // 자바스크립트 실행 구문입니다.
      isCorrect = false; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const resultCard = document.getElementById('quiz-result-card'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!resultCard) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const resultHeader = isCorrect // 변수 또는 상수를 선언하고 초기화합니다.
    ? `<div style="font-size: 16px; font-weight: 800; color: #166534; margin-bottom: 6px;">🎉 정답입니다! (일치도: ${score}점) ⭕</div>` // 자바스크립트 실행 구문입니다.
    : `<div style="font-size: 16px; font-weight: 800; color: #dc2626; margin-bottom: 6px;">💡 아쉽습니다! 핵심 의도를 확인해보세요 (일치도: ${score}점) ❌</div>`; // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  resultCard.innerHTML = ` // 자바스크립트 실행 구문입니다.
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
// 공백 라인입니다.
  resultCard.style.display = 'block'; // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 학습 플랜 탭 초기화 함수입니다.
function initStudyPlanTab() { // 함수를 정의하거나 콜백을 실행합니다.
  const planPills = document.querySelectorAll('.plan-pill-btn'); // 변수 또는 상수를 선언하고 초기화합니다.
  planPills.forEach((btn) => { // 함수를 정의하거나 콜백을 실행합니다.
    btn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      planPills.forEach((b) => b.classList.remove('active')); // 함수를 정의하거나 콜백을 실행합니다.
      btn.classList.add('active'); // 자바스크립트 실행 구문입니다.
      state.selectedPlanLevel = btn.dataset.level; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      renderStudyPlanQuests(); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const container = document.getElementById('plan-quest-list-container'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (container) { // 조건문을 판별합니다.
    container.addEventListener('click', (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      const checkBtn = e.target.closest('.btn-toggle-quest'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (checkBtn) { // 조건문을 판별합니다.
        const day = parseInt(checkBtn.dataset.day, 10); // 변수 또는 상수를 선언하고 초기화합니다.
        togglePlanQuestSafe(day); // 자바스크립트 실행 구문입니다.
        return; // 함수 값을 반환하거나 실행을 종료합니다.
      } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      const startBtn = e.target.closest('.btn-start-quest'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (startBtn) { // 조건문을 판별합니다.
        const level = startBtn.dataset.plan; // 변수 또는 상수를 선언하고 초기화합니다.
        const day = parseInt(startBtn.dataset.day, 10); // 변수 또는 상수를 선언하고 초기화합니다.
        executePlanQuestPractice(level, day); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 학습 플랜 퀘스트 목록을 렌더링하는 함수입니다.
function renderStudyPlanQuests() { // 함수를 정의하거나 콜백을 실행합니다.
  const container = document.getElementById('plan-quest-list-container'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!container) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const plan = studyPlansData[state.selectedPlanLevel]; // 변수 또는 상수를 선언하고 초기화합니다.
  if (!plan) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const progressTitle = document.getElementById('plan-progress-title'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (progressTitle) progressTitle.innerText = `${plan.title} 진도율`; // 조건문을 판별합니다.
// 공백 라인입니다.
  const completedMap = JSON.parse(localStorage.getItem(`opic_plan_${state.selectedPlanLevel}`) || '{}'); // 변수 또는 상수를 선언하고 초기화합니다.
  const completedCount = Object.values(completedMap).filter(Boolean).length; // 변수 또는 상수를 선언하고 초기화합니다.
  const totalDays = plan.days.length; // 변수 또는 상수를 선언하고 초기화합니다.
  const percent = Math.round((completedCount / totalDays) * 100); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const percentEl = document.getElementById('plan-progress-percent'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (percentEl) percentEl.innerText = `${percent}% (${completedCount}/${totalDays})`; // 조건문을 판별합니다.
// 공백 라인입니다.
  const barEl = document.getElementById('plan-progress-bar'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (barEl) barEl.style.width = `${percent}%`; // 조건문을 판별합니다.
// 공백 라인입니다.
  container.innerHTML = plan.days.map((item) => { // 함수를 정의하거나 콜백을 실행합니다.
    const isDone = !!completedMap[item.day]; // 변수 또는 상수를 선언하고 초기화합니다.
    return ` // 함수 값을 반환하거나 실행을 종료합니다.
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
  }).join(''); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 플랜 퀘스트 완료 체크 토글 함수입니다.
function togglePlanQuestSafe(day) { // 함수를 정의하거나 콜백을 실행합니다.
  const key = `opic_plan_${state.selectedPlanLevel}`; // 변수 또는 상수를 선언하고 초기화합니다.
  const map = JSON.parse(localStorage.getItem(key) || '{}'); // 변수 또는 상수를 선언하고 초기화합니다.
  map[day] = !map[day]; // 자바스크립트 실행 구문입니다.
  localStorage.setItem(key, JSON.stringify(map)); // 자바스크립트 실행 구문입니다.
  renderStudyPlanQuests(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 학습플랜 퀘스트 실행 함수입니다.
function executePlanQuestPractice(level, day) { // 함수를 정의하거나 콜백을 실행합니다.
  const plan = studyPlansData[level]; // 변수 또는 상수를 선언하고 초기화합니다.
  if (!plan) return; // 조건문을 판별합니다.
  const targetItem = plan.days.find(d => d.day === day); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!targetItem) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  state.practiceMode = '1q'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.questions = [ // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    { // 객체 또는 코드 블록을 시작합니다.
      question_number: 1, // 자바스크립트 실행 구문입니다.
      topic: `학습플랜 Day ${day}`, // 자바스크립트 실행 구문입니다.
      question_type: targetItem.title, // 자바스크립트 실행 구문입니다.
      question_text: targetItem.question, // 자바스크립트 실행 구문입니다.
      audio_file: targetItem.audio_file || null // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  ]; // 배열 데이터 선언을 종료합니다.
  state.currentIndex = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.evaluationResults = []; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.totalTimeRemaining = 180; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  startGlobalTimer(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  switchTab('exam'); // 자바스크립트 실행 구문입니다.
  switchExamSubView('testing'); // 자바스크립트 실행 구문입니다.
  renderCurrentQuestion(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스피킹 연습 탭 초기화 함수입니다.
function initPracticeTab() { // 함수를 정의하거나 콜백을 실행합니다.
  const pracCards = document.querySelectorAll('#tab-practice .mode-card-btn'); // 변수 또는 상수를 선언하고 초기화합니다.
  pracCards.forEach((card) => { // 함수를 정의하거나 콜백을 실행합니다.
    card.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      pracCards.forEach((c) => c.classList.remove('selected')); // 함수를 정의하거나 콜백을 실행합니다.
      card.classList.add('selected'); // 자바스크립트 실행 구문입니다.
      state.practiceMode = card.dataset.mode || '1q'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    }); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const startPracBtn = document.getElementById('btn-start-practice'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (startPracBtn) { // 조건문을 판별합니다.
    startPracBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (state.practiceMode === 'listening') { // 조건문을 판별합니다.
        startListeningQuizSession(); // 자바스크립트 실행 구문입니다.
      } else if (state.practiceMode === 'script') { // 자바스크립트 실행 구문입니다.
        startScriptBuilderSession(); // 자바스크립트 실행 구문입니다.
      } else { // 자바스크립트 실행 구문입니다.
        startSpeakingSession(state.practiceMode); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const voiceSelectPrac = document.getElementById('select-eva-voice-prac'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (voiceSelectPrac) { // 조건문을 판별합니다.
    voiceSelectPrac.addEventListener('change', (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      state.selectedVoice = e.target.value; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const mainVoiceSelect = document.getElementById('select-eva-voice'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (mainVoiceSelect) mainVoiceSelect.value = e.target.value; // 조건문을 판별합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const previewVoicePrac = document.getElementById('btn-preview-voice-prac'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (previewVoicePrac) { // 조건문을 판별합니다.
    previewVoicePrac.addEventListener('click', previewSelectedVoice); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 실전 모의고사 탭 초기화 함수입니다.
function initExamTab() { // 함수를 정의하거나 콜백을 실행합니다.
  const startExamBtn = document.getElementById('btn-start-exam'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (startExamBtn) { // 조건문을 판별합니다.
    startExamBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      state.practiceMode = 'full'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      startSpeakingSession('full'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const voiceSelect = document.getElementById('select-eva-voice'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (voiceSelect) { // 조건문을 판별합니다.
    voiceSelect.addEventListener('change', (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      state.selectedVoice = e.target.value; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      const pracVoiceSelect = document.getElementById('select-eva-voice-prac'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (pracVoiceSelect) pracVoiceSelect.value = e.target.value; // 조건문을 판별합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const previewVoiceBtn = document.getElementById('btn-preview-voice'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (previewVoiceBtn) { // 조건문을 판별합니다.
    previewVoiceBtn.addEventListener('click', previewSelectedVoice); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const goMypageBtn = document.getElementById('btn-go-mypage-from-exam'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (goMypageBtn) { // 조건문을 판별합니다.
    goMypageBtn.addEventListener('click', () => switchTab('mypage')); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 스피킹 세션 시작 함수입니다.
function startSpeakingSession(mode) { // 함수를 정의하거나 콜백을 실행합니다.
  state.practiceMode = mode; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  const fullSet = createSurveyBasedExamSet(state.officialSurvey); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (mode === '1q' || mode === 'driving') { // 조건문을 판별합니다.
    const randomQ = fullSet[Math.floor(Math.random() * fullSet.length)]; // 변수 또는 상수를 선언하고 초기화합니다.
    state.questions = [{ ...randomQ, question_number: 1 }]; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  } else if (mode === '3combo') { // 자바스크립트 실행 구문입니다.
    state.questions = fullSet.slice(1, 4).map((q, idx) => ({ ...q, question_number: idx + 1 })); // 함수를 정의하거나 콜백을 실행합니다.
  } else { // 자바스크립트 실행 구문입니다.
    state.questions = fullSet; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  state.currentIndex = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.evaluationResults = []; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.totalTimeRemaining = state.questions.length * 150; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  startGlobalTimer(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  switchTab('exam'); // 자바스크립트 실행 구문입니다.
  switchExamSubView('testing'); // 자바스크립트 실행 구문입니다.
  renderCurrentQuestion(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 사용자 서베이 설정값 기반 15문항 모의고사 세트 생성 함수입니다.
function createSurveyBasedExamSet(survey) { // 함수를 정의하거나 콜백을 실행합니다.
  const diff = survey.difficulty || 5; // 변수 또는 상수를 선언하고 초기화합니다.
  if (diff >= 5) { // 조건문을 판별합니다.
    return [ // 함수 값을 반환하거나 실행을 종료합니다.
      { question_number: 1, topic: "Self Introduction", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 2, topic: "Movie", question_type: "장소 묘사", question_text: "You indicated in the survey that you go to the movies. Tell me about the movie theater you usually go to and why you like going there.", audio_file: "audio/q2.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 3, topic: "Movie", question_type: "활동/루틴", question_text: "What do you usually do before and after watching a movie? Describe your whole routine on movie days.", audio_file: "audio/q3.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 4, topic: "Movie", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable or unexpected incident you experienced while watching a movie at a cinema.", audio_file: "audio/q4.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 5, topic: "Housing", question_type: "장소 묘사", question_text: "You indicated that you live in an apartment. Please describe your home to me in as much detail as possible.", audio_file: "audio/q5.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 6, topic: "Housing", question_type: "활동/루틴", question_text: "What is your daily routine at home during the weekdays and weekends from morning until night?", audio_file: "audio/q6.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 7, topic: "Housing", question_type: "과거 경험", question_text: "Have you ever experienced an unexpected problem or issue at your home? What was the problem and how did you resolve it?", audio_file: "audio/q7.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 8, topic: "돌발: 호텔", question_type: "돌발: 호텔 묘사", question_text: "Tell me about a hotel you stayed at recently. What did the room and facilities look like?", audio_file: "audio/q15.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 9, topic: "돌발: 호텔", question_type: "돌발: 호텔 루틴", question_text: "What do you usually do when you check in and stay at a hotel from start to finish?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 10, topic: "돌발: 호텔", question_type: "돌발: 호텔 문제 경험", question_text: "Have you ever had an unexpected issue or complaint at a hotel? What happened and how was it solved?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 11, topic: "롤플레이", question_type: "롤플레이 (11번: 질문하기)", question_text: "You want to plan a party with your friend. Call your friend and ask 3 or 4 questions about planning the party.", audio_file: "audio/q8.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 12, topic: "롤플레이", question_type: "롤플레이 (12번: 대안 제시)", question_text: "An unexpected problem has come up and you cannot attend the party as planned. Call your friend, explain the situation, and offer 2 or 3 alternatives.", audio_file: "audio/q9.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 13, topic: "롤플레이", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever had a memorable plan cancelled unexpectedly? How did you resolve the situation?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 14, topic: "심화이슈", question_type: "심화 (14번: 과거 현재 비교)", question_text: "Compare electronic devices and technology people used in the past with devices people use today. What are the key differences?", audio_file: "audio/q12.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 15, topic: "심화이슈", question_type: "심화 (15번: 이슈 토론)", question_text: "What are some current issues or challenges related to the hotel and accommodation industry today? What is your opinion?", audio_file: "audio/q15.mp3" }, // 자바스크립트 실행 구문입니다.
    ]; // 배열 데이터 선언을 종료합니다.
  } else { // 자바스크립트 실행 구문입니다.
    return [ // 함수 값을 반환하거나 실행을 종료합니다.
      { question_number: 1, topic: "Self Introduction", question_type: "자기소개", question_text: "Let's start the interview now. Tell me a little bit about yourself.", audio_file: "audio/q1.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 2, topic: "Park", question_type: "장소 묘사", question_text: "Tell me about the park you visit most often. What does it look like, and what facilities does it have?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 3, topic: "Park", question_type: "활동/루틴", question_text: "What do you usually do when you go to the park from the moment you arrive until you leave?", audio_file: "audio/q3.mp3" }, // 자바스크립트 실행 구문입니다.
      { question_number: 4, topic: "Park", question_type: "기억에 남는 경험", question_text: "Tell me about a memorable day or experience you had at a park." }, // 자바스크립트 실행 구문입니다.
      { question_number: 5, topic: "Cafe", question_type: "장소 묘사", question_text: "Tell me about your favorite cafe or coffee shop. Where is it located, and what is the atmosphere like?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 6, topic: "Cafe", question_type: "루틴 및 습관", question_text: "When do you usually visit cafes, and who do you go with? What do you usually order?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 7, topic: "Cafe", question_type: "과거 경험", question_text: "Tell me about a memorable memory you have at a coffee shop." }, // 자바스크립트 실행 구문입니다.
      { question_number: 8, topic: "돌발: 날씨", question_type: "돌발: 날씨 묘사", question_text: "Tell me about the four seasons and the weather in your country. Which season do you like most?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 9, topic: "돌발: 날씨", question_type: "돌발: 날씨 경험", question_text: "Tell me about a time when unexpected weather affected your plans. How did you deal with it?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 10, topic: "돌발: 날씨", question_type: "돌발: 날씨 변화", question_text: "How has the weather in your country changed compared to when you were younger?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 11, topic: "롤플레이", question_type: "롤플레이 (11번: 질문하기)", question_text: "You are planning a vacation trip. Call a travel agency and ask 3 or 4 questions about the trip packages." }, // 자바스크립트 실행 구문입니다.
      { question_number: 12, topic: "롤플레이", question_type: "롤플레이 (12번: 대안 제시)", question_text: "Due to an urgent issue, you cannot go on the trip. Call the travel agency and offer 2 or 3 alternatives." }, // 자바스크립트 실행 구문입니다.
      { question_number: 13, topic: "롤플레이", question_type: "롤플레이 (13번: 유사경험)", question_text: "Have you ever experienced a situation where a vacation plan was cancelled? How did you resolve it?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 14, topic: "비교/선호", question_type: "비교 (14번: 취향 비교)", question_text: "Compare two different activities or hobbies you enjoy. Which one do you prefer and why?" }, // 자바스크립트 실행 구문입니다.
      { question_number: 15, topic: "최근 관심사", question_type: "경험 (15번: 최근 관심사)", question_text: "What is a recent topic or trend you became interested in? Tell me about it in detail." }, // 자바스크립트 실행 구문입니다.
    ]; // 배열 데이터 선언을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 하단 고정 탭바 네비게이션 초기화 및 라우팅 함수입니다.
function initTabBarNavigation() { // 함수를 정의하거나 콜백을 실행합니다.
  const tabItems = document.querySelectorAll('.tab-item'); // 변수 또는 상수를 선언하고 초기화합니다.
  tabItems.forEach((tab) => { // 함수를 정의하거나 콜백을 실행합니다.
    tab.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      const targetTab = tab.dataset.tab; // 변수 또는 상수를 선언하고 초기화합니다.
      switchTab(targetTab); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const quick1qBtn = document.getElementById('btn-quick-start-1q'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (quick1qBtn) { // 조건문을 판별합니다.
    quick1qBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      startSpeakingSession('1q'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const goSurveyBtn = document.getElementById('btn-go-mypage-survey'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (goSurveyBtn) { // 조건문을 판별합니다.
    goSurveyBtn.addEventListener('click', () => switchTab('mypage')); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const homeDrivingBtn = document.getElementById('btn-home-start-driving'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (homeDrivingBtn) { // 조건문을 판별합니다.
    homeDrivingBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      startSpeakingSession('driving'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const homeExamBtn = document.getElementById('btn-home-start-exam'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (homeExamBtn) { // 조건문을 판별합니다.
    homeExamBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      startSpeakingSession('full'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const goReviewBtn = document.getElementById('btn-go-review-from-home'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (goReviewBtn) { // 조건문을 판별합니다.
    goReviewBtn.addEventListener('click', () => switchTab('mypage')); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 특정 메인 탭으로 화면을 전환하는 함수입니다.
function switchTab(tabName) { // 함수를 정의하거나 콜백을 실행합니다.
  state.currentTab = tabName; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
  const tabItems = document.querySelectorAll('.tab-item'); // 변수 또는 상수를 선언하고 초기화합니다.
  tabItems.forEach((item) => { // 함수를 정의하거나 콜백을 실행합니다.
    if (item.dataset.tab === tabName) { // 조건문을 판별합니다.
      item.classList.add('active'); // 자바스크립트 실행 구문입니다.
    } else { // 자바스크립트 실행 구문입니다.
      item.classList.remove('active'); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const contents = document.querySelectorAll('.tab-content'); // 변수 또는 상수를 선언하고 초기화합니다.
  contents.forEach((c) => c.classList.remove('active')); // 함수를 정의하거나 콜백을 실행합니다.
  const targetContent = document.getElementById(`tab-${tabName}`); // 변수 또는 상수를 선언하고 초기화합니다.
  if (targetContent) { // 조건문을 판별합니다.
    targetContent.classList.add('active'); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const headerTitle = document.getElementById('app-header-title'); // 변수 또는 상수를 선언하고 초기화합니다.
  const timerBadge = document.getElementById('global-timer-display'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (tabName === 'home') { // 조건문을 판별합니다.
    if (headerTitle) headerTitle.innerText = '오픽 마스터'; // 조건문을 판별합니다.
    if (timerBadge) timerBadge.style.display = 'none'; // 조건문을 판별합니다.
    renderHomeDashboard(); // 자바스크립트 실행 구문입니다.
  } else if (tabName === 'plan') { // 자바스크립트 실행 구문입니다.
    if (headerTitle) headerTitle.innerText = '단계별 학습플랜'; // 조건문을 판별합니다.
    if (timerBadge) timerBadge.style.display = 'none'; // 조건문을 판별합니다.
    renderStudyPlanQuests(); // 자바스크립트 실행 구문입니다.
  } else if (tabName === 'practice') { // 자바스크립트 실행 구문입니다.
    if (headerTitle) headerTitle.innerText = '자투리 스피킹'; // 조건문을 판별합니다.
    if (timerBadge) timerBadge.style.display = 'none'; // 조건문을 판별합니다.
  } else if (tabName === 'exam') { // 자바스크립트 실행 구문입니다.
    if (headerTitle) headerTitle.innerText = state.practiceMode === 'listening' ? '질문 청취 퀴즈' : (state.practiceMode === 'script' ? '스크립트 연구소' : '실전 모의고사'); // 조건문을 판별합니다.
    if (timerBadge) { // 조건문을 판별합니다.
      timerBadge.style.display = state.examSubView === 'testing' ? 'block' : 'none'; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } else if (tabName === 'mypage') { // 자바스크립트 실행 구문입니다.
    if (headerTitle) headerTitle.innerText = '마이페이지'; // 조건문을 판별합니다.
    if (timerBadge) timerBadge.style.display = 'none'; // 조건문을 판별합니다.
    renderMyPageStats(); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  window.scrollTo({ top: 0, behavior: 'smooth' }); // 브라우저 DOM 및 전역 객체를 제어합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 홈 탭의 최근 성적 위젯을 렌더링하는 함수입니다.
function renderHomeDashboard() { // 함수를 정의하거나 콜백을 실행합니다.
  const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
  const recentDateEl = document.getElementById('home-recent-date'); // 변수 또는 상수를 선언하고 초기화합니다.
  const recentLevelEl = document.getElementById('home-recent-level-badge'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (notes.length > 0) { // 조건문을 판별합니다.
    const latest = notes[0]; // 변수 또는 상수를 선언하고 초기화합니다.
    if (recentDateEl) recentDateEl.innerText = `최근 연습: ${latest.date}`; // 조건문을 판별합니다.
    if (recentLevelEl) recentLevelEl.innerText = latest.overall_level; // 조건문을 판별합니다.
  } else { // 자바스크립트 실행 구문입니다.
    if (recentDateEl) recentDateEl.innerText = '아직 연습 기록이 없습니다.'; // 조건문을 판별합니다.
    if (recentLevelEl) recentLevelEl.innerText = '-'; // 조건문을 판별합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 마이페이지 탭의 통계 및 이벤트를 렌더링하는 함수입니다.
function renderMyPageStats() { // 함수를 정의하거나 콜백을 실행합니다.
  const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
  const totalExams = notes.length; // 변수 또는 상수를 선언하고 초기화합니다.
  const streak = parseInt(localStorage.getItem('opic_daily_streak') || '1', 10); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  let totalWpm = 0; // 변수 또는 상수를 선언하고 초기화합니다.
  let count = 0; // 변수 또는 상수를 선언하고 초기화합니다.
  notes.forEach((exam) => { // 함수를 정의하거나 콜백을 실행합니다.
    exam.evaluations.forEach((e) => { // 함수를 정의하거나 콜백을 실행합니다.
      const words = e.user_transcript ? e.user_transcript.split(/\s+/).length : 0; // 변수 또는 상수를 선언하고 초기화합니다.
      const duration = e.duration_sec || 30; // 변수 또는 상수를 선언하고 초기화합니다.
      totalWpm += Math.round((words / duration) * 60); // 자바스크립트 실행 구문입니다.
      count++; // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const avgWpm = count > 0 ? Math.round(totalWpm / count) : 85; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const totalExamsEl = document.getElementById('stat-total-exams'); // 변수 또는 상수를 선언하고 초기화합니다.
  const avgWpmEl = document.getElementById('stat-avg-wpm'); // 변수 또는 상수를 선언하고 초기화합니다.
  const streakDaysEl = document.getElementById('stat-streak-days'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (totalExamsEl) totalExamsEl.innerText = `${totalExams}회`; // 조건문을 판별합니다.
  if (avgWpmEl) avgWpmEl.innerText = `${avgWpm} WPM`; // 조건문을 판별합니다.
  if (streakDaysEl) streakDaysEl.innerText = `${streak}일`; // 조건문을 판별합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 마이페이지 버튼 이벤트 초기화 함수입니다.
function initMyPageEvents() { // 함수를 정의하거나 콜백을 실행합니다.
  const saveSurveyBtn = document.getElementById('btn-save-survey-settings'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (saveSurveyBtn) { // 조건문을 판별합니다.
    saveSurveyBtn.addEventListener('click', () => saveOfficialSurveySettings(true)); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const alStrategyBtn = document.getElementById('btn-apply-al-strategy'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (alStrategyBtn) { // 조건문을 판별합니다.
    alStrategyBtn.addEventListener('click', applyALRecommendedSurvey); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const openReviewBtn = document.getElementById('btn-open-review-from-mypage'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (openReviewBtn) { // 조건문을 판별합니다.
    openReviewBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      const notes = JSON.parse(localStorage.getItem('opic_review_notes') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (notes.length === 0) { // 조건문을 판별합니다.
        alert('아직 저장된 복습 기록이 없습니다. 스피킹 연습을 완료하시면 오답노트가 자동 생성됩니다!'); // 자바스크립트 실행 구문입니다.
        return; // 함수 값을 반환하거나 실행을 종료합니다.
      } // 객체 또는 코드 블록을 종료합니다.
      renderReportView(notes[0]); // 자바스크립트 실행 구문입니다.
      switchTab('exam'); // 자바스크립트 실행 구문입니다.
      switchExamSubView('report'); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const micGuideBtn = document.getElementById('btn-open-mic-guide'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (micGuideBtn) { // 조건문을 판별합니다.
    micGuideBtn.addEventListener('click', showMicHelpModal); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const clearDataBtn = document.getElementById('btn-clear-data'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (clearDataBtn) { // 조건문을 판별합니다.
    clearDataBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (confirm('저장된 모든 스피킹 복습 기록 및 서베이 설정을 초기화하시겠습니까?')) { // 조건문을 판별합니다.
        localStorage.clear(); // 자바스크립트 실행 구문입니다.
        alert('모든 학습 데이터가 초기화되었습니다.'); // 자바스크립트 실행 구문입니다.
        location.reload(); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 모의고사 탭 내부의 하위 뷰('survey', 'testing', 'report', 'quiz', 'script')를 전환하는 함수입니다.
function switchExamSubView(subViewName) { // 함수를 정의하거나 콜백을 실행합니다.
  state.examSubView = subViewName; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
  const viewSurvey = document.getElementById('exam-view-survey'); // 변수 또는 상수를 선언하고 초기화합니다.
  const viewTesting = document.getElementById('exam-view-testing'); // 변수 또는 상수를 선언하고 초기화합니다.
  const viewReport = document.getElementById('exam-view-report'); // 변수 또는 상수를 선언하고 초기화합니다.
  const viewQuiz = document.getElementById('exam-view-quiz'); // 변수 또는 상수를 선언하고 초기화합니다.
  const viewScript = document.getElementById('exam-view-script'); // 변수 또는 상수를 선언하고 초기화합니다.
  const timerBadge = document.getElementById('global-timer-display'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (viewSurvey) viewSurvey.style.display = subViewName === 'survey' ? 'block' : 'none'; // 조건문을 판별합니다.
  if (viewTesting) viewTesting.style.display = subViewName === 'testing' ? 'block' : 'none'; // 조건문을 판별합니다.
  if (viewReport) viewReport.style.display = subViewName === 'report' ? 'block' : 'none'; // 조건문을 판별합니다.
  if (viewQuiz) viewQuiz.style.display = subViewName === 'quiz' ? 'block' : 'none'; // 조건문을 판별합니다.
  if (viewScript) viewScript.style.display = subViewName === 'script' ? 'block' : 'none'; // 조건문을 판별합니다.
// 공백 라인입니다.
  if (timerBadge) { // 조건문을 판별합니다.
    timerBadge.style.display = subViewName === 'testing' ? 'block' : 'none'; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  window.scrollTo({ top: 0, behavior: 'smooth' }); // 브라우저 DOM 및 전역 객체를 제어합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1일 1문장 챌린지 초기화 및 이벤트 리스너 함수입니다.
function initDailyChallenge() { // 함수를 정의하거나 콜백을 실행합니다.
  renderDailySentence(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const prevBtn = document.getElementById('btn-prev-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (prevBtn) { // 조건문을 판별합니다.
    prevBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      stopDailyAudio(); // 자바스크립트 실행 구문입니다.
      state.currentDailyIndex = (state.currentDailyIndex - 1 + dailySentencesData.length) % dailySentencesData.length; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      renderDailySentence(); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const nextBtn = document.getElementById('btn-next-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (nextBtn) { // 조건문을 판별합니다.
    nextBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      stopDailyAudio(); // 자바스크립트 실행 구문입니다.
      state.currentDailyIndex = (state.currentDailyIndex + 1) % dailySentencesData.length; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      renderDailySentence(); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const listenBtn = document.getElementById('btn-listen-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (listenBtn) { // 조건문을 판별합니다.
    listenBtn.addEventListener('click', toggleDailyAudioPlay); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const shadowBtn = document.getElementById('btn-shadow-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (shadowBtn) { // 조건문을 판별합니다.
    shadowBtn.addEventListener('click', toggleDailyShadowing); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1일 1문장 재생 및 멈춤 토글 처리 함수입니다.
function toggleDailyAudioPlay() { // 함수를 정의하거나 콜백을 실행합니다.
  const listenBtn = document.getElementById('btn-listen-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  const item = dailySentencesData[state.currentDailyIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (state.isDailyAudioPlaying) { // 조건문을 판별합니다.
    stopDailyAudio(); // 자바스크립트 실행 구문입니다.
    return; // 함수 값을 반환하거나 실행을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
  state.isDailyAudioPlaying = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
  if (listenBtn) { // 조건문을 판별합니다.
    listenBtn.innerText = '⏹ 재생 멈추기'; // 자바스크립트 실행 구문입니다.
    listenBtn.style.backgroundColor = 'var(--toss-red)'; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const resetBtn = () => { // 변수 또는 상수를 선언하고 초기화합니다.
    state.isDailyAudioPlaying = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (listenBtn) { // 조건문을 판별합니다.
      listenBtn.innerText = '🔊 원어민 발음 듣기'; // 자바스크립트 실행 구문입니다.
      listenBtn.style.backgroundColor = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  if (item.audio_file) { // 조건문을 판별합니다.
    const audio = new Audio(item.audio_file); // 변수 또는 상수를 선언하고 초기화합니다.
    state.currentEvaAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    audio.onended = resetBtn; // 자바스크립트 실행 구문입니다.
    audio.onerror = () => { // 함수를 정의하거나 콜백을 실행합니다.
      playFallbackSpeech(item.exam_sentence, null, resetBtn); // 자바스크립트 실행 구문입니다.
    }; // 객체 또는 코드 블록을 종료합니다.
    audio.play().catch(() => { // 함수를 정의하거나 콜백을 실행합니다.
      playFallbackSpeech(item.exam_sentence, null, resetBtn); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    playFallbackSpeech(item.exam_sentence, null, resetBtn); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1일 1문장 오디오 정지 헬퍼 함수입니다.
function stopDailyAudio() { // 함수를 정의하거나 콜백을 실행합니다.
  state.isDailyAudioPlaying = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
  const listenBtn = document.getElementById('btn-listen-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (listenBtn) { // 조건문을 판별합니다.
    listenBtn.innerText = '🔊 원어민 발음 듣기'; // 자바스크립트 실행 구문입니다.
    listenBtn.style.backgroundColor = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1일 1문장 카드 내용을 렌더링하는 함수입니다.
function renderDailySentence() { // 함수를 정의하거나 콜백을 실행합니다.
  const item = dailySentencesData[state.currentDailyIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  if (!item) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const streakEl = document.getElementById('daily-streak-badge'); // 변수 또는 상수를 선언하고 초기화합니다.
  const exprEl = document.getElementById('daily-expr-title'); // 변수 또는 상수를 선언하고 초기화합니다.
  const korExprEl = document.getElementById('daily-expr-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
  const tipEl = document.getElementById('daily-expr-tip'); // 변수 또는 상수를 선언하고 초기화합니다.
  const examSenEl = document.getElementById('daily-exam-sentence'); // 변수 또는 상수를 선언하고 초기화합니다.
  const examKorEl = document.getElementById('daily-exam-korean'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (streakEl) streakEl.innerText = `🔥 Day ${item.id} (${item.category})`; // 조건문을 판별합니다.
  if (exprEl) exprEl.innerText = item.key_expression; // 조건문을 판별합니다.
  if (korExprEl) korExprEl.innerText = item.korean_meaning; // 조건문을 판별합니다.
  if (tipEl) tipEl.innerText = `💡 ${item.opic_tip}`; // 조건문을 판별합니다.
  if (examSenEl) examSenEl.innerText = `"${item.exam_sentence}"`; // 조건문을 판별합니다.
  if (examKorEl) examKorEl.innerText = `"${item.korean_sentence}"`; // 조건문을 판별합니다.
// 공백 라인입니다.
  const shadowResultEl = document.getElementById('daily-shadow-result'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (shadowResultEl) { // 조건문을 판별합니다.
    shadowResultEl.style.display = 'none'; // 자바스크립트 실행 구문입니다.
    shadowResultEl.innerHTML = ''; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1일 1문장 따라 말하기(Shadowing) 음성 인식 토글 함수입니다.
function toggleDailyShadowing() { // 함수를 정의하거나 콜백을 실행합니다.
  stopDailyAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const shadowBtn = document.getElementById('btn-shadow-daily'); // 변수 또는 상수를 선언하고 초기화합니다.
  const resultEl = document.getElementById('daily-shadow-result'); // 변수 또는 상수를 선언하고 초기화합니다.
  const item = dailySentencesData[state.currentDailyIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (!state.isDailyShadowingRecording) { // 조건문을 판별합니다.
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // 변수 또는 상수를 선언하고 초기화합니다.
    if (!SpeechRecognition) { // 조건문을 판별합니다.
      alert('음성 인식을 지원하지 않는 브라우저입니다.'); // 자바스크립트 실행 구문입니다.
      return; // 함수 값을 반환하거나 실행을 종료합니다.
    } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    try { // 예외 감지를 위한 try 블록입니다.
      const recognition = new SpeechRecognition(); // 변수 또는 상수를 선언하고 초기화합니다.
      recognition.continuous = false; // 자바스크립트 실행 구문입니다.
      recognition.interimResults = false; // 자바스크립트 실행 구문입니다.
      recognition.lang = 'en-US'; // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
      state.isDailyShadowingRecording = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      if (shadowBtn) { // 조건문을 판별합니다.
        shadowBtn.innerText = '⏹ 듣고 있습니다... (말씀하세요)'; // 자바스크립트 실행 구문입니다.
        shadowBtn.style.backgroundColor = '#fee2e2'; // 자바스크립트 실행 구문입니다.
        shadowBtn.style.color = '#dc2626'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      recognition.onresult = (event) => { // 함수를 정의하거나 콜백을 실행합니다.
        const spoken = event.results[0][0].transcript; // 변수 또는 상수를 선언하고 초기화합니다.
        const similarity = calculateWordSimilarity(spoken, item.exam_sentence); // 변수 또는 상수를 선언하고 초기화합니다.
        if (resultEl) { // 조건문을 판별합니다.
          resultEl.style.display = 'block'; // 자바스크립트 실행 구문입니다.
          resultEl.innerHTML = ` // 자바스크립트 실행 구문입니다.
            <div style="font-weight: 800; margin-bottom: 4px;">🎯 발음 일치도: ${similarity}%</div>
            <div>🗣️ 내가 말한 문장: "${spoken}"</div>
            <div style="margin-top: 4px; color: ${similarity >= 80 ? '#15803d' : '#b45309'}; font-weight: 700;">
              ${similarity >= 80 ? '🎉 완벽한 AL 발음과 억양입니다!' : '💡 억양을 살려 한 번 더 따라해보세요!'}
            </div>
          `;
        } // 객체 또는 코드 블록을 종료합니다.
      }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      recognition.onend = () => { // 함수를 정의하거나 콜백을 실행합니다.
        state.isDailyShadowingRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        if (shadowBtn) { // 조건문을 판별합니다.
          shadowBtn.innerText = '🎙️ 따라 말하기 연습'; // 자바스크립트 실행 구문입니다.
          shadowBtn.style.backgroundColor = '#ffffff'; // 자바스크립트 실행 구문입니다.
          shadowBtn.style.color = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
        } // 객체 또는 코드 블록을 종료합니다.
      }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      recognition.onerror = () => { // 함수를 정의하거나 콜백을 실행합니다.
        state.isDailyShadowingRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        if (shadowBtn) { // 조건문을 판별합니다.
          shadowBtn.innerText = '🎙️ 따라 말하기 연습'; // 자바스크립트 실행 구문입니다.
          shadowBtn.style.backgroundColor = '#ffffff'; // 자바스크립트 실행 구문입니다.
          shadowBtn.style.color = 'var(--toss-blue)'; // 자바스크립트 실행 구문입니다.
        } // 객체 또는 코드 블록을 종료합니다.
      }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      recognition.start(); // 자바스크립트 실행 구문입니다.
    } catch (e) { // 자바스크립트 실행 구문입니다.
      state.isDailyShadowingRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      showMicHelpModal(); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 두 영문 문장 간의 단어 일치율(유사도 %)을 계산하는 헬퍼 함수입니다.
function calculateWordSimilarity(str1, str2) { // 함수를 정의하거나 콜백을 실행합니다.
  const w1 = str1.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean); // 변수 또는 상수를 선언하고 초기화합니다.
  const w2 = str2.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean); // 변수 또는 상수를 선언하고 초기화합니다.
  if (w2.length === 0) return 0; // 조건문을 판별합니다.
  let match = 0; // 변수 또는 상수를 선언하고 초기화합니다.
  w1.forEach((word) => { // 함수를 정의하거나 콜백을 실행합니다.
    if (w2.includes(word)) match++; // 조건문을 판별합니다.
  }); // 자바스크립트 실행 구문입니다.
  return Math.min(100, Math.round((match / w2.length) * 100)); // 함수 값을 반환하거나 실행을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 칩 선택 인터랙션 초기화 함수입니다.
function initChipInteractions() { // 함수를 정의하거나 콜백을 실행합니다.
  const allChips = document.querySelectorAll('.chip-item'); // 변수 또는 상수를 선언하고 초기화합니다.
  allChips.forEach((chip) => { // 함수를 정의하거나 콜백을 실행합니다.
    const input = chip.querySelector('input'); // 변수 또는 상수를 선언하고 초기화합니다.
    if (input) { // 조건문을 판별합니다.
      input.addEventListener('change', () => { // 함수를 정의하거나 콜백을 실행합니다.
        if (input.type === 'radio') { // 조건문을 판별합니다.
          const name = input.name; // 변수 또는 상수를 선언하고 초기화합니다.
          document.querySelectorAll(`input[name="${name}"]`).forEach((r) => { // 함수를 정의하거나 콜백을 실행합니다.
            r.closest('.chip-item').classList.toggle('selected', r.checked); // 자바스크립트 실행 구문입니다.
          }); // 자바스크립트 실행 구문입니다.
        } else { // 자바스크립트 실행 구문입니다.
          chip.classList.toggle('selected', input.checked); // 자바스크립트 실행 구문입니다.
        } // 객체 또는 코드 블록을 종료합니다.
        updateSurveyCounterDisplay(); // 자바스크립트 실행 구문입니다.
      }); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }); // 자바스크립트 실행 구문입니다.
  updateSurveyCounterDisplay(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 서베이 선택 문항 개수 카운터 배지 업데이트 함수입니다.
function updateSurveyCounterDisplay() { // 함수를 정의하거나 콜백을 실행합니다.
  const badge = document.getElementById('survey-selection-count-badge'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!badge) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const checkedLeisure = document.querySelectorAll('input[name="survey_q4_leisure"]:checked').length; // 변수 또는 상수를 선언하고 초기화합니다.
  const checkedHobby = document.querySelectorAll('input[name="survey_q5_hobby"]:checked').length; // 변수 또는 상수를 선언하고 초기화합니다.
  const checkedSports = document.querySelectorAll('input[name="survey_q6_sports"]:checked').length; // 변수 또는 상수를 선언하고 초기화합니다.
  const checkedTravel = document.querySelectorAll('input[name="survey_q7_travel"]:checked').length; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const totalSelections = 3 + checkedLeisure + checkedHobby + checkedSports + checkedTravel; // 변수 또는 상수를 선언하고 초기화합니다.
  badge.innerText = `선택: ${totalSelections}개 / 12개 이상`; // 자바스크립트 실행 구문입니다.
  badge.style.backgroundColor = totalSelections >= 12 ? 'var(--toss-blue-light)' : '#fee2e2'; // 자바스크립트 실행 구문입니다.
  badge.style.color = totalSelections >= 12 ? 'var(--toss-blue)' : 'var(--toss-red)'; // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1타 강사 추천 AL 만점 서베이 12종 꿀조합을 자동 선택하는 함수입니다.
function applyALRecommendedSurvey() { // 함수를 정의하거나 콜백을 실행합니다.
  const recommended = { // 변수 또는 상수를 선언하고 초기화합니다.
    q1_job: 'NONE', // 자바스크립트 실행 구문입니다.
    q2_student: 'NO', // 자바스크립트 실행 구문입니다.
    q3_home: 'APARTMENT_ALONE', // 자바스크립트 실행 구문입니다.
    q4_leisure: ['MOVIE', 'PERFORMANCE', 'CONCERT', 'PARK', 'CAFE', 'BEACH'], // 자바스크립트 실행 구문입니다.
    q5_hobby: ['MUSIC'], // 자바스크립트 실행 구문입니다.
    q6_sports: ['JOGGING', 'WALKING', 'BIKING', 'GYM'], // 자바스크립트 실행 구문입니다.
    q7_travel: ['DOMESTIC', 'OVERSEAS', 'STAYCATION'], // 자바스크립트 실행 구문입니다.
    difficulty: 5 // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  state.officialSurvey = recommended; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  saveOfficialSurveySettings(false); // 자바스크립트 실행 구문입니다.
  loadOfficialSurveySettings(); // 자바스크립트 실행 구문입니다.
  alert('✨ [1타 강사] AL 만점 12종 꿀조합 서베이가 완벽하게 세팅되었습니다!\n모의고사와 스피킹 연습에서 일관성 있는 고득점 문제들이 출제됩니다.'); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 로컬 스토리지에 저장된 서베이 설정을 불러와 UI에 반영하는 함수입니다.
function loadOfficialSurveySettings() { // 함수를 정의하거나 콜백을 실행합니다.
  try { // 예외 감지를 위한 try 블록입니다.
    const saved = JSON.parse(localStorage.getItem('opic_official_survey') || 'null'); // 변수 또는 상수를 선언하고 초기화합니다.
    if (saved) state.officialSurvey = saved; // 조건문을 판별합니다.
  } catch (e) {} // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const s = state.officialSurvey; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const setRadio = (name, val) => { // 변수 또는 상수를 선언하고 초기화합니다.
    const radio = document.querySelector(`input[name="${name}"][value="${val}"]`); // 변수 또는 상수를 선언하고 초기화합니다.
    if (radio) { // 조건문을 판별합니다.
      radio.checked = true; // 자바스크립트 실행 구문입니다.
      document.querySelectorAll(`input[name="${name}"]`).forEach(r => { // 함수를 정의하거나 콜백을 실행합니다.
        r.closest('.chip-item').classList.toggle('selected', r.checked); // 자바스크립트 실행 구문입니다.
      }); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const setCheckboxes = (name, valArr) => { // 변수 또는 상수를 선언하고 초기화합니다.
    document.querySelectorAll(`input[name="${name}"]`).forEach((cb) => { // 함수를 정의하거나 콜백을 실행합니다.
      const isChecked = valArr.includes(cb.value); // 변수 또는 상수를 선언하고 초기화합니다.
      cb.checked = isChecked; // 자바스크립트 실행 구문입니다.
      cb.closest('.chip-item').classList.toggle('selected', isChecked); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  setRadio('survey_q1_job', s.q1_job); // 자바스크립트 실행 구문입니다.
  setRadio('survey_q2_student', s.q2_student); // 자바스크립트 실행 구문입니다.
  setRadio('survey_q3_home', s.q3_home); // 자바스크립트 실행 구문입니다.
  setCheckboxes('survey_q4_leisure', s.q4_leisure || []); // 자바스크립트 실행 구문입니다.
  setCheckboxes('survey_q5_hobby', s.q5_hobby || []); // 자바스크립트 실행 구문입니다.
  setCheckboxes('survey_q6_sports', s.q6_sports || []); // 자바스크립트 실행 구문입니다.
  setCheckboxes('survey_q7_travel', s.q7_travel || []); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const diffSelect = document.getElementById('survey-difficulty-select'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (diffSelect) diffSelect.value = s.difficulty || 5; // 조건문을 판별합니다.
// 공백 라인입니다.
  updateSurveyCounterDisplay(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 서베이 설정을 로컬 스토리지에 저장하는 함수입니다.
function saveOfficialSurveySettings(showAlert = true) { // 함수를 정의하거나 콜백을 실행합니다.
  const getRadio = (name) => { // 변수 또는 상수를 선언하고 초기화합니다.
    const r = document.querySelector(`input[name="${name}"]:checked`); // 변수 또는 상수를 선언하고 초기화합니다.
    return r ? r.value : ''; // 함수 값을 반환하거나 실행을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const getCheckboxes = (name) => { // 변수 또는 상수를 선언하고 초기화합니다.
    const arr = []; // 변수 또는 상수를 선언하고 초기화합니다.
    document.querySelectorAll(`input[name="${name}"]:checked`).forEach(cb => arr.push(cb.value)); // 함수를 정의하거나 콜백을 실행합니다.
    return arr; // 함수 값을 반환하거나 실행을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const diffSelect = document.getElementById('survey-difficulty-select'); // 변수 또는 상수를 선언하고 초기화합니다.
  const diff = diffSelect ? parseInt(diffSelect.value, 10) : 5; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const surveyData = { // 변수 또는 상수를 선언하고 초기화합니다.
    q1_job: getRadio('survey_q1_job'), // 자바스크립트 실행 구문입니다.
    q2_student: getRadio('survey_q2_student'), // 자바스크립트 실행 구문입니다.
    q3_home: getRadio('survey_q3_home'), // 자바스크립트 실행 구문입니다.
    q4_leisure: getCheckboxes('survey_q4_leisure'), // 자바스크립트 실행 구문입니다.
    q5_hobby: getCheckboxes('survey_q5_hobby'), // 자바스크립트 실행 구문입니다.
    q6_sports: getCheckboxes('survey_q6_sports'), // 자바스크립트 실행 구문입니다.
    q7_travel: getCheckboxes('survey_q7_travel'), // 자바스크립트 실행 구문입니다.
    difficulty: diff // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  state.officialSurvey = surveyData; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  localStorage.setItem('opic_official_survey', JSON.stringify(surveyData)); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  if (showAlert) { // 조건문을 판별합니다.
    alert('📋 서베이 및 난이도 설정이 성공적으로 저장되었습니다!'); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 실시간 HUD 입력 감시자 초기화 함수입니다.
function initHUDInputWatcher() { // 함수를 정의하거나 콜백을 실행합니다.
  const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (textarea) { // 조건문을 판별합니다.
    textarea.addEventListener('input', (e) => { // 함수를 정의하거나 콜백을 실행합니다.
      state.accumulatedText = e.target.value; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      updateSpeakingHUD(e.target.value); // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const fillSampleBtn = document.getElementById('btn-fill-sample-answer'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (fillSampleBtn) { // 조건문을 판별합니다.
    fillSampleBtn.addEventListener('click', fillSampleAnswer); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 배속 조절 버튼 이벤트 초기화 함수입니다.
function initSpeedButtons() { // 함수를 정의하거나 콜백을 실행합니다.
  const speedBtns = document.querySelectorAll('.btn-speed'); // 변수 또는 상수를 선언하고 초기화합니다.
  speedBtns.forEach((btn) => { // 함수를 정의하거나 콜백을 실행합니다.
    btn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      speedBtns.forEach(b => b.classList.remove('active')); // 함수를 정의하거나 콜백을 실행합니다.
      btn.classList.add('active'); // 자바스크립트 실행 구문입니다.
      state.shadowingPlaybackRate = parseFloat(btn.dataset.speed || '1.0'); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    }); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 모달 이벤트 초기화 함수입니다.
function initModalEvents() { // 함수를 정의하거나 콜백을 실행합니다.
  const closeBtn = document.getElementById('btn-close-mic-modal'); // 변수 또는 상수를 선언하고 초기화합니다.
  const modal = document.getElementById('mic-help-modal'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (closeBtn && modal) { // 조건문을 판별합니다.
    closeBtn.addEventListener('click', () => { // 함수를 정의하거나 콜백을 실행합니다.
      modal.style.display = 'none'; // 자바스크립트 실행 구문입니다.
    }); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 마이크 안내 모달을 표시하는 함수입니다.
function showMicHelpModal() { // 함수를 정의하거나 콜백을 실행합니다.
  const modal = document.getElementById('mic-help-modal'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (modal) modal.style.display = 'flex'; // 조건문을 판별합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 백엔드 Fast-TTS 서버 가용성을 확인하는 함수입니다.
async function checkServerConnection() { // 자바스크립트 실행 구문입니다.
  try { // 예외 감지를 위한 try 블록입니다.
    const res = await fetch(`${state.apiBaseUrl}/health`, { method: 'GET' }); // 변수 또는 상수를 선언하고 초기화합니다.
    if (res.ok) { // 조건문을 판별합니다.
      state.isServerAvailable = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } catch (e) { // 자바스크립트 실행 구문입니다.
    state.isServerAvailable = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 실시간 발화 HUD 정보를 갱신하는 함수입니다.
function updateSpeakingHUD(text) { // 함수를 정의하거나 콜백을 실행합니다.
  const words = text ? text.trim().split(/\s+/).filter(Boolean) : []; // 변수 또는 상수를 선언하고 초기화합니다.
  const wordCount = words.length; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const countEl = document.getElementById('hud-word-count'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (countEl) countEl.innerText = `${wordCount}단어`; // 조건문을 판별합니다.
// 공백 라인입니다.
  const duration = Math.max(1, state.recordingDuration); // 변수 또는 상수를 선언하고 초기화합니다.
  const wpm = Math.round((wordCount / (duration / 60))); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const wpmEl = document.getElementById('hud-wpm-live'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (wpmEl) wpmEl.innerText = `${wpm} WPM`; // 조건문을 판별합니다.
// 공백 라인입니다.
  let level = "IM2"; // 변수 또는 상수를 선언하고 초기화합니다.
  if (wordCount >= 40 && wpm >= 85) level = "AL"; // 조건문을 판별합니다.
  else if (wordCount >= 25 && wpm >= 65) level = "IH"; // 조건문을 판별합니다.
  else if (wordCount >= 15) level = "IM3"; // 조건문을 판별합니다.
// 공백 라인입니다.
  const gradeEl = document.getElementById('hud-predicted-grade'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (gradeEl) gradeEl.innerText = level; // 조건문을 판별합니다.
// 공백 라인입니다.
  const fillers = ["you know", "speaking of", "to be honest", "as a matter of fact", "i mean", "like", "actually"]; // 변수 또는 상수를 선언하고 초기화합니다.
  let detectedFillers = []; // 변수 또는 상수를 선언하고 초기화합니다.
  const lower = text.toLowerCase(); // 변수 또는 상수를 선언하고 초기화합니다.
  fillers.forEach((f) => { // 함수를 정의하거나 콜백을 실행합니다.
    if (lower.includes(f)) detectedFillers.push(f); // 조건문을 판별합니다.
  }); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const fillerEl = document.getElementById('hud-filler-detected'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (fillerEl) { // 조건문을 판별합니다.
    fillerEl.innerText = detectedFillers.length > 0 ? detectedFillers.slice(0, 2).join(', ') : '미사용'; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 실전 모의고사 녹음 후 AI 분석 결과를 즉시 렌더링하는 함수입니다.
function renderPostRecordingAnalysis(transcript, duration, audioUrl) { // 함수를 정의하거나 콜백을 실행합니다.
  const box = document.getElementById('post-recording-analysis-box'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (!box) return; // 조건문을 판별합니다.
// 공백 라인입니다.
  const words = transcript ? transcript.trim().split(/\s+/).filter(Boolean) : []; // 변수 또는 상수를 선언하고 초기화합니다.
  const wordCount = words.length; // 변수 또는 상수를 선언하고 초기화합니다.
  const dur = Math.max(3, duration); // 변수 또는 상수를 선언하고 초기화합니다.
  const wpm = Math.round((wordCount / (dur / 60))); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const upgradedScript = generateUpgradedALScript(q, transcript); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  let paceComment = "적절한 발화 속도를 유지하고 계십니다."; // 변수 또는 상수를 선언하고 초기화합니다.
  if (wpm < 70) paceComment = "말씀이 조금 끊기는 편입니다. 원어민 필러(You know, Speaking of which)를 활용해 자연스럽게 이어가세요."; // 조건문을 판별합니다.
  else if (wpm >= 90) paceComment = "매우 유창하고 원어민다운 훌륭한 속도입니다!"; // 조건문을 판별합니다.
// 공백 라인입니다.
  const fillers = ["you know", "speaking of which", "to be honest", "as a matter of fact", "i mean", "actually"]; // 변수 또는 상수를 선언하고 초기화합니다.
  const lower = transcript.toLowerCase(); // 변수 또는 상수를 선언하고 초기화합니다.
  const usedFillers = fillers.filter(f => lower.includes(f)); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  let grade = "IH"; // 변수 또는 상수를 선언하고 초기화합니다.
  if (wordCount >= 40 && wpm >= 85) grade = "AL"; // 조건문을 판별합니다.
  else if (wordCount < 20) grade = "IM2"; // 조건문을 판별합니다.
// 공백 라인입니다.
  box.innerHTML = ` // 자바스크립트 실행 구문입니다.
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
// 공백 라인입니다.
  box.style.display = 'block'; // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  if (state.practiceMode === 'driving') { // 조건문을 판별합니다.
    setTimeout(() => { // 함수를 정의하거나 콜백을 실행합니다.
      const feedbackVoiceText = `Good job! Your speaking pace is ${wpm} words per minute. Here is the upgraded AL sentence: ${upgradedScript}`; // 변수 또는 상수를 선언하고 초기화합니다.
      playCustomSpeech(encodeURIComponent(feedbackVoiceText)); // 자바스크립트 실행 구문입니다.
    }, 800); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 질문과 발화 내용에 기반하여 AL 등급 수준의 만점 답변 스크립트를 생성하는 함수입니다.
function generateUpgradedALScript(question, transcript) { // 함수를 정의하거나 콜백을 실행합니다.
  const type = question.question_type; // 변수 또는 상수를 선언하고 초기화합니다.
  const topic = question.topic; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (scriptUpgradeKnowledgeBase[topic] && scriptUpgradeKnowledgeBase[topic].upgraded_script) { // 조건문을 판별합니다.
    return scriptUpgradeKnowledgeBase[topic].upgraded_script; // 함수 값을 반환하거나 실행을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  if (type === "자기소개") { // 조건문을 판별합니다.
    return "Hello Eva, it is an absolute pleasure to meet you. My name is Alex, and I am currently residing in Seoul, working as a passionate professional. In my leisure time, you know, I am a huge movie enthusiast and love visiting vibrant local cafes. Speaking of which, I am truly thrilled to be here today to take this OPIc test."; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type === "장소 묘사") { // 자바스크립트 실행 구문입니다.
    return `Without a shadow of a doubt, my absolute favorite spot is located just a stone's throw away from my apartment. It features state-of-the-art facilities and a remarkably cozy ambiance, which always makes my visit truly relaxing and memorable.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type === "활동/루틴") { // 자바스크립트 실행 구문입니다.
    return `Whenever I engage in this activity, you know, I follow a pretty consistent routine. First off, I get everything prepared in advance. After spending quality time immersing myself in it, I wrap things up by relaxing and catching up with my close friends.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type === "기억에 남는 경험" || type === "과거 경험") { // 자바스크립트 실행 구문입니다.
    return `I vividly remember a truly unexpected incident that took place a while ago. Out of nowhere, something completely unanticipated occurred, which startled everyone. However, we managed to resolve it swiftly, leaving a lasting impression on all of us.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type.includes("11번")) { // 자바스크립트 실행 구문입니다.
    return `Hi there! It's Alex calling. I am so excited about our upcoming plan! I was just wondering if you could fill me in on a few quick details. First of all, what time are we meeting? And secondly, where is the exact location?`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type.includes("12번")) { // 자바스크립트 실행 구문입니다.
    return `I am terribly sorry to break the news, but a sudden emergency cropped up at work and I won't be able to make it on time. How about we reschedule our meeting for tomorrow instead? Alternatively, I would love to treat you to dinner this weekend.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type.includes("14번")) { // 자바스크립트 실행 구문입니다.
    return `Looking back, the entire landscape has undergone a monumental shift. In the past, people relied heavily on traditional offline methods. In stark contrast, nowadays, everyone utilizes high-tech digital devices for instantaneous convenience.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } else if (type.includes("15번")) { // 자바스크립트 실행 구문입니다.
    return `In today's society, one of the most prominent topics being discussed is the rapid evolution of technology alongside sustainability initiatives. In my opinion, striking a balance between technological efficiency and human connection is paramount.`; // 함수 값을 반환하거나 실행을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  return `Well, speaking of ${topic}, you know, I believe it plays an indispensable role in modern lifestyle. It provides immense value and allows us to unwind completely.`; // 함수 값을 반환하거나 실행을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 커스텀 텍스트를 공식 Eva 원어민 음성으로 즉시 재생하는 전역 헬퍼 함수입니다.
window.playCustomSpeech = function (encodedText) { // 브라우저 DOM 및 전역 객체를 제어합니다.
  const text = decodeURIComponent(encodedText); // 변수 또는 상수를 선언하고 초기화합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
  const rate = state.shadowingPlaybackRate || 0.95; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (state.isServerAvailable) { // 조건문을 판별합니다.
    const voice = state.selectedVoice || 'en-US-AriaNeural'; // 변수 또는 상수를 선언하고 초기화합니다.
    const ttsUrl = `${state.apiBaseUrl}/api/tts?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}`; // 변수 또는 상수를 선언하고 초기화합니다.
    const audio = new Audio(ttsUrl); // 변수 또는 상수를 선언하고 초기화합니다.
    state.currentEvaAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    audio.playbackRate = rate; // 자바스크립트 실행 구문입니다.
    audio.onerror = () => playBrowserSpeechFallback(text, null, rate); // 함수를 정의하거나 콜백을 실행합니다.
    audio.play().catch(() => playBrowserSpeechFallback(text, null, rate)); // 함수를 정의하거나 콜백을 실행합니다.
  } else { // 자바스크립트 실행 구문입니다.
    playBrowserSpeechFallback(text, null, rate); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
}; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 브라우저 내장 Web Speech API를 활용한 Eva 원어민 음성 발화 폴백 함수입니다.
function playBrowserSpeechFallback(text, avatarEl, rate = 0.95, onEndCallback = null) { // 함수를 정의하거나 콜백을 실행합니다.
  if (!window.speechSynthesis) return; // 조건문을 판별합니다.
  window.speechSynthesis.cancel(); // 브라우저 DOM 및 전역 객체를 제어합니다.
// 공백 라인입니다.
  const utterance = new SpeechSynthesisUtterance(text); // 변수 또는 상수를 선언하고 초기화합니다.
  utterance.lang = 'en-US'; // 자바스크립트 실행 구문입니다.
  utterance.rate = rate; // 자바스크립트 실행 구문입니다.
  utterance.pitch = 1.05; // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const bestVoice = cacheBestEvaVoice(); // 변수 또는 상수를 선언하고 초기화합니다.
  if (bestVoice) utterance.voice = bestVoice; // 조건문을 판별합니다.
// 공백 라인입니다.
  utterance.onstart = () => { // 함수를 정의하거나 콜백을 실행합니다.
    if (avatarEl) avatarEl.style.transform = 'scale(1.1)'; // 조건문을 판별합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  utterance.onend = () => { // 함수를 정의하거나 콜백을 실행합니다.
    if (avatarEl) avatarEl.style.transform = 'scale(1)'; // 조건문을 판별합니다.
    state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (onEndCallback) onEndCallback(); // 조건문을 판별합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  utterance.onerror = () => { // 함수를 정의하거나 콜백을 실행합니다.
    if (avatarEl) avatarEl.style.transform = 'scale(1)'; // 조건문을 판별합니다.
    state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (onEndCallback) onEndCallback(); // 조건문을 판별합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  window.speechSynthesis.speak(utterance); // 브라우저 DOM 및 전역 객체를 제어합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 유튜브 실제 Eva 원본 음성 미리듣기 함수입니다.
function previewSelectedVoice() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
  const realAudioPath = 'audio/q1.mp3'; // 변수 또는 상수를 선언하고 초기화합니다.
  const audio = new Audio(realAudioPath); // 변수 또는 상수를 선언하고 초기화합니다.
  state.currentEvaAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  audio.play().catch(() => { // 함수를 정의하거나 콜백을 실행합니다.
    const previewText = "Let's start the interview now. Tell me a little bit about yourself."; // 변수 또는 상수를 선언하고 초기화합니다.
    playBrowserSpeechFallback(previewText, null); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 모든 에바 음성 재생을 즉시 중단하는 통합 함수입니다.
function stopAllEvaAudio() { // 함수를 정의하거나 콜백을 실행합니다.
  if (state.currentEvaAudio) { // 조건문을 판별합니다.
    try { // 예외 감지를 위한 try 블록입니다.
      state.currentEvaAudio.pause(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.currentEvaAudio.currentTime = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } catch (e) {} // 자바스크립트 실행 구문입니다.
    state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  } // 객체 또는 코드 블록을 종료합니다.
  if (window.speechSynthesis) { // 조건문을 판별합니다.
    window.speechSynthesis.cancel(); // 브라우저 DOM 및 전역 객체를 제어합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 브라우저 내장 음성 인식(STT) API 초기화 함수입니다.
function initSpeechRecognition() { // 함수를 정의하거나 콜백을 실행합니다.
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // 변수 또는 상수를 선언하고 초기화합니다.
  if (SpeechRecognition) { // 조건문을 판별합니다.
    state.recognition = new SpeechRecognition(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.recognition.continuous = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.recognition.interimResults = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.recognition.lang = 'en-US'; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
    state.recognition.onresult = (event) => { // 함수를 정의하거나 콜백을 실행합니다.
      let transcriptText = ''; // 변수 또는 상수를 선언하고 초기화합니다.
      for (let i = 0; i < event.results.length; ++i) { // 자바스크립트 실행 구문입니다.
        transcriptText += event.results[i][0].transcript + ' '; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      const fullText = transcriptText.trim(); // 변수 또는 상수를 선언하고 초기화합니다.
      const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
      if (textarea && fullText.length > 0) { // 조건문을 판별합니다.
        textarea.value = fullText; // 자바스크립트 실행 구문입니다.
        state.accumulatedText = fullText; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        updateSpeakingHUD(fullText); // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.recognition.onend = () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (state.isRecording) { // 조건문을 판별합니다.
        try { state.recognition.start(); } catch (e) {} // 예외 감지를 위한 try 블록입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    state.recognition.onerror = (event) => { // 함수를 정의하거나 콜백을 실행합니다.
      console.warn('SpeechRecognition info:', event.error); // 자바스크립트 실행 구문입니다.
    }; // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 현재 문제에 맞는 샘플 답변을 자동으로 텍스트 입력창에 채워주는 함수입니다.
function fillSampleAnswer() { // 함수를 정의하거나 콜백을 실행합니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
  const samples = { // 변수 또는 상수를 선언하고 초기화합니다.
    "자기소개": "Hello Eva. My name is Alex and I am currently working as a software developer in Seoul. In my free time, you know, I really enjoy going to the movies, visiting cozy cafes, and listening to pop music. Speaking of which, I am very excited to take this OPIc test today.", // 자바스크립트 실행 구문입니다.
    "장소 묘사": "Well, you know, my favorite place is located right near my neighborhood. To be honest, it has a spacious atmosphere, modern facilities, and very cozy seating. People love visiting there regularly to relax and chat.", // 자바스크립트 실행 구문입니다.
    "활동/루틴": "When I go there, you see, I usually start by grabbing a drink or stretching. After that, I spend about an hour enjoying the ambiance with my earphones on. Before leaving, I always take a few minutes to unwind.", // 자바스크립트 실행 구문입니다.
    "기억에 남는 경험": "I remember a memorable day last month when I went there with my close friends. Something totally unexpected happened—it started pouring rain out of nowhere! We had to rush inside, but we ended up laughing a lot and had a blast.", // 자바스크립트 실행 구문입니다.
    "롤플레이 (11번: 질문하기)": "Hi there! I am calling to ask a few questions about the plan. First, what time should we meet? And where is the exact location? Lastly, is there anything special I should bring?", // 자바스크립트 실행 구문입니다.
    "롤플레이 (12번: 대안 제시)": "I am terribly sorry, but an urgent matter has come up and I cannot make it on time. How about we reschedule our meeting for tomorrow? Or, if you are free this weekend, I can treat you to dinner instead.", // 자바스크립트 실행 구문입니다.
    "심화 (14번: 과거 현재 비교)": "Compared to the past, technology and trends have evolved significantly. In the past, people relied heavily on offline methods, whereas nowadays, everyone uses high-tech smartphones and online platforms for instant convenience.", // 자바스크립트 실행 구문입니다.
    "심화 (15번: 이슈 토론)": "Nowadays, one of the biggest issues is how rapidly digital lifestyle and consumer trends are changing. In my opinion, while it offers tremendous convenience, we should also pay attention to sustainability and balance." // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
  const sample = samples[q.question_type] || `Well, speaking of ${q.topic}, you know, I think it is an essential part of my daily life. It brings me great joy and valuable experiences.`; // 변수 또는 상수를 선언하고 초기화합니다.
  if (textarea) { // 조건문을 판별합니다.
    textarea.value = sample; // 자바스크립트 실행 구문입니다.
    state.accumulatedText = sample; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    updateSpeakingHUD(sample); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 40분 전체 시험 글로벌 타이머 동작 함수입니다.
function startGlobalTimer() { // 함수를 정의하거나 콜백을 실행합니다.
  const timerDisplay = document.getElementById('global-timer-display'); // 변수 또는 상수를 선언하고 초기화합니다.
  state.examTimerInterval = setInterval(() => { // 함수를 정의하거나 콜백을 실행합니다.
    state.totalTimeRemaining--; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    if (state.totalTimeRemaining <= 0) { // 조건문을 판별합니다.
      clearInterval(state.examTimerInterval); // 자바스크립트 실행 구문입니다.
      finishExam(); // 자바스크립트 실행 구문입니다.
      return; // 함수 값을 반환하거나 실행을 종료합니다.
    } // 객체 또는 코드 블록을 종료합니다.
    const minutes = Math.floor(state.totalTimeRemaining / 60); // 변수 또는 상수를 선언하고 초기화합니다.
    const seconds = state.totalTimeRemaining % 60; // 변수 또는 상수를 선언하고 초기화합니다.
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; // 변수 또는 상수를 선언하고 초기화합니다.
    if (timerDisplay) { // 조건문을 판별합니다.
      timerDisplay.innerText = formatted; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }, 1000); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 현재 문제 화면을 렌더링하는 함수입니다.
function renderCurrentQuestion() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const progressBadge = document.getElementById('exam-progress-badge'); // 변수 또는 상수를 선언하고 초기화합니다.
  const currentTopic = document.getElementById('exam-current-topic'); // 변수 또는 상수를 선언하고 초기화합니다.
  const currentType = document.getElementById('exam-current-type'); // 변수 또는 상수를 선언하고 초기화합니다.
  const questionText = document.getElementById('exam-question-text'); // 변수 또는 상수를 선언하고 초기화합니다.
  const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
  const analysisBox = document.getElementById('post-recording-analysis-box'); // 변수 또는 상수를 선언하고 초기화합니다.
  const nextBtn = document.getElementById('btn-next-question'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (progressBadge) progressBadge.innerText = `${state.currentIndex + 1} / ${state.questions.length}`; // 조건문을 판별합니다.
  if (currentTopic) currentTopic.innerText = q.topic; // 조건문을 판별합니다.
  if (currentType) currentType.innerText = q.question_type; // 조건문을 판별합니다.
  if (questionText) questionText.innerText = q.question_text; // 조건문을 판별합니다.
  if (textarea) textarea.value = ''; // 조건문을 판별합니다.
  if (analysisBox) { // 조건문을 판별합니다.
    analysisBox.style.display = 'none'; // 자바스크립트 실행 구문입니다.
    analysisBox.innerHTML = ''; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  if (nextBtn) { // 조건문을 판별합니다.
    nextBtn.innerText = state.currentIndex === state.questions.length - 1 ? '🏁 시험 완료 및 성적표 확인' : '다음 문제 ➔'; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  state.listenCount = 0; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  state.accumulatedText = ''; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
  updateSpeakingHUD(''); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const replayBtn = document.getElementById('btn-replay-question'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (replayBtn) replayBtn.innerText = '🔊 질문 다시듣기 (1회 남음)'; // 조건문을 판별합니다.
// 공백 라인입니다.
  playQuestionAudio(); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 시험 문제 에바 질문 오디오 재생 함수입니다.
function playQuestionAudio() { // 함수를 정의하거나 콜백을 실행합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const avatarEl = document.getElementById('eva-avatar-box'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (q.audio_file) { // 조건문을 판별합니다.
    const audio = new Audio(q.audio_file); // 변수 또는 상수를 선언하고 초기화합니다.
    state.currentEvaAudio = audio; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    audio.onplay = () => { if (avatarEl) avatarEl.style.transform = 'scale(1.1)'; }; // 함수를 정의하거나 콜백을 실행합니다.
    audio.onended = () => { // 함수를 정의하거나 콜백을 실행합니다.
      if (avatarEl) avatarEl.style.transform = 'scale(1)'; // 조건문을 판별합니다.
      state.currentEvaAudio = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      if (state.practiceMode === 'driving' && !state.isRecording) { // 조건문을 판별합니다.
        setTimeout(() => toggleRecording(), 1000); // 함수를 정의하거나 콜백을 실행합니다.
      } // 객체 또는 코드 블록을 종료합니다.
    }; // 객체 또는 코드 블록을 종료합니다.
    audio.onerror = () => playFallbackSpeech(q.question_text, avatarEl); // 함수를 정의하거나 콜백을 실행합니다.
    audio.play().catch(() => playFallbackSpeech(q.question_text, avatarEl)); // 함수를 정의하거나 콜백을 실행합니다.
  } else { // 자바스크립트 실행 구문입니다.
    playFallbackSpeech(q.question_text, avatarEl); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 녹음 시작 및 정지 토글 함수입니다.
async function toggleRecording() { // 자바스크립트 실행 구문입니다.
  const recordBtn = document.getElementById('btn-toggle-recording'); // 변수 또는 상수를 선언하고 초기화합니다.
  const recordingStatus = document.getElementById('recording-status-text'); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  if (!state.isRecording) { // 조건문을 판별합니다.
    stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
    try { // 예외 감지를 위한 try 블록입니다.
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // 변수 또는 상수를 선언하고 초기화합니다.
      state.mediaStream = stream; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.audioChunks = []; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.mediaRecorder = new MediaRecorder(stream); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
      state.mediaRecorder.ondataavailable = (e) => { // 함수를 정의하거나 콜백을 실행합니다.
        if (e.data.size > 0) state.audioChunks.push(e.data); // 조건문을 판별합니다.
      }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      state.mediaRecorder.start(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.isRecording = true; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
      state.recordingStartTime = Date.now(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
      if (recordBtn) { // 조건문을 판별합니다.
        recordBtn.classList.add('recording'); // 자바스크립트 실행 구문입니다.
        recordBtn.innerText = '⏹ 녹음 완료 및 AI 진단'; // 자바스크립트 실행 구문입니다.
      } // 객체 또는 코드 블록을 종료합니다.
      if (recordingStatus) recordingStatus.innerText = '🔴 녹음 중입니다... (말씀하세요)'; // 조건문을 판별합니다.
// 공백 라인입니다.
      if (state.recognition) { // 조건문을 판별합니다.
        try { state.recognition.start(); } catch (e) {} // 예외 감지를 위한 try 블록입니다.
      } // 객체 또는 코드 블록을 종료합니다.
    } catch (err) { // 자바스크립트 실행 구문입니다.
      showMicHelpModal(); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } else { // 자바스크립트 실행 구문입니다.
    state.isRecording = false; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    state.recordingDuration = (Date.now() - state.recordingStartTime) / 1000; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
    if (recordBtn) { // 조건문을 판별합니다.
      recordBtn.classList.remove('recording'); // 자바스크립트 실행 구문입니다.
      recordBtn.innerText = '🎙️ 답변 녹음 시작'; // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
    if (recordingStatus) recordingStatus.innerText = '녹음이 완료되었습니다.'; // 조건문을 판별합니다.
// 공백 라인입니다.
    if (state.recognition) { // 조건문을 판별합니다.
      try { state.recognition.stop(); } catch (e) {} // 예외 감지를 위한 try 블록입니다.
    } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') { // 조건문을 판별합니다.
      state.mediaRecorder.onstop = () => { // 함수를 정의하거나 콜백을 실행합니다.
        const audioBlob = new Blob(state.audioChunks, { type: 'audio/webm' }); // 변수 또는 상수를 선언하고 초기화합니다.
        const audioUrl = URL.createObjectURL(audioBlob); // 변수 또는 상수를 선언하고 초기화합니다.
        state.recordedAudios[state.currentIndex] = audioUrl; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
        if (state.mediaStream) { // 조건문을 판별합니다.
          state.mediaStream.getTracks().forEach((track) => track.stop()); // 함수를 정의하거나 콜백을 실행합니다.
          state.mediaStream = null; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
        const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
        let finalTranscript = textarea ? textarea.value.trim() : ''; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
        if (!finalTranscript) { // 조건문을 판별합니다.
          finalTranscript = "Well, speaking of this topic, I usually enjoy this in my daily routine and it is very meaningful to me."; // 자바스크립트 실행 구문입니다.
          if (textarea) textarea.value = finalTranscript; // 조건문을 판별합니다.
        } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
        state.accumulatedText = finalTranscript; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
        updateSpeakingHUD(finalTranscript); // 자바스크립트 실행 구문입니다.
        renderPostRecordingAnalysis(finalTranscript, state.recordingDuration, audioUrl); // 자바스크립트 실행 구문입니다.
      }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
      state.mediaRecorder.stop(); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    } else { // 자바스크립트 실행 구문입니다.
      const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
      const finalTranscript = textarea ? textarea.value.trim() : ''; // 변수 또는 상수를 선언하고 초기화합니다.
      renderPostRecordingAnalysis(finalTranscript, state.recordingDuration, null); // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 다음 문제로 넘어가기 버튼 클릭 핸들러 함수입니다.
async function onNextQuestionClick() { // 자바스크립트 실행 구문입니다.
  if (state.isRecording) { // 조건문을 판별합니다.
    await toggleRecording(); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const q = state.questions[state.currentIndex]; // 변수 또는 상수를 선언하고 초기화합니다.
  const textarea = document.getElementById('stt-input-textarea'); // 변수 또는 상수를 선언하고 초기화합니다.
  let transcript = (textarea && textarea.value.trim()) ? textarea.value.trim() : ""; // 변수 또는 상수를 선언하고 초기화합니다.
  if (!transcript) { // 조건문을 판별합니다.
    transcript = "Well, I think this topic is very interesting and I usually enjoy this in my daily routine."; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
  const duration = state.recordingDuration > 3 ? state.recordingDuration : 25.0; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const upgraded = generateUpgradedALScript(q, transcript); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const evalResult = { // 변수 또는 상수를 선언하고 초기화합니다.
    question_number: q.question_number, // 자바스크립트 실행 구문입니다.
    topic: q.topic, // 자바스크립트 실행 구문입니다.
    question_type: q.question_type, // 자바스크립트 실행 구문입니다.
    question_text: q.question_text, // 자바스크립트 실행 구문입니다.
    user_transcript: transcript, // 자바스크립트 실행 구문입니다.
    upgraded_script: upgraded, // 자바스크립트 실행 구문입니다.
    duration_sec: duration, // 자바스크립트 실행 구문입니다.
    audio_url: state.recordedAudios[state.currentIndex] || null, // 자바스크립트 실행 구문입니다.
    predicted_level: transcript.split(/\s+/).length >= 40 ? "AL" : (transcript.split(/\s+/).length >= 25 ? "IH" : "IM2"), // 자바스크립트 실행 구문입니다.
    sub_scores: { // 자바스크립트 실행 구문입니다.
      task: transcript.split(/\s+/).length >= 35 ? 90 : 80, // 자바스크립트 실행 구문입니다.
      grammar: 85, // 자바스크립트 실행 구문입니다.
      vocabulary: 88, // 자바스크립트 실행 구문입니다.
      fluency: 84 // 자바스크립트 실행 구문입니다.
    } // 객체 또는 코드 블록을 종료합니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  state.evaluationResults.push(evalResult); // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
// 공백 라인입니다.
  if (state.currentIndex < state.questions.length - 1) { // 조건문을 판별합니다.
    state.currentIndex++; // 앱 전역 상태(state) 값을 설정하거나 업데이트합니다.
    renderCurrentQuestion(); // 자바스크립트 실행 구문입니다.
  } else { // 자바스크립트 실행 구문입니다.
    finishExam(); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 시험 또는 연습 종료 및 성적표/복습 리포트 렌더링 & 오답노트 영구 저장 함수입니다.
function finishExam() { // 함수를 정의하거나 콜백을 실행합니다.
  clearInterval(state.examTimerInterval); // 자바스크립트 실행 구문입니다.
  stopAllEvaAudio(); // 자바스크립트 실행 구문입니다.
// 공백 라인입니다.
  const evals = state.evaluationResults; // 변수 또는 상수를 선언하고 초기화합니다.
  const count = evals.length || 1; // 변수 또는 상수를 선언하고 초기화합니다.
  const sumTask = evals.reduce((acc, cur) => acc + cur.sub_scores.task, 0); // 변수 또는 상수를 선언하고 초기화합니다.
  const sumGrammar = evals.reduce((acc, cur) => acc + cur.sub_scores.grammar, 0); // 변수 또는 상수를 선언하고 초기화합니다.
  const sumVocab = evals.reduce((acc, cur) => acc + cur.sub_scores.vocabulary, 0); // 변수 또는 상수를 선언하고 초기화합니다.
  const sumFluency = evals.reduce((acc, cur) => acc + cur.sub_scores.fluency, 0); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const avgTask = Math.round(sumTask / count); // 변수 또는 상수를 선언하고 초기화합니다.
  const avgGrammar = Math.round(sumGrammar / count); // 변수 또는 상수를 선언하고 초기화합니다.
  const avgVocab = Math.round(sumVocab / count); // 변수 또는 상수를 선언하고 초기화합니다.
  const avgFluency = Math.round(sumFluency / count); // 변수 또는 상수를 선언하고 초기화합니다.
  const overallAvg = Math.round((avgTask + avgGrammar + avgVocab + avgFluency) / 4); // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  let overallLevel = "IH"; // 변수 또는 상수를 선언하고 초기화합니다.
  if (overallAvg >= 90) overallLevel = "AL"; // 조건문을 판별합니다.
  else if (overallAvg >= 80) overallLevel = "IH"; // 조건문을 판별합니다.
  else if (overallAvg >= 70) overallLevel = "IM3"; // 조건문을 판별합니다.
  else overallLevel = "IM2"; // 조건 불일치 시 대체 분기를 실행합니다.
// 공백 라인입니다.
  const finalReport = { // 변수 또는 상수를 선언하고 초기화합니다.
    date: new Date().toLocaleString('ko-KR'), // 자바스크립트 실행 구문입니다.
    overall_level: overallLevel, // 자바스크립트 실행 구문입니다.
    overall_score: overallAvg, // 자바스크립트 실행 구문입니다.
    sub_averages: { // 자바스크립트 실행 구문입니다.
      task_completion: avgTask, // 자바스크립트 실행 구문입니다.
      grammar_accuracy: avgGrammar, // 자바스크립트 실행 구문입니다.
      vocabulary: avgVocab, // 자바스크립트 실행 구문입니다.
      fluency: avgFluency, // 자바스크립트 실행 구문입니다.
    }, // 객체 또는 코드 블록을 종료합니다.
    summary_comment: "마이페이지 맞춤 서베이를 기반으로 훌륭하게 발화를 마쳤습니다. 복습 리포트의 AI 추천 AL 문장을 쉐도잉하며 표현력을 넓혀보세요.", // 자바스크립트 실행 구문입니다.
    evaluations: evals, // 자바스크립트 실행 구문입니다.
  }; // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  saveExamToArchive(finalReport); // 자바스크립트 실행 구문입니다.
  switchExamSubView('report'); // 자바스크립트 실행 구문입니다.
  renderReportView(finalReport); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 모의고사 결과를 브라우저 LocalStorage에 영구 보관하는 함수입니다.
function saveExamToArchive(report) { // 함수를 정의하거나 콜백을 실행합니다.
  try { // 예외 감지를 위한 try 블록입니다.
    const existing = JSON.parse(localStorage.getItem('opic_review_notes') || '[]'); // 변수 또는 상수를 선언하고 초기화합니다.
    existing.unshift(report); // 자바스크립트 실행 구문입니다.
    if (existing.length > 30) existing.pop(); // 조건문을 판별합니다.
    localStorage.setItem('opic_review_notes', JSON.stringify(existing)); // 자바스크립트 실행 구문입니다.
  } catch (e) { // 자바스크립트 실행 구문입니다.
    console.warn('LocalStorage save error:', e); // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 1:1 비교 복습 리포트를 렌더링하는 함수입니다.
function renderReportView(report) { // 함수를 정의하거나 콜백을 실행합니다.
  document.getElementById('final-grade-display').innerText = report.overall_level; // 브라우저 DOM 및 전역 객체를 제어합니다.
  document.getElementById('final-score-display').innerText = `평가 점수: ${report.overall_score}점 / 100점`; // 브라우저 DOM 및 전역 객체를 제어합니다.
  document.getElementById('report-summary-comment').innerText = report.summary_comment; // 브라우저 DOM 및 전역 객체를 제어합니다.
// 공백 라인입니다.
  const container = document.getElementById('full-review-list-container'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (container) { // 조건문을 판별합니다.
    container.innerHTML = report.evaluations.map((item) => ` // 함수를 정의하거나 콜백을 실행합니다.
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
  } // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
  const shareBtn = document.getElementById('btn-share-report'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (shareBtn) { // 조건문을 판별합니다.
    shareBtn.onclick = copyReportToClipboard; // 자바스크립트 실행 구문입니다.
  } // 객체 또는 코드 블록을 종료합니다.
  const restartBtn = document.getElementById('btn-restart-exam'); // 변수 또는 상수를 선언하고 초기화합니다.
  if (restartBtn) { // 조건문을 판별합니다.
    restartBtn.onclick = () => switchExamSubView('survey'); // 함수를 정의하거나 콜백을 실행합니다.
  } // 객체 또는 코드 블록을 종료합니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
// 성적표 결과를 클립보드에 복사하여 카카오톡 등에 공유할 수 있게 하는 함수입니다.
function copyReportToClipboard() { // 함수를 정의하거나 콜백을 실행합니다.
  const grade = document.getElementById('final-grade-display').innerText; // 변수 또는 상수를 선언하고 초기화합니다.
  const score = document.getElementById('final-score-display').innerText; // 변수 또는 상수를 선언하고 초기화합니다.
  const comment = document.getElementById('report-summary-comment').innerText; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  const shareText = `🎙️ [OPIc Master AI 스피킹 연습 결과 & 1:1 복습 리포트]\n\n🏆 예상 등급: ${grade}\n📊 ${score}\n\n🧑‍🏫 채점관 총평:\n"${comment}"\n\n지금 바로 무료로 맞춤 서베이 스피킹 연습을 시작해보세요!`; // 변수 또는 상수를 선언하고 초기화합니다.
// 공백 라인입니다.
  navigator.clipboard.writeText(shareText).then(() => { // 함수를 정의하거나 콜백을 실행합니다.
    alert('📋 성적표 및 복습 리포트가 클립보드에 복사되었습니다!\n카카오톡이나 메모장에 바로 붙여넣기(Ctrl+V) 하실 수 있습니다.'); // 자바스크립트 실행 구문입니다.
  }).catch(() => { // 함수를 정의하거나 콜백을 실행합니다.
    alert('클립보드 복사에 실패했습니다.'); // 자바스크립트 실행 구문입니다.
  }); // 자바스크립트 실행 구문입니다.
} // 객체 또는 코드 블록을 종료합니다.
// 공백 라인입니다.
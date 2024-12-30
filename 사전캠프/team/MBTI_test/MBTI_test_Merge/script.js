/* 이한솔.ver */

// 결과 텍스트를 저장한 객체 (MBTI 유형별로 설명을 저장)
const results = {
    "ESTJ": "ESTJ : 행동대장, 일중독자 엣띠제!",
    "ENTJ": "ENTJ : 무조건 내가 대장! 엥띠제!",
    "ESFJ": "ESFJ : 오지라퍼, 칭찬바라기 엣뿌제!",
    "ENFJ": "ENFJ : 평화수호자, 아낌없이 주는 나무 엥뿌제!",
    "ISTJ": "ISTJ : 근면성실한 애늙은이, 짠돌이 잇띠제!",
    "INTJ": "INTJ : 지적인 책벌레, 천재 혹은 바보 잉띠제!",
    "ISFJ": "ISFJ : 홧병 많은 현모양처, 살림꾼 잇뿌제!",
    "INFJ": "INFJ : 고민 많은 성직자, 이 시대의 어린왕자 잉뿌제!",
    "ESTP": "ESTP : 겁없는 팔방미인, 폼생폼사 엣띱!",
    "ENTP": "ENTP : 무조건 내가 맞아! 자아도취 엥띱!",
    "ESFP": "ESFP : 젊어서 노세~ 분위기 메이커 엣뿌삐!",
    "ENFP": "ENFP : 4차원 취미부자, 자유로운 영혼 엥뿌삐!",
    "ISTP": "ISTP : 개인주의 맥가이버, 귀차니즘 끝판왕 잇띱!",
    "INTP": "INTP : 무한한 아이디어, 호기심천국 잉띱!",
    "ISFP": "ISFP : 조용한 예술가, 순딩이 평화주의자 잇뿌삐!",
    "INFP": "INFP : 두부멘탈 몽상가, 수도꼭지 눈물 잉뿌삐!"
};

// 사용자가 퀴즈를 완료했을 때 호출되는 함수
function calculateResult() {
    // 퀴즈 폼 요소를 가져옴
    const form = document.getElementById('quiz-form');

    // 각 MBTI 성향별로 점수를 저장할 객체
    let score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // 폼 데이터를 가져옴
    const formData = new FormData(form);

    // 답을 안고른게 있을 때 알림창 뜨게 함
    if ([...formData.values()].length < 12) {
        alert("모든 질문에 대한 답을 골라주세요!");
        return;
    }

    // 폼 데이터에 포함된 값을 기반으로 점수를 계산
    for (let value of formData.values()) {
        score[value] = score[value] + 1; // 각 성향에 해당하는 점수를 1씩 증가
    }

    // 최종 MBTI 유형을 저장할 빈 문자열 초기화
    let personalityType = '';


    // E와 I 중 높은 점수를 가진 쪽을 선택하여 personalityType에 추가
    if (score.E >= score.I) {
        personalityType += 'E';
    } else {
        personalityType += 'I';
    }

    // S와 N 비교
    if (score.S >= score.N) {
        personalityType += 'S';
    } else {
        personalityType += 'N';
    }

    // T와 F 비교
    if (score.T >= score.F) {
        personalityType += 'T';
    } else {
        personalityType += 'F';
    }

    // J와 P 비교
    if (score.J >= score.P) {
        personalityType += 'J';
    } else {
        personalityType += 'P';
    }

    // S와 N, T와 F, J와 P 중 높은 점수를 가진 쪽을 선택하여 personalityType에 추가하는 코드를 작성해주세요!! 바로 위 로직을 참고하면 되겠죠?


    document.getElementById('result-text').innerText = results[personalityType];
    document.getElementById('result').classList.remove('hide');


    formData.forEach((value) => {
        score[value]++;
    });
}



// 퀴즈를 초기 상태로 되돌리는 함수
function resetQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').classList.add('hide');
}
// 최수진.ver

// 이전 번호를 보기 위한 배열 추가
let pre = [];

// 버튼이 눌렸을 때, 이벤트가 작동되도록 이벤트리스너를 넣어준 코드입니다.
document.getElementById('generateButton').addEventListener('click', function () {
    document.getElementById('pre').textContent = `이전번호 : ${pre.join(', ')}`;
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행이 될 거에요.
    document.getElementById('numbers').textContent = numbers.join(', ');
    pre = numbers;
});


function generateLottoNumbers() {
    let lottoNum = [];
    for (let i = 0; lottoNum.length < 6; i++) { //6개의 숫자를 뽑기위한 반복 조건
        let ranNum = Math.floor(Math.random() * 45) + 1;  // 1~45사이 랜덤 숫자 뽑기, 정수내림
        if (!lottoNum.includes(ranNum)) { // 중복 값 제거를 위한 includes
            lottoNum.push(ranNum);
        }
    }
    lottoNum.sort((a, b) => a - b); // 숫자 오름차순 정렬
    return lottoNum;
}
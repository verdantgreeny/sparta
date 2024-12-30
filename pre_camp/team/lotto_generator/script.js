

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
    for (let i = 0; lottoNum.length < 6; i++) {
        let ranNum = Math.floor(Math.random() * 45) + 1;
        if (!lottoNum.includes(ranNum)) {
            lottoNum.push(ranNum);
        }
    }
    lottoNum.sort((a,b) => a - b);
    console.log(lottoNum);
    return lottoNum;
}



/* 여기에 generateLottoNumbers 함수를 완성해주세요. */


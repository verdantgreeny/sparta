//--------모달----------
// 모달 열기 버튼 가져오기
const modalBtn = document.querySelector(".modal-btn");
// 모달 창 가져오기
const modal = document.querySelector(".modal");
// 모달 닫기 버튼 가져오기
const closeBtn = document.querySelector(".close-btn");

// 함수 만들기 (선언)
function toggleModal() {
  modal.classList.toggle("hide");
}

// 모달 열기 버튼 클릭 이벤트 추가
modalBtn.addEventListener("click", function () {
  // 함수 실행
  toggleModal();
});

// 모달 닫기 버튼 클릭 이벤트 추가
closeBtn.addEventListener("click", function () {
  // 함수 실행
  toggleModal();
});


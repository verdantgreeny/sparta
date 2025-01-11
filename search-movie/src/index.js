const key = "8c042dd259ff74678faad9fc993de371";
const indexDiv = document.querySelector("#index-div");
const rankingText = document.querySelector(".ranking");

// TMDB API 인기 영화 데이터 가져오기
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzA0MmRkMjU5ZmY3NDY3OGZhYWQ5ZmM5OTNkZTM3MSIsIm5iZiI6MTczNjI5ODAxNC40NDYsInN1YiI6IjY3N2RjZTFlYjExZDA4ODExMTdhZjllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lh4p7D1aiISP-T8-lYWAbTXcJNMLecHQch9r-_-jwiQ",
  },
};

//fetch(url, 옵션 객체) -> promise 타입의 객체를 반환(return)
fetch("https://api.themoviedb.org/3/trending/movie/day?language=ko-KR", options)
  .then((res) => res.json()) // 가지고 오면 json에 요청
  .then((res) => console.log(res)) //resolve
  .catch((err) => console.error(err)); //reject

//API로 데이터 받고 화면 출력
let trendMovie = function () {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=ko-KR`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let rows = res["results"];
      indexDiv.innerHTML = "";
      rows.forEach((a, i) => {
        let title = a["title"];
        let overview = a["overview"];
        let rating = a["vote_average"];
        let poster = a["poster_path"];

        //데이터 화면 출력하기
        let movieCard = `
<article class="movieCard"  >
    <section class="movie-front" style="background-image:url('https://image.tmdb.org/t/p/w500${poster}')">
      <div class="ranking" > ${i + 1}위</div>
       <div class="overview" > 
       ${overview}
        <!-- 모달 열기 버튼 -->
        <button class="modal-btn">자세히보기</button>
       </div>
    </section>
    <section>
        <div class="movie-title"> ${title} </div>
        <div class="rating"> 평점 : ${rating} </div>
        <button class="bookmark">북마크</button>
    </section>
</article>
`;
        indexDiv.innerHTML += movieCard;
      });
    });
};

trendMovie();

//-------검색기능 구현-------
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector("#search-input");
const mainTitleText = document.querySelector("#main-title-text");

// const movieCard = document.querySelectorAll('.movieCard');

//검색버튼 마우스오버할 때 일어나는 이벤트 -> 클릭시 이벤트로 변경
searchBtn.addEventListener("click", function () {
  console.log("click");
  //삼항연산자로 바꾸기
  searchInput.style.display === "none"
    ? (searchInput.style.display = "inline")
    : (searchInput.style.display = "none");
});

//검색인풋 포커스할 때 일어나는 이벤트
searchInput.addEventListener("focus", function () {
  if (searchInput.value === "") {
    indexDiv.style.display = "none";
    mainTitleText.innerHTML = `"" 검색 결과`;
    console.log("focus");
  }
});

// TMDB API search 데이터 가져오기
const searchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzA0MmRkMjU5ZmY3NDY3OGZhYWQ5ZmM5OTNkZTM3MSIsIm5iZiI6MTczNjI5ODAxNC40NDYsInN1YiI6IjY3N2RjZTFlYjExZDA4ODExMTdhZjllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lh4p7D1aiISP-T8-lYWAbTXcJNMLecHQch9r-_-jwiQ",
  },
};

fetch(
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko-KR&page=1",
  options
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// API로 데이터 받고 화면 출력
let searchForMovie = function (searchValue) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchValue}&include_adult=false&language=ko-KR&page=1`; 
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let rows = res["results"];
      indexDiv.innerHTML = "";
      rows.forEach((a, i) => {
        let title = a["title"];
        let overview = a["overview"];
        let rating = a["vote_average"];
        let poster = a["poster_path"];
        let releaseDate = a["release_date"];

        //데이터 화면 출력하기
        let movieCard = `
<article class="movieCard"  >
  <section class="movie-front" style="background-image:url('https://image.tmdb.org/t/p/w500${poster}')">
    <div class="release-date" > 개봉:${releaseDate} </div>
     <div class="overview" > 
     ${overview}
     <button class="modal-btn">자세히보기</button> 
     </div>
  </section>
  <section>
      <div class="movie-title"> ${title} </div>
      <div class="rating"> 평점 : ${rating} </div>
      <button class="bookmark">북마크</button>
  </section>
</article>
`;
        indexDiv.innerHTML += movieCard;
      });
    });
};

// 인풋값가져오기 input
searchInput.addEventListener("input", function () {
  let searchValue = searchInput.value.trim(); //trim(): 문자열의 양 끝에 공백 제거 
  if (searchValue !== "") {
    indexDiv.style.display = "grid";
    mainTitleText.innerHTML = `"${searchValue}" 검색 결과`;
    searchForMovie(searchValue);
    return;
  } else {
    mainTitleText.innerHTML = `"" 검색 결과`;
    indexDiv.innerHTML = "";
    return;
  }
});


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


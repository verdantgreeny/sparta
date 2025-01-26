import {useState} from 'react'

const MedalForm = ({medals, setMedals}) => {
    const [country, setCountry] = useState(""); // 나라 이름을 저장
    const [gold, setGold] = useState(""); // 금메달 개수
    const [silver, setSilver] = useState(""); // 은메달 개수
    const [bronze, setBronze] = useState(""); // 동메달 개수

  // 🟠 resetForm: 입력 필드를 초기화하는 함수
  const resetForm = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  // 🟠 handleSubmit: 폼 제출 시 새로운 메달 데이터를 추가하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    const newMedal = {
      country: country,
      gold: +gold,
      silver: +silver,
      bronze: +bronze,
    };
    setMedals([...medals, newMedal]); // 새로운 메달 데이터를 기존 리스트에 추가
    resetForm(); // 입력 필드 초기화
  };

  const handleUpdate = () => {
    const existingMedal = medals.find((medal) => medal.country === country);
    if (existingMedal) {
      const updatedMedals = medals.map((medal) => {
        if (medal.country === country) {
          const newMedal = {
            country: country,
            gold: +gold,
            silver: +silver,
            bronze: +bronze,
          };
          return newMedal;
        } else {
          return medal;
        }
      });
      setMedals(updatedMedals);
      resetForm();
      alert("업데이트가 완료되었습니다!");
    } else {
      alert("존재하지 않아요!!");
    }
  };
  
  return (
    <>

      {/* 🟢 입력 폼 - 국가와 메달 수를 입력 */}
      <form onSubmit={handleSubmit} className="medal-form">
        <label className="input-wrapper">
          국가명
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="국가명"
            required
          />
        </label>
        <label className="input-wrapper">
          금메달
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(+e.target.value)}
            placeholder="금메달 개수"
            required
          />
        </label>
        <label className="input-wrapper">
          은메달
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(+e.target.value)}
            placeholder="은메달 개수"
            required
          />
        </label>
        <label className="input-wrapper">
          동메달
          <input
            type="number"
            value={bronze}
            onChange={(e) => setBronze(+e.target.value)}
            placeholder="동메달 개수"
            required
          />
        </label>
        <button type="submit">추가하기</button>
        <button type="button" onClick={handleUpdate}>
          업데이트
        </button>
      </form>
    </>
  )
}

export default MedalForm
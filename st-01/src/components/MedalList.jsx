import {useState} from "react";

const MedalList = ({ medals, setMedals }) => {
  const handleDelete = function (country) {
    const newMedalList = medals.filter((medal) => medal.country !== country);
    setMedals(newMedalList);
  };

  //정렬
  const [sortType, setSortType] = useState("gold"); // 정렬 기준 상태

  const getSortedMedals = () => {
    if (sortType === "gold") {
      const sortedMedals = medals.sort((a, b) => b.gold - a.gold);
      return sortedMedals;
    } else {
      const sortedMedals = medals.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      return sortedMedals;
    }
  };

  return (
    <>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="gold"
            checked={sortType === "gold"}
            onChange={(e) => setSortType(e.target.value)}
          />
          금메달 순
        </label>
        <label>
          <input
            type="radio"
            value="total"
            checked={sortType === "total"}
            onChange={(e) => setSortType(e.target.value)}
          />
          총 메달 순
        </label>
      </div>
      {/* 🟢 메달 리스트 - 추가된 국가와 메달 정보를 표시 */}
      <ul className="medal-list">
        {getSortedMedals().map((medal, index) => (
          <li key={index} className="medal-item">
            <span>{medal.country}</span>
            <span>금: {medal.gold}</span>
            <span>은: {medal.silver}</span>
            <span>동: {medal.bronze}</span>
            {/* 🟠 삭제 버튼 */}
            <button onClick={() => handleDelete(medal.country)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MedalList;

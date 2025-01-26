import { useState } from "react";
import Button from "./Button";
import Radio from "./Radio";

const MedalList = ({ medals, setMedals }) => {
  
  const handleDelete = function (id) {
    const newMedalList = medals.filter((medal) => medal.id !== id);
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
        <Radio
          type="radio"
          value="gold"
          checked={sortType === "gold"}
          onChange={(e) => setSortType(e.target.value)}
        >
          금메달 순
        </Radio>

        <Radio
          type="radio"
          value="total"
          checked={sortType === "total"}
          onChange={(e) => setSortType(e.target.value)}
       >
            총 메달 순
        </Radio>
      </div>
      {/* 🟢 메달 리스트 - 추가된 국가와 메달 정보를 표시 */}
      <ul className="medal-list">
        {getSortedMedals().map((medal) => (
          <li key={medal.id} className="medal-item">
            <span>{medal.country}</span>
            <span>금: {medal.gold}</span>
            <span>은: {medal.silver}</span>
            <span>동: {medal.bronze}</span>
            {/* 🟠 삭제 버튼 */}
            <Button onClick={() => handleDelete(medal.id)}>삭제</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MedalList;

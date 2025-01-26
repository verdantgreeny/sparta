import { useState } from "react";
import Input from "./Input";
import Button from "./Button"

const MedalForm = ({ medals, setMedals }) => {
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

    // 입력처리의 적정성 검증
  const verifyInput = (country, gold, silver, bronze) => {
    if (!country || Number(country)) {
      alert("국가이름을 입력해주세요");
      return false;
    }

    if (!gold || !silver || !bronze) {
      alert("숫자를 입력해주세요");
      return false;
    }

    if (
      gold < 0 ||
      silver < 0 ||
      bronze < 0 ||
      gold % 1 !== 0 ||
      silver % 1 !== 0 ||
      bronze % 1 !== 0
    ) {
      alert("숫자는 정수값을 입력해주세요");
    } else {
      return true;
    }
  };

  // 🟠 handleSubmit: 폼 제출 시 새로운 메달 데이터를 추가하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    const newMedal = {
      id: new Date().getTime(),
      country: country,
      gold: +gold,
      silver: +silver,
      bronze: +bronze,
    };

    if (!verifyInput(country, gold, silver, bronze)) {
      resetForm();
      return false;
    }
    const addedMedal = medals.find(
      (medal) => medal.country === newMedal.country
    );
    if (addedMedal) {
      alert("이미 등록된 국가입니다.");
      resetForm();
      return false;
    }
    setMedals([...medals, newMedal]); // 새로운 메달 데이터를 기존 리스트에 추가
    resetForm(); // 입력 필드 초기화
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const existingMedal = medals.find((medal) => medal.country === country);
    if (existingMedal) {
      const updatedMedals = medals.map((medal) => {
        if (medal.id === existingMedal.id) {
          const newMedal = {
            ...medal,
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
      alert("존재하지 않는 국가틑 업테이트 불가");
    }
  };

  return (
    <>
      {/* 🟢 입력 폼 - 국가와 메달 수를 입력 */}
      <form onSubmit={handleSubmit} className="medal-form">
        <Input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="국가명"
          required
        >
          {" "}
          국가명{" "}
        </Input>

        <Input
          type="number"
          value={gold}
          onChange={(e) => setGold(+e.target.value)}
          placeholder="금메달 개수"
          required
        >
          {" "}
          금메달{" "}
        </Input>
        <Input
          type="number"
          value={silver}
          onChange={(e) => setSilver(+e.target.value)}
          placeholder="은메달 개수"
          required
        >
          {" "}
          은메달{" "}
        </Input>
        <Input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(+e.target.value)}
          placeholder="동메달 개수"
          required
        >
          {" "}
          동메달{" "}
        </Input>

        <Button type="submit">추가하기</Button>
        <Button type="button" onClick={handleUpdate}>
          업데이트
        </Button>
      </form>
    </>
  );
};

export default MedalForm;

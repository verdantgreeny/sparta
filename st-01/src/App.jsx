import { useState } from "react";
import "./reset.css";
import "./App.css";
import { useEffect } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

function App() {
  const [medals, setMedals] = useState(saveMedals); // 국가별 메달 리스트를 저장

  //로컬스토리지
  useEffect(
    function () {
      localStorage.setItem("medals", JSON.stringify(medals));
    },
    [medals]
  );

  function saveMedals() {
    const savedMedals = JSON.parse(localStorage.getItem("medals"));
    return savedMedals || [];
  }



  return (
    <div className="app">
      <h1 className="title"> 올림픽 메달 집계 </h1>

      <MedalForm medals={medals} setMedals={setMedals}/>


      <MedalList medals={medals} setMedals={setMedals}/>
    </div>
  );
}

export default App;

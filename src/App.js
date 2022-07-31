import { useState } from "react";
import PlayGround from "./components/PlayGround";
import "./styles.css";

export default function App() {
  const [choicesList, setChoicesList] = useState([0, 1, 2]);
  const [userChoice, setUserChoice] = useState("");
  const [correct, setCorrect] = useState("");
  const [isStart, setIsStart] = useState(false);

  const startGame = () => {
    setCorrect(Math.floor(Math.random() * choicesList.length));
    setIsStart(true);
  };
  return (
    <div className="App">
      <h1>モンティーホール問題を試してみよう</h1>
      {!isStart ? (
        <>
          <h2>ルール</h2>
          <p>
            プレイヤーには３つの選択肢が与えられます。
            <br />
            その内、1つは当たりですが、のこりの2つはハズレです
            <br />
            <br/>
            プレイヤーがどれか1つ選択した後、
            <br />
            残された選択肢の中からハズレの1つ自動で消します。
            <br />
            <br />
            ここでプレーヤーは、以下の2択のどちらかを実行します。
            <br />
            ・最初に選択したドアをそのまま選ぶ
            <br />
            ・残っている開けられていないドアを選びなおす
            <br />
            <br />
            どちらの方が当たる確率か高いでしょうか？
          </p>
          <button onClick={startGame}>ゲームスタート</button>
        </>
      ) : (
        <PlayGround
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          correct={correct}
          startGame={startGame}
          choicesList={choicesList}
          setChoicesList={setChoicesList}
        />
      )}

      {/* <div className="container">
        {choicesList.map((choice, index) => (
          <div key={index} className="door" onClick={choiceBox}>
            {choice}
          </div>
        ))}
      </div> */}
    </div>
  );
}

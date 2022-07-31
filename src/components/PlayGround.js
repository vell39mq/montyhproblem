import { useState } from "react";
import Explain from "./Explain";

const PlayGround = ({ userChoice, setUserChoice, correct, startGame,choicesList,setChoicesList }) => {
  
  const [count, setCount] = useState(0);
  const [playCount, setPlayCount] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [firstChoice, setFirstChoice] = useState("");
  const [judge,setJudge] = useState('')
  const [openExplain,setOpenExplain] = useState(false)
  const choiceBox = (event) => {
    setUserChoice(event.target.textContent);
  };
  const montyTurn = () => {
    if (userChoice === "") {
      window.alert("選択してください。");
    } else {
      if (count === 0) {
        const newChoicesList = choicesList.slice();
        setCount((prevValue) => prevValue + 1);
        setFirstChoice(userChoice);
        if (correct === Number(userChoice)) {
          newChoicesList.splice(Number(userChoice), 1);
          const restChoice = newChoicesList[Math.floor(Math.random() * 2)];
          const secondChoicesList = [correct, restChoice].sort();
          setChoicesList(secondChoicesList);
        //   const deleteChoice = choicesList.filter(
        //     (i) => secondChoicesList.indexOf(i) === -1
        //   );
        } else {
          setChoicesList([userChoice, correct].sort());
        }
      } else if (count === 1) {
        if (correct === Number(userChoice)) {
          setCount((prevValue) => prevValue + 1);
          setCorrectCount((prevValue) => prevValue + 1);
          setJudge('当たり')
        } else {
          setCount((prevValue) => prevValue + 1);
          setJudge('ハズレ')
        }
      } else {
        setUserChoice("");
        setPlayCount((prevValue) => prevValue + 1);
        setCount(0);
        setChoicesList([0,1,2]);
        startGame();
        setJudge('')
      }
    }
  };
  const lookExplain = () => {
    setOpenExplain(!openExplain)
  }
  return (
    <div>
      <p>
        {playCount}回中、当てたのは{correctCount}回です。
      </p>
      <div className="container">
        {choicesList.map((choice, index) => (
          <div key={index} className="door" onClick={choiceBox}>
            {choice}
          </div>
        ))}
      </div>
      <div>
        {count === 1 && (
          <p>
            あなたが最初に選択したのは{firstChoice}ですが、選択を変えますか？
          </p>
        )}
        {userChoice === "" ? (
          <p>どれか一つを選択してください。</p>
        ) : (
          count !== 2 && <p>今、あなたが選択しているのは {userChoice}です。</p>
        )}
      </div>
      {count === 2 && (
        <p>あたりは{correct}なので{judge}です。</p>
      )}
      <button onClick={montyTurn}>次へ</button><br/>
      <p>選びなおしても確率が1/2だと思う人はこちらへ→<button onClick={lookExplain}>解説をみる</button></p>
      {openExplain && <Explain/>}
    </div>
  );
};
export default PlayGround;

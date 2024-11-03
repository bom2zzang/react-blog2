import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글업뎃] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState(0);

  const update따봉 = () => {
    따봉변경(따봉 + 1);
  };

  const 글정렬 = () => {
    let copy = [...글제목];

    글업뎃(copy.sort());
  };
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={글제목} style={{ fontSize: "16px" }}>
          블로그임
        </h4>
      </div>
      <button onClick={글정렬}>정렬</button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글업뎃(copy);
        }}
      >
        업뎃
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={update따봉}>🩷🩷🩷</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => setModal(!modal)}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

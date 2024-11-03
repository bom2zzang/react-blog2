import "./App.css";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([
    { id: 0, title: "남자 코트 추천", like: 3000 },
    { id: 1, title: "강남 우동 맛집", like: 4000 },
    { id: 2, title: "파이썬 독학", like: 4500 },
  ]);

  const updateLike = (i) => {
    let copy = [...items];
    copy[i].like++;
    setItems(copy);
  };

  const 글정렬 = () => {
    let copy = [...items];
    copy.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    setItems(copy);
  };
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "16px" }}>블로그임</h4>
      </div>
      <button onClick={글정렬}>정렬</button>

      {items.map((item, i) => {
        return (
          <div className="list" key={i} onClick={() => setModal(!modal)}>
            <h4 onClick={() => updateLike(i)}>
              {item.title} / {item.like}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
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

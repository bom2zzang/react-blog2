import "./App.css";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([
    { id: 0, title: "남자 코트 추천", like: 3000, date: "2011-01-01" },
    { id: 1, title: "강남 우동 맛집", like: 4000, date: "2011-01-01" },
    { id: 2, title: "파이썬 독학", like: 4500, date: "2011-01-01" },
  ]);

  const updateLike = (i) => {
    let copy = [...items];
    copy[i].like++;
    setItems(copy);
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  const onClickRow = (i) => {
    setSelectedIndex(i);
    setModal(true);
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
          <div
            className="list"
            key={i}
            onClick={() => {
              onClickRow(i);
            }}
          >
            <h4 onClick={() => updateLike(i)}>
              {item.title} / {item.like}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal ? <Modal item={items[selectedIndex]} setItems={setItems} /> : null}
    </div>
  );
}

function Modal(props) {
  const editTitle = () => {
    let newTitle = prompt("바꿀 제목을 입력하세요");
    props.setItem((prev) => {
      let copy = [...prev];
      copy[props.item.id].title = newTitle;
      return copy;
    });
  };
  return (
    <div className="modal">
      <h4>{props.item.title}</h4>
      <p>{props.item.date}</p>
      <p>{props.item.detail}</p>
      <button
        onClick={() => {
          editTitle();
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;

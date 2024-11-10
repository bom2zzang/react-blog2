import "./App.css";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([
    { id: 0, title: "남자 코트 추천", like: 3000, date: "21일" },
    { id: 1, title: "강남 우동 맛집", like: 4000, date: "1일" },
    { id: 2, title: "파이썬 독학", like: 4500, date: "9일" },
  ]);
  let [selectedIndex, setSelectedIndex] = useState(null);
  let [input, setInput] = useState("");

  const addPost = () => {
    let copy = [...items];
    copy.push({
      id: copy.length,
      title: input,
      like: 0,
      date: new Date().getDate() + "일",
    });
    setItems(copy);
    setInput("");
  };

  const deletePost = (i) => {
    let copy = [...items];
    copy.splice(i, 1);
    setItems(copy);
  };

  const updateLike = (i) => {
    let copy = [...items];
    copy[i].like++;
    setItems(copy);
  };

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
            <h4
              onClick={(e) => {
                e.stopPropagation();
                updateLike(i);
              }}
            >
              {item.title} / {item.like}
            </h4>
            <p>
              {item.date} 발행{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePost(i);
                }}
              >
                삭제
              </button>
            </p>
          </div>
        );
      })}
      <div>
        <input
          style={{ margin: "10px 5px" }}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          onClick={() => {
            addPost();
          }}
        >
          등록
        </button>
      </div>
      {modal ? <Modal item={items[selectedIndex]} setItems={setItems} /> : null}
    </div>
  );
}

function Modal(props) {
  if (props.item === undefined) {
    return;
  }
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

// class Modal2 extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <div>모달2</div>;
//   }
// }

export default App;

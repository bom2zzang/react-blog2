# REACT

장점

- HTML 재사용이 편리함
- 컴포넌트 단위로 개발하기 때문에 분업하기 좋음
- React Native를 쓰면 React와 비슷한 문법으로 모바일 앱 개발이 가능
- 프론트와 백 파트 분리 가능

단점

- 많은 자바스크립트로 웹페이지 크기가 커짐
- 웹페이지 로드시 SEO에 악영향이 있을 수 있음
- 간단한 사이트도 코드가 쓸데없이 복잡해짐

## JSX 문법

1. html에 class 넣을 땐 className
   ```
   <div className="nav"></div>
   ```
   jsx문법에서는 class를 넣고 싶으면 className으로 사용
2. 변수를 html에 넣을 땐 {중괄호}
   ```
    <div>{ data }</div>
   ```
   변수에 있던 값을 html에 넣는 작업을 `데이터바인딩`이라고 함
3. html에 style추가시 style={} 안에 {}자료형
   ```
       <div style={{color:'blue', fontSize:'30px'}}>이렇게</div>
   ```
   { 속성명 : '속성값' } 형식으로 작성  
    font-size 처럼 속성명에 대쉬기호를 쓸 수 없음  
    -> 단어를 붙여 쓰면서 앞글자를 대문자로 치환하여 사용

## state

### React에서는 state를 만들어 값을 저장할 수 있음

자주 변경될 것 같은 데이터들은 state에 저장하여 사용하는 것이 기능개발 할 때 편리함

```
import {useState} from 'react'
let [name, setName] = useState();
// destructuring문법: array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 문법
```

useState를 사용하면 [`자료`, `state변경을 도와주는 함수`]가 들어있음

### 변수 말고 state에 데이터 저장해서 쓰는 이유

state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줌

### state 변경하는 법

```
let [cnt, setCnt] = useState(0);
// 변경 방법
setCnt(새로운state);
```

### state 변경함수 동작 원리

1. 기존state === 신규state 검사
2. 같으면 변경x

[참고] javascript reference data type

### state는 state를 사용하는 컴포넌트 중 최고 부모에 만들어야 함

자식 컴포넌트에 만들었는데 부모 컴포넌트에서 필요할 수도 있음

## Component

복잡한 html을 한 단어로 치환할 수 있는 Component 문법

```
function App (){
  return (
    <div>
      (생략)
      <Modal></Modal>
    </div>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

1. function을 이용하여 함수를 만들어 줌
2. 새로 만든 함수의 return 안에 축약을 원하는 html을 담아줌
3. 원하는 곳에서 `<Modal></Modal>` 사용

### Component 만들 때 주의할 점

1. 대문자로 작명
2. return() 안에 html태그들이 평행하게 여러개 들어갈 수 없음
3. function App(){} 내부에서 만들면 안됨
4. 사용할 땐 `<컴포넌트></컴포넌트>` or `<컴포넌트/>`로 사용

### 어떤 html들을 Component로 만드는게 좋을까 (관습적으로)

1. 반복되는 html
2. 내용이 자주 변경될 것 같은 부분
3. 다른 페이지를 만들고 싶다면
4. 협업할때 Component 단위로 분배해서

### Component의 단점

너무 많은 컴포넌트를 만들면 관리가 힘들어진다

1. 알아보기 힘들고
2. 데이터 처리가 어려워

## 동적인 UI 생성

### 동적인 UI 작성 step

1. html css로 UI 디자인 작업
2. UI의 현재 상태를 state로 저장
3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

### jsx에서 조건문 쓰기

1. 삼항연산자 사용
   > 조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
   ```
   function App (){
    let [modal, setModal] = useState(false);
    return (
        <div className="app">
        {
        modal == true ? <Modal></Modal> : null
        }
    </div>
    )
   }
   ```

## map

```
function App (){
  return (
    <div>
      {
        [1,2,3].map(function(a,i){
          return ( <div key={i}>{a}</div> )
        })
      }
    </div>
  )
}
```

## props

자식 컴포넌트가 부모 컴포넌트에 있던 state를 사용하고 싶으면 props를 사용해야 함

### props로 부모 -> 자식 state 전송하는 법

1. 자식컴포넌트 사용하는 곳에 가서 `<자식컴포넌트 작명={state이름} /> `

2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용

```
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

[참고]

- state 뿐만 아니라 일반 변수, 함수도 전달 가능
- 일반 string은 중괄호 없이 보낼 수 있음
- props는 함수 파라미터 문법과 똑같음

## input

### 입력시 코드 실행

```
<input onChange={(e)=>{ console.log(e.target.value) }}/>
```

이벤트 핸들러에 들어가는 함수에 e(이벤트 객체)를 추가 함, 이벤트 객체는 현재 발생하는 이벤트와 관련된 유용한 기능을 제공하는 일종의 변수

- `e.target` : 현재 이벤트가 발생한 곳
- `e.preventDefault()` : 이벤트의 기본동작을 막음
- `e.stopPropagation()` : 이벤트 버블링을 막아줌

### 사용자가 input에 입력한 데이터 저장하기

```
function App (){
  let [입력값, 입력값변경] = useState('');
  return (
    <input onChange={(e)=>{
      입력값변경(e.target.value)
      console.log(입력값)
    }} />
  )
}
```

state 변경함수는 약간 늦게 처리 됨(비동기적 처리)

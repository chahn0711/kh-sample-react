import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./onChange";
import EventHandler from "./EventHandler";
import FruitSelect from "./FruitSelect";
import RadioButton from "./RadioButton";
import Table from "./Table";
import TableMap from "./TableMap";

// function App() { // 부모
//   const element = < WelcomeProp name="곰돌이사육사" /> // 컴퍼런트 호출 방법<>
//   return ( // 필히 하나의 태그로 묶어주어야한다. <>태그 쓰거나 <Fragment>태그
//     <>
//       <div>{element}</div>
//     </>
//   );
// }
function App() {
  return (
    <>
      {/* <Section title="스포츠" content="This is the content for section 1." />      
      <Section title="정치" content="This is the content for section 2." />       */}
      {/* <MyComponent name="곰돌이사육사" age={30}>
        안녕하세요^^
      </MyComponent> */}
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      <TableMap />
    </>
  );
}

export default App; // 앱을 이동 할 때 나가줘야함 必

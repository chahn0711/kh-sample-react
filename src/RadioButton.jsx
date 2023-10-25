import { useState } from "react";

function RadioButton() {
  const [selectVal, setSeletVal] = useState("apple");

  function handleChange(e) {
    setSeletVal(e.target.value);
  }
  return (
    <>
      <label htmlFor="apple">
        사과
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="orange">
        오렌지
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="strawberry">
        딸기
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
      </label>
      <br />
      <p>선택된 과일 : {selectVal}</p>
    </>
  );
}
export default RadioButton;

// useMemo: 컴포넌트의 성능을 최적화하기 위해 사용, 이전에 계산한 값을 재사용한다는 의미
import { useState, useMemo, useCallback, useRef } from "react";
const getAverage = (numbers) => {
  if (numbers.length === 0) return 0; // 입력값 없을 때 계산 안일어나게 리턴
  console.log("평균 값 계산"); // 언제 불러지는지 확인을 위해(반환코드)
  // 두개의 입력값을 입력 받아 하나의 결과값으로 만들고 다음의 요소 연산
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length; // 평균값구하는 함수
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = useCallback(() => {
    if (isNaN(parseInt(number))) return 0;
    const nextList = list.concat(parseInt(number));
    // concat주소가 바뀜 = 렌더링 됨
    setList(nextList); // 새로운 배열
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number가 바뀔때 호출
  // 불필요한 렌더링 막기
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </>
  );
};
export default Average;

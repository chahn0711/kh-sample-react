// const User = (props) => {
//   return (
//     <div>
//       <b>{props.user.userName}</b> <span>{props.user.email}</span>
//     </div>
//   );
// };
// 값이 안바뀌는게 원칙이므로 const 추천
import "./App.css";
const UserList = () => {
  // ,넣는것이 관례(생략해도 오류는 안남)
  const users = [
    // 자동순회? 매개변수(users)
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmail.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];

  const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "새하얀 겨울"];
  const newSeasons = seasons.map((e, index) => <li key={index}>{e}</li>);
  //   const newUsers = users.map((user) => (
  //     <div key={user.email}>
  //       <b>{user.userName}</b> <span>{user.email}</span>
  //     </div>
  //   ));
  return (
    <>
      <h1>천원짜리 변호사 직원 리스트</h1>
      {/* h1는 고정, 밑에 newUsers는 map으로 변환 */}
      {users.map((user) => (
        <div key={user.email}>
          <b>{user.userName}</b> <span>{user.email}</span>
        </div>
      ))}
      <h1>계절 표시</h1>
      <ul>{newSeasons}</ul>
    </>
  );
  //   // 쓰면 안되는 방법?: 맵 안쓰고 구현시 원시적인 방법으로 해야함(갯수를 알 수 없는 경우 map이 훨씬 좋음)
  //   return (
  //     <>
  //       <div>
  //         <b>{users[0].userName}</b> <span>{users[0].email}</span>
  //         {/* 천지훈 이름과 이메일 뜻함 */}
  //       </div>
  //       <div>
  //         <b>{users[1].userName}</b> <span>{users[1].email}</span>
  //       </div>
  //       <div>
  //         <b>{users[2].userName}</b> <span>{users[2].email}</span>
  //       </div>
  //     </>
  //   );
};
export default UserList;

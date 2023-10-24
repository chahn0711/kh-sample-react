// props 기본값 설정 : defaultProps
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은 {props.name}입니다. 나이는 {props.age}</div>
}

MyComponent.defaultProps = {
    name: "기본 이름",
    age:20
}
export default MyComponent;
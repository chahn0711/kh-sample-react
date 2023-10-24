// 컴포넌트 합성: 여러 개의 컴포넌트를 조합하여 하나의 컴포넌트를 만드는 것
import bgImg from "../src/images/bg2.jpg";

function Heading(props) {
    return <h1>{props.text}</h1>
}

function Paragraph(props) {
    return <p>{props.text}</p>
}
function ImgUrl(props) {
    return <img style={{height: "300px"}}src={bgImg} alt="이미지 테스트"/>
}

const Section = (props) => { // 컴포넌트는 함수랑 구분하기 위해 앞문자는 대문자로 쓴다.
    return(
        <>
            <Heading text={props.title} />
            <Paragraph text={props.content} />
            <ImgUrl url={props.url}/>
        </>
    );
}

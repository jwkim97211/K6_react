import MyList from "./MyList";
import Data from "./MyListData.json"

export default function MyListMain() {

const myitems = Data.map(item=>
    <MyList title={item.title}
            img={item.imgUrl} 
            content={item.content}
            key={item.title}
            />
            // map을 사용하면 중복값이 없는 key값을 넣어줘야함
    )

    return (
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* md는 768px임 그 이상으로 사이즈가 작아지면 col을 2개로 나눔 */}
            {/* <MyList title="HTML" img="./img/html.png" content="HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용" />
            <MyList title="CSS" img="./img/css.png" content="Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어" />
            <MyList title="JavaScript" img="./img/js.png" content="웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원" />
            <MyList title="React" img="./img/react.png" content="사용자 인터페이스를 만들기 위한 JavaScript 라이브러리" /> */}
            {myitems}
        </div>
    )
}

/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import Header from "../../../components/organism/Header/Header";
import QuizResultBox from "../component/QuizResultBox";
import Title from "../component/Title";
import { QuizResultWrapper } from "./styles";

export default function QuizResult() {

  const list = [ 
  {
    answer: "사과",
    word: "사과"
  }, 
  {
    answer: "사과",
    word: "바나나"
  }, 
  {
    answer: "사과",
    word: "수박"
  },
]
  return (
    <div>
      <Header />
      <div css={QuizResultWrapper}>
        <Title message="채점 결과"/>
        <QuizResultBox quizResultList={list}/>
      </div>
    </div>
  )
}
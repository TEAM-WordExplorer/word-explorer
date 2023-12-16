/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import { useLocation } from "react-router-dom";
import Header from "../../../components/organism/Header/Header";
import QuizResultBox from "../component/QuizResultBox";
import Title from "../component/Title";
import { QuizResultWrapper } from "./styles";

export default function QuizResult() {

  const location = useLocation();
  const { answerList, englishWordList } = location.state || {};

  const list = Object.keys(answerList).map((word, index) => ({
    answer: answerList[word],
    word: englishWordList[index],
  }));

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
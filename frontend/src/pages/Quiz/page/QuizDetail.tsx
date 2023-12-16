/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import { useNavigate, useParams } from "react-router"
import Header from "../../../components/organism/Header/Header";
import Input from "../../../components/atom/Input/Input";
import RoundButton from "../../../components/atom/Button/RoundButton";
import { useEffect, useState } from "react";
import Box from "../../../components/atom/Box/Box";
import { NextButtonForm, QuizDetailContainer, QuizDetailWrapper, QuizInputForm } from "./styles";

export default function QuizDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const fruits = ['사과', '레몬', '배'];
  const [answer, setAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(0);  
  const isLastPage = currentPage === fruits.length - 1;
  const [answerList, setAnswerList] = useState({});

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    setAnswerList((prevAnswerList) => ({ ...prevAnswerList, [currentPage]: answer }));
    setCurrentPage((prev) => (prev + 1));
    setAnswer("");
  }
  
  useEffect(() => {
    if (Object.keys(answerList).length === fruits.length) {
      navigate('/loading', { state: answerList })
    }
  }, [answerList]);

  return (
    <div css={QuizDetailWrapper}>
      <Header />
      <div css={QuizDetailContainer}>
        <Box word={fruits[currentPage]} />
        <div css={QuizInputForm}>
          <Input value={answer} onChange={handleAnswerChange}/>
          <div css={NextButtonForm}>
            <RoundButton
              message={isLastPage ? "채점 하기" : "다음"}
              onClick={handleSubmit}
              width="100px"
              borderRadius="20px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
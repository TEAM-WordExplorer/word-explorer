/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import { useLocation, useNavigate, useParams } from "react-router"
import Header from "../../../components/organism/Header/Header";
import Input from "../../../components/atom/Input/Input";
import RoundButton from "../../../components/atom/Button/RoundButton";
import { useEffect, useState } from "react";
import Box from "../../../components/atom/Box/Box";
import { NextButtonForm, QuizDetailContainer, QuizDetailWrapper, QuizInputForm } from "./styles";

export default function QuizDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  // 목적지 라우트에서
  const { koreanWordList, englishWordList } = useLocation().state;

  const [answer, setAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(0);  
  const [answerList, setAnswerList] = useState({});

  const isLastPage = currentPage === koreanWordList.length - 1;
  
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  useEffect(() => {
    setAnswerList((prevAnswerList) => ({ ...prevAnswerList, [currentPage]: answer }));
  }, [answer, currentPage]);

  const handleSubmit = () => {
    console.log(koreanWordList)
    console.log(answerList)
    if (isLastPage) {
      // 마지막 페이지일 때 loading 페이지로 이동
      navigate("/loading", {
        state: {
          answerList: answerList,
          englishWordList: englishWordList,
        }
      });
    } 
    else {
      setCurrentPage((prev) => prev + 1);
      setAnswer("");
    };
  }
  
  return (
    <div css={QuizDetailWrapper}>
      <Header />
      <div css={QuizDetailContainer}>
        <Box word={koreanWordList[currentPage]} />
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
/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import { useNavigate, useParams } from "react-router"
import Header from "../../../components/organism/Header/Header";
import Input from "../../../components/atom/Input/Input";
import RoundButton from "../../../components/atom/Button/RoundButton";
import { useEffect, useState } from "react";
import Box from "../../../components/atom/Box/Box";
import { NextButtonForm, QuizDetailContainer, QuizDetailWrapper, QuizInputForm } from "./styles";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../../atom/UserInfo";

export default function QuizDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(0);  
  
  const [answerList, setAnswerList] = useState({});
  const userId = useRecoilValue(UserInfoState);
  const [wId, setWId] = useState(-1);
  const [koreanWordList, setKoreanWordList] = useState<string[]>([]);
  const [englishWordList, setEnglishWordList] = useState<string[]>([]);


  /*** 좋아요 단어 한글+영어 리스트 받아오는 부분***/
  useEffect(()=>{
    const formData = {
      "userId": userId
    }
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/word_quiz/', formData)
        console.log(response);
        const { koreanWord, englishWord } = response.data.serialized_words.map((item: any) => (item.name, item.eng_text));
        setKoreanWordList(koreanWord);
        setEnglishWordList(englishWord);
        setWId(response.data.id);
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  const isLastPage = currentPage === koreanWordList.length - 1;

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    setAnswerList((prevAnswerList) => ({ ...prevAnswerList, [currentPage]: answer }));
    setCurrentPage((prev) => (prev + 1));
    setAnswer("");
  }
  
  useEffect(() => {
    if (Object.keys(answerList).length === koreanWordList.length) {
      navigate('/loading', 
        { state: {
          answerList: answerList ,
          englishWordList: englishWordList,
        }})
    }
  }, [answerList]);

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
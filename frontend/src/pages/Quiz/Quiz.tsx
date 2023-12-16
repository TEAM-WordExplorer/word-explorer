/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import RoundButton from "../../components/atom/Button/RoundButton";
import Header from "../../components/organism/Header/Header";
import { QuizContainer, QuizWrapper } from "./styles";
import Introduce from "./component/Introduce";
import Title from "./component/Title";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../atom/UserInfo";
import axios from "axios";

export default function Quiz() {
  const navigate = useNavigate();
  const userId = useRecoilValue(UserInfoState);
  const [koreanWordList, setKoreanWordList] = useState<string[]>([]);
  const [englishWordList, setEnglishWordList] = useState<string[]>([]);

  /*** 좋아요 단어 한글+영어 리스트 받아오는 부분***/
  useEffect(() => {
    const formData = {
      "userId": userId
    }
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/word_quiz/', formData)
        const koreanWord = response.data.liked_words.map((item: any) => item.name)
        const englishWord = response.data.liked_words.map((item: any) => item.eng_text)

        setKoreanWordList(koreanWord);
        setEnglishWordList(englishWord);
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  const moveToQuiz = () => {
    navigate('/quiz/quiz', {state: {
      koreanWordList: koreanWordList,
      englishWordList: englishWordList
    }}) 
  }
  
  return (
    <div css={QuizWrapper}>
      <Header/>
      <div css={QuizContainer}>
        <Title message="Quiz"/>
        <Introduce/>
        <RoundButton 
          message="시험 보기" 
          onClick={moveToQuiz}
          width="120px"
          borderRadius="15px"
        />
      </div>
    </div>
  )
}
/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { useState } from "react";

import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import InputForm from "../../components/molecule/InputForm/InputForm";
import Header from "../../components/organism/Header/Header";
import Introduce from "./component/Introduce";
import WordResultBox from "./component/WordResultBox";
import { homeStyle, contentStyle } from "./styles";
import AnswerModal from "./component/AnswerModal";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "../../atom/LoginInfo";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(IsLoggedInState);

  const [wid, setWid] = useState(-1);
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState<{ word: string; similarity: number }[]>(() => {
    // 로컬 스토리지 사용
    const storedWordList = localStorage.getItem("wordList");
    return storedWordList ? JSON.parse(storedWordList) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ButtonClick1 = () => {
    if(isLoggedIn) navigate('/like');
    else alert("로그인이 필요합니다.")
  };

  const ButtonClick2 = () => {
    if (isLoggedIn) navigate('/quiz')
    else alert("로그인이 필요합니다.")
  }

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleSubmit = async() => {
    const wordData = {
      word: word
    };

    // const newWordResult = { word: word, similarity: 0.9 };
    // 클라이언트에서 서버로 데이터 전송
    try {
      const response = await axios.post('http://127.0.0.1:8000/question/game/', wordData);
      console.log(response.data); // 서버에서 온 응답 확인
      
      const newWordResult = response.data; // Use the response directly
      console.log(newWordResult); // 서버에서 온 응답 확인

      if (newWordResult.similarity >= 0.999) {
        setWid(newWordResult.wid);
        setIsModalOpen(true); // Display modal for correct answer
      } else {
        // Handle the case when similarity is not sufficient for a correct answer
        console.log('Incorrect answer. Try again!');
      }
      setWordList((prevWordList) => [...prevWordList, newWordResult]);
      setWord("");
      localStorage.setItem("wordList", JSON.stringify([...wordList, newWordResult]));
    } 
    catch (error) {
      console.log(error);
    }
  }


  return(

    <div css={homeStyle}>
      <Header />
      <div css={contentStyle}>
        <ButtonGroup
          message1="좋아요 단어"
          message2="단어 퀴즈"
          onClick1={ButtonClick1}
          onClick2={ButtonClick2}
        />
        <InputForm
          message="추측하기" 
          value={word}
          onChange={handleWordChange}
          onClick={handleSubmit}

          width="170px"
          borderRadius="15px"
        />
        
        <WordResultBox wordResultList={wordList} />
        <Introduce />
      </div>
      {isModalOpen && (
        <AnswerModal wid={wid}/>
      )}
    </div>
  );
}

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

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(IsLoggedInState);

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
      word: word,
      
    };

    const newWordResult = { word: word, similarity: 0.9 };
    // 클라이언트에서 서버로 데이터 전송
    try {
      const response = await axios.post('http://127.0.0.1:8000/question/game/', wordData);
      console.log(response.data); // 서버에서 온 응답 확인

      // 서버로부터 받은 응답에 따라 필요한 처리 수행
      if (response.data.success) {
        // 성공적으로 처리된 경우
        setIsModalOpen(true);
      } 
      else {
        // 처리에 실패한 경우
        console.error('Error during data submission:', response.data.message);
      }
    } 
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
    setWordList((prevWordList) => [...prevWordList, newWordResult]);
    setWord("");

    localStorage.setItem("wordList", JSON.stringify([...wordList, newWordResult]));

    
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
        <AnswerModal word={word}/>
      )}
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { useState } from "react";
import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import InputForm from "../../components/molecule/InputForm/InputForm";
import Header from "../../components/organism/Header/Header";
import Introduce from "./component/Introduce";
import WordResultBox from "./component/WordResultBox";
import { homeStyle, contentStyle } from "./styles";
import axios from "axios";
import { getCsrfToken, postApi } from "../../api/authService";
import AnswerModal from "./component/AnswerModal";

export default function Home() {
  const navigate = useNavigate();


  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState<{ word: string; similarity: number }[]>(() => {
    // 로컬 스토리지 사용
    const storedWordList = localStorage.getItem("wordList");
    return storedWordList ? JSON.parse(storedWordList) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ButtonClick1 = () => {
    navigate('/like');
  };

  const ButtonClick2 = () => {

    navigate('/quiz')
  }

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  const handleSubmit = async() => {
    const newWordResult = { word: word, similarity: 0.9 };
    setWordList((prevWordList) => [...prevWordList, newWordResult]);
    setWord("");

    localStorage.setItem("wordList", JSON.stringify([...wordList, newWordResult]));

    // const csrfToken = await getCsrfToken('url');
    // const response = postApi(csrfToken, 'url', word);
    // console.log(response)

    // if(response.similariry === 1.0) {
    // setIsModalOpen(true);
    // }
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

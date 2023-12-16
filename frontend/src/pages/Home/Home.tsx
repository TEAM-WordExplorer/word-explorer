/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { useState } from "react";
import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import InputForm from "../../components/molecule/InputForm/InputForm";
import Header from "../../components/organism/Header/Header";
import Introduce from "./component/Introduce";
import WordResultBox from "./component/WordResultBox";
import { homeStyle, contentStyle } from "./styles";

export default function Home() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState<string>("");
  const [wordList, setWordList] = useState<{ word: string; similarity: number }[]>([]);
  
  
  const ButtonClick1 = () => {
    navigate('/like');
  };

  const ButtonClick2 = () => {
    navigate('/quiz');
  };

  const handleClick = async () => {
    try {

      console.log("userInput:", userInput);  // 추가된 부분

      const response = await fetch('http://localhost:8000/game/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
      });
      

      if (response.ok) {
        const result = await response.json();

        // Assuming result is an array of results
        if (Array.isArray(result.results)) {
          // Assuming wordList state is an array of objects
          setWordList(result.results);
        } else {
          console.error('Unexpected server response format');
        }
      } else {
        console.error('Failed to process user input');
      }
    } catch (error) {
      console.error('Error while making API call:', error);
    }
  };


  return (
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
          onClick={handleClick}
          width="170px"
          borderRadius="15px"
        />
        
        <WordResultBox wordResultList={wordList} />
        <Introduce />
      </div>
    </div>
  );
}

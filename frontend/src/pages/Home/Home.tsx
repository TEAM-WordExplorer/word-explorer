/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식
import { useNavigate } from "react-router";
import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import InputForm from "../../components/molecule/InputForm/InputForm";
import Header from "../../components/organism/Header/Header";
import { theme } from "../../style/theme";
import Introduce from "./component/Introduce";
import WordResultBox from "./component/WordResultBox";
import { homeStyle, contentStyle } from "./styles";

export default function Home() {

  const navigate = useNavigate();

  const ButtonClick1 = () => {
    navigate('/like')
  }
  const ButtonClick2 = () => {
    navigate('/quiz')
  }

  // const wordList = [
  //   {
  //     word: "apple",
  //     similarity: 10.04
  //   },
  //   {
  //     word: "watermelon",
  //     similarity: 12.12
  //   },
  //   {
  //     word: "apple",
  //     similarity: 10.04
  //   },
  // ]

  const wordList: { word: string; similarity: number }[] = [];
  // const newWordResult = { word: 'newWord', similarity: 0.9 };
  // wordList.push(newWordResult);

  return(
    <div css={homeStyle}>
      <Header/>
      <div css={contentStyle}>
        <ButtonGroup
          message1="좋아요 단어"
          message2="단어 퀴즈"
          onClick1={ButtonClick1}
          onClick2={ButtonClick2}
        />
        <InputForm
          message="추측하기" 
          onClick={ButtonClick1}
          width="170px"
          borderRadius="15px"
        />
        <WordResultBox wordResultList={wordList} />
        <Introduce/>
      </div>

    </div>
  )
}
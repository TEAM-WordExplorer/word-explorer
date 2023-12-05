/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import { useParams } from "react-router"
import Header from "../../../components/organism/Header/Header";
import Box from "../../../components/atom/Box/Box";
import TextBox from "../component/TextBox";
import { WordDetailContainer, WordDetailTextBox, WordDetailWrapper } from "./styles";

export default function WordDetail() {

  const { word } = useParams();
  const wordDetail = {
    name: "먹는 사과",
    english: "Apple"
  }

  return (
    <div css={WordDetailWrapper}>
      <Header/>
      <div css={WordDetailContainer}>
        <Box word={word}/>
        <div css={WordDetailTextBox}>
          <TextBox purpleText="뜻" blackText={wordDetail.name}/>
          <TextBox purpleText="영단어" blackText={wordDetail.english} />
        </div>
      </div>
      
    </div>
  )
}
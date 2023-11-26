/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식
import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import Header from "../../components/organism/Header/Header";
import { homeStyle, contentStyle } from "./styles";

export default function Home() {

  const ButtonClick1 = () => {
    alert("1")
  }
  const ButtonClick2 = () => {
    alert("2")
  }
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
      </div>

    </div>
  )
}
/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식
import RoundButton from "../../components/atom/Button/RoundButton";
import Input from "../../components/atom/Input/Input";
import ButtonGroup from "../../components/molecule/ButtonGroup/ButtonGroup";
import InputForm from "../../components/molecule/InputForm/InputForm";
import Header from "../../components/organism/Header/Header";
import { theme } from "../../style/theme";
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
        <InputForm
          message="추측하기" 
          onClick={ButtonClick1} 
          color={theme.purple.main}
          width="170px"
        />
      </div>

    </div>
  )
}
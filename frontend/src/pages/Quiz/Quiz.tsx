/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import RoundButton from "../../components/atom/Button/RoundButton";
import Header from "../../components/organism/Header/Header";
import { QuizContainer, QuizWrapper } from "./styles";
import Introduce from "./component/Introduce";
import Title from "./component/Title";

export default function Quiz() {
  const navigate = useNavigate();
  
  return (
    <div css={QuizWrapper}>
      <Header/>
      <div css={QuizContainer}>
        <Title message="Quiz"/>
        <Introduce/>
        <RoundButton 
          message="시험 보기" 
          onClick={() => navigate('/quiz/1') }
          width="120px"
          borderRadius="15px"
        />
      </div>
    </div>
  )
}
/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import SquareButton from "../../components/atom/Button/SquareButton";
import Header from "../../components/organism/Header/Header";
import { theme } from "../../style/theme";
import { LikeWordBox1, LikeWordBox2, LikeWordContainer, LikeWordWrapper } from "./styles";

export default function LikeWord() {

  const ButtonClick = () => {
    alert("1")
  }

  const likeWordList = [
    "사과", "멜론", "배", "수박", "키위"
  ]

  return (
    <div css={LikeWordWrapper}>
      <Header />
      <div css={LikeWordContainer}>
        {likeWordList.map((word, index) => (
            index % 2 === 0 ? (
            <div key={index} css={LikeWordBox1}>
              <SquareButton
                message={word}
                onClick={ButtonClick}
                color={theme.gray.main}
              />
            </div>
            ) : (
              <div key={index} css={LikeWordBox2}>
              <SquareButton
                message={word}
                onClick={ButtonClick}
                color={theme.purple.sub1}
              />
              </div>
            )
          
        ))}
      </div>
    </div>
  )
}
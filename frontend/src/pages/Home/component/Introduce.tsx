/** @jsxImportSource @emotion/react */

import { IntroduceStyle } from "./styles";

export default function Introduce() {
  return(
    <div css={IntroduceStyle}>
      WE(Word Explorer)는<br/>
      오늘의 단어를 맞추는 게임입니다.<br/><br/>

      단어를 입력하면 정답과의 유사도가 주어지며,<br/>
      이를 기반으로 정답을 맞춰보세요.<br/>
    </div>
  )
}
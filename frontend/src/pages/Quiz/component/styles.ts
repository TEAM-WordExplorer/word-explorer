import { css } from "@emotion/react";
import { theme } from "../../../style/theme";

export const TitleWrapper = css`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.purple.sub2};

  margin: 10px 0;
`
export const IntroduceStyle = css`
  margin: 50px;
  text-align: center;
`

export const QuizResultBoxStyle = css`
  margin: 30px;
`

export const QuizResultTitleStyle = css`
  display: flex;
  margin: 30px 0 ;
`

export const QuizResultTitleTextStyle = css`
  flex: 1;

  text-align: center;
  font-weight: bold;
  font-size: 30px;
`

export const QuizResultContentStyle = css`
  display: grid;
  grid-template-columns: 0 1fr 1fr;
  position: relative;

  margin: 20px 0;
`

export const QuizResultContentTextStyle = css`
  flex: 1;

  margin: 15px 15px;

  text-align: center;
  font-size: 22px;
  font-weight: 550;
  
  word-break: break-all;
`

export const IconStyle = css`
  position: absolute;
  top: 8px;
  left: -0.3px;
`
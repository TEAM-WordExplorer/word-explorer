import { css } from "@emotion/react"
import { theme } from "../../../style/theme"

export const WordResultBoxStyle = css`
  width: 290px;
  height: 190px;
  overflow-y: auto;

  border: 1px solid ${theme.gray.sub2};
  border-radius: 20px;

  padding: 20px 0;
`

export const WordResultTitleStyle = css`
  display: flex;
  margin-bottom: 10px;

`

export const WordResultContentStyle = css`
  display: flex;
`

export const WordResultTitleTextStyle = css`
  flex: 1;

  text-align: center;
`

export const WordResultContentTextStyle = css`
  flex: 1;

  margin: 3px 15px;

  font-weight: bold;
  text-align: center;
  
  word-break: break-all;
`

export const BasicTextStyle = css`
  text-align: center;
  font-weight: bold;
  line-height: 190px;
`
export const IntroduceStyle = css`
  margin: 40px;
  text-align: center;
`

export const AnswerModalContent1Style = css`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 550;
`
export const AnswerModalContent2Style = css`
  background: none;
  border: none;

  text-decoration: underline;
  text-decoration-color: ${theme.gray.sub2};

  &:active {
    color: ${theme.gray.sub2};
  }
`
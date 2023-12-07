import { css } from "@emotion/react"
import { theme } from "../../../style/theme"

export const QuizDetailWrapper = css`
  display: flex;
  flex-direction: column;

  height: 100vh;
`

export const QuizDetailContainer = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QuizInputForm = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px;
`

export const NextButtonForm = css`
  position: relative;
  top: 60px;
`

export const QuizResultWrapper = css`
  display: flex;
  flex-direction: column;
  
  margin: 50px 0;
`

export const LoadingWrapper = css`
  display: flex;
  flex-direction: column;

  height: 100vh;
`
export const LoadingContainer = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: bold;  
`
export const LoadingTextWrapper = css`
  position: fixed;
  top: 300px;
`
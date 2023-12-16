import { css } from "@emotion/react"
import { theme } from "../../../style/theme"

export const HeaderWrapper = css`
  display: flex;
  justify-content: space-between;

  height: 30px;
  padding: 20px;

  position: sticky;
  top: 0px;

  background-color: ${theme.white}
`

export const TextStyle = css`
  text-decoration: none;
  &:hover{
    color: ${theme.gray.sub2}
  }
  &:active{
    color: ${theme.gray.sub2}
  }
`
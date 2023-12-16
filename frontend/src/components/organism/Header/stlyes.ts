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
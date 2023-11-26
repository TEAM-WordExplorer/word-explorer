import { css } from "@emotion/react";
import { theme } from "../../../style/theme";

export const commonButtonStyle = css`
  border: none;
  border-radius: 20px;
`
export const roundButtonStyle = (color: string, width: string) => css`
  ${commonButtonStyle};

  width: ${width};
  height: 40px;
  margin: 20px;

  background-color: ${color};
  color: ${theme.white};
`

export const squareButtonStyle = (color: string) => css`
  ${commonButtonStyle};

  width: 127px;
  height: 115px;
  margin: 7px 14px;

  background-color: ${color};
`
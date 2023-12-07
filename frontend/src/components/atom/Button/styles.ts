import { css } from "@emotion/react";
import { theme } from "../../../style/theme";

export const commonButtonStyle = css`
  border: none;
`
export const roundButtonStyle = (width: string, borderRadius: string) => css`
  ${commonButtonStyle};
  border-radius: ${borderRadius};

  width: ${width};
  height: 40px;
  margin: 20px;

  background-color: ${theme.purple.main};
  color: ${theme.white};
`

export const squareButtonStyle = (color: string) => css`
  ${commonButtonStyle};

  width: 127px;
  height: 115px;
  margin: 7px 14px;

  background-color: ${color};
  border-radius: 20px;
`
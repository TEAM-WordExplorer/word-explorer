import { css } from "@emotion/react";

export const commonButtonStyle = css`
  border: none;
`
export const roundButtonStyle = css`

`

export const squareButtonStyle = (color: string) => css`
  ${commonButtonStyle};

  width: 127px;
  height: 115px;
  margin: 7px 14px;

  background-color: ${color};

  border-radius: 20px;
  
`
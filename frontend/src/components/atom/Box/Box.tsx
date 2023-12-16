/** @jsxImportSource @emotion/react */

import { BoxStyle } from "./styles";

interface BoxProps {
  word?: string;
}

export default function Box(props: BoxProps) {
  const { word } = props;
  return <div css={BoxStyle}>{word}</div>;
}
/** @jsxImportSource @emotion/react */

import { BlackTextStyle, PurpleTextStyle, TextBoxWrapper } from "./styles";

interface TextProps {
  purpleText: string,
  blackText: string
}

export default function TextBox(props: TextProps) {
  const { purpleText, blackText } = props;
  return (
    <div css={TextBoxWrapper}>
      <div css={PurpleTextStyle}>{purpleText}</div>
      <div css={BlackTextStyle}>{blackText}</div>
    </div>
  )
}
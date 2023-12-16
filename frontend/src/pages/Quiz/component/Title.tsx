/** @jsxImportSource @emotion/react */

import { TitleWrapper } from "./styles";

interface MessageProps {
  message: string;
}

export default function Title(props: MessageProps) {
  const { message } = props
  return <div css={TitleWrapper}>{message}</div>
}
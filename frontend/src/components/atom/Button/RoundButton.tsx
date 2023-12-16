/** @jsxImportSource @emotion/react */

import { roundButtonStyle } from "./styles";

interface RoundButtonProps {
  message: string;
  onClick: () => void;
  width: string;
  borderRadius: string;
}

export default function RoundButton(props: RoundButtonProps) {
  const { message, onClick, width, borderRadius } = props;
  return <button onClick={onClick} css={roundButtonStyle(width, borderRadius)}>{message}</button>;
}
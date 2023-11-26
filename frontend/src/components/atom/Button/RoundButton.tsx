/** @jsxImportSource @emotion/react */

import { roundButtonStyle } from "./styles";

interface RoundButtonProps {
  message: string;
  onClick: () => void;
  color: string;
  width: string;
}

export default function RoundButton(props: RoundButtonProps) {
  const { message, onClick, color, width } = props;
  return <button onClick={onClick} css={roundButtonStyle(color, width)}>{message}</button>;
}
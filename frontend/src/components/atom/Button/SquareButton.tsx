/** @jsxImportSource @emotion/react */

import { squareButtonStyle } from "./styles";
interface ButtonProps {
  message: string;
  onClick: () => void;
  color: string;
}

export default function SquareButton(props: ButtonProps) {
  const { message, onClick, color } = props;
  return <button onClick={onClick} css={squareButtonStyle(color)}>{message}</button>;
}
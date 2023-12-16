/** @jsxImportSource @emotion/react */

import RoundButton from "../../atom/Button/RoundButton";
import Input from "../../atom/Input/Input";
import { InputFormStyle } from "./styles";

interface RoundButtonProps {
  message: string;
  onClick: () => void;
  color: string;
  width: string;
}

export default function InputForm(props: RoundButtonProps) {
  const { message, onClick, color, width } = props;
  return (
    <div css={InputFormStyle}>
      <Input/>
      <RoundButton 
          message={message} 
          onClick={onClick} 
          color={color}
          width={width}/>
    </div>
  )
}
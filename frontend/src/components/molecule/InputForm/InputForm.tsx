/** @jsxImportSource @emotion/react */

import RoundButton from "../../atom/Button/RoundButton";
import Input from "../../atom/Input/Input";
import { InputFormStyle } from "./styles";

interface RoundButtonProps {
  message: string;
  onClick: () => void;
  width: string;
  borderRadius: string;
}

export default function InputForm(props: RoundButtonProps) {
  const { message, onClick, width, borderRadius } = props;
  return (
    <div css={InputFormStyle}>
      <Input/>
      <RoundButton 
          message={message} 
          onClick={onClick} 
          width={width}
          borderRadius={borderRadius}
      />
    </div>
  )
}
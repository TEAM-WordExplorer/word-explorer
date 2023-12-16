/** @jsxImportSource @emotion/react */

import RoundButton from "../../atom/Button/RoundButton";
import Input from "../../atom/Input/Input";
import { InputFormStyle } from "./styles";

interface RoundButtonProps {
  message: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)
    => void;
  onClick: () => void;
  width: string;
  borderRadius: string;
}

export default function InputForm(props: RoundButtonProps) {
  const { message, value, onChange, onClick, width, borderRadius } = props;
  return (
    <div css={InputFormStyle}>
      <Input value={value} onChange={onChange}/>
      <RoundButton 
          message={message} 
          onClick={onClick} 
          width={width}
          borderRadius={borderRadius}
      />
    </div>
  )
}
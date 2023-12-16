/** @jsxImportSource @emotion/react */

import { InputStyle } from "./styles";

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>)
    => void;
}

export default function Input(props: InputProps) {
  const {value, onChange} = props;

  return (
    <input 
      placeholder="단어를 입력해주세요." 
      value={value}
      onChange={onChange}
      css={InputStyle}
    />
  )
}
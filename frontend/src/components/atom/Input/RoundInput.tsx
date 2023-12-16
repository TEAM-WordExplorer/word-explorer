/** @jsxImportSource @emotion/react */

import { RoundInputStyle } from "./styles";

interface InputProps{
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>)
   => void;
}

export default function RoundInput(props: InputProps) {
  const {value, onChange} = props;
  return <input value={value} onChange={onChange} css={RoundInputStyle} />
}
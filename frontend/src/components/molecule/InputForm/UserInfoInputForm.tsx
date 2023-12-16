/** @jsxImportSource @emotion/react */

import RoundInput from "../../atom/Input/RoundInput";
import { UserInfoInputFormStyle } from "./styles";

interface InputTitleProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)
    => void;
}

export default function UserInfoInputForm(props: InputTitleProps) {
  const { title, value, onChange } = props;
  return (
    <div css={UserInfoInputFormStyle}>
      <div>{title}</div>
      <RoundInput value={value} onChange={onChange}/>
    </div>
  )
}
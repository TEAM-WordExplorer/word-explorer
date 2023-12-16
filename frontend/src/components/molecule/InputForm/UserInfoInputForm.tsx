/** @jsxImportSource @emotion/react */

import RoundInput from "../../atom/Input/RoundInput";
import { UserInfoInputFormStyle } from "./styles";

interface InputTitleProps {
  title: string;
}

export default function UserInfoInputForm(props: InputTitleProps) {
  const { title } = props;
  return (
    <div css={UserInfoInputFormStyle}>
      <div>{title}</div>
      <RoundInput/>
    </div>
  )
}
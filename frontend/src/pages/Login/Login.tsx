/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { BigLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { loginContainer, loginInputFormContainer, loginWrapper, registerLinkContainer } from "./styles";

export default function Login() {
  const handleLogin = () => {
    console.log("1")
  }
  return (
    <div css={loginWrapper}>
      <Header/>
      <div css={loginContainer}>
        <BigLogoIcon/>
        <div css={loginInputFormContainer}>
          <UserInfoInputForm title="이메일"/>
          <UserInfoInputForm title="비밀번호" />
        </div>
        <div>
          <RoundButton
            message="로그인"
            onClick={handleLogin}
            width="100px"
            borderRadius="20px"
          />
        </div>
        <div css={registerLinkContainer}>
          <Link to='/'>회원가입</Link>
        </div>
      </div>
    </div>  
  )
}
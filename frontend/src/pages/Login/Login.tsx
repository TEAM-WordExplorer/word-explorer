/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { BigLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { loginContainer, loginInputFormContainer, loginWrapper, registerLinkContainer } from "./styles";
import { useState } from "react";
import axios from "axios";
import { getCsrfToken, postApi } from "../../api/authService";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleLogin = async () => {
    const formData = {
      name: name,
      email: email,
    }

    const csrfToken = await getCsrfToken('login');
    const response = postApi(csrfToken, 'login', formData)
    console.log(response)

    
  }

  return (
    <div css={loginWrapper}>
      <Header/>
      <div css={loginContainer}>
        <BigLogoIcon/>
        <div css={loginInputFormContainer}>
          <UserInfoInputForm title="이메일" value={name} onChange={handleNameChange}/>
          <UserInfoInputForm title="비밀번호" value={email} onChange={handleEmailChange}/>
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
          <Link to='/register'>회원가입</Link>
        </div>
      </div>
    </div>  
  )
}
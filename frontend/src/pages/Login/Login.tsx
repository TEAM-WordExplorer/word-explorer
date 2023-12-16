/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { BigLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { loginContainer, loginInputFormContainer, loginWrapper, registerLinkContainer } from "./styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { IsLoggedInState } from "../../atom/LoginInfo";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedInState);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleLogin = async () => {
    const formData = {
      email: email,
      password: password,

    }

    try {
      // Django의 로그인 API 호출
      const response = await axios.post('http://127.0.0.1:8000/user/login/', formData);

      if (response.data.success) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        // 회원가입 성공 시 로그인 페이지로 이동
        navigate('/');
      } else {
        alert(response.data.message);
      }
    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }

    
  }

  return (
    <div css={loginWrapper}>
      <Header/>
      <div css={loginContainer}>
        <BigLogoIcon/>
        <div css={loginInputFormContainer}>
          <UserInfoInputForm title="이메일" value={email} onChange={handleEmailChange}/>
          <UserInfoInputForm title="비밀번호" value={password} onChange={handlePasswordChange}/>
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
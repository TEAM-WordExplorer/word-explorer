/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import { BigLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { loginContainer, loginInputFormContainer, loginWrapper, registerLinkContainer } from "./styles";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [csrfToken, setCsrfToken] = useState('');

  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     try {
  //       const response = await axios.get('csrf 가져올 url');
  //       setCsrfToken(response.data.csrfToken);
  //     } catch (error) {
  //       console.error('CSRF 토큰을 가져오는 중 에러 발생:', error);
  //     }
  //   };

  //   fetchCsrfToken();
  // }, []);

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

    try {
      const response = await axios.post('url 주소', formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          }
        }
      )
      console.log(response.data)

    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { MediumLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { registerContainer, registerInputFormContainer, registerWrapper } from "./styles";
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const[csrfToken, setCsrfToken] = useState('');

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
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value)
  }

  const handleRegister = async() => {
    const formData = {
      name: name,
      email: email,
      password: password,
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
    <div css={registerWrapper}>
      <Header/>
      <div css={registerContainer}>
        <MediumLogoIcon/>
        <div css={registerInputFormContainer}>
          <UserInfoInputForm title="이름" value={name} onChange={handleNameChange}/>
          <UserInfoInputForm title="이메일" value={email} onChange={handleEmailChange} />
          <UserInfoInputForm title="비밀번호" value={password} onChange={handlePasswordChange} />
          <UserInfoInputForm title="비밀번호 확인" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
        </div>
        <div>
          <RoundButton
            message="가입하기"
            onClick={handleRegister}
            width="300px"
            borderRadius="20px"
          />
        </div>
      </div>
    </div>  
  )
}